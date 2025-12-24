import { MY_PEER_ID, PacketType } from './constants.js';
import { createHeader } from './packet.js';
import { getPeerManager } from './peer_manager.js';
import { wrapPacket, randomU64String, sha256 } from './crypto.js';
import { gzipMaybe, gunzipMaybe, isCompressionAvailable } from './compress.js';

const peerCenterStateByGroup = new Map();
const PEER_CENTER_TTL_MS = Number(process.env.EASYTIER_PEER_CENTER_TTL_MS || 180_000);
const PEER_CENTER_CLEAN_INTERVAL = Math.max(30_000, Math.min(PEER_CENTER_TTL_MS / 2, 120_000));
let lastPeerCenterClean = 0;
function pm() {
  return getPeerManager();
}

function getPeerCenterState(groupKey) {
  const k = String(groupKey || '');
  let s = peerCenterStateByGroup.get(k);
  if (!s) {
    s = {
      globalPeerMap: new Map(),
      digest: '0',
    };
    peerCenterStateByGroup.set(k, s);
  }
  const now = Date.now();
  if (now - lastPeerCenterClean > PEER_CENTER_CLEAN_INTERVAL) {
    cleanPeerCenterState(now);
  }
  s.lastTouch = Date.now();
  return s;
}

function cleanPeerCenterState(now = Date.now()) {
  lastPeerCenterClean = now;
  for (const [gk, s] of peerCenterStateByGroup.entries()) {
    for (const [pid, info] of s.globalPeerMap.entries()) {
      if (now - (info.lastSeen || 0) > PEER_CENTER_TTL_MS) {
        s.globalPeerMap.delete(pid);
      }
    }
    if (now - (s.lastTouch || 0) > PEER_CENTER_TTL_MS && s.globalPeerMap.size === 0) {
      peerCenterStateByGroup.delete(gk);
    }
  }
}

function calcPeerCenterDigestFromMap(mapObj) {
  const h = sha256();
  const keys = Object.keys(mapObj).sort();
  for (const k of keys) {
    h.update(k);
    const directPeers = mapObj[k].directPeers || {};
    const dKeys = Object.keys(directPeers).sort();
    for (const dk of dKeys) {
      h.update(dk);
      const v = directPeers[dk];
      h.update(Buffer.from(String(v && v.latencyMs !== undefined ? v.latencyMs : 0)));
    }
  }
  const b = h.digest();
  let x = 0n;
  for (let i = 0; i < 8; i++) {
    x = (x << 8n) | BigInt(b[i]);
  }
  const u64 = x & 0xFFFFFFFFFFFFFFFFn;
  return u64.toString();
}

function buildPeerCenterResponseMap(groupKey, state) {
  const out = {};
  const set = new Set(pm().listPeerIdsInGroup(groupKey));
  const infos = pm()._getPeerInfosMap(groupKey, false);
  if (infos) {
    for (const pid of infos.keys()) set.add(pid);
  }
  for (const peerId of set) {
    const key = String(peerId);
    const existing = state.globalPeerMap.get(key);
    out[key] = existing ? { ...existing } : { directPeers: {} };
    if (!out[key].directPeers) out[key].directPeers = {};
    out[key].directPeers[String(MY_PEER_ID)] = { latencyMs: 0 };
  }
  return out;
}

