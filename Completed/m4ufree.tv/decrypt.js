// Encrypts the provided data using AES encryption and a key
import CryptoJS from "crypto-js";
function encryptData(data, key) {
  let encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  let base64Data = CryptoJS.enc.Base64.parse(encryptedData);
  return base64Data.toString(CryptoJS.enc.Hex); // Return Hex representation
}

function decryptData(encryptedHex, key) {
  let decryptedData;
  try {
    let hexData = CryptoJS.enc.Hex.parse(encryptedHex); // Convert hex to Base64
    let base64Data = hexData.toString(CryptoJS.enc.Base64);
    decryptedData = CryptoJS.AES.decrypt(base64Data, key);
    decryptedData = decryptedData.toString(CryptoJS.enc.Utf8); // Convert to UTF-8 string
  } catch (error) {
    console.log("Error decrypting data: " + error);
  }
  return decryptedData;
}

// Sends a report about HLS support and environment details
function reportHlsStatus(playerInstance) {
  var reportData = {
    platform: navigator.platform || "noplf", // Fallback in case platform is unavailable
    hlsSupport: isHlsSupported(),
    provider: playerInstance.getProvider().name,
    jwplayer: jwplayer("mediaplayer").getEnvironment(),
  };

  // Encrypt report data with a secret key
  let encryptedReport = encryptData(
    JSON.stringify(reportData),
    "aK7ZWN71if8mN60SMl99RBvIwcEUNEaS"
  );
  let reportPayload = { data: encryptedReport };

  // Send report via POST request
  $.post(DOMAIN_API + "/Report", reportPayload);
}

async function loadMediaPlayer(
  idfile_enc,
  idUser_enc,
  DOMAIN_API_VIEW,
  DOMAIN_API
) {
  var fileId = decryptData(idfile_enc, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn");
  var userId = decryptData(idUser_enc, "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O");

  fetch(DOMAIN_API_VIEW + fileId);

  const jwplayer = {
    Browser: {
      androidNative: false,
      chrome: true,
      edge: false,
      facebook: false,
      firefox: false,
      ie: false,
      msie: false,
      safari: false,
      version: { version: "129.0.0.0", major: 129, minor: 0 },
    },
    OS: {
      android: false,
      iOS: false,
      mobile: false,
      mac: false,
      iPad: false,
      iPhone: false,
      windows: true,
      tizen: false,
      tizenApp: false,
      version: { version: "10.0", major: 10, minor: 0 },
    },
    Features: { iframe: true, passiveEvents: true, backgroundLoading: true },
  };

  var playerData = {
    idfile: fileId,
    iduser: userId,
    domain_play: "https://ww2.m4ufree.tv/",
    platform: "Win32",
    hlsSupport: true,
    jwplayer: jwplayer,
  };

  let encryptedData = encryptData(
    JSON.stringify(playerData),
    "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ"
  );
  let hashedData = CryptoJS.MD5(
    encryptedData + "KRWN3AdgmxEMcd2vLN1ju9qKe8Feco5h"
  ).toString();

  const resp = await (
    await fetch(DOMAIN_API + "/playiframe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: encryptedData + "|" + hashedData }),
    })
  ).json();
  if (resp.type === "url-m3u8-encv1") {
    let videoUrl = decryptData(resp.data, "oJwmvmVBajMaRCTklxbfjavpQO7SZpsL");
    console.log(videoUrl);
  } else {
    console.log("error");
  }
}

console.log(
  decryptData(
    "53616c7465645f5f7795883522aa27256de93cc9582720b18309581c5421b544cc40ff9df276b2a8602bf368ac38aa24f98402bf0c9a5b542363de2eda39893095ec5cc9f52974192eb7dd08416fd1a820468e2b6626ae5b0a4420cd736904fdc20d749d2dd60c834717b4ea7817c5f8c112ea9fe7eb594f9a57b8f1812e8403cccd83a6eaca6611ff4f98c27de78fea8d852d4d494f457936e6ffff3ff77781b8e9bc94f68f7405a3be650bc99c6ed946e79eea9b1c978a355afbb4a262324338cecba64718ed64f2d6b6b07ce0f9775f97344419bee1896ea99ebe3d13d0a64cad5b17bdc3031316ce94798b829289a4688699f499d9d67623559d728471c7edbc2c00aa5ea08d957eb805180b90ef6901b6acccf397f4a16e81db7d19b7d68c4ee9f9fba1a92e93adaa296da812a92ac231a1926b3c4a16eee3ad5cb1eadbb5b31a504e9d6889ad2ae72657a653b40d8219b2c6d2ad6c853a852759c16ada51beea76e02df4e4b6f7daa5f5228996c447eeb5d62395f8347e739fecc6e3e383f176d26a76f97167e417f5700c981fd9549f8977a8129bd7fda1b74ac850d6c415001bbb1f69bb72468d773584762dad88950eece2efcd02c335ad8a24fa97e05972fb09a9d48dbbdcc53df97eb0223e2809cd4154ddc0f0fd40287e77ac1bc5444bcee26bf3a498858e61e48287cd85645b4ae7cc0e1d24ad1d2a8f77136290c74b5c2956fbf7ba326337a552eb57720162a58650909b4623a0b05c21fb82604c74bdc9d37757db1a31c1197eee022b5d7550e10fee56e4f250aa8b05f2610f3f48d7ecacf4db2fe89af0155ca689d4149aa3cb3e7c35efa308c3b148dfe6cefa4c7145f87bacd83f52672b766ea316450f336acd3a723aa1e71050a4b353",
    "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ"
  )
);

// var tes = {
//   idfile: "670df0e4154369d597cd9151",
//   iduser: "642bce856edd7cab511931a2",
//   domain_play: "https://ww2.m4ufree.tv",
//   platform: "Win32",
//   hlsSupport: true,
//   jwplayer: {
//     Browser: {
//       androidNative: false,
//       chrome: true,
//       edge: false,
//       facebook: false,
//       firefox: false,
//       ie: false,
//       msie: false,
//       safari: false,
//       version: { version: "129.0.0.0", major: 129, minor: 0 },
//     },
//     OS: {
//       android: false,
//       iOS: false,
//       mobile: false,
//       mac: false,
//       iPad: false,
//       iPhone: false,
//       windows: true,
//       tizen: false,
//       tizenApp: false,
//       version: { version: "10.0", major: 10, minor: 0 },
//     },
//     Features: { iframe: true, passiveEvents: true, backgroundLoading: true },
//   },
// };
