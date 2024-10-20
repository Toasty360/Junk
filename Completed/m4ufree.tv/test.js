// import CryptoJS from "crypto-js";

// var data =
//   "53616c7465645f5fc2275eacc5fadaefb1a81870bf70ffc9787b3fa27c85271095e8c48226662d4a187cd8b37ff1ae17b5e6b395ad583380b958b506b8b98aec3904a6a273dcca9ae482c6e9364db4749b42d38a3ac58ad3af852d099886fd0e927253585c996c1cb3db2379d5441bb78dec913bdb94a35dce6867e5d1f2c629019712ee2af091ff8b522bfacd2669c244fb9a49eb4b67b76259f88188d758ee4d20b1789cf10af0eb7c8c602b719c74d87615b7de127a9c89a1315881861643ffbf4c7aacb11f4904cad9f50d81d0e521955e5895c7ca6cc23bf38e6220748d99607072a130156094765a66be83bb7b0896660d30e7fb8ca09238450bccda0424e23a2e3ca5abe187a438d8a9b59a3e0830100358fe9c7921c726b97d76247295cd79409708ed843a834d365d9b69813e784e4d064a50e4783d7201f6388ee7dd96b7fb2cbc8bacf6e5d59eb021b0ff91ccbd9bbe1b7c7e7e7f03e7f5ff3e9485fcd6df9b1f163efd7fd6a409df027754d4e3211bbb2e47973bf4dc570a7c876bdbaaf34300c09c744fe87b1b1b73243568b583de6e161b0a5a460418107e760a673cd64e729c077e6bec77f6a879281736b42c9ba0f98fd85c053bf80e4b03ac57971da4427d8ff91aa28697f1c3c1ef98fe76613d821d12a807376cd2e4d86686fd9d2fe33c020707ba058f8db0237445af98fe43392d272311455b8ee3ff24321c8e756a7f6040990ae4df9ef4461b4cb6826c50df9b11afb89d5d987a9735d2c0a7a54c452a8fc19827fe375f5826bdeac487ff7158a048b5e6ea61e88daeff83924e0b39ec3bee30af62bac2375288425b2e90e7a5d634d6db6d7aa6fbf7ac79cff009b1889616cdfe27f611ac23e9762fcb6e5e685eb9f3e5a3ff059c|14f221cdf57caed8e083e1fd53029af3";

// function decryptData(encryptedHex, key) {
//   let decryptedData;
//   try {
//     let hexData = CryptoJS.enc.Hex.parse(encryptedHex); // Convert hex to Base64
//     let base64Data = hexData.toString(CryptoJS.enc.Base64);
//     decryptedData = CryptoJS.AES.decrypt(base64Data, key);
//     decryptedData = decryptedData.toString(CryptoJS.enc.Utf8); // Convert to UTF-8 string
//   } catch (error) {
//     console.log("Error decrypting data: " + error);
//   }
//   return decryptedData;
// }

// console.log(
//   decryptData(data.split("|")[0], "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ")
// );
// var final = {
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

(async () => {
  const myHeaders = new Headers();
  myHeaders.append("Referer", "https://play9str.playm4u.xyz");
  myHeaders.append("Origin", "https://play9str.playm4u.xyz");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
  );
  myHeaders.append(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  const raw =
    "data=53616c7465645f5f640cac40205ff8babf72ea8e54c78237f5808c6883a7c2fc6605ef1b2a4e58c2561d6a675794723c0efe9c34fbeefdf4a8cb720daf9c20d40e636ef89f22658b252d13b455472a57f51c9d99cb9747c5632d7484a2026a10a46d876576bc4d3220f4ba7467207b9abd214d38f1e1c6b08565187a2302ff99654af8c520fa1c5c8912bfd75ce229f33d936812c8945d6e00ba4bc7978731e93db007c5dfcf5ec0c09af60404859d09275d8b4ece143275140dd7c7f7b69c759c48bced6b181e212088b13af0d5ee21a935eb36db506e1f8c143f4099975cea6c7ac26fe4b1e8ae483d03917b5ecf15a446753ccb50606c7ff5d35e3f2a8a6c3fdeb67289fe08fb40ef9968d876af853b6c45c3589993f1724775fb0996dcf373c32a77d5a00651df065a3be8bebee2635d92b19f54cd15c6bd37e55f50c49ebd19ff1b3429268b522908866c16a419a80dfa3f122cd1d3a3354b9790481aba58a828d27aabdf0b4d0bf1e59eee268af1e1f872a3b5be1933409de94a1c63c180ba4565ae64e10025f05d11507c658f22478df226d1c9ddcfef342f99389597a00fd2f8af47223d0a0dda9931a0303f38cccb16f9257509cb85709fd9801e4153fbfd3fc8af8f099148012022bc59aa3ed93373781fef8704dc7e8ab8c42f18b44c48684c147b70615d0169876af22acbaea936fde8c78ce4ee833969261eac593cfc7eda52c90e58ff1f59b1c1199d131fbe8951ac38ba3bb1c27ca1b4a2471bb5693b155527753f34e1761fb7ec7bc63cc696f7ddcf95edccc56159b7fceee7498f5605b451dd9b8af574600c5f365ca01f8f2a174750799cfebf1086c657c5965218eda8a5fcc59f05c74fb3ee7b10d4de67f057b73c52373fc1867ade48%7C0508aa6c87b261e788c427c1f9485054";

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://api-play-021024.playm4u.xyz/api/tp1rd/playiframe",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})();