function sendRpcResponse(ws, toPeerId, reqRpcPacket, types, responseBodyBytes) {
  const compressEnabled = process.env.EASYTIER_COMPRESS_RPC !== '0';
  let responseBody = responseBodyBytes;
  let compressionInfo = { algo: 1, acceptedAlgo: 1 };
  if (compressEnabled && responseBodyBytes && responseBodyBytes.length > 256 && isCompressionAvailable()) {
    try {
      responseBody = gzipMaybe(responseBodyBytes);
      compressionInfo = { algo: 2, acceptedAlgo: 1 };
    } catch (e) {
      console.warn(`Compress rpc response failed: ${e.message}`);
    }
  }

  const rpcResponsePayload = {
    response: responseBody,
    error: null,
    runtimeUs: 0,
  };
  const rpcResponseBytes = types.RpcResponse.encode(rpcResponsePayload).finish();

  const rpcRespPacket = {
    fromPeer: MY_PEER_ID,
    toPeer: toPeerId,
    transactionId: reqRpcPacket.transactionId,
    descriptor: reqRpcPacket.descriptor,
    body: rpcResponseBytes,
    isRequest: false,
    totalPieces: 1,
    pieceIdx: 0,
    traceId: reqRpcPacket.traceId,
    compressionInfo,
  };
  const rpcPacketBytes = types.RpcPacket.encode(rpcRespPacket).finish();
  const out = wrapPacket(createHeader, MY_PEER_ID, toPeerId, PacketType.RpcResp, rpcPacketBytes, ws);
  console.log(`RpcResp -> ${toPeerId} txLen=${out.length} txTransaction=${reqRpcPacket.transactionId}`);
  ws.send(out);
}

export function handleRpcReq(ws, header, payload, types) {
  try {
    const rpcPacket = types.RpcPacket.decode(payload);
    if (rpcPacket.compressionInfo && rpcPacket.compressionInfo.algo > 1 && isCompressionAvailable()) {
      try {
        rpcPacket.body = gunzipMaybe(rpcPacket.body);
        rpcPacket.compressionInfo.algo = 1;
      } catch (e) {
        console.error(`RpcPacket decompress failed from ${header.fromPeerId}: ${e.message}`);
        return;
      }
    }
    const descriptor = rpcPacket.descriptor;

    let innerReqBody = rpcPacket.body;
    try {
      const rpcReqWrapper = types.RpcRequest.decode(rpcPacket.body);
      if (rpcReqWrapper.request && rpcReqWrapper.request.length > 0) {
        innerReqBody = rpcReqWrapper.request;
      }
    } catch (e) {
      console.log("Failed to decode RpcRequest wrapper, assuming raw body:", e.message);
    }

    if ((descriptor.serviceName === 'peer_rpc.PeerCenterRpc' || descriptor.serviceName === 'PeerCenterRpc')
      && (descriptor.protoName === 'peer_rpc' || !descriptor.protoName)) {
      const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';
      const state = getPeerCenterState(groupKey);
      if (descriptor.methodIndex === 0) {
        const req = types.ReportPeersRequest.decode(innerReqBody);
        const myPeerId = req.myPeerId;
        const peers = req.peerInfos || { directPeers: {} };

        const directPeers = {};
        if (peers.directPeers) {
          for (const [dstPeerId, info] of Object.entries(peers.directPeers)) {
            directPeers[String(dstPeerId)] = { latencyMs: (info && typeof info.latencyMs === 'number') ? info.latencyMs : 0 };
          }
        }
        state.globalPeerMap.set(String(myPeerId), { directPeers, lastSeen: Date.now() });

        const snapshot = buildPeerCenterResponseMap(groupKey, state);
        state.digest = calcPeerCenterDigestFromMap(snapshot);

        const respBytes = types.ReportPeersResponse.encode({}).finish();
        sendRpcResponse(ws, header.fromPeerId, rpcPacket, types, respBytes);
        return;
      }

      if (descriptor.methodIndex === 1) {
        const req = types.GetGlobalPeerMapRequest.decode(innerReqBody);
        const reqDigest = req.digest !== undefined && req.digest !== null ? String(req.digest) : '0';
        if (reqDigest === state.digest && reqDigest !== '0') {
          const respBytes = types.GetGlobalPeerMapResponse.encode({}).finish();
          sendRpcResponse(ws, header.fromPeerId, rpcPacket, types, respBytes);
          return;
        }

        const snapshot = buildPeerCenterResponseMap(groupKey, state);
        state.digest = calcPeerCenterDigestFromMap(snapshot);
        const respBytes = types.GetGlobalPeerMapResponse.encode({
          globalPeerMap: snapshot,
          digest: state.digest,
        }).finish();
        sendRpcResponse(ws, header.fromPeerId, rpcPacket, types, respBytes);
        return;
      }

      console.log(`Unhandled PeerCenterRpc methodIndex=${descriptor.methodIndex}`);
      return;
    }

    if ((descriptor.serviceName === 'peer_rpc.OspfRouteRpc' || descriptor.serviceName === 'OspfRouteRpc')
      && (descriptor.protoName === 'peer_rpc' || descriptor.protoName === 'peer_rpc.OspfRouteRpc' || descriptor.protoName === 'OspfRouteRpc' || !descriptor.protoName)) {
      const req = types.SyncRouteInfoRequest.decode(innerReqBody);
      const desc = descriptor || {};
      const fromPeerId = header.fromPeerId;
      console.log(`RPC Request descriptor from ${fromPeerId}: domain=${desc.domainName}, service=${desc.serviceName}, proto=${desc.protoName}, method=${desc.methodIndex}`);
      const peerInfosCount = req.peerInfos ? req.peerInfos.items.length : 0;
      const hasConnBitmap = !!req.connBitmap;
      const hasForeignNet = !!req.foreignNetworkInfos;
      console.log(`SyncRouteInfo details: SessionID=${req.mySessionId}, Initiator=${req.isInitiator}, PeerInfosCount=${peerInfosCount}, HasConnBitmap=${hasConnBitmap}, HasForeignNet=${hasForeignNet}`);
      if (descriptor.methodIndex === 0 || descriptor.methodIndex === 1) {
        handleSyncRouteInfo(ws, fromPeerId, rpcPacket, req, types);
        return;
      }
      console.log(`Unhandled OspfRouteRpc methodIndex=${descriptor.methodIndex}`);
      return;
    }

    console.log(`Unhandled RPC Service: ${descriptor.serviceName} (proto: ${descriptor.protoName})`);

  } catch (e) {
    console.error('RPC Decode error:', e);
  }
}

