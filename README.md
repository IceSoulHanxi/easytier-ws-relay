# EasyTier WebSocket Relay（Cloudflare Workers / VPS）

## 项目简介

该项目是 EasyTier 的第三方服务端实现。EasyTier 是一个去中心化 P2P 组网程序，官方代码使用 Rust 实现。本项目使用 Cloudflare Worker + Durable Object 实现了 JavaScript 版本的 WebSocket 服务端，支持网络转发与 P2P 打洞信息交换。

项目使用 Claude 进行开发，目前处于早期阶段，还存在很多问题，欢迎提交代码或 issue。

> **注意：本项目仅供学习交流使用**

## 技术架构

- 基于 Cloudflare Workers 和 Durable Objects
- 使用 WebSocket 协议进行实时通信
- 采用 Protocol Buffers 进行高效序列化
- 支持消息加密与完整性保护
- 模块化设计，便于扩展和维护

## 开发环境搭建

### 前置要求

- Node.js 22 或更新版本（VPS Docker 部署无需在宿主机安装 Node.js）
- pnpm (推荐) 或 npm
- Wrangler CLI (Cloudflare Workers 工具链)

### 安装步骤

1. 克隆项目仓库：
```bash
git clone <your-repo-url>
cd easytier-ws-relay
```

2. 安装依赖：
```bash
pnpm install
# 或者使用 npm
npm install
```

3. 安装 Wrangler CLI：
```bash
npm install -g wrangler
```

4. 登录 Cloudflare：
```bash
wrangler login
```

## 本地开发

### 启动开发服务器

```bash
# 启动本地开发服务器
pnpm run dev
# 或者
wrangler dev --ip 0.0.0.0
```

### 直接启动（不监听文件变化）

```bash
pnpm run start
# 或者
wrangler dev
```

## 部署到 Cloudflare

### 部署命令

```bash
# 部署到 Cloudflare Workers
wrangler deploy
```

## 部署到 VPS 云主机

