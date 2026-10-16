import assert from 'node:assert/strict';
import {writeSync} from 'node:fs';
import { RelayRoom } from '../src/worker/relay_room.js';
const log=console.log;console.log=()=>{};
const sockets=[];
function socket(id){const ws={peerId:id,readyState:1,groupKey:'diag:'+ 'ab'.repeat(32),domainName:'diag',serverSessionId:String(id),weAreInitiator:false,sent:[],send(b){this.sent.push(Buffer.from(b));},serializeAttachment(meta){this.meta=structuredClone(meta);},deserializeAttachment(){return this.meta;},close(){throw Error('Unexpected close');}};sockets.push(ws);return ws;}
const state={getWebSockets:()=>[],acceptWebSocket(){}};
const room=new RelayRoom(state,{});const t=room.types;const pm=room.peerManager;
const a=socket(390000001),b=socket(390000002);
for(const ws of sockets){pm.addPeer(ws.peerId,ws);pm.updatePeerInfo(ws.groupKey,ws.peerId,{peerId:ws.peerId,version:1});}
pm.networkDigestRegistry.set('diag','ab'.repeat(32));
function packet(from,to,type,body){const h=Buffer.alloc(16);h.writeUInt32LE(from);h.writeUInt32LE(to,4);h[8]=type;h[10]=1;h.writeUInt32LE(body.length,12);return Buffer.concat([h,body]);}
function routes(ws){return ws.sent.filter(x=>x[8]===8).map(x=>t.SyncRouteInfoRequest.decode(t.RpcRequest.decode(t.RpcPacket.decode(x.subarray(16)).body).request));}
const info={peerId:b.peerId,version:2,ipv4Addr:{addr:176062978},hostname:'diag-b',networkLength:24};
const s=t.SyncRouteInfoRequest.encode({myPeerId:b.peerId,mySessionId:1234,isInitiator:true,peerInfos:{items:[info]}}).finish();
const body=t.RpcRequest.encode({request:s,timeoutMs:5000}).finish();
const r=t.RpcPacket.encode({fromPeer:b.peerId,toPeer:10000001,transactionId:1234,descriptor:{domainName:'diag',protoName:'OspfRouteRpc',serviceName:'OspfRouteRpc',methodIndex:1},body,isRequest:true,totalPieces:1,compressionInfo:{algo:1,acceptedAlgo:1}}).finish();
await room.webSocketMessage(b,packet(b.peerId,10000001,8,Buffer.from(r)));
assert.equal(routes(a).length,1,'Updated peer must be broadcast to the other client');
assert.equal(routes(a)[0].peerInfos.items.find(x=>x.peerId===b.peerId).ipv4Addr.addr,info.ipv4Addr.addr);
const foreign=routes(a)[0].foreignNetworkInfos.infos[0];
assert.equal(foreign.key.networkName,'diag');assert.equal(Buffer.from(foreign.value.networkSecretDigest).toString('hex'),'ab'.repeat(32));
a.sent=[];await room.webSocketMessage(b,packet(b.peerId,10000001,8,Buffer.from(r)));
assert.equal(routes(a).length,0,'Unchanged update must not cause broadcast loop');
assert.equal(b.meta.peerInfo.ipv4Addr.addr,info.ipv4Addr.addr,'Route RPC must persist updated metadata');
room._persistSocket(a);
const restored=new RelayRoom({getWebSockets:()=>sockets},{});
assert.equal(restored.peerManager._getPeerInfosMap(b.groupKey,false).get(b.peerId).ipv4Addr.addr,info.ipv4Addr.addr);
assert.equal(restored.peerManager.networkDigestRegistry.get('diag'),'ab'.repeat(32));
console.log=log;writeSync(1,'PASS: changed route broadcast, duplicate suppression, network identity, hibernation restore\n');