function handleSyncRouteInfo(ws, fromPeerId, reqRpcPacket, syncReq, types) {
  const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';

  if (!ws.serverSessionId) {
    ws.serverSessionId = randomU64String();
  }

  if (syncReq && typeof syncReq.isInitiator === 'boolean') {
    ws.weAreInitiator = !syncReq.isInitiator;
  }
  pm().onRouteSessionAck(groupKey, fromPeerId, syncReq.mySessionId, ws.weAreInitiator);

  let hasNewPeers = false;
  if (syncReq.peerInfos && syncReq.peerInfos.items) {
    syncReq.peerInfos.items.forEach(info => {
      if (info.peerId !== MY_PEER_ID) {
        const infos = pm()._getPeerInfosMap(groupKey, false);
        const isNew = !infos || !infos.has(info.peerId);
        pm().updatePeerInfo(groupKey, info.peerId, info);
        if (isNew) hasNewPeers = true;
      }
      if (info.peerId === MY_PEER_ID) {
        pm().updatePeerInfo(groupKey, info.peerId, info);
      }
    });
  }

  const respPayload = {
    isInitiator: !syncReq.isInitiator,
    sessionId: ws.serverSessionId
  };
  const respBytes = types.SyncRouteInfoResponse.encode(respPayload).finish();
  if (reqRpcPacket.compressionInfo && reqRpcPacket.compressionInfo.algo > 1) {
    console.warn(`Client sent COMPRESSED RPC body (Algo: ${reqRpcPacket.compressionInfo.algo}). We might have failed to decode it correctly if we didn't decompress.`);
  }

  // Respond with SyncRouteInfoResponse
  sendRpcResponse(ws, fromPeerId, reqRpcPacket, types, respBytes);

  // After responding, push our current route info back to the requester (mirrors node behavior).
  pm().pushRouteUpdateTo(fromPeerId, ws, types, { forceFull: true });
  if (hasNewPeers) {
    pm().broadcastRouteUpdate(types, groupKey, fromPeerId, { forceFull: true });
  }
}
