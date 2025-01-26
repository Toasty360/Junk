let wasm;

let cachedTextDecoder = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true,
});

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
  if (
    cachedUint8ArrayMemory0 === null ||
    cachedUint8ArrayMemory0.byteLength === 0
  ) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(
    getUint8ArrayMemory0().subarray(ptr, ptr + len)
  );
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder("utf-8");

const encodeString =
  typeof cachedTextEncoder.encodeInto === "function"
    ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
      }
    : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
          read: arg.length,
          written: buf.length,
        };
      };

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0()
      .subarray(ptr, ptr + buf.length)
      .set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;

  const mem = getUint8ArrayMemory0();

  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7f) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, (len = offset + arg.length * 3), 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);

    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

const AnimekaiDecoderFinalization =
  typeof FinalizationRegistry === "undefined"
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((ptr) =>
        wasm.__wbg_animekaidecoder_free(ptr >>> 0, 1)
      );

class AnimekaiDecoder {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AnimekaiDecoderFinalization.unregister(this);
    return ptr;
  }

  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_animekaidecoder_free(ptr, 0);
  }
  /**
   * @param {string} n
   * @returns {string}
   */
  static generate_token(n) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(
        n,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.animekaidecoder_generate_token(ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @param {string} n
   * @returns {string}
   */
  static decode_iframe_data(n) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(
        n,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.animekaidecoder_decode_iframe_data(ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @param {string} n
   * @returns {string}
   */
  static decode(n) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(
        n,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.animekaidecoder_decode(ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
}

function getImports() {
  return {
    __wbindgen_placeholder__: {
      __wbindgen_init_externref_table: function () {
        const table = wasm.__wbindgen_export_0;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
      },
      __wbindgen_throw: function (arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
      },
    },
  };
}

async function initWasm(wasmModule) {
  const imports = getImports();

  if (!(wasmModule instanceof WebAssembly.Module)) {
    wasmModule = new WebAssembly.Module(wasmModule);
  }

  const instance = new WebAssembly.Instance(wasmModule, imports);
  wasm = instance.exports;

  if (typeof wasm.__wbindgen_start === "function") {
    wasm.__wbindgen_start();
  }

  return wasm;
}

const wasmResponse = await fetch(
  "https://github.com/Toasty360/wasm/raw/refs/heads/main/animekai.to/animekai_bg.wasm"
);
const arrayBuffer = await wasmResponse.arrayBuffer();
initWasm(arrayBuffer);

export default AnimekaiDecoder;