VPS 版本使用 Node.js 和 `ws`，复用现有 EasyTier 协议处理器，不需要 Cloudflare 账号。支持安装了 Docker Engine 和 Docker Compose v2 的 Linux VPS（例如 Ubuntu / Debian，amd64 或 arm64）。请先按 [Docker 官方安装说明](https://docs.docker.com/engine/install/)安装 Docker，并确保 `docker compose version` 可用。Compose 需要支持 `up --wait`，其行为见 [官方说明](https://docs.docker.com/reference/cli/docker/compose/up/)。

### 通过 IP 部署 WS

在 VPS 上执行（需要 Git；Docker 权限不足时给部署命令加 `sudo`）：

```bash
git clone https://github.com/yuliyang2023/easytier-ws-relay.git
cd easytier-ws-relay
bash scripts/deploy-vps.sh up
curl --fail http://127.0.0.1:8787/healthz
```

首次执行会从示例创建 `deploy/vps.env`。脚本构建镜像、启动服务，并等待中继健康检查通过；容器配置为自动重启，Docker 服务也应设置为开机启动。

在云主机安全组和系统防火墙中放行 **TCP 8787**，EasyTier 客户端填写：

```text
ws://你的VPS公网IP:8787/ws
```

通过修改 `deploy/vps.env` 中的 `RELAY_PORT` 可更换公网端口；`WS_PATH` 不带开头的 `/`。修改后再次运行 `up` 应用配置。`EASYTIER_DISABLE_RELAY=1` 可启用纯 P2P 模式。

### 通过域名部署 WSS

将域名的 A / AAAA 记录指向 VPS（仅配置实际可达的 IPv6），放行 **TCP 80、443**，并确保这两个端口没有被其他服务占用。先准备配置：

```bash
cp deploy/vps.env.example deploy/vps.env  # 仅首次创建；已有配置时直接编辑
chmod 600 deploy/vps.env
nano deploy/vps.env
```

设置 `RELAY_DOMAIN=relay.example.com` 和 `BIND_ADDRESS=127.0.0.1`，然后执行：

```bash
bash scripts/deploy-vps.sh up --tls
curl --fail https://relay.example.com/healthz
```

Caddy 会根据域名自动申请、续期证书并代理 WebSocket，要求 DNS 和 80/443 端口可达，详见 [Caddy 官方说明](https://caddyserver.com/docs/quick-starts/reverse-proxy)。部署脚本等待中继服务健康；证书是否成功签发以 HTTPS 检查和 Caddy 日志为准。客户端显式填写端口：

```text
wss://relay.example.com:443/ws
```

### 更新与运维

```bash
git pull --ff-only
bash scripts/deploy-vps.sh up       # 重新构建并部署更新
bash scripts/deploy-vps.sh status   # 查看容器状态
bash scripts/deploy-vps.sh logs     # 查看实时日志，Ctrl+C 退出
bash scripts/deploy-vps.sh restart  # 重启
bash scripts/deploy-vps.sh down     # 停止，不删除证书卷
```

**WSS 部署的每条运维命令都需要追加 `--tls`**，例如 `bash scripts/deploy-vps.sh logs --tls`。切回 WS 时运行不带 `--tls` 的 `up`，会移除 Caddy 容器，保留证书卷；同时按需修改绑定地址和放行 WS 端口。

VPS 服务在单个进程中维护房间和路由状态；重启后由客户端重新连接并重建路由，不保留 Durable Object 的休眠状态。不要对同一入口运行多个独立副本，否则各副本之间无法互相转发。可使用 `/ws?room=房间名` 隔离连接，默认房间为 `default`。健康检查路径为 `/healthz`。

本地直接验证 VPS 服务：

```bash
npm ci
npm run start:vps
npm test
```

`npm test` 覆盖路由回归和 VPS WebSocket 集成测试；已安装 Wrangler 时，可额外运行 `npm run check:worker` 验证 Cloudflare 构建。

### 配置说明

项目使用 [wrangler.toml](file:///Users/runner/work/easytier/easytier/easytier-v3/easytier-ws-relay/wrangler.toml#L0-L0) 文件进行配置，主要配置项包括：

- [name](file:///Users/runner/work/easytier/easytier/easytier-v3/easytier/src/cli/main.rs#L0-L0): Worker 名称
- [main](file:///Users/runner/work/easytier/easytier/easytier-v3/easytier/src/cli/main.rs#L0-L0): 入口文件路径
- [compatibility_date](file:///Users/runner/work/easytier/easytier/easytier-v3/easytier/src/cli/main.rs#L0-L0): 兼容性日期
- Durable Objects 配置
- 环境变量配置

## 项目结构

```
easytier-ws-relay/
├── protos/                 # Protocol Buffers 定义
│   ├── google
│   │   └── protobuf
│   │       └── timestamp.proto
│   ├── common.proto        # 通用协议定义
│   ├── error.proto         # 错误协议定义
│   └── peer_rpc.proto      # 对等节点 RPC 协议定义
├── src/
│   ├── worker/             # Worker 实现
│   │   ├── core/           # Worker 核心功能
│   │   │   ├── basic_handlers.js   # 基础处理器
│   │   │   ├── compress.js         # 压缩功能
│   │   │   ├── constants.js        # 常量定义
│   │   │   ├── crypto.js           # 加密功能
│   │   │   ├── packet.js           # 数据包处理
│   │   │   ├── peer_manager.js     # 对等节点管理
│   │   │   ├── protos.js           # Protobuf 相关功能
│   │   │   ├── protos_generated.js # Protobuf 生成的代码
│   │   │   └── rpc_handler.js      # RPC 处理器
│   │   └── relay_room.js           # 中继房间实现
│   └── worker.js                   # Worker 入口文件
├── package.json            # 项目配置
├── wrangler.toml           # Cloudflare Workers 配置
└── README.md               # 项目说明
```

## 功能特性

- WebSocket 双向通信中继
- 基于 Room 的连接管理
- 使用 Protobuf 进行高效序列化
- 消息加密与完整性保护
- 客户端状态管理与心跳维持
- RPC 请求/响应处理机制

## 纯 P2P 模式

在 `wrangler.toml` 的 `[vars]` 中配置：
- `EASYTIER_DISABLE_RELAY`: `"1"` 开启纯 P2P，默认 `"0"`
- RPC 当前使用未压缩格式，并向客户端通告仅支持该格式。EasyTier 的压缩算法 2 是 Zstandard；本实现尚未支持，因此 `EASYTIER_COMPRESS_RPC` 暂不启用压缩。

修改完配置后按正常方式运行 `wrangler dev` 或部署即可生效。

## Durable Object 地区配置

Durable Object 默认会根据请求来源自动选择最近的地区部署。如需指定地区，可在 `wrangler.toml` 的 `[vars]` 中配置：

- `LOCATION_HINT`: Durable Object 的位置提示，可选值如下：

| 参数 | 地区 |
|------|------|
| `wnam` | 西部地区（北美） |
| `enam` | 东部地区（北美） |
| `sam` | 南美洲 |
| `weur` | 西欧 |
| `eeur` | 东欧 |
| `apac` | 亚太地区（默认） |
| `oc` | 大洋洲 |
| `afr` | 非洲 |
| `me` | 中东 |

> 详细说明请参考 [Cloudflare 官方文档](https://developers.cloudflare.com/durable-objects/reference/data-location/#supported-locations-1)

修改完配置后按正常方式运行 `wrangler dev` 或部署即可生效。

## 客户端连接说明

部署后，EasyTier 客户端连接地址需要添加路径 `/ws`。

默认情况下，WebSocket路径为`/ws`，该路径可以在`wrangler.toml`中通过`WS_PATH`变量进行自定义。

Cloudflare Workers 部署地址建议显式使用 `8443`。EasyTier 的部分版本会把
`wss://...:0` 原样放入 HTTP `Host` 请求头而被 Cloudflare 拒绝；省略端口时又可能
回退到 EasyTier 自身的 WSS 默认端口 `11012`。

开发模式:
```
ws://your-network-ip:8787/ws
```
部署后:
```
wss://your-deployment.workers.dev:8443/ws
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进本项目。

## 许可证

[MIT License](./LICENSE)

## 免责声明

本项目仅供学习交流使用，请勿用于任何商业用途或非法用途。使用本项目代码造成的任何后果，原作者概不负责。
