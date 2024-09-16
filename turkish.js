import { load } from "cheerio";
import axios from "axios";

var baseURL = "https://turkish123.ac/";
const search = async (q) => {
  var params = {
    s: q,
    action: "searchwp_live_search",
    swpengine: "default",
    swpquery: q,
  };

  var { data } = await axios(
    `https://turkish123.ac/wp-admin/admin-ajax.php?s=${q}&action=searchwp_live_search&swpengine=default&swpquery=${q}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: baseURL,
      },
    }
  );
  const $ = load(data);
  var result = $("li")
    .not(".ss-bottom")
    .map((_, ele) => ({
      id: $(ele).find("a").attr("href").replace(baseURL, "").replace("/", ""),
      image: $(ele)
        .find("a")
        .attr("style")
        .match(/url\((.*?)\)/)[1],
      title: $(ele).find(".ss-title").text(),
      tags: $(ele)
        .find(".ss-info >a")
        .not(".ss-title")
        .map((_, e) => $(e).text())
        .get()
        .filter((v) => v != "NULL"),
    }))
    .get();
  console.log(result);
};

const info = async (id) => {
  const { data } = await axios(baseURL + id, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: baseURL,
    },
  });
  const $ = load(data);
  var result = {};
  result["cover"] = $("#content-cover")
    .attr("style")
    .match(/url\((.*?)\)/)[1];
  result["title"] = $(".mvic-desc > h1").text();
  result["des"] = $(".f-desc")
    .text()
    .replace(/[\n\t\b]/g, "");
  result["romaji"] = $(".yellowi").text();
  result["genre"] = $(".mvici-left > p:nth-child(3)")
    .find("a")
    .map((_, e) => $(e).text())
    .get();
  result["imdb"] = $(".imdb-r").text();
  result["year"] = $(".mvici-right > p:nth-child(3)").find("a").first().text();
  result["totalEpisodes"] = $(".les-content > a").length;
  result["episodes"] = $(".les-content > a")
    .map((i, e) => ({
      id: $(e).attr("href").split("/").slice(-2)[0],
      title: "Episode " + eval(i + 1),
    }))
    .get();
  console.log(result);
};

const getLinks = async (id) => {
  const { data } = await axios(baseURL + id, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: baseURL,
    },
  });

  const resp = await (
    await axios(data.match(/"(https:\/\/tukipasti.com\/t\/.*?)"/)[1])
  ).data;
  //   console.log(resp);
  console.log(resp.match(/var urlPlay = '(.*?)'/)[1]);
};

getLinks("sen-cal-kapimi-episode-23");
