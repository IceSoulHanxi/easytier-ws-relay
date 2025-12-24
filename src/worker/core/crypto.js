import crypto from 'crypto';

const U64_MASK = (1n << 64n) - 1n;

function getRandomBytes(len) {
  return crypto.randomBytes(len);
}

function rotl64(x, b) {
  return ((x << BigInt(b)) | (x >> (64n - BigInt(b)))) & U64_MASK;
}

function readUInt64LE(buf, offset) {
  let r = 0n;
  for (let i = 0; i < 8; i++) {
    r |= BigInt(buf[offset + i]) << (8n * BigInt(i));
  }
  return r;
}

function sipRound(v) {
  v.v0 = (v.v0 + v.v1) & U64_MASK;
  v.v1 = rotl64(v.v1, 13);
  v.v1 ^= v.v0;
  v.v0 = rotl64(v.v0, 32);

  v.v2 = (v.v2 + v.v3) & U64_MASK;
  v.v3 = rotl64(v.v3, 16);
  v.v3 ^= v.v2;

  v.v0 = (v.v0 + v.v3) & U64_MASK;
  v.v3 = rotl64(v.v3, 21);
  v.v3 ^= v.v0;

  v.v2 = (v.v2 + v.v1) & U64_MASK;
  v.v1 = rotl64(v.v1, 17);
  v.v1 ^= v.v2;
  v.v2 = rotl64(v.v2, 32);
}

function sipHash13(msg, k0 = 0n, k1 = 0n) {
  const b = BigInt(msg.length) << 56n;

  const v = {
    v0: 0x736f6d6570736575n ^ k0,
    v1: 0x646f72616e646f6dn ^ k1,
    v2: 0x6c7967656e657261n ^ k0,
    v3: 0x7465646279746573n ^ k1,
  };

  const fullLen = msg.length - (msg.length % 8);
  for (let i = 0; i < fullLen; i += 8) {
    const m = readUInt64LE(msg, i);
    v.v3 ^= m;
    sipRound(v);
    v.v0 ^= m;
  }

  let m = b;
  const left = msg.length % 8;
  for (let i = 0; i < left; i++) {
    m |= BigInt(msg[fullLen + i]) << (8n * BigInt(i));
  }

  v.v3 ^= m;
  sipRound(v);
  v.v0 ^= m;

  v.v2 ^= 0xffn;
  sipRound(v);
  sipRound(v);
  sipRound(v);

  return (v.v0 ^ v.v1 ^ v.v2 ^ v.v3) & U64_MASK;
}

class DefaultHasher {
  constructor() {
    this.parts = [];
    this.total = 0;
  }

  write(buf) {
    if (!buf || buf.length === 0) return;
    const b = Buffer.isBuffer(buf) ? buf : Buffer.from(buf);
    this.parts.push(b);
    this.total += b.length;
  }

  finish() {
    const msg = this.parts.length === 1 ? this.parts[0] : Buffer.concat(this.parts, this.total);
    return sipHash13(msg);
  }
}

function u64ToBeBytes(u64) {
  const out = Buffer.alloc(8);
  let x = u64;
  for (let i = 7; i >= 0; i--) {
    out[i] = Number(x & 0xffn);
    x >>= 8n;
  }
  return out;
}

export function deriveKeys(networkSecret = '') {
  const secretBuf = Buffer.from(networkSecret, 'utf8');

  const hasher128 = new DefaultHasher();
  hasher128.write(secretBuf);
  const first = u64ToBeBytes(hasher128.finish());
  const key128 = Buffer.alloc(16);
  first.copy(key128, 0);
  hasher128.write(key128.subarray(0, 8));
  const second = u64ToBeBytes(hasher128.finish());
  second.copy(key128, 8);
  hasher128.write(key128);

  const hasher256 = new DefaultHasher();
  hasher256.write(secretBuf);
  hasher256.write(Buffer.from('easytier-256bit-key', 'utf8'));
  const key256 = Buffer.alloc(32);
  for (let i = 0; i < 4; i++) {
    const chunkStart = i * 8;
    if (chunkStart > 0) {
      hasher256.write(key256.subarray(0, chunkStart));
    }
    hasher256.write(Buffer.from([i]));
    const chunk = u64ToBeBytes(hasher256.finish());
    chunk.copy(key256, chunkStart, 0, 8);
  }

  return { key128, key256 };
}

export function generateDigestFromStr(str1, str2, digestLen = 32) {
  const len = Number(digestLen);
  if (!Number.isInteger(len) || len <= 0 || (len % 8) !== 0) {
    throw new Error('digest length must be multiple of 8');
  }

  const hasher = new DefaultHasher();
  hasher.write(Buffer.from(String(str1 || ''), 'utf8'));
  hasher.write(Buffer.from(String(str2 || ''), 'utf8'));

  const digest = Buffer.alloc(len);
  const shardCount = len / 8;
  for (let i = 0; i < shardCount; i++) {
    const h = u64ToBeBytes(hasher.finish());
    h.copy(digest, i * 8);
    hasher.write(digest.subarray(0, (i + 1) * 8));
  }
  return digest;
}

export function encryptAesGcm(payload, key) {
  const nonce = getRandomBytes(12);
  const algo = key.length === 32 ? 'aes-256-gcm' : 'aes-128-gcm';
  const cipher = crypto.createCipheriv(algo, key, nonce);
  const ciphertext = Buffer.concat([cipher.update(payload), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([ciphertext, tag, nonce]);
}

export function decryptAesGcm(payload, key) {
  if (payload.length < 28) {
    throw new Error(`Encrypted payload too short: ${payload.length}`);
  }
  const textLen = payload.length - 28;
  const ciphertext = payload.subarray(0, textLen);
  const tag = payload.subarray(textLen, textLen + 16);
  const nonce = payload.subarray(textLen + 16);
  const algo = key.length === 32 ? 'aes-256-gcm' : 'aes-128-gcm';
  const decipher = crypto.createDecipheriv(algo, key, nonce);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

export function randomU64String() {
  const b = getRandomBytes(8);
  let x = 0n;
  for (let i = 0; i < 8; i++) {
    x = (x << 8n) | BigInt(b[i]);
  }
  return x.toString();
}

export function sha256() {
  return crypto.createHash('sha256');
}

export function wrapPacket(createHeader, fromPeerId, toPeerId, packetType, payload, ws, opts = {}) {
  const encryptionEnabled = !!(ws && ws.crypto && ws.crypto.enabled);
  const disableEncrypt = !!opts.disableEncrypt;

  let body = Buffer.isBuffer(payload) ? payload : Buffer.from(payload);
  let flags = 0;

  if (encryptionEnabled && !disableEncrypt && packetType !== 2) {
    const algo = ws.crypto.algorithm || 'aes-gcm';
    if (algo === 'aes-gcm') {
      body = encryptAesGcm(body, ws.crypto.key128);
    } else if (algo === 'aes-256-gcm') {
      body = encryptAesGcm(body, ws.crypto.key256);
    } else {
      throw new Error(`Unsupported encryption algorithm: ${algo}`);
    }
    flags |= 1;
  }

  const headerBuf = createHeader(fromPeerId, toPeerId, packetType, body.length);
  headerBuf.writeUInt8(flags, 9);
  headerBuf.writeUInt32LE(body.length, 12);

  return Buffer.concat([headerBuf, body]);
}
