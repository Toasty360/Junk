import axios from "axios";
import CryptoJS from "crypto-js";

//todo: fix it when available!!

const idfile_enc =
  "53616c7465645f5fca0303ab33b095914443f15766b551117e9cd28683e8838e1160cf152243142043a4129c79c05398";
const idUser_enc =
  "53616c7465645f5f197c58a05568eab01efcc3053f73ef5f505ed527b8837708de530d42ef590bef064603e787ccfae6";
const DOMAIN_API_VIEW = "https://api-view.vnstream.net/api/view/";

const decrypt = (m, k) => {
  return CryptoJS.AES.decrypt(
    CryptoJS.enc.Hex.parse(m).toString(CryptoJS.enc.Base64),
    k
  ).toString(CryptoJS.enc.Utf8);
};
function encrypt(m, k) {
  return CryptoJS.enc.Base64.parse(
    CryptoJS.AES.encrypt(m, k).toString()
  ).toString(CryptoJS.enc.Hex);
}

const main = async () => {
  const f = decrypt(idfile_enc, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn");
  console.log((await axios.get(DOMAIN_API_VIEW + f)).data);
  var q = {
    idfile: f,
    iduser: decrypt(idUser_enc, "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O"),
    domain_play: "https://ww1.streamm4u.ws/",
    platform: "noplf",
    ip_clien: "172.67.207.78",
    time_request: Math.floor(Date.now() / 1000),
    hlsSupport: true,
  };
  console.log(q);
  let K = encrypt(JSON.stringify(q), "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ");
  var i = CryptoJS.MD5(K + "KRWN3AdgmxEMcd2vLN1ju9qKe8Feco5h").toString();
  await axios
    .post(
      "https://api-play-230324.playm4u.xyz/api/v1.0/playiframe-blob-v1",
      {
        data: K + "|" + i,
      },
      {
        headers: {
          Referer: "https://ww1.m4uhd.tv/",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/json; charset=utf-8",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        },
      }
    )
    .then((v) => {
      console.log(v.request);
    });
};
main();

const trash = async () => {
  // const DOMAIN_API_Info =
  //   "https://api-play-230324.playm4u.xyz/api/v1.0/infoRequest";
  //   const { data } = await axios.get(DOMAIN_API_Info);
  //   console.log(data.ip);
  //   var ip = decrypt(data.ip, "vp0DGD9E5rp6X0a3QYZ1qbDpilL83FO7");
  var f = decrypt(idfile_enc, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn");
  //   var t = decrypt(data.time, "vp0DGD9E5rp6X0a3QYZ1qbDpilL83FO7");
  console.log((await axios.get(DOMAIN_API_VIEW + f)).data);
  //   console.log(decrypt(data.ip, "vp0DGD9E5rp6X0a3QYZ1qbDpilL83FO7"));
  console.log(Math.floor(Date.now() / 1000));
};
