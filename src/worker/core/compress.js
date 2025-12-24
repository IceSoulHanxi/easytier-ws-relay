import zlib from 'zlib';

const hasZlib = !!(zlib && typeof zlib.gzipSync === 'function' && typeof zlib.gunzipSync === 'function');

export function gzipMaybe(data) {
  if (hasZlib) {
    return zlib.gzipSync(data);
  }
  console.warn('zlib.gzipSync unavailable; returning original data');
  return data;
}

export function gunzipMaybe(data) {
  if (hasZlib) {
    return zlib.gunzipSync(data);
  }
  console.warn('zlib.gunzipSync unavailable; returning original data');
  return data;
}

export function isCompressionAvailable() {
  return hasZlib;
}
