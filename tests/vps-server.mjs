import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import WebSocket from 'ws';
import { createRelayServer } from '../src/server.js';
import { loadProtos } from '../src/worker/core/protos.js';
import { createHeader } from '../src/worker/core/packet.js';
import { MAGIC, PacketType } from '../src/worker/core/constants.js';

test('VPS HTTP, handshake, ping, forwarding, room isolation and shutdown', { timeout: 10_000 }, async t => {
  const app = createRelayServer({ WS_PATH: 'relay' });
  app.server.listen(0, '127.0.0.1');
  await once(app.server, 'listening');
  t.after(() => app.close());
  const base = `http://127.0.0.1:${app.server.address().port}`;
  assert.equal(await (await fetch(base + '/healthz')).text(), 'ok');
  assert.equal((await fetch(base + '/relay')).status, 400);
  assert.equal((await fetch(base + '/missing')).status, 404);
  await assert.rejects(async () => {
    const bad = new WebSocket(base.replace('http:', 'ws:') + '/missing');
    await once(bad, 'open');
  }, /404/);

  const types = loadProtos();
  const sockets = [];
  async function connect(id, room, slash = '') {
    const ws = new WebSocket(base.replace('http:', 'ws:') + `/relay${slash}?room=${room}`);
    sockets.push(ws);
    await once(ws, 'open');
    const payload = types.HandshakeRequest.encode({
      magic: MAGIC, myPeerId: id, networkName: 'vps-test', networkSecretDigrest: Buffer.alloc(32, 7),
    }).finish();
    const reply = once(ws, 'message');
    ws.send(Buffer.concat([createHeader(id, 10000001, PacketType.HandShake, payload.length), payload]));
    const [bytes] = await reply;
    assert.equal(bytes[8], PacketType.HandShake);
    assert.equal(types.HandshakeRequest.decode(bytes.subarray(16)).myPeerId, 10000001);
    return ws;
  }
  const a = await connect(400000001, 'one');
  const b = await connect(400000002, 'one', '/');
  const other = await connect(400000002, 'two');
  const body = Buffer.from('relay-payload');
  const packet = (from, to, type) => Buffer.concat([createHeader(from, to, type, body.length), body]);
  function nextType(ws, type) {
    return new Promise(resolve => {
      const listener = bytes => {
        if (bytes[8] === type) { ws.off('message', listener); resolve(bytes); }
      };
      ws.on('message', listener);
    });
  }
  const pong = nextType(a, PacketType.Pong);
  a.send(packet(400000001, 10000001, PacketType.Ping));
  assert.deepEqual((await pong).subarray(16), body);
  let leaked = false;
  other.on('message', bytes => { if (bytes[8] === PacketType.Data) leaked = true; });
  const forwarded = nextType(b, PacketType.Data);
  const data = packet(400000001, 400000002, PacketType.Data);
  a.send(data);
  assert.deepEqual(await forwarded, data);
  // The isolated room processes a later ping after the forwarding operation.
  const otherPong = nextType(other, PacketType.Pong);
  other.send(packet(400000002, 10000001, PacketType.Ping));
  await otherPong;
  assert.equal(leaked, false);
  const closed = once(other, 'close');
  other.send('text is not an EasyTier packet');
  assert.equal((await closed)[0], 1003);
  for (const ws of sockets) ws.terminate();
});
