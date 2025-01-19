import CryptoJS from "crypto-js";
import Hashids from "hashids";

const options = {
  credentials: "omit",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Sec-GPC": "1",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    Priority: "u=4",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
  },
  referrer: "https://www.cineby.app/",
  method: "GET",
  mode: "cors",
};

const getKey = async (x) => {
  let e = x + "7a3d4f1ab3199649";
  let t = (e) => e.split("").map((e) => e.charCodeAt(0));
  let key = e
    .split("")
    .map(t)
    .map((e) =>
      t("5817deea68d131de99b8841851dea89b3462b1dfa5a4f98ee4f8").reduce(
        (e, t) => e ^ t,
        e
      )
    )
    .map((e) => ("0" + Number(e).toString(16)).substr(-2))
    .join("");
  key = new Hashids().encode(key);
  return key;
};
const initWasm = async (e, t = {}) => {
  let r = {
    env: Object.assign(Object.create(globalThis), t.env || {}, {
      abort(e, t, r, a) {
        e = i(e >>> 0);
        t = i(t >>> 0);
        r >>>= 0;
        a >>>= 0;
        (() => {
          throw Error(`${e} in ${t}:${r}:${a}`);
        })();
      },
    }),
  };
  let { exports: a } = await WebAssembly.instantiate(e, r);
  let n = a.memory || t.env.memory;
  function i(e) {
    if (!e) {
      return null;
    }
    let t = (e + new Uint32Array(n.buffer)[(e - 4) >>> 2]) >>> 1;
    let r = new Uint16Array(n.buffer);
    let a = e >>> 1;
    let i = "";
    while (t - a > 1024) {
      i += String.fromCharCode(...r.subarray(a, (a += 1024)));
    }
    return i + String.fromCharCode(...r.subarray(a, t));
  }
  return Object.setPrototypeOf(
    {
      decrypt: (e, t) => {
        e =
          (function (e) {
            if (e == null) {
              return 0;
            }
            let t = e.length;
            let r = a.__new(t << 1, 2) >>> 0;
            let i = new Uint16Array(n.buffer);
            for (let a = 0; a < t; ++a) {
              i[(r >>> 1) + a] = e.charCodeAt(a);
            }
            return r;
          })(e) ||
          (function () {
            throw TypeError("value must not be null");
          })();
        return i(a.decrypt(e, t) >>> 0);
      },
    },
    a
  );
};
/*
 * @param {string} encoded
 * @param {string} id - tmdbId
 */
const main = async (encoded, id) => {
  let module = await WebAssembly.compileStreaming(
    fetch("https://www.cineby.app/release.wasm", options)
  );
  const wasm = await initWasm(module, {
    env: {},
  });
  const data = JSON.parse(
    CryptoJS.AES.decrypt(wasm.decrypt(encoded, id), await getKey(id)).toString(
      CryptoJS.enc.Utf8
    )
  );
  return data;
};
export default main;
const getData = async () => {
  const resp = await fetch(
    "https://api.cineby.app/primewire/sources-with-title?title=Back%2520in%2520Action&mediaType=movie&year=2025&episodeId=1&seasonId=1&tmdbId=993710&imdbId=tt21191806",
    options
  );
  const encodedData = await resp.text();
  return main(encodedData, "993710");
};
console.log(await getData());
