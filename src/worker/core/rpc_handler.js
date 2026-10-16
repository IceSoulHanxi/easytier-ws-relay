import { MY_PEER_ID, PacketType } from './constants.js';
import { createHeader } from './packet.js';
import { wrapPacket, randomU64String, sha256 } from './crypto.js';
import { loadProtos } from './protos.js';

// Helper to convert transactionId to proper format for protobuf int64
function toLongForProto(value) {
  if (value === null || value === undefined) return value;

  // If it's already a Long-like object with low/high
  if (value && typeof value === 'object' && typeof value.low === 'number' && typeof value.high === 'number') {
    return value;
  }

  // If it's a Long instance
  if (value && typeof value === 'object' && value.constructor && value.constructor.name === 'Long') {
    return value;
  }

  // If it's a string, try to parse as BigInt first, then convert
  if (typeof value === 'string') {
    try {
      const big = BigInt(value);
      const low = Number(big & 0xffffffffn);
      const high = Number((big >> 32n) & 0xffffffffn);
      return { low, high, unsigned: false };
    } catch (e) {
      console.warn(`Failed to parse transactionId string as BigInt: ${value}`);
      return value;
    }
  }

  // If it's a number, convert to Long
  if (typeof value === 'number') {
    const low = value | 0;
    const high = Math.floor(value / 4294967296);
    return { low, high, unsigned: false };
  }

  // If it's a BigInt
  if (typeof value === 'bigint') {
    const low = Number(value & 0xffffffffn);
    const high = Number((value >> 32n) & 0xffffffffn);
    return { low, high, unsigned: false };
  }

  return value;
}

const PEER_CENTER_TTL_MS = Number(process.env.EASYTIER_PEER_CENTER_TTL_MS || 180_000);
const PEER_CENTER_CLEAN_INTERVAL = Math.max(30_000, Math.min(PEER_CENTER_TTL_MS / 2, 120_000));

function getPeerCenterState(peerManager, groupKey) {
  const peerCenterStateByGroup = peerManager.peerCenterStateByGroup;
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
  if (now - peerManager.lastPeerCenterClean > PEER_CENTER_CLEAN_INTERVAL) {
    cleanPeerCenterState(peerManager, now);
  }
  s.lastTouch = Date.now();
  return s;
}

