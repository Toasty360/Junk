// const axios = require("axios");
// const cheerio = require("cheerio");
// const fs = require("fs");
const drama = async () => {
  const r = await fetch(
    "https://www.ondemandkorea.com/player/vod/the-elegant-empire?contentId=1623289"
  );
  const v = await r.text();

  const $ = cheerio.load(v);
  console.log(r.status);
};
// drama();

const flixhq = async () => {
  var url =
    "https://flixhq.to/watch-movie/watch-aquaman-and-the-lost-kingdom-104119.10255486";
  const v = await (
    await fetch(url, {
      headers: {
        Referer: "https://flixhq.to/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      },
    })
  ).text();
  const $ = cheerio.load(v);
  console.log(v.includes("UpCloud"));
  console.log($("#servers-list").text());
  console.log($(".description").text());
};
// flixhq();
const kwikLoad = async () => {
  var url = "https://kwik.si/e/8IO6QqOIrJfN";
  const mmcookie = { Cookie: "ddg1=;ddg2_=;", Referer: "https://kwik.si/" };

  const v = await (await fetch(url, { headers: mmcookie })).text();
  // const $ = cheerio.load(v);
  console.log(v);
};
kwikLoad();
