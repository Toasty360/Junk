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
doujinshi();
