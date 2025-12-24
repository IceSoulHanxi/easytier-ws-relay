import { HEADER_SIZE } from './constants.js';

export function parseHeader(buffer) {
  if (!buffer || buffer.length < HEADER_SIZE) return null;
  return {
    fromPeerId: buffer.readUInt32LE(0),
    toPeerId: buffer.readUInt32LE(4),
    packetType: buffer.readUInt8(8),
    flags: buffer.readUInt8(9),
    forwardCounter: buffer.readUInt8(10),
    reserved: buffer.readUInt8(11),
    len: buffer.readUInt32LE(12),
  };
}

export function createHeader(fromPeerId, toPeerId, packetType, payloadLen) {
  const buffer = Buffer.alloc(HEADER_SIZE);
  buffer.writeUInt32LE(fromPeerId, 0);
  buffer.writeUInt32LE(toPeerId, 4);
  buffer.writeUInt8(packetType, 8);
  buffer.writeUInt8(0, 9);
  buffer.writeUInt8(1, 10);
  buffer.writeUInt8(0, 11);
  buffer.writeUInt32LE(payloadLen, 12);
  return buffer;
}
