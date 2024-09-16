var e = {
  fl: "559f88",
  h: "c8365730d4.nlos.net",
  ip: "74.197.123.8",
};

function A(e, t) {
  var r;
  var c;
  t = t || crypto.getRandomValues(new Uint8Array(8));
  r = {};
  r.name = "PBKDF2";
  r.salt = t;
  r.iterations = 1000;
  r.hash = "SHA-256";
  c = {};
  c.name = "AES-GCM";
  c.length = 256;
  return crypto.subtle
    .importKey("raw", new TextEncoder().encode(e), "PBKDF2", false, [
      "deriveKey",
    ])
    .then((e) =>
      crypto.subtle.deriveKey(r, e, c, false, ["encrypt", "decrypt"])
    )
    .then((e) => [e, t]);
}
function v(e) {
  return Array.prototype.slice
    .call(new Uint8Array(e))
    .map((e) => [e >> 4, e & 15])
    .map((e) => e.map((e) => e.toString(16)).join(""))
    .join("");
}
function se(e, t) {
  const r = crypto.getRandomValues(new Uint8Array(12));
  const c = new TextEncoder().encode(t);
  var i = {
    name: "AES-GCM",
    iv: r,
  };
  return A(e).then(([e, t]) =>
    crypto.subtle.encrypt(i, e, c).then((e) => v(t) + "-" + v(r) + "-" + v(e))
  );
}

// (async () => {
//   await se(
//     "player",
//     e[0] +
//       "+" +
//       e[1] +
//       "+" +
//       e[2] +
//       "+" +
//       Math.floor(new Date().getTime() / 1000)
//   ).then((v) => {
//     console.log(v);
//     fetch("https://vidon.site/get/" + v, {
//       headers: {
//         "Content-Type": "application/json",
//         Referer: "https://vidon.site",
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
//       },
//     }).then(async (res) => console.log(await res.text()));
//   });
// })();

// (async () => {
//   await fetch(
//     "https://vidon.site/get/68ac357d853f0754-15e220ebefe66576bd7c9a88-3b7c6745120c05753cabcea1c2de94e29ba506b7c2907a9251637561b8a261065ffc0c253f0f7ab08b"
//   ).then(async (v) => console.log(await v.text()));
// })();

(async () => {
  var e = await (await fetch("https://c8365730d4.nlos.net/cdn-cgi/trace"))
    .text()
    .then(async (t) => {
      const e = Object.fromEntries(
        t
          .trim()
          .split(
            `
`
          )
          .map((e) => e.split("="))
      );
      try {
        const s = await Q(
          u(
            "ZjdzUDRPRFc2QjQwaFZpR0hGelo2SmNWTzY3cmZvRHZ3NTUxaTN0NHFHcHlrVjJZa2lFR09HSm5HK0FDVEdZNzNxa01QWENJaWJNPQ"
              .replace(/[-_]/g, (e) => (e == "-" ? "+" : "/"))
              .replace(/[^A-Za-z0-9+/]/g, "")
          ),
          e.loc
        );
        return s.trim().split("+");
      } catch (e) {}
    });
  console.log(e);
})();
async function X(e, t) {
  var a;
  var c;
  var r = {
    aWExt: function (e, t) {
      return e + t;
    },
  };
  c = r;
  const _c = new TextEncoder().encode(t);
  const l = await crypto.subtle.digest("SHA-256", _c);
  const o = crypto.getRandomValues(new Uint8Array(12));
  const d = Array.from(o)
    .map((e) => String.fromCharCode(e))
    .join("");
  a = {};
  a.name = "AES-GCM";
  a.iv = o;
  const _r = a;
  const u = await crypto.subtle.importKey("raw", l, _r, false, ["encrypt"]);
  const h = new TextEncoder().encode(e);
  const m = await crypto.subtle.encrypt(_r, u, h);
  const f = Array.from(new Uint8Array(m));
  const p = f.map((e) => String.fromCharCode(e)).join("");
  return btoa(d + p);
}

var le = (e) => {
  var i;
  if (e.length < 2) {
    i = e.charCodeAt(0);
    if (i < 128) {
      return e;
    } else if (i < 2048) {
      return a((i >>> 6) | 192) + a((i & 63) | 128);
    } else {
      return (
        a(((i >>> 12) & 15) | 224) +
        a(((i >>> 6) & 63) | 128) +
        a((i & 63) | 128)
      );
    }
  } else {
    i = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return (
      a(((i >>> 18) & 7) | 240) +
      a(((i >>> 12) & 63) | 128) +
      a(((i >>> 6) & 63) | 128) +
      a((i & 63) | 128)
    );
  }
};

var w = (e) => e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, le);
var O = l
  ? (e) => Buffer.from(e, "utf8").toString("base64")
  : _
  ? (e) => j(_.encode(e))
  : (e) => b(w(e));
