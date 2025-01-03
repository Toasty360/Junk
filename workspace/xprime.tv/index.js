let wasm = {};
let Mr = 0;
const options = {
  headers: {
    Referer: "https://xprime.tv",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
  },
};

const qn = () => new Uint8Array(wasm.memory.buffer);
const zn = (s, e) => new TextDecoder().decode(qn().subarray(s >>> 0, s + e));

function getImports() {
  return {
    wbg: {
      __wbg_error_7534b8e9a36f1ab4: (e, t) => {
        const msg = zn(e, t);
        wasm.__wbindgen_free(e, t, 1);
      },
      __wbg_new_8a6f238a6ece86ea: () => new Error(),
      __wbg_stack_0ed75d68575b0f3c: (e, t) => {
        const n = ld(t.stack, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        Sl().setInt32(e, n, true);
        Sl().setInt32(e + 4, Mr, true);
      },
      __wbindgen_error_new: (e, t) => new Error(zn(e, t)),
      __wbindgen_init_externref_table: () => {
        const table = wasm.__wbindgen_export_3;
        const grow = table.grow(4);
        table.set(grow, undefined);
      },
      __wbindgen_throw: (e, t) => {
        throw new Error(zn(e, t));
      },
    },
  };
}

function initWasm(s, e) {
  wasm = s.exports;
  if (!Object.isExtensible(wasm)) wasm = { ...wasm, __wbindgen_wasm_module: e };
  wasm.__wbindgen_start();
  wasm.init_panic_hook();
}

function ld(s, malloc, realloc) {
  const encoded = new TextEncoder().encode(s);
  const ptr = malloc(encoded.length, 1) >>> 0;
  qn()
    .subarray(ptr, ptr + encoded.length)
    .set(encoded);
  Mr = encoded.length;
  return ptr;
}

function decode(s) {
  const ptr = ld(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len = Mr;
  const result = wasm.decrypt_data(ptr, len);
  if (result[3]) throw wasm.__wbindgen_export_3.get(result[2]);
  return zn(result[0], result[1]);
}

async function main() {
  const imports = getImports();
  const [wasmResp, encryptedData] = await Promise.all([
    fetch(
      "https://xprime.tv/_app/immutable/assets/streamhelper_bg.BU7wmNvw.wasm",
      options
    ),
    fetch(
      "https://xprime.tv/api/servers/fox?name=The Lord of the Rings: The War of the Rohirrim&year=2024",
      options
    ),
  ]);

  if (!wasmResp.ok) return console.error("Couldn't find wasm");

  let { instance, module } = await WebAssembly.instantiateStreaming(
    wasmResp,
    imports
  );

  initWasm(instance, module);
  console.log(decode(await encryptedData.text()));
}

main();
