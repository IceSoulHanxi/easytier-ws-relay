import { Buffer } from 'buffer';
import { parseHeader } from './core/packet.js';
import { PacketType, HEADER_SIZE, MY_PEER_ID } from './core/constants.js';
import { loadProtos } from './core/protos.js';
import { handleHandshake, handlePing, handleForwarding } from './core/basic_handlers.js';
import { handleRpcReq, handleRpcResp } from './core/rpc_handler.js';
import { PeerManager } from './core/peer_manager.js';
import { randomU64String } from './core/crypto.js';

export class RelayRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.types = loadProtos();
    // A Durable Object may share an isolate with other objects. Never keep its
    // WebSockets in module-global state, because Cloudflare forbids I/O across
    // Durable Object contexts.
    this.peerManager = new PeerManager();
    this.peerManager.setTypes(this.types);

    // Clients retain topology versions across reconnects. Restore the relay's
    // identity and counters before rebuilding its socket registry.
    const restoreSockets = () => this.state.getWebSockets().forEach((ws) => this._restoreSocket(ws));
    if (this.state.storage) {
      this.ready = this.state.blockConcurrencyWhile(async () => {
        this.peerManager.restoreState(await this.state.storage.get('relay-state'));
        restoreSockets();
      });
    } else {
      restoreSockets();
      this.ready = Promise.resolve();
    }
  }

  async fetch(request) {
    await this.ready;
    const url = new URL(request.url);
    const wsPath = '/' + this.env.WS_PATH || '/ws';
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
    await this.ready;
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
      const now = Date.now();
      ws.lastSeen = now;
      const header = parseHeader(buffer);
      if (!header) {
        console.error({
          event: 'websocket_invalid_packet',
          peerId: ws.peerId,
          serverSessionId: ws.serverSessionId,
          networkName: ws.domainName,
          length: buffer.length,
          reason: 'header_too_short',
        });
        return;
      }
      if (header.packetType !== PacketType.Ping && header.packetType !== PacketType.Data) {
        console.log({
          event: 'websocket_packet',
          peerId: ws.peerId,
          serverSessionId: ws.serverSessionId,
          fromPeerId: header.fromPeerId,
          toPeerId: header.toPeerId,
          packetType: header.packetType,
          payloadLength: header.len,
        });
      }
      const payload = buffer.subarray(HEADER_SIZE);
      switch (header.packetType) {
        case PacketType.HandShake:
          handleHandshake(ws, header, payload, this.types, this.peerManager);
          break;
        case PacketType.Ping:
          handlePing(ws, header, payload);
          break;
        case PacketType.RpcReq:
          if (header.toPeerId !== PacketType.Invalid && header.toPeerId !== undefined && header.toPeerId !== null && header.toPeerId !== 0 && header.toPeerId !== PacketType.Invalid && header.toPeerId !== undefined && header.toPeerId !== null && header.toPeerId !== 0 && header.toPeerId !== PacketType.Invalid) {
            // fallthrough handled below; guard keeps eslint quiet
          }
          if (header.toPeerId === PacketType.Invalid /* never true */) {
            // no-op
          }
          if (header.toPeerId === undefined || header.toPeerId === null) {
            handleRpcReq(ws, header, payload, this.types, this.peerManager);
            break;
          }
          if (header.toPeerId === MY_PEER_ID) {
            handleRpcReq(ws, header, payload, this.types, this.peerManager);
            break;
          }
          handleForwarding(ws, header, buffer, this.types, this.peerManager);
          break;
        case PacketType.RpcResp:
          if (header.toPeerId === undefined || header.toPeerId === null || header.toPeerId === MY_PEER_ID) {
            handleRpcResp(ws, header, payload, this.types, this.peerManager);
            break;
          }
          // If toPeerId is not MY_PEER_ID, forward to the target peer
          if (header.packetType !== PacketType.Data) {
            console.log(`[ws] -> forward RpcResp type=${header.packetType} from=${header.fromPeerId} to=${header.toPeerId} len=${payload.length}`);
          }
          handleForwarding(ws, header, buffer, this.types, this.peerManager);
          break;
        case PacketType.Data:
        default:
          if (header.packetType !== PacketType.Data) {
            console.log(`[ws] -> forward type=${header.packetType} len=${payload.length}`);
          }
          handleForwarding(ws, header, buffer, this.types, this.peerManager);
      }

      // Refresh the hibernation attachment after the handshake assigns peer
      // metadata, and periodically thereafter for useful diagnostics.
      if (header.packetType === PacketType.HandShake || header.packetType === PacketType.RpcReq || now - ws.lastPersistedAt >= 60_000) {
        this._persistSocket(ws);
      }
      if (header.packetType === PacketType.HandShake || header.packetType === PacketType.RpcReq) {
        await this._persistRoom();
      }
    } catch (e) {
      console.error({
        event: 'websocket_server_close',
        peerId: ws.peerId,
        serverSessionId: ws.serverSessionId,
        networkName: ws.domainName,
        code: 1011,
        reason: 'internal error',
        error: this._formatError(e),
      });
      try { ws.close(1011, 'internal error'); } catch (_) { }
    }
  }

  async webSocketClose(ws, code, reason, wasClean) {
    await this.ready;
    const now = Date.now();
    console.log({
      event: 'websocket_close',
      peerId: ws.peerId,
      serverSessionId: ws.serverSessionId,
      networkName: ws.domainName,
      code,
      reason: reason || '',
      wasClean: !!wasClean,
      connectedAt: ws.connectedAt,
      lastSeen: ws.lastSeen,
      lifetimeMs: ws.connectedAt ? now - ws.connectedAt : null,
      idleMs: ws.lastSeen ? now - ws.lastSeen : null,
    });
    this._removeSocket(ws);
    await this._persistRoom();
  }

  async webSocketError(ws, error) {
    await this.ready;
    console.error({
      event: 'websocket_error',
      peerId: ws.peerId,
      serverSessionId: ws.serverSessionId,
      networkName: ws.domainName,
      connectedAt: ws.connectedAt,
      lastSeen: ws.lastSeen,
      error: this._formatError(error),
    });
    this._removeSocket(ws);
    await this._persistRoom();
  }

  async _persistRoom() {
    if (this.state.storage) {
      await this.state.storage.put('relay-state', this.peerManager.exportState());
    }
  }

  _initSocket(ws, meta = {}) {
    const now = Date.now();
    ws.peerId = meta.peerId || null;
    ws.groupKey = meta.groupKey || null;
    ws.domainName = meta.domainName || null;
    ws.connectedAt = meta.connectedAt || now;
    ws.lastSeen = meta.lastSeen || now;
    ws.lastPersistedAt = now;
    ws.serverSessionId = meta.serverSessionId || randomU64String();
    ws.weAreInitiator = meta.weAreInitiator || false;
    ws.crypto = { enabled: false };
    this._persistSocket(ws);
  }

  _persistSocket(ws) {
    ws.lastPersistedAt = Date.now();
    ws.serializeAttachment?.({
      peerId: ws.peerId,
      groupKey: ws.groupKey,
      domainName: ws.domainName,
      connectedAt: ws.connectedAt,
      lastSeen: ws.lastSeen,
      serverSessionId: ws.serverSessionId,
      weAreInitiator: ws.weAreInitiator,
      peerInfo: this.peerManager._getPeerInfosMap(ws.groupKey, false)?.get(ws.peerId) || null,
    });
  }

  _removeSocket(ws) {
    if (!ws.peerId) return;
    const groupKey = ws.groupKey;
    const removed = this.peerManager.removePeer(ws);
    if (!removed) return;
    try {
      this.peerManager.broadcastRouteUpdate(this.types, groupKey);
    } catch (e) {
      console.error({
        event: 'route_update_after_disconnect_failed',
        peerId: ws.peerId,
        serverSessionId: ws.serverSessionId,
        networkName: ws.domainName,
        error: this._formatError(e),
      });
    }
  }

  _formatError(error) {
    if (!error) return 'unknown error';
    if (error instanceof Error) return error.stack || error.message;
    return String(error);
  }

  _restoreSocket(ws) {
    const meta = ws.deserializeAttachment ? (ws.deserializeAttachment() || {}) : {};
    this._initSocket(ws, meta);
    
    if (ws.peerId && ws.groupKey) {
      this.peerManager.addPeer(ws.peerId, ws);
      const networkName = ws.domainName || '';
      const digestHex = ws.groupKey.slice(networkName.length + 1);
      this.peerManager.networkDigestRegistry.set(networkName, digestHex);
      if (meta.peerInfo) this.peerManager.updatePeerInfo(ws.groupKey, ws.peerId, meta.peerInfo);
      this._persistSocket(ws);
    }
  }
}
