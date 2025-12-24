// Cloudflare Worker entry for EasyTier WebSocket relay backed by Durable Object
// Module syntax is required for Durable Objects.
import { RelayRoom } from './worker/relay_room';

export { RelayRoom };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;

    if (pathname === '/healthz') {
      return new Response('ok', { status: 200 });
    }

    // WebSocket path can be configured via WS_PATH environment variable, defaults to '/ws'
    const wsPath = env.WS_PATH || '/ws';
    if (pathname === wsPath || pathname === wsPath + '/') {
      if (request.headers.get('Upgrade') !== 'websocket') {
        return new Response('Expected WebSocket upgrade', { status: 400 });
      }

      const roomId = searchParams.get('room') || 'default';
      const roomStub = env.RELAY_ROOM.get(env.RELAY_ROOM.idFromName(roomId));
      return roomStub.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  },
};
