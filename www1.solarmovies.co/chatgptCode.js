async function video() {
  var h = document.getElementById("player");
  // Get the element with id 'player'

  var B = h.getAttribute("id");
  // Get the id attribute of the 'player' element

  var j = window.location.hostname;
  // Get the hostname of the current window location

  var Y = "aHR0cHM6Ly9saXN0ZWFtZWQubmV0L2Uv";
  // Base64 encoded string, decode it to get the URL
  var decodedURL = atob(Y);
  console.log(decodedURL); // "https://listeamed.net/e/"

  var L = window.location.pathname;
  // Get the pathname of the current window location

  var C = L.split("/");
  var M = C[3];
  var k = C[2];
  // Split the pathname and extract parts

  var Z = B + "-" + k;
  // Combine id and part of pathname

  var R = decodedURL + k;
  // Construct URL with decoded base64 string and part of pathname

  var P = R + "/s/" + M;
  // Construct the final part of the URL

  var e = window.location.host;
  var t = e.split(".");
  var U = t[0];
  var G = (e, t) => {
    const i = (e) => e.split("").map((e) => e.charCodeAt(0));
    const a = (e) => ("0" + Number(e).toString(16)).slice(-2);
    const r = (t) => i(e).reduce((e, t) => e ^ t, t);
    return t.split("").map(i).map(r).map(a).join("");
  };
  // Function to manipulate strings into a hexadecimal format

  var N = G(k, M);
  var S = U + "-" + N;
  // Generate some hash or encoded string

  var o = window.location.search;
  var q = o.split("v=");
  var V = q[1];
  var W = V.split("&");
  var n = W[0];
  var m = P + "?v=" + n + "&e=" + B + "&p=" + Z + "&h=" + S;
  // Construct the final video URL

  var X = async (e, t) => {
    const u = new TextEncoder().encode(t);
    const g = await crypto.subtle.importKey(
      "raw",
      u,
      {
        name: "PBKDF2",
      },
      !1,
      ["deriveBits", "deriveKey"]
    );
    const c = new TextEncoder().encode("salt");
    const l = {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: c,
      iterations: 1e5,
    };
    const d = await crypto.subtle.deriveBits(l, g, 256),
      f = Array.from(new Uint8Array(d))
        .map((e) => ("00" + e.toString(16)).slice(-2))
        .join("");
    return f;
  };
  // Function to perform cryptographic operations

  var b = await X(k, M);
  h.setAttribute("src", m + "&a=" + b);
  // Set the src attribute of the 'player' element to the constructed URL with cryptographic hash
}
video();
