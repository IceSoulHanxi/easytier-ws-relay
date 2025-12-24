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
