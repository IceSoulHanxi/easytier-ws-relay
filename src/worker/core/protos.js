// 必须放在最前面！
import Long from 'long';
import protobuf from 'protobufjs/minimal.js';

// 关键一步：告诉 protobufjs 使用 long.js
protobuf.util.Long = Long;
protobuf.configure();   // 这一行非常重要，会应用上面的 Long 配置

import root from './protos_generated.js';

let cachedTypes;

export function loadProtos() {
  if (cachedTypes) return cachedTypes;
  const peerRpc = root.peer_rpc;
  const common = root.common;
  return cachedTypes = {
    root,
    HandshakeRequest: peerRpc.HandshakeRequest,
    RpcPacket: common.RpcPacket,
    RpcRequest: common.RpcRequest,
    RpcResponse: common.RpcResponse,
    SyncRouteInfoRequest: peerRpc.SyncRouteInfoRequest,
    SyncRouteInfoResponse: peerRpc.SyncRouteInfoResponse,
    RouteConnBitmap: peerRpc.RouteConnBitmap,
    RoutePeerInfo: peerRpc.RoutePeerInfo,
    ReportPeersRequest: peerRpc.ReportPeersRequest,
    ReportPeersResponse: peerRpc.ReportPeersResponse,
    GetGlobalPeerMapRequest: peerRpc.GetGlobalPeerMapRequest,
    GetGlobalPeerMapResponse: peerRpc.GetGlobalPeerMapResponse,
    PeerInfoForGlobalMap: peerRpc.PeerInfoForGlobalMap,
    GlobalPeerMap: peerRpc.GlobalPeerMap,
  };
}
