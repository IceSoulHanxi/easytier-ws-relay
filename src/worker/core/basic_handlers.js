import { MAGIC, VERSION, MY_PEER_ID, PacketType } from './constants.js';
import { createHeader } from './packet.js';
import { getPeerManager } from './peer_manager.js';
import { wrapPacket, randomU64String } from './crypto.js';

const WS_OPEN = (typeof WebSocket !== 'undefined' && WebSocket.OPEN) ? WebSocket.OPEN : 1;

// Record the first registered digest per network name; later mismatched digest will be rejected
const networkDigestRegistry = new Map();

export function handleHandshake(ws, header, payload, types) {
  try {
    const req = types.HandshakeRequest.decode(payload);
    try {
      const dig = req.networkSecretDigrest ? Buffer.from(req.networkSecretDigrest) : Buffer.alloc(0);
      console.log(`Handshake networkSecretDigest(hex)=${dig.toString('hex')}`);
    } catch (_) {
      // ignore
    }

    if (req.magic !== MAGIC) {
      console.error('Invalid magic');
      ws.close();
      return;
    }

    const clientNetworkName = req.networkName || '';
    const clientDigest = req.networkSecretDigrest ? Buffer.from(req.networkSecretDigrest) : Buffer.alloc(0);
    const digestHex = clientDigest.toString('hex');
    const existingDigest = networkDigestRegistry.get(clientNetworkName);
    if (existingDigest && existingDigest !== digestHex) {
      console.error(`Rejecting handshake from ${req.myPeerId}: digest mismatch for network "${clientNetworkName}" (existing=${existingDigest}, incoming=${digestHex})`);
      ws.close();
      return;
    }
    if (!existingDigest) {
      networkDigestRegistry.set(clientNetworkName, digestHex);
    }
    const groupDigest = networkDigestRegistry.get(clientNetworkName) || '';
    const groupKey = `${clientNetworkName}:${groupDigest}`;
    const serverNetworkName = process.env.EASYTIER_PUBLIC_SERVER_NETWORK_NAME || 'public_server';
    const digest = new Uint8Array(32);

    ws.domainName = clientNetworkName;

    const respPayload = {
      magic: MAGIC,
      myPeerId: MY_PEER_ID,
      version: VERSION,
      features: ["node-server-v1"],
      networkName: serverNetworkName,
      networkSecretDigrest: digest
    };

    ws.groupKey = groupKey;
    ws.peerId = req.myPeerId;
    const pm = getPeerManager();
    pm.addPeer(req.myPeerId, ws);
    pm.updatePeerInfo(ws.groupKey, req.myPeerId, {
      peerId: req.myPeerId,
      version: 1,
      lastUpdate: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
      instId: { part1: 0, part2: 0, part3: 0, part4: 0 },
      networkLength: Number(process.env.EASYTIER_NETWORK_LENGTH || 24),
    });
    pm.setPublicServerFlag(true);
    ws.crypto = { enabled: false };

    const respBuffer = types.HandshakeRequest.encode(respPayload).finish();
    const respHeader = createHeader(MY_PEER_ID, req.myPeerId, PacketType.HandShake, respBuffer.length);
    ws.send(Buffer.concat([respHeader, Buffer.from(respBuffer)]));
    if (!ws.serverSessionId) {
      ws.serverSessionId = randomU64String();
    }
    if (ws.weAreInitiator === undefined) {
      ws.weAreInitiator = false;
    }

    setTimeout(() => {
      try {
        if (ws.readyState === WS_OPEN) {
          const pm = getPeerManager();
          pm.pushRouteUpdateTo(req.myPeerId, ws, types, { forceFull: true });
          pm.broadcastRouteUpdate(types, ws.groupKey, req.myPeerId, { forceFull: true });
        }
      } catch (e) {
        console.error(`Failed to push initial route update to ${req.myPeerId}:`, e.message);
      }
    }, 50);

  } catch (e) {
    console.error('Handshake error:', e);
    ws.close();
  }
}

export function handlePing(ws, header, payload) {
  const msg = wrapPacket(createHeader, MY_PEER_ID, header.fromPeerId, PacketType.Pong, payload, ws);
  ws.send(msg);
}

export function handleForwarding(sourceWs, header, fullMessage, types) {
  const targetPeerId = header.toPeerId;
  const pm = getPeerManager();
  const targetWs = pm.getPeerWs(targetPeerId, sourceWs && sourceWs.groupKey);

  if (targetWs && targetWs.readyState === WS_OPEN) {
    const srcGroup = sourceWs && sourceWs.groupKey;
    const dstGroup = targetWs && targetWs.groupKey;
    if (srcGroup && dstGroup && srcGroup !== dstGroup) {
      return;
    }
    try {
      targetWs.send(fullMessage);
    } catch (e) {
      console.error(`Forward to ${targetPeerId} failed: ${e.message}`);
      pm.removePeer(targetWs);
      try {
        pm.broadcastRouteUpdate(types, srcGroup);
      } catch (err) {
        console.error(`Broadcast after forward failure failed: ${err.message}`);
      }
    }
  } else {
  }
}
