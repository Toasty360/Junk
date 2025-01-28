//! incomplete
import axios from "axios";
import cryptoJs from "crypto-js";
var baseUrl = "https://moviesapi.club/";
var secretKey = "lh+V!G9I=g^AwN!^["; //!Key updated.
// https://w1.moviesapi.club/assets/js/library_v3.js --> key
// https://w1.moviesapi.club/assets/js/library_v4.0.js --> new key
// https://w1.moviesapi.club/assets/js/library_v2.5.js --> new new key? WTH
// https://w1.moviesapi.club/assets/js/library_v6.2.js --> new new new key
// https://w1.moviesapi.club/assets/js/library_v4.4.js --> new
const decrypt = (encrypted) => {
  let wordArray = cryptoJs.enc.Base64.parse(encrypted);
  let iv = cryptoJs.lib.WordArray.create(wordArray.words.slice(0, 4));
  let ciphertext = cryptoJs.lib.WordArray.create(wordArray.words.slice(4));
  const crypto = cryptoJs.AES.decrypt(
    {
      ciphertext: ciphertext,
    },
    cryptoJs.enc.Hex.parse(cryptoJs.SHA256(secretKey).toString()),
    {
      iv: iv,
    }
  );

  return crypto.toString(cryptoJs.enc.Utf8);
};

const getSource = async (id, isMovie, s, e) => {
  try {
    const url = baseUrl + (isMovie ? `movie/${id}` : `tv/${id}-${s}-${e}`);

    const iframe = (
      await axios.get(url, {
        headers: { Referer: baseUrl },
      })
    ).data.match(/<iframe.* src="(.*?)"/)[1];

    const jsonStr = (
      await axios.get(iframe, { headers: { Referer: baseUrl } })
    ).data.match(/<script type="text\/javascript">.*'(.*?)'.*<\/script>/)[1];

    var decryptedString = decrypt(jsonStr);
    var media = {
      sources: decryptedString.match(/file\s*:\s+["'](.*?)["']/)[1].trim(),
      subtitle: decryptedString.match(/subtitle\s*:\s*["'](.*?)["']/)[1].trim(), //! parse it properly
      poster: decryptedString.match(/poster\s*:\s*['"]([^'"]+)['"]/)[1].trim(),
      thumbnails: decryptedString
        .match(/thumbnails\s*:\s*['"](.*?)['"]/)[1]
        .trim(),
      referer: baseUrl,
      provider: "Movieapi.club",
    };
    console.log(media);

    return media;
  } catch (error) {
    console.log(error);
  }
};
// https://moviesapi.club/tv/1399-1-2
// https://moviesapi.club/movie/385687
await getSource(912649, true);
// getSource(194764, false, 1, 1);
// getSource(124364, false, 1, 2);

// console.log(
//   proxy +
//     encodeURIComponent(media.sources) +
//     "&headers=" +
//     encodeURIComponent(JSON.stringify({ referer: baseUrl }))
// );
