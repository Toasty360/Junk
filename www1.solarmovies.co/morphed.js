// var U = new URLSearchParams(window.location.hash.slice(1));

var combinedFunction = (e) => {
  var F = (e) => e.replace(/[^A-Za-z0-9+/]/g, "");
  var y = (e) => F(e.replace(/[-_]/g, (e) => (e == "-" ? "+" : "/")));

  var l = typeof Buffer === "function";
  var D = typeof TextDecoder === "function" ? new TextDecoder() : undefined;

  var T = (e) => Uint8Array.from(atob(e), (c) => c.charCodeAt(0));
  var g = (e) => atob(e);

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
        return (
          String.fromCharCode((r >>> 10) + 55296) +
          String.fromCharCode((r & 1023) + 56320)
        );
      case 3:
        return String.fromCharCode(
          ((e.charCodeAt(0) & 15) << 12) |
            ((e.charCodeAt(1) & 63) << 6) |
            (e.charCodeAt(2) & 63)
        );
      default:
        return String.fromCharCode(
          ((e.charCodeAt(0) & 31) << 6) | (e.charCodeAt(1) & 63)
        );
    }
  };

  var te = l
    ? (e) => Buffer.from(e, "base64").toString("utf8")
    : D
    ? (e) => D.decode(T(e))
    : (e) => S(g(e));

  return te(y(e));
};

// Placeholder for the async function Q
async function Q(param1, param2) {
  // Define the behavior of this function based on your requirements
  const result = await someAsyncOperation(param1, param2);
  return result;
}

// Placeholder for the error handling function r
function r() {
  // Define the behavior of this function based on your requirements
  console.error("An error occurred");
}

// Placeholder for the function ue
async function ue(array) {
  // Define the behavior of this function based on your requirements
  await someConditionHandler(array);
}

// The main function to initiate the process
const initator = async () => {
  try {
    const t = await (await fetch("https://vvid30c.site/cdn-cgi/trace")).text();
    const s = Object.fromEntries(
      t
        .trim()
        .split("\n")
        .map((e) => e.split("="))
    );
    const e = s.loc;
    try {
      const res = await Q(combinedFunction(U.toString()), e);
      const [titlePart1, titlePart2, , locCheck] = res.trim().split("+");
      document.title = `${titlePart1}-${titlePart2}`;
      if (e === locCheck) {
        await ue([titlePart1, titlePart2, , locCheck]);
      } else {
        r();
      }
    } catch {
      r();
    }
  } catch {
    r();
  }
};

// Call the initator function to start the process
initator();

/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/

const imgURL = "aHR0cHM6Ly9pbWcuaWNkbi5teS5pZA==";
const plyURL = "aHR0cHM6Ly9jODM2NTczMGQ0Lm5sb3MubmV0";
const items = 33991;
let srv = 2,
  mid,
  eps;

(() => {
  function e(e) {
    for (var t, n, s = 1; s < arguments.length; s++) {
      t = arguments[s];
      for (n in t) e[n] = t[n];
    }
    return e;
  }

  var t,
    s = {
      read: function (e) {
        return (
          e[0] === '"' && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    };

  function n(t, s) {
    function o(n, o, i) {
      if (typeof document == "undefined") return;
      (i = e({}, s, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (n = encodeURIComponent(n)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a,
        r = "";
      for (a in i) {
        if (!i[a]) continue;
        if (((r += "; " + a), i[a] === !0)) continue;
        r += "=" + i[a].split(";")[0];
      }
      return (document.cookie = n + "=" + t.write(o, n) + r);
    }

    function i(e) {
      if (typeof document == "undefined" || (arguments.length && !e)) return;
      for (
        var n,
          s,
          a,
          r = document.cookie ? document.cookie.split("; ") : [],
          o = {},
          i = 0;
        i < r.length;
        i++
      ) {
        (s = r[i].split("=")), (a = s.slice(1).join("="));
        try {
          if (((n = decodeURIComponent(s[0])), (o[n] = t.read(a, n)), e === n))
            break;
        } catch {}
      }
      return e ? o[e] : o;
    }

    return Object.create(
      {
        set: o,
        get: i,
        remove: function (t, n) {
          o(t, "", e({}, n, { expires: -1 }));
        },
        withAttributes: function (t) {
          return n(this.converter, e({}, this.attributes, t));
        },
        withConverter: function (t) {
          return n(e({}, this.converter, t), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(s) },
        converter: { value: Object.freeze(t) },
      }
    );
  }
  t = n(s, { path: "/" });

  function o() {
    const n = t.get("srv"),
      e = document.getElementById("mid");
    n
      ? typeof e != "undefined" &&
        e !== null &&
        e.getAttribute("data-mode") === "movie"
        ? (srv = 2)
        : (srv = n)
      : t.set("srv", 2, { sameSite: "lax" });
  }

  o();
})();

async function fetchMoviesJSON(e, t, n) {
  const s = {
    method: t,
    body: JSON.stringify(n),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };
  try {
    const t = await fetch(atob(e), s);
    return await t.json();
  } catch (e) {
    return e;
  }
}

function addListenerMulti(e, t, n) {
  t.split(" ").forEach((t) => {
    e.addEventListener(t, function s() {
      e.removeEventListener(t, s), n.apply(this, arguments);
    });
  });
}

function script(e) {
  const t = document.createElement("script");
  (t.type = "text/javascript"), (t.defer = !0), (t.src = atob(e));
  const n = document.getElementsByTagName("head")[0];
  n.appendChild(t);
}

function removeElem(e) {
  const t = document.getElementById(e);
  typeof t != "undefined" && t !== null && t.remove();
}
