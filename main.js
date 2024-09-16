const axios = require("axios");
const cheerio = require("cheerio");

videoURl =
  "https://streamtape.com/v/Vo6V7011o9UKGQ8/marry-my-husband-2024-episode-121707228361.1.mp4?c1_label=EN&c1_file=https://sub.pladrac.net";

const streamtape = async (url) => {
  console.log(url);
  const r = await (await fetch(url)).text();
  // console.log(r.match(/\?id=(.*?)'/));

  // console.log(
  //   "https://streamtape.com/get_vi" + r.match(/'defg(.*?)'/)[1] + "&stream=1"
  // );

  const $ = cheerio.load(r);
  console.log(
    "https://streamtape.com/get_video" +
      $("#norobotlink")
        .next()
        .first()
        .text()
        .match(/(\?id=.*?)'/)[1] +
      "&stream=1"
  );
  var url =
    "https:/" +
    eval(
      $("#norobotlink")
        .next()
        .first()
        .text()
        .trim()
        .split("\n")[1]
        .split("innerHTML =")[1]
    ) +
    "&stream=1";

  console.log(url);

  const r1 = (
    await fetch(url, {
      referrer: "https://sub.pladrac.net",
    })
  ).url;
  // console.log(r1);
};

var url = "https://dramacool.com.pa/mars-zero-no-kakumei-2024-episode-6.html";
const Extractor = async () => {
  const v = await (await fetch(url)).text();
  streamtape(v.match(/https:\/\/streamtape.com\/v\/.*?\.mp4/)[0]);
};

const dlions = async () => {
  var data = await (await fetch("https://dlions.pro/v/jetfdwzivrte")).text();
  const link = eval(
    /(eval)(\(function[\s\S]*?)(<\/script>)/s.exec(data)[2].replace("eval", "")
  ).match(/file:"(.*?)"/)[1];
  console.log(link);
};
dlions();
