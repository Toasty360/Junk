import axios from "axios";
import cheerio from "cheerio";

// https://nhentai.to/g/422853
// https://nhentai.to/g/425979
// https://nhentai.to/random/
const doujinshi = async (url = "https://ehentai.to/random") => {
  const R = await axios(url);

  const $ = cheerio.load(R.data);
  var data = {};

  data["cover"] = $("#cover > a > img").data()["src"];
  data["id"] = url.split("/").pop();
  data["title"] = $("#info > h1").text();
  data["ramaji"] = $("#info > h2").text();
  data["mediaID"] = data["cover"].split("/")[4];
  // data["pages"]=$(`#tags > div:nth-child(${$('#tags').children().length-1}) > span > a > span`).text()
  data["pages"] = $("#info > div:first").text().split(" ")[0];
  data["mediaUrl"] =
    "https://cdn.dogehls.xyz/galleries/<mediaID>/<pageNumber>t.jpg";
  data["media"] = [];
  $("#thumbnail-container > div").map((i, ele) => {
    data["media"].push($(ele).find("a > img").data()["src"]);
  });
  console.log(data);
};
// doujinshi();

const drama = async () => {
  const r = await fetch(
    "https://www.ondemandkorea.com/player/vod/the-elegant-empire?contentId=1623289"
  );
  const v = await r.text();

  const $ = load(v);
  console.log(r.status);
  console.log(v);
  console.log($("#__jw-ld-json").text());
};
// drama();
const hdmovies = async () => {
  const r = await fetch("https://chillx.top/v/x81wwAyaOd9o/");
  const v = await r.text();

  var JScripts = JSON.parse(v.match(/JScripts = '(.*?)';/)[1]);
  console.log(JScripts);

  // const $ = load(v);
  // eval($("body > script").first().text());
  var msg = decryptAES(JScripts["ct"], JScripts["iv"], JScripts["s"]).then(
    (decryptedText) => {
      console.log("Decrypted Text:", decryptedText);
    }
  );
  // console.log(msg);
};
hdmovies();

// async function decryptAES(encryptedData, key, iv) {
//   try {
//     const keyBuffer = await crypto.subtle.importKey(
//       "raw",
//       base64ToArrayBuffer(key),
//       "AES-CTR",
//       false,
//       ["decrypt"]
//     );
//     const ivBuffer = base64ToArrayBuffer(iv);

//     const encryptedBuffer = base64ToArrayBuffer(encryptedData);

//     const decryptedBuffer = await crypto.subtle.decrypt(
//       { name: "AES-CTR", counter: ivBuffer, length: 64 },
//       keyBuffer,
//       encryptedBuffer
//     );

//     // Convert decryptedBuffer to string
//     const decryptedString = new TextDecoder().decode(decryptedBuffer);

//     return decryptedString;
//   } catch (error) {
//     console.error("AES Decryption Error:", error.message);
//     return null;
//   }
// }

// function base64ToArrayBuffer(base64) {
//   var binaryString = atob(base64);
//   var bytes = new Uint8Array(binaryString.length);
//   for (var i = 0; i < binaryString.length; i++) {
//     bytes[i] = binaryString.charCodeAt(i);
//   }
//   return bytes.buffer;
// }

const ibommaSrc = async (url) => {
  const r = await fetch(url);
  const v = await r.text();

  const $ = cheerio.load(v);

  const iframe = $("script[type = text/javascript]")
    .text()
    .split("lazyIframe.src = '")[1]
    .split("'; }")[0];
  const r2 = await fetch(iframe, { referrer: "https://www.iradha.tv/" });
  const v2 = await r2.text();
  var iframe_script = cheerio.load(v2)("script[type = text/javascript]").text();

  data = {
    m3u8: iframe_script.split('file:"')[1].split(".m3u8")[0] + ".m3u8",
    referer: "https://ib22-4-ind2k--api.c19.space/",
  };
  console.log(data);
  return data;

  // return iframe_script.split('file:"')[1].split(".m3u8")[0] + ".m3u8";
};
// ibommaSrc(
//   "https://www.iradha.tv/hd-m1djv/fight-club-2023-y2rbf-hindi-movie-watch-online.html"
// );

const getHomeMovies = async (url) => {
  const r = await fetch(url);
  const v = await r.text();

  const $ = cheerio.load(v);
  var data = [];
  $(".post.hentry").map((i, e) => {
    const url = $(e).find(".entry-title> a").attr("href");
    data.push({
      title: $(e).find(".entry-title").text(),
      year: $(e).find("span").text(),
      imageL: $(e).find("img").attr("data-src"),
      url: url,
    });
  });
  console.log(data[0]);
  ibommaSrc(data[0]["url"]);
};
// getHomeMovies("https://www.iradha.tv/telugu-movies/");
