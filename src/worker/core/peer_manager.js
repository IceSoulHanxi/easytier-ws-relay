import { Buffer } from 'buffer';
import { MY_PEER_ID, PacketType } from './constants.js';
import { createHeader } from './packet.js';
import { wrapPacket, randomU64String } from './crypto.js';

const WS_OPEN = 1; // WebSocket.OPEN in CF runtime

function parseIpv4ToU32Be(ip) {
  const parts = String(ip).trim().split('.').map(x => Number(x));
  if (parts.length !== 4 || parts.some(x => !Number.isInteger(x) || x < 0 || x > 255)) {
    throw new Error(`Invalid IPv4: ${ip}`);
  }
  return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

function mask32FromLen(len) {
  const l = Number(len);
  if (!Number.isFinite(l) || l <= 0) return 0;
  if (l >= 32) return 0xFFFFFFFF >>> 0;
  return (0xFFFFFFFF << (32 - l)) >>> 0;
}

function deriveSameNetworkIpv4(peerAddr, networkLength, myPeerId) {
  const mask = mask32FromLen(networkLength);
  const net = (peerAddr >>> 0) & mask;
  const hostBits = 32 - Number(networkLength);
  if (!Number.isFinite(hostBits) || hostBits <= 1 || hostBits > 30) {
    return null;
  }
  const hostMax = (1 << hostBits) >>> 0;
  const peerHost = (peerAddr >>> 0) & (~mask >>> 0);
  let host = (Number(myPeerId) % 250) + 2;
  if (host >= hostMax) {
    host = (Number(myPeerId) % Math.max(hostMax - 2, 1)) + 1;
  }
  if (host === peerHost) {
    host = (host + 1) % hostMax;
    if (host === 0) host = 1;
  }
  return (net | host) >>> 0;
}

function makeInstId() {
  return {
    part1: Number(BigInt.asUintN(32, BigInt(randomU64String()))),
    part2: Number(BigInt.asUintN(32, BigInt(randomU64String()))),
    part3: Number(BigInt.asUintN(32, BigInt(randomU64String()))),
    part4: Number(BigInt.asUintN(32, BigInt(randomU64String()))),
  };
}

function makeStubPeerInfo(peerId, networkLength) {
  return {
    peerId,
    version: 1,
    lastUpdate: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
    instId: makeInstId(),
    cost: 1,
    hostname: "",
    easytierVersion: "cf-ws-relay",
    featureFlag: { isPublicServer: false, avoidRelayData: false, kcpInput: false, noRelayKcp: false },
    networkLength: Number(networkLength || 24),
    peerRouteId: randomU64String(),
    groups: [],
    udpStunInfo: 0,
  };
}

export class PeerManager {
  constructor() {
    this.peersByGroup = new Map(); // groupKey -> Map(peerId -> ws)
    this.peerInfosByGroup = new Map(); // groupKey -> Map(peerId -> peerInfo)
    this.routeSessions = new Map(); // groupKey -> peerId -> session state
    this.peerConnVersions = new Map(); // groupKey -> peerId -> version
    this.types = null;

    this.allowVirtualIP = false;
    this.ipConfiguredByEnv = !!process.env.EASYTIER_IPV4_ADDR;
    this.netConfiguredByEnv = process.env.EASYTIER_NETWORK_LENGTH !== undefined;
    this.ipAutoAssigned = false;
    this.myInfo = null; // lazily initialized to avoid random in global scope
    this.sessionTtlMs = Number(process.env.EASYTIER_SESSION_TTL_MS || 3 * 60 * 1000);
    this.lastSessionCleanup = 0;
  }

  setTypes(types) {
    this.types = types;
  }

  ensureMyInfo() {
    if (this.myInfo) return this.myInfo;
    const myInfo = {
      peerId: MY_PEER_ID,
      instId: makeInstId(),
      cost: 1,
      version: 1,
      featureFlag: { isPublicServer: true, avoidRelayData: false, kcpInput: false, noRelayKcp: false },
      networkLength: Number(process.env.EASYTIER_NETWORK_LENGTH || 24),
      easytierVersion: process.env.EASYTIER_VERSION || "cf-ws-relay",
      lastUpdate: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
      hostname: process.env.EASYTIER_HOSTNAME || "PublicServer_WorkerRelay",
      udpStunInfo: 0,
      peerRouteId: randomU64String(),
      groups: [],
    };

    if (this.allowVirtualIP) {
      const ipEnv = process.env.EASYTIER_IPV4_ADDR;
      if (ipEnv) {
        myInfo.ipv4Addr = { addr: parseIpv4ToU32Be(ipEnv) };
        this.ipAutoAssigned = false;
      } else if (process.env.EASYTIER_AUTO_IPV4_ADDR === '1') {
        const lastOctet = (Number(MY_PEER_ID) % 250) + 2;
        myInfo.ipv4Addr = { addr: parseIpv4ToU32Be(`10.0.0.${lastOctet}`) };
        this.ipAutoAssigned = true;
      }
    }

    this.myInfo = myInfo;
    return this.myInfo;
  }

  bumpMyInfoVersion() {
    const myInfo = this.ensureMyInfo();
    myInfo.version = (myInfo.version || 0) + 1;
    myInfo.lastUpdate = { seconds: Math.floor(Date.now() / 1000), nanos: 0 };
  }

  _getPeerConnVersionMap(groupKey, create = false) {
    const k = String(groupKey || '');
    let m = this.peerConnVersions.get(k);
    if (!m && create) {
      m = new Map();
      this.peerConnVersions.set(k, m);
    }
    return m;
  }

  bumpPeerConnVersion(groupKey, peerId) {
    const m = this._getPeerConnVersionMap(groupKey, true);
    const current = m.get(peerId) || 0;
    const next = current + 1;
    m.set(peerId, next);
    return next;
  }

  getPeerConnVersion(groupKey, peerId) {
    const m = this._getPeerConnVersionMap(groupKey, false);
    return m ? (m.get(peerId) || 0) : 0;
  }

  bumpAllPeerConnVersions(groupKey) {
    const allPeers = new Set(this.listPeerIdsInGroup(groupKey));
    const infos = this._getPeerInfosMap(groupKey, false);
    if (infos) {
      for (const pid of infos.keys()) {
        allPeers.add(pid);
      }
    }
    allPeers.add(MY_PEER_ID);
    for (const pid of allPeers) {
      this.bumpPeerConnVersion(groupKey, pid);
    }
  }

  setPublicServerFlag(isPublicServer) {
    const myInfo = this.ensureMyInfo();
    const next = !!isPublicServer;
    const prev = !!(myInfo.featureFlag && myInfo.featureFlag.isPublicServer);
    myInfo.featureFlag = {
      ...myInfo.featureFlag,
      isPublicServer: next,
    };
    if (next !== prev) {
      this.bumpMyInfoVersion();
    }
  }

  _getPeersMap(groupKey, create = false) {
    const k = String(groupKey || '');
    let m = this.peersByGroup.get(k);
    if (!m && create) {
      m = new Map();
      this.peersByGroup.set(k, m);
    }
    return m;
  }

  _getPeerInfosMap(groupKey, create = false) {
    const k = String(groupKey || '');
    let m = this.peerInfosByGroup.get(k);
    if (!m && create) {
      m = new Map();
      this.peerInfosByGroup.set(k, m);
    }
    return m;
  }

  _getSession(groupKey, peerId, create = false) {
    const now = Date.now();
    if (now - this.lastSessionCleanup > Math.max(30_000, Math.min(this.sessionTtlMs / 2, 120_000))) {
      this.cleanupSessions(now);
    }
    const gk = String(groupKey || '');
    let g = this.routeSessions.get(gk);
    if (!g && create) {
      g = new Map();
      this.routeSessions.set(gk, g);
    }
    if (!g) return null;
    let s = g.get(peerId);
    if (!s && create) {
      s = {
        mySessionId: null,
        dstSessionId: null,
        weAreInitiator: false,
        peerInfoVerMap: new Map(),
        connBitmapVerMap: new Map(),
        foreignNetVer: 0,
        lastTouch: Date.now(),
      };
      g.set(peerId, s);
    }
    if (s) s.lastTouch = Date.now();
    return s;
  }

  cleanupSessions(nowTs = Date.now()) {
    this.lastSessionCleanup = nowTs;
    const ttl = this.sessionTtlMs;
    for (const [gk, m] of this.routeSessions.entries()) {
      for (const [pid, s] of m.entries()) {
        if (nowTs - (s.lastTouch || 0) > ttl) {
          m.delete(pid);
        }
      }
      if (m.size === 0) this.routeSessions.delete(gk);
    }
  }

  onRouteSessionAck(groupKey, peerId, theirSessionId, weAreInitiator) {
    const s = this._getSession(groupKey, peerId, true);
    if (s.dstSessionId !== theirSessionId) {
      s.peerInfoVerMap.clear();
      s.connBitmapVerMap.clear();
      s.foreignNetVer = 0;
    }
    s.dstSessionId = theirSessionId;
    if (typeof weAreInitiator === 'boolean') {
      s.weAreInitiator = weAreInitiator;
    }
  }

  addPeer(peerId, ws) {
    const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';
    const peers = this._getPeersMap(groupKey, true);
    const isNewPeer = !peers.has(peerId);
    peers.set(peerId, ws);
    if (isNewPeer) {
      this.bumpAllPeerConnVersions(groupKey);
    }
  }

  removePeer(ws) {
    const peerId = ws && ws.peerId;
    const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';
    if (!peerId) return false;
    const peers = this._getPeersMap(groupKey, false);
    const wasPresent = peers && peers.has(peerId);
    if (peers) peers.delete(peerId);
    const infos = this._getPeerInfosMap(groupKey, false);
    if (infos) infos.delete(peerId);
    const sessions = this.routeSessions.get(groupKey);
    if (sessions) {
      sessions.delete(peerId);
      if (sessions.size === 0) this.routeSessions.delete(groupKey);
    }
    const connVers = this._getPeerConnVersionMap(groupKey, false);
    if (connVers) connVers.delete(peerId);

    if (wasPresent && peers && peers.size > 0) {
      this.bumpAllPeerConnVersions(groupKey);
    }

    if (peers && peers.size === 0) {
      this.peersByGroup.delete(groupKey);
      this.peerInfosByGroup.delete(groupKey);
      this.peerConnVersions.delete(groupKey);
    }
    return true;
  }

  getPeerWs(peerId, groupKey) {
    const peers = this._getPeersMap(groupKey, false);
    return peers ? peers.get(peerId) : undefined;
  }

  listPeerIdsInGroup(groupKey) {
    const peers = this._getPeersMap(groupKey, false);
    return peers ? Array.from(peers.keys()) : [];
  }

  listPeersInGroup(groupKey) {
    const peers = this._getPeersMap(groupKey, false);
    return peers ? Array.from(peers.entries()) : [];
  }

  updatePeerInfo(groupKey, peerId, info) {
    const infos = this._getPeerInfosMap(groupKey, true);
    const isNew = !infos.has(peerId);
    infos.set(peerId, info);
    if (isNew) {
      this.bumpAllPeerConnVersions(groupKey);
    }

    if (this.allowVirtualIP && !this.ipConfiguredByEnv && this.ipAutoAssigned) {
      const myInfo = this.ensureMyInfo();
      const peerIpv4 = info && info.ipv4Addr && typeof info.ipv4Addr.addr === 'number' ? (info.ipv4Addr.addr >>> 0) : null;
      const peerNetLen = info && (info.networkLength || info.network_length);
      const netLen = Number(peerNetLen || myInfo.networkLength || 24);
      if (peerIpv4 !== null && Number.isFinite(netLen) && netLen > 0) {
        const derived = deriveSameNetworkIpv4(peerIpv4, netLen, MY_PEER_ID);
        if (derived !== null) {
          let changed = false;
          if (!this.netConfiguredByEnv) {
            if (myInfo.networkLength !== netLen) {
              myInfo.networkLength = netLen;
              changed = true;
            }
          }
          const prevAddr = myInfo.ipv4Addr && typeof myInfo.ipv4Addr.addr === 'number'
            ? (myInfo.ipv4Addr.addr >>> 0)
            : null;
          if (prevAddr !== derived) {
            myInfo.ipv4Addr = { addr: derived };
            changed = true;
          }

          if (changed) {
            this.bumpMyInfoVersion();
            this.ipAutoAssigned = false;
          }
        }
      }
    }
  }

  broadcastRouteUpdate(types, groupKey, excludePeerId, opts = {}) {
    const forceFull = opts.forceFull !== undefined ? !!opts.forceFull : true;
    if (groupKey !== undefined) {
      const peers = this._getPeersMap(groupKey, false);
      if (!peers) return;
      for (const [peerId, ws] of peers.entries()) {
        if (peerId === excludePeerId) continue;
        if (ws.readyState === WS_OPEN) {
          this.pushRouteUpdateTo(peerId, ws, types, { forceFull });
        }
      }
      return;
    }
    for (const [gk, peers] of this.peersByGroup.entries()) {
      for (const [peerId, ws] of peers.entries()) {
        if (peerId === excludePeerId) continue;
        if (ws.readyState === WS_OPEN) {
          this.pushRouteUpdateTo(peerId, ws, types, { forceFull });
        }
      }
    }
  }

  pushRouteUpdateTo(targetPeerId, ws, types, opts = {}) {
    const forceFull = !!opts.forceFull;
    const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';
    const session = this._getSession(groupKey, targetPeerId, true);
    const myInfo = this.ensureMyInfo();
    if (!ws.serverSessionId) {
      ws.serverSessionId = randomU64String();
    }
    session.mySessionId = ws.serverSessionId;
    const forceFullLocal = forceFull || !session.dstSessionId;

    const allPeers = new Set(this.listPeerIdsInGroup(groupKey));
    const infos = this._getPeerInfosMap(groupKey, false);
    if (infos) {
      for (const pid of infos.keys()) {
        allPeers.add(pid);
      }
    }
    allPeers.add(targetPeerId);
    const relevantPeers = [MY_PEER_ID, ...Array.from(allPeers).filter(p => p !== MY_PEER_ID).sort((a, b) => Number(a) - Number(b))];
    const defaultNetLen = myInfo.networkLength || 24;

    const peerInfosItems = [];
    for (const pid of relevantPeers) {
      let info = (pid === MY_PEER_ID)
        ? myInfo
        : (this._getPeerInfosMap(groupKey, false)?.get(pid));
      if (!info) {
        info = makeStubPeerInfo(pid, defaultNetLen);
        this._getPeerInfosMap(groupKey, true).set(pid, info);
      }
      const version = info && info.version ? info.version : 1;
      const prev = forceFullLocal ? 0 : (session.peerInfoVerMap.get(pid) || 0);
      if (forceFullLocal || version > prev) {
        peerInfosItems.push(info);
        session.peerInfoVerMap.set(pid, version);
      }
    }

    let connBitmap = null;
    if (relevantPeers.length > 0) {
      const peerIdVersions = relevantPeers.map((pid) => {
        const version = this.bumpPeerConnVersion(groupKey, pid);
        return { peerId: pid, version: version };
      });
      const N = peerIdVersions.length;
      const bitmapSize = Math.ceil((N * N) / 8);
      const bitmap = new Uint8Array(bitmapSize);
      const idxByPeerId = new Map();
      for (let i = 0; i < peerIdVersions.length; i++) {
        idxByPeerId.set(peerIdVersions[i].peerId, i);
      }
      const setBit = (row, col) => {
        const idx = row * N + col;
        bitmap[Math.floor(idx / 8)] |= (1 << (idx % 8));
      };
      for (let i = 0; i < peerIdVersions.length; i++) {
        setBit(i, i);
      }
      const serverIdx = idxByPeerId.get(MY_PEER_ID);
      if (serverIdx !== undefined) {
        for (let i = 0; i < peerIdVersions.length; i++) {
          if (i === serverIdx) continue;
          setBit(serverIdx, i);
          setBit(i, serverIdx);
        }
      } else {
        for (let i = 0; i < peerIdVersions.length; i++) {
          for (let j = 0; j < peerIdVersions.length; j++) {
            setBit(i, j);
          }
        }
      }
      const connVersion = session.connBitmapVerMap.get(targetPeerId) || 0;
      const nextConnVersion = connVersion + 1;
      session.connBitmapVerMap.set(targetPeerId, nextConnVersion);
      connBitmap = { peerIds: peerIdVersions, bitmap: Buffer.from(bitmap), version: nextConnVersion };
    }

    const foreignNetworkInfos = (() => {
      const mode = (process.env.EASYTIER_HANDSHAKE_MODE || 'foreign').toLowerCase();
      if (mode === 'same' || mode === 'same_network') return null;
      const version = session.foreignNetVer + 1;
      session.foreignNetVer = version;
      return {
        infos: [{
          key: {
            peerId: MY_PEER_ID,
            networkName: process.env.EASYTIER_PUBLIC_SERVER_NETWORK_NAME || 'dev-websocket-relay'
          },
          value: {
            foreignPeerIds: Array.from(allPeers),
            lastUpdate: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
            version,
            networkSecretDigest: Buffer.alloc(32),
            myPeerIdForThisNetwork: MY_PEER_ID
          }
        }]
      };
    })();

    const t = this.types;
    if (!t) {
      throw new Error('PeerManager types not set');
    }
    const rawPeerInfos = peerInfosItems.length > 0
      ? peerInfosItems.map(info => t.RoutePeerInfo.encode(info).finish())
      : null;

    const reqPayload = {
      myPeerId: MY_PEER_ID,
      mySessionId: ws.serverSessionId,
      isInitiator: !!ws.weAreInitiator,
      peerInfos: peerInfosItems.length > 0 ? { items: peerInfosItems } : null,
      rawPeerInfos: rawPeerInfos,
      connBitmap: connBitmap,
      foreignNetworkInfos: foreignNetworkInfos
    };

    const reqBytes = t.SyncRouteInfoRequest.encode(reqPayload).finish();
    const rpcRequestPayload = { request: reqBytes, timeoutMs: 5000 };
    const rpcRequestBytes = t.RpcRequest.encode(rpcRequestPayload).finish();

    const rpcReqPacket = {
      fromPeer: MY_PEER_ID,
      toPeer: targetPeerId,
      transactionId: Number(BigInt.asUintN(32, BigInt(randomU64String()))),
      descriptor: {
        domainName: ws.domainName || "public_server",
        protoName: 'OspfRouteRpc',
        serviceName: 'OspfRouteRpc',
        methodIndex: process.env.EASYTIER_OSPF_ROUTE_METHOD_INDEX ? Number(process.env.EASYTIER_OSPF_ROUTE_METHOD_INDEX) : 1
      },
      body: rpcRequestBytes,
      isRequest: true,
      totalPieces: 1,
      pieceIdx: 0,
      traceId: 0,
      compressionInfo: { algo: 1, acceptedAlgo: 1 }
    };

    const rpcPacketBytes = t.RpcPacket.encode(rpcReqPacket).finish();
    try {
      ws.send(wrapPacket(createHeader, MY_PEER_ID, targetPeerId, PacketType.RpcReq, rpcPacketBytes, ws));
    } catch (e) {
      // ignore
    }
  }
}

let peerManagerInstance = null;
export function getPeerManager() {
  if (!peerManagerInstance) {
    peerManagerInstance = new PeerManager();
  }
  return peerManagerInstance;
}