function cleanPeerCenterState(peerManager, now = Date.now()) {
  peerManager.lastPeerCenterClean = now;
  const peerCenterStateByGroup = peerManager.peerCenterStateByGroup;
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

function buildPeerCenterResponseMap(peerManager, groupKey, state) {
  const out = {};
  const set = new Set(peerManager.listPeerIdsInGroup(groupKey));
  const infos = peerManager._getPeerInfosMap(groupKey, false);
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
  if (!ws || ws.readyState !== 1) { // WS_OPEN
    console.error(`sendRpcResponse aborted: socket not open (readyState=${ws ? ws.readyState : 'nil'}) toPeer=${toPeerId}`);
    return;
  }
  // Algorithm 2 is Zstandard in EasyTier, not gzip. Until Zstandard is
  // implemented here, advertise and send only the supported uncompressed form.
  const compressionInfo = { algo: 1, acceptedAlgo: 1 };

  const rpcResponsePayload = {
    response: responseBodyBytes,
    error: null,
    runtimeUs: 0,
  };
  const rpcResponseBytes = types.RpcResponse.encode(rpcResponsePayload).finish();

  // Detailed transactionId logging to debug int64 encoding issues
  const txId = reqRpcPacket.transactionId;
  let txIdValue, txIdType;
  if (txId && typeof txId === 'object' && txId.constructor && txId.constructor.name === 'Long') {
    // Long object from protobufjs
    txIdValue = txId.toString();
    txIdType = 'Long';
  } else if (typeof txId === 'bigint') {
    txIdValue = txId.toString();
    txIdType = 'BigInt';
  } else if (typeof txId === 'string') {
    txIdValue = txId;
    txIdType = 'String';
  } else if (typeof txId === 'number') {
    txIdValue = String(txId);
    txIdType = 'Number';
  } else if (txId && typeof txId === 'object' && typeof txId.low === 'number' && typeof txId.high === 'number') {
    // Plain Long-like object
    const combined = (BigInt(txId.high) << 32n) | BigInt(txId.low >>> 0);
    txIdValue = combined.toString();
    txIdType = 'Long-like';
  } else {
    txIdValue = String(txId);
    txIdType = typeof txId;
  }
  console.log(`sendRpcResponse: transactionId=${txIdValue} (${txIdType}) raw=${JSON.stringify(txId)}`);

  // Convert transactionId to proper Long format for protobuf encoding
  const txIdForEncoding = toLongForProto(txId);

  const rpcRespPacket = {
    fromPeer: MY_PEER_ID,
    toPeer: toPeerId,
    transactionId: txIdForEncoding,
    descriptor: reqRpcPacket.descriptor,
    body: rpcResponseBytes,
    isRequest: false,
    totalPieces: 1,
    pieceIdx: 0,
    traceId: reqRpcPacket.traceId,
    compressionInfo,
  };
  const rpcPacketBytes = types.RpcPacket.encode(rpcRespPacket).finish();
  const buf = wrapPacket(createHeader, MY_PEER_ID, toPeerId, PacketType.RpcResp, rpcPacketBytes, ws);
  try {
    ws.send(buf);
    console.log(`RpcResp -> to=${toPeerId} txLen=${buf.length} txTransaction=${txIdValue} SUCCESS`);
  } catch (e) {
    console.error(`sendRpcResponse to ${toPeerId} failed: ${e.message}`);
    // Re-throw to ensure caller knows the send failed
    throw new Error(`Failed to send RPC response to ${toPeerId}: ${e.message}`);
  }
}

export function handleRpcReq(ws, header, payload, types, peerManager) {
  try {
    const rpcPacket = types.RpcPacket.decode(payload);

    // Log transactionId details for debugging int64 issues
    const txId = rpcPacket.transactionId;
    let txIdValue, txIdType, txIdDetails;
    if (txId && typeof txId === 'object' && txId.constructor && txId.constructor.name === 'Long') {
      txIdValue = txId.toString();
      txIdType = 'Long';
      txIdDetails = `low=${txId.low}, high=${txId.high}, unsigned=${txId.unsigned}`;
    } else if (typeof txId === 'bigint') {
      txIdValue = txId.toString();
      txIdType = 'BigInt';
      txIdDetails = '';
    } else if (typeof txId === 'string') {
      txIdValue = txId;
      txIdType = 'String';
      txIdDetails = '';
    } else if (typeof txId === 'number') {
      txIdValue = String(txId);
      txIdType = 'Number';
      txIdDetails = '';
    } else if (txId && typeof txId === 'object' && typeof txId.low === 'number' && typeof txId.high === 'number') {
      const combined = (BigInt(txId.high) << 32n) | BigInt(txId.low >>> 0);
      txIdValue = combined.toString();
      txIdType = 'Long-like';
      txIdDetails = `low=${txId.low}, high=${txId.high}`;
    } else {
      txIdValue = String(txId);
      txIdType = typeof txId;
      txIdDetails = '';
    }
    console.log(`handleRpcReq: from=${header.fromPeerId} transactionId=${txIdValue} (${txIdType}) ${txIdDetails} raw=${JSON.stringify(txId)}`);

    if (rpcPacket.compressionInfo && rpcPacket.compressionInfo.algo > 1) {
      console.error(`Unsupported RPC compression algorithm ${rpcPacket.compressionInfo.algo} from ${header.fromPeerId}`);
      return;
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
      const state = getPeerCenterState(peerManager, groupKey);
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

        const snapshot = buildPeerCenterResponseMap(peerManager, groupKey, state);
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

        const snapshot = buildPeerCenterResponseMap(peerManager, groupKey, state);
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
        handleSyncRouteInfo(ws, fromPeerId, rpcPacket, req, types, peerManager);
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

export function handleRpcResp(ws, header, payload, types, peerManager) {
  try {
    console.log(`RpcResp <- from=${header.fromPeerId} to=${header.toPeerId} len=${payload.length} packetType=${header.packetType} forwardCounter=${header.forwardCounter}`);
    const rpcPacket = types.RpcPacket.decode(payload);

    // Detailed logging for transactionId debugging
    const txId = rpcPacket.transactionId;
    let txIdValue, txIdType, txIdDetails;
    if (txId && typeof txId === 'object' && txId.constructor && txId.constructor.name === 'Long') {
      txIdValue = txId.toString();
      txIdType = 'Long';
      txIdDetails = `low=${txId.low}, high=${txId.high}, unsigned=${txId.unsigned}`;
    } else if (typeof txId === 'bigint') {
      txIdValue = txId.toString();
      txIdType = 'BigInt';
      txIdDetails = '';
    } else if (typeof txId === 'string') {
      txIdValue = txId;
      txIdType = 'String';
      txIdDetails = '';
    } else if (typeof txId === 'number') {
      txIdValue = String(txId);
      txIdType = 'Number';
      txIdDetails = '';
    } else if (txId && typeof txId === 'object' && typeof txId.low === 'number' && typeof txId.high === 'number') {
      const combined = (BigInt(txId.high) << 32n) | BigInt(txId.low >>> 0);
      txIdValue = combined.toString();
      txIdType = 'Long-like';
      txIdDetails = `low=${txId.low}, high=${txId.high}`;
    } else {
      txIdValue = String(txId);
      txIdType = typeof txId;
      txIdDetails = '';
    }
    console.log(`handleRpcResp: transactionId=${txIdValue} (${txIdType}) ${txIdDetails} raw=${JSON.stringify(txId)}`);
    if (rpcPacket.compressionInfo && rpcPacket.compressionInfo.algo > 1) {
      console.error(`Unsupported RPC compression algorithm ${rpcPacket.compressionInfo.algo} from ${header.fromPeerId}`);
      return;
    }

    const descriptor = rpcPacket.descriptor || {};
    let rpcRespBody = rpcPacket.body;
    // Generic RpcResponse decode first (outer wrapper)
    let rpcResponseDecoded = null;
    try {
      rpcResponseDecoded = types.RpcResponse.decode(rpcRespBody);
      rpcRespBody = rpcResponseDecoded.response || rpcRespBody;
    } catch (e) {
      // keep raw body for best-effort handling below
      console.warn(`RpcResp wrapper decode failed from ${header.fromPeerId}: ${e.message}`);
    }
    // Handle SyncRouteInfoResponse ack (OspfRouteRpc)
    if ((descriptor.serviceName === 'peer_rpc.OspfRouteRpc' || descriptor.serviceName === 'OspfRouteRpc')
      && (descriptor.protoName === 'peer_rpc' || descriptor.protoName === 'peer_rpc.OspfRouteRpc' || descriptor.protoName === 'OspfRouteRpc' || !descriptor.protoName)) {
      try {
        const resp = types.SyncRouteInfoResponse.decode(rpcRespBody);
        const sessionId = resp && resp.sessionId ? resp.sessionId : null;
        if (sessionId && ws && ws.groupKey !== undefined) {
          peerManager.onRouteSessionAck(ws.groupKey, header.fromPeerId, sessionId, ws.weAreInitiator);
          console.log(`RpcResp SyncRouteInfoResponse from=${header.fromPeerId} sessionId=${sessionId} acked`);
        }
      } catch (e) {
        console.error(`Decode SyncRouteInfoResponse failed from ${header.fromPeerId}: ${e.message}`);
      }
      return;
    }

    // Generic RpcResponse logging
    if (rpcResponseDecoded) {
      if (rpcResponseDecoded.error) {
        console.warn(`RpcResp error from ${header.fromPeerId}:`, rpcResponseDecoded.error);
      } else {
        console.log(`RpcResp from=${header.fromPeerId} ok`);
      }
    }
  } catch (e) {
    console.error('RPC Resp Decode error:', e);
  }
}

function handleSyncRouteInfo(ws, fromPeerId, reqRpcPacket, syncReq, types, peerManager) {
  const groupKey = ws && ws.groupKey ? String(ws.groupKey) : '';

  if (!ws.serverSessionId) {
    ws.serverSessionId = randomU64String();
  }

  if (syncReq && typeof syncReq.isInitiator === 'boolean') {
    ws.weAreInitiator = !syncReq.isInitiator;
  }
  peerManager.onRouteSessionAck(groupKey, fromPeerId, syncReq.mySessionId, ws.weAreInitiator);

  let hasChangedPeers = false;
  if (syncReq.peerInfos && syncReq.peerInfos.items) {
    syncReq.peerInfos.items.forEach(info => {
      if (info.peerId === fromPeerId) {
        if (peerManager.updatePeerInfo(groupKey, info.peerId, info)) hasChangedPeers = true;
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

  // Respond with SyncRouteInfoResponse - wrapped in try-catch to ensure response always sends
  // This fixes the "sync_route_info failed timeout" error that prevents DO hibernation
  try {
    sendRpcResponse(ws, fromPeerId, reqRpcPacket, types, respBytes);
    console.log(`Sent SyncRouteInfoResponse to peer ${fromPeerId}, transactionId=${reqRpcPacket.transactionId}`);
  } catch (e) {
    console.error(`CRITICAL: Failed to send SyncRouteInfoResponse to peer ${fromPeerId}: ${e.message}`);
    // Don't rethrow - we want the RPC to complete even if pushRouteUpdateTo fails
  }

  // After responding, push our current route info back to the requester (mirrors node behavior).
  try {
    peerManager.pushRouteUpdateTo(fromPeerId, ws, types, { forceFull: true });
    console.log(`Successfully pushed route update to peer ${fromPeerId}`);
  } catch (e) {
    console.error(`Failed to push route update to peer ${fromPeerId}:`, e);
  }

  if (hasChangedPeers) {
    try {
      peerManager.broadcastRouteUpdate(types, groupKey, fromPeerId, { forceFull: true });
      console.log(`Successfully broadcast route update for group ${groupKey}`);
    } catch (e) {
      console.error(`Failed to broadcast route update for group ${groupKey}:`, e);
    }
  }
}
