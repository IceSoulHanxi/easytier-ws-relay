import { Buffer } from 'buffer';
import { parseHeader } from './core/packet.js';
import { PacketType, HEADER_SIZE } from './core/constants.js';
import { loadProtos } from './core/protos.js';
import { handleHandshake, handlePing, handleForwarding } from './core/basic_handlers.js';
import { handleRpcReq } from './core/rpc_handler.js';
import { getPeerManager } from './core/peer_manager.js';
import { randomU64String } from './core/crypto.js';

export class RelayRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.types = loadProtos();
    this.peerManager = getPeerManager();
    this.peerManager.setTypes(this.types);

    // Restore sockets after hibernation to keep metadata
    this.state.getWebSockets().forEach((ws) => this._restoreSocket(ws));
  }

  async fetch(request) {
    const url = new URL(request.url);
    // WebSocket path validation (should already be validated in worker.js)
    const wsPath = this.env.WS_PATH || '/ws';
    if (url.pathname !== wsPath) {
      return new Response('Not found', { status: 404 });
    }
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected websocket', { status: 400 });
    }

    const pair = new WebSocketPair();
    const server = pair[1];
    const client = pair[0];
    await this.handleSession(server);

    return new Response(null, { status: 101, webSocket: client });
  }

  async handleSession(webSocket) {
    this.state.acceptWebSocket(webSocket);
    this._initSocket(webSocket);
  }

  async webSocketMessage(ws, message) {
    try {
      let buffer = null;
      if (message instanceof ArrayBuffer) {
        buffer = Buffer.from(message);
      } else if (message instanceof Uint8Array) {
        buffer = Buffer.from(message);
      } else if (ArrayBuffer.isView(message) && message.buffer) {
        buffer = Buffer.from(message.buffer);
      } else {
        console.warn('[ws] unsupported message type', typeof message);
        return;
      }
      console.log(`[ws] recv len=${buffer.length}`);
      ws.lastSeen = Date.now();
      const header = parseHeader(buffer);
      if (!header) {
        console.error('[ws] parseHeader failed, raw hex=', buffer.toString('hex'));
        return;
      }
      console.log(`[ws] header from=${header.fromPeerId} to=${header.toPeerId} type=${header.packetType} len=${header.len}`);
      const payload = buffer.subarray(HEADER_SIZE);
      switch (header.packetType) {
        case PacketType.HandShake:
          console.log(`[ws] -> handleHandshake payload hex=${payload.toString('hex')}`);
          handleHandshake(ws, header, payload, this.types);
          break;
        case PacketType.Ping:
          handlePing(ws, header, payload);
          break;
        case PacketType.RpcReq:
          handleRpcReq(ws, header, payload, this.types);
          break;
        case PacketType.RpcResp:
        case PacketType.Data:
        default:
          if (header.packetType !== PacketType.Data) {
            console.log(`[ws] -> forward type=${header.packetType} len=${payload.length}`);
          }
          handleForwarding(ws, header, buffer, this.types);
      }
    } catch (e) {
      console.error('relay_room message handling error:', e);
      try { ws.close(1011, 'internal error'); } catch (_) { }
    }
  }

  async webSocketClose(ws) {
    if (ws.peerId) {
      const groupKey = ws.groupKey;
      const removed = this.peerManager.removePeer(ws);
      if (removed) {
        try {
          this.peerManager.broadcastRouteUpdate(this.types, groupKey);
        } catch (_) { }
      }
    }
  }

  async webSocketError(ws) {
    await this.webSocketClose(ws);
  }

  _initSocket(ws, meta = {}) {
    ws.peerId = meta.peerId || null;
    ws.groupKey = meta.groupKey || null;
    ws.domainName = meta.domainName || null;
    ws.lastSeen = Date.now();
    ws.serverSessionId = meta.serverSessionId || randomU64String();
    ws.weAreInitiator = false;
    ws.crypto = { enabled: false };
    ws.serializeAttachment?.({
      peerId: ws.peerId,
      groupKey: ws.groupKey,
      domainName: ws.domainName,
      serverSessionId: ws.serverSessionId,
    });
  }

  _restoreSocket(ws) {
    const meta = ws.deserializeAttachment ? (ws.deserializeAttachment() || {}) : {};
    this._initSocket(ws, meta);
  }
}
