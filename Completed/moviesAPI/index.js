//! incomplete
import axios from "axios";
import cryptoJs from "crypto-js";
var baseUrl = "https://moviesapi.club/";
var secretKey = "3%.tjS0K@K9{9rTc"; //!Key updated.
// https://w1.moviesapi.club/assets/js/library_v3.js --> key
// https://w1.moviesapi.club/assets/js/library_v4.0.js --> new key
// https://w1.moviesapi.club/assets/js/library_v2.5.js --> new new key? WTH
// https://w1.moviesapi.club/assets/js/library_v6.2.js --> new new new key

const proxy = "https://pots-red.vercel.app/proxy?url=";

const decrypt = (jsonStr, password) => {
  const decryptedData = cryptoJs.AES.decrypt(jsonStr, password, {
    format: {
      parse: (jsonStr) => {
        const j = JSON.parse(jsonStr);
        console.log(j.iv, j.salt, j.mac);

        // Prepare the cipherParams object
        const cipherParams = cryptoJs.lib.CipherParams.create({
          ciphertext: cryptoJs.enc.Base64.parse(j.data),
        });

        // Include iv, salt, and mac if they exist
        if (j.iv) cipherParams.iv = cryptoJs.enc.Hex.parse(j.iv);
        if (j.salt) cipherParams.salt = cryptoJs.enc.Hex.parse(j.salt);
        if (j.mac) cipherParams.mac = cryptoJs.enc.Hex.parse(j.mac);

        // Verify the MAC (Message Authentication Code)
        if (j.mac) {
          const computedMac = cryptoJs.HmacSHA256(
            cipherParams.ciphertext,
            password
          );
          if (!cryptoJs.enc.Hex.parse(j.mac).words === computedMac.words) {
            throw new Error("MAC validation failed.");
          }
        }

        return cipherParams;
      },
    },
  });

  // Return the decrypted JSON string
  return JSON.parse(decryptedData.toString(cryptoJs.enc.Utf8));
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

    var decryptedString = decrypt(atob(jsonStr), secretKey);

    var media = {
      sources: decryptedString.match(/sources\s*:\s*\[([^]+?)\]/)[1].trim(),
      tracks: decryptedString.match(/tracks\s*:\s*\[([^]+?)\]/)[1].trim(),
      thumbnails: decryptedString
        .match(/image\s*:\s*['"]([^'"]+)['"]/)[1]
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
