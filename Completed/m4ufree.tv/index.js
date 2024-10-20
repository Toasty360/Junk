import CryptoJS from "crypto-js";
const baseurl = "https://ww2.m4ufree.tv";
let cookie = "";

class DoSomeShit {
  encryptData(data, key) {
    let encryptedData = CryptoJS.AES.encrypt(data, key).toString();
    let base64Data = CryptoJS.enc.Base64.parse(encryptedData);
    return base64Data.toString(CryptoJS.enc.Hex);
  }
  decryptData(encryptedHex, key) {
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
  formatCookies(cookieString) {
    const [, xsrf, session] = cookieString.match(
      /XSRF-TOKEN=(.*?);.*laravel_session=(.*?);/
    );
    return `XSRF-TOKEN=${xsrf}; laravel_session=${session}`;
  }

  extractSource = async (
    idfile_enc,
    idUser_enc,
    DOMAIN_API_VIEW,
    DOMAIN_API
  ) => {
    var fileId = this.decryptData(
      idfile_enc,
      "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn"
    );
    var userId = this.decryptData(
      idUser_enc,
      "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O"
    );

    //flag
    await (await fetch(DOMAIN_API_VIEW + fileId)).text();

    var playerData = {
      idfile: fileId,
      iduser: userId,
      domain_play: baseurl,
      platform: "Win32",
      hlsSupport: true,
    };

    let encryptedData = this.encryptData(
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
          Referer: "https://play9str.playm4u.xyz",
          Origin: "https://play9str.playm4u.xyz",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: "data=" + encryptedData + "%7C" + hashedData,
        redirect: "follow",
      })
    ).json();

    if (resp.type === "url-m3u8-encv1") {
      return this.decryptData(resp.data, "oJwmvmVBajMaRCTklxbfjavpQO7SZpsL");
    } else {
      console.log("error", resp);
      return "error";
    }
  };
}
const getSource = async (id) => {
  let shit = new DoSomeShit();
  try {
    const response = await fetch(baseurl + id);
    cookie = shit.formatCookies(response.headers.get("set-cookie"));
    const [link, token] = await response
      .text()
      .then((resp) => [
        resp.match(/singlemv\s*active.*?data="(.*?)"/)[1],
        resp.match(/csrf-token.*content\s*=\s*['"](.*?)["']/)[1],
      ]);
    const postResponse = await fetch(baseurl + "/ajax", {
      method: "POST",
      headers: {
        Origin: baseurl,
        Referer: baseurl + id,
        cookie,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: new URLSearchParams({ m4u: link, _token: token }),
    });

    const data = await postResponse
      .text()
      .then((r) => r.match(/src=['"](.*?)['"]/)[1]);

    const [idfile_enc, idUser_enc, DOMAIN_API_VIEW, DOMAIN_API, captions] =
      await (await fetch(data))
        .text()
        .then((r) => [
          r.match(/idfile_enc\s*=\s*['"](.*?)['"]/)[1],
          r.match(/idUser_enc\s*=\s*['"](.*?)['"]/)[1],
          r.match(/DOMAIN_API_VIEW\s*=\s*['"](.*?)['"]/)[1],
          r.match(/DOMAIN_API\s*=\s*['"](.*?)['"]/)[1],
          JSON.parse(r.match(/data_subs\s*=\s*['"](.*?)['"];/)[1]),
        ]);
    let source = {
      url: await shit.extractSource(
        idfile_enc,
        idUser_enc,
        DOMAIN_API_VIEW,
        DOMAIN_API
      ),
      captions: captions.map((c) => ({
        label: c.label,
        url: c.file,
      })),
    };
    console.log(source);
  } catch (error) {
    console.error("Error:", error);
  }
};

getSource("/watch-y69ay-the-wild-robot-2024-movie-online-free-m4ufree.html");
