# EasyTier WebSocket Relay for Cloudflare Workers

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

- Node.js (>= 16.0.0)
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

## 客户端连接说明

部署后，EasyTier 客户端连接地址需要添加路径 `/ws`，例如：
```
ws://your-deployment.workers.dev/ws
```
或
```
wss://your-deployment.workers.dev/ws
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进本项目。

## 许可证

[MIT License](./LICENSE)

## 免责声明

本项目仅供学习交流使用，请勿用于任何商业用途或非法用途。使用本项目代码造成的任何后果，原作者概不负责。