import assert from 'node:assert/strict';
import { writeSync } from 'node:fs';
import { RelayRoom } from '../src/worker/relay_room.js';

console.log = () => {};
const disk = new Map();
let sockets = [];
const state = {
  storage: {
    async get(key) { return structuredClone(disk.get(key)); },
    async put(key, value) { disk.set(key, structuredClone(value)); },
  },
  blockConcurrencyWhile(fn) { return fn(); },
  getWebSockets() { return sockets.filter(ws => ws.readyState === 1); },
};

function peer(id) {
  const ws = {
    peerId: id, groupKey: 'restart:abcd', domainName: 'restart',
    readyState: 1, serverSessionId: String(id), sent: [],
    send(bytes) { this.sent.push(Buffer.from(bytes)); },
    serializeAttachment(meta) { this.meta = structuredClone(meta); },
    deserializeAttachment() { return this.meta; },
  };
  sockets.push(ws);
  return ws;
}

let room = new RelayRoom(state, {});
await room.ready;
const types = room.types;
const a = peer(300000001);
let b = peer(300000002);
room.peerManager.networkDigestRegistry.set('restart', 'abcd');

function register(ws) {
  room.peerManager.addPeer(ws.peerId, ws);
  room.peerManager.updatePeerInfo(ws.groupKey, ws.peerId, {
    peerId: ws.peerId, version: 2, ipv4Addr: { addr: ws.peerId }, hostname: String(ws.peerId),
  });
  room._persistSocket(ws);
}

function route(ws) {
  room.peerManager.pushRouteUpdateTo(ws.peerId, ws, types, { forceFull: true });
  const packet = types.RpcPacket.decode(ws.sent.at(-1).subarray(16));
  return types.SyncRouteInfoRequest.decode(types.RpcRequest.decode(packet.body).request);
}

register(a);
register(b);
let before = route(a);
let foreignVersion = before.foreignNetworkInfos.infos[0].value.version;
let serverVersion = before.connBitmap.peerIds.find(info => info.peerId === 10000001).version;
const serverIdentity = structuredClone(room.peerManager.ensureMyInfo());
await room._persistRoom();

for (let attempt = 0; attempt < 3; attempt++) {
  b.readyState = 3;
  await room.webSocketClose(b, 1000, 'restart', true);
  room = new RelayRoom(state, {});
  await room.ready;
  b = peer(300000003 + attempt);
  register(b);
  const next = route(a);
  const nextForeign = next.foreignNetworkInfos.infos[0].value;
  const nextServer = next.connBitmap.peerIds.find(info => info.peerId === 10000001);
  assert.ok(nextForeign.version > foreignVersion, 'Foreign topology revision must survive restart');
  assert.ok(nextServer.version > serverVersion, 'Server adjacency revision must survive hibernation');
  assert.deepEqual(nextForeign.foreignPeerIds.slice().sort(), [a.peerId, b.peerId].sort());
  assert.equal(next.peerInfos.items.length, 3, 'Disconnected peers must not be advertised');
  assert.equal(next.peerInfos.items.find(info => info.peerId === a.peerId).ipv4Addr.addr, a.peerId,
    'Peer metadata must survive consecutive hibernations');
  assert.deepEqual(room.peerManager.ensureMyInfo(), serverIdentity, 'Relay identity must remain stable');
  foreignVersion = nextForeign.version;
  serverVersion = nextServer.version;
  await room._persistRoom();
}

// A late close callback from a replaced socket must not delete its replacement.
const replacement = peer(b.peerId);
room.peerManager.addPeer(replacement.peerId, replacement);
assert.equal(room.peerManager.removePeer(b), false);
assert.equal(room.peerManager.getPeerWs(b.peerId, b.groupKey), replacement);

// RPC algorithm 2 is Zstandard. Large responses must remain valid when the
// relay only advertises support for algorithm 1 (uncompressed).
for (let id = 300000020; id < 300000035; id++) register(peer(id));
const request = types.RpcPacket.encode({
  fromPeer: a.peerId, toPeer: 10000001, transactionId: 777,
  descriptor: { domainName: 'restart', protoName: 'peer_rpc', serviceName: 'PeerCenterRpc', methodIndex: 1 },
  body: types.RpcRequest.encode({ request: types.GetGlobalPeerMapRequest.encode({}).finish() }).finish(),
  isRequest: true, totalPieces: 1, compressionInfo: { algo: 1, acceptedAlgo: 2 },
}).finish();
const header = Buffer.alloc(16);
header.writeUInt32LE(a.peerId);
header.writeUInt32LE(10000001, 4);
header[8] = 8;
header.writeUInt32LE(request.length, 12);
await room.webSocketMessage(a, Buffer.concat([header, request]));
const response = types.RpcPacket.decode(a.sent.at(-1).subarray(16));
assert.ok(response.body.length > 256, 'Regression must exercise a large response');
assert.equal(response.compressionInfo.algo, 1);
const decoded = types.GetGlobalPeerMapResponse.decode(types.RpcResponse.decode(response.body).response);
assert.ok(Object.keys(decoded.globalPeerMap).length >= 15);
writeSync(1, 'PASS: repeated restart, persistent topology revisions, stale socket close, large RPC response\n');
