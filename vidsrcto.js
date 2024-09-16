import axios from "axios";
import CryptoJS from "crypto-js";

const vidsrc = async () => {
  const resp = (
    await axios.get("https://vidsrc.to/embed/movie/385687")
  ).data.match(/data-id="(.*?)"/)[1];
  const sources = (
    await axios.get(`https://vidsrc.to/ajax/embed/episode/${resp}/sources`)
  ).data.result[0].id;
  let v = await (
    await axios.get(`https://vidsrc.to/ajax/embed/source/${sources}`)
  ).data.result.url
    .replace("_", "/")
    .replace("-", "+");
  v = decryptme(v);
  let k = (
    await axios.get("https://vid30c.site/futoken", {
      headers: {
        Referer: "https://vid30c.site/",
      },
    })
  ).data.match(/k=["'](.*?)['"]/)[1];
  console.log(k);
  var a = [k];
  for (var i = 0; i < v.length; i++)
    a.push(k.charCodeAt(i % k.length) + v.charCodeAt(i));
  a = "https://vid30c.site/mediainfo/" + a.join(",");
  console.log(a);
};
vidsrc();

// var a = [k];
// for (var i = 0; i < v.length; i++)
//   a.push(k.charCodeAt(i % k.length) + v.charCodeAt(i));
// console.log(a.join(","));
//   const { data } = await axios.get(a, {
//     headers: {
//       Referer: "https://vid30c.site/",
//       Accept: "application/json, text/javascript, */*;",
//       "X-Requested-With": "XMLHttpRequest",
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//   });
//   console.log(data);

const decryptme = (v) => {
  const binary_data = CryptoJS.enc.Base64.parse(v);
  const key_bytes = CryptoJS.enc.Utf8.parse("WXrUARXb1aDLaZjI");

  let j = 0;
  const s = [...Array(256).keys()];

  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key_bytes[i % key_bytes.length]) & 0xff;
    [s[i], s[j]] = [s[j], s[i]];
  }

  const decoded = new Uint8Array(binary_data.sigBytes);
  let i = 0;
  let k = 0;
  for (let index = 0; index < binary_data.sigBytes; index++) {
    i = (i + 1) & 0xff;
    k = (k + s[i]) & 0xff;
    [s[i], s[k]] = [s[k], s[i]];
    decoded[index] = binary_data.words[index] ^ s[(s[i] + s[k]) & 0xff];
  }
  console.log(CryptoJS.enc.Utf8.stringify(decoded));
  return decoded;
};
