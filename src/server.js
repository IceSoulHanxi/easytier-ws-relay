import 'dotenv/config';
import http from 'node:http';
import { pathToFileURL } from 'node:url';
import { WebSocketServer } from 'ws';
import { RelayRoom } from './worker/relay_room.js';

// Adapt the socket lifecycle to RelayRoom without Cloudflare runtime globals.
// Rooms live in one process; clients reconnect and rebuild routes after restart.
export function createRelayServer(env = process.env) {
  const rooms = new Map();
  const wsPath = '/' + (env.WS_PATH || 'ws').replace(/^\/+|\/+$/g, '');
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const status = pathname === '/healthz' ? 200 : pathname === wsPath ? 400 : 404;
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(status === 200 ? 'ok' : status === 400 ? 'Expected WebSocket upgrade' : 'Not found');
  });
  const wss = new WebSocketServer({ noServer: true, maxPayload: 1024 * 1024, perMessageDeflate: false });
  server.on('upgrade', (req, socket, head) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname !== wsPath && url.pathname !== wsPath + '/') {
      socket.end('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');
      return;
    }
    const roomId = url.searchParams.get('room') || 'default';
    wss.handleUpgrade(req, socket, head, ws => {
      let entry = rooms.get(roomId);
      if (!entry) {
        const sockets = new Set();
        const room = new RelayRoom({
          getWebSockets: () => [],
          acceptWebSocket: connection => sockets.add(connection),
        }, env);
        entry = { room, sockets };
        rooms.set(roomId, entry);
      }
      const { room, sockets } = entry;
      // Serialize callbacks as Durable Objects do, including async cleanup.
      let pending = room.handleSession(ws);
      const enqueue = fn => {
        pending = pending.then(fn).catch(error => {
          console.error('[vps] socket callback failed', error);
          ws.terminate();
        });
      };
      ws.isAlive = true;
      ws.on('pong', () => { ws.isAlive = true; });
      ws.on('message', (data, isBinary) => {
        if (!isBinary) { ws.close(1003, 'Binary packets required'); return; }
        enqueue(() => room.webSocketMessage(ws, data));
      });
      ws.on('error', error => enqueue(() => room.webSocketError(ws, error)));
      ws.on('close', (code, reason) => enqueue(async () => {
        await room.webSocketClose(ws, code, reason.toString(), code === 1000);
        sockets.delete(ws);
        if (sockets.size === 0) rooms.delete(roomId);
      }));
    });
  });
  const heartbeat = setInterval(() => {
    for (const ws of wss.clients) {
      if (!ws.isAlive) { ws.terminate(); continue; }
      ws.isAlive = false;
      ws.ping();
    }
  }, 30_000);
  heartbeat.unref();

  async function close() {
    clearInterval(heartbeat);
    for (const ws of wss.clients) ws.terminate();
    await new Promise(resolve => wss.close(resolve));
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
  return { server, close };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 8787);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT');
  const app = createRelayServer();
  app.server.listen(port, process.env.HOST || '0.0.0.0', () => console.log(`[vps] listening on ${port}`));
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.once(signal, () => {
      const timeout = setTimeout(() => process.exit(1), 10_000);
      timeout.unref();
      app.close().then(() => process.exit(0), error => { console.error(error); process.exit(1); });
    });
  }
}
