import axios from "axios";
import CryptoJS from "crypto-js";
import { load } from "cheerio";

var key = CryptoJS.enc.Utf8.parse("37911490979715163134003223491201");
var key2 = CryptoJS.enc.Utf8.parse("54674138327930866480207815084989");
var iv = CryptoJS.enc.Utf8.parse("3134003223491201");

class Anitaku {
  baseURL = "https://anitaku.to/";

  fetchInfo = async (id) => {
    var data = { id: id };
    var doc = await (await fetch(this.baseURL + "category/" + id)).text();
    const $ = load(doc);
    data.cover = $(".anime_info_body_bg > img").attr("src");
    data.title = $(".anime_info_body_bg > h1").text();
    data.altTitle = $(".anime_info_body_bg  > .other-name > a")
      .map((_, e) => $(e).text().trim())
      .get();
    data.type = $(".type > span:contains('Type')").next().text();
    data.status = $(".type > span:contains('Status:')").next().text();
    data.year = $(".type:contains('Released:')")
      .text()
      .split(":")
      .pop()
      ?.trim();
    data.desc = $(".description").text();
    data.tags = $(".type:contains('Genre:') > a")
      .map((_, e) => $(e).text().replace(",", "").trim())
      .get();

    data.episodes = await this._GetEpisodes(
      $("#episode_page > li > a").first().text().split("-")[0],
      $("#episode_page > li > a").last().text().split("-").pop(),
      $("input#movie_id").val().toString()
    );

    return data;
  };
  _GetEpisodes = async (ep_start, ep_end, movieId) => {
    const url = `https://ajax.gogocdn.net/ajax/load-list-episode?ep_start=${ep_start}&ep_end=${ep_end}&id=${movieId}`;
    const data = await (await fetch(url)).text();
    const $ = load(data);

    return $("li")
      .map((_, e) => ({
        id: $(e).find("a").attr("href").trim().substring(1),
        episode: $(e).find(".name").text().split(" ").pop()?.trim() ?? "null",
        type: $(e).find("div").last().text(),
      }))
      .get();
  };
  search = async (q, page = "1") => {
    var data = [];
    try {
      const res = await axios.get(
        `${this.baseURL}/filter.html?keyword=${encodeURIComponent(
          q
        )}&page=${page}`
      );

      const $ = load(res.data);

      data = $("div.last_episodes > ul > li")
        .map((i, el) => ({
          id: $(el).find("p.name > a").attr("href")?.split("/")[2],
          title: $(el).find("p.name > a").attr("title"),
          cover: $(el).find("div > a > img").attr("src"),
          year: $(el).find("p.released").text().trim(),
          type: $(el).find("p.name > a").text().toLowerCase().includes("dub")
            ? "DUB"
            : "SUB",
        }))
        .get();

      return data;
    } catch (e) {}
    return data;
  };
  recent = async (page = "1") => {
    var data = [];
    try {
      const res = await axios.get(
        `https://ajax.gogocdn.net/ajax/page-recent-release.html?page=${page}`
      );

      const $ = load(res.data);

      $("div.last_episodes.loaddub > ul > li").each((i, el) => {
        data.push({
          id: $(el).find("a").attr("href")?.split("/")[1]?.split("-episode")[0],
          episodeId: $(el).find("a").attr("href")?.split("/")[1],
          totalEpisodes: parseFloat(
            $(el).find("p.episode").text().replace("Episode ", "")
          ),
          title: $(el).find("p.name > a").attr("title"),
          cover: $(el).find("div > a > img").attr("src"),
        });
      });
    } catch (error) {}

    return data;
  };
  fetchSources = async (id) => {
    try {
      var resp = (await axios.get(this.baseURL + id)).data;
      resp = (await axios.get(resp.match(/<iframe.*(https.*?)"/)[1])).data;

      var d1 = CryptoJS.AES.decrypt(resp.match(/data-value.*"(.*?)"/)[1], key, {
        iv: iv,
      }).toString(CryptoJS.enc.Utf8);

      var d2 = d1.substring(0, d1.indexOf("&"));
      var pramas =
        CryptoJS.AES.encrypt(d2, key, { iv: iv }).toString() +
        d1.substring(d1.indexOf("&")) +
        "&alias=" +
        d2;

      return JSON.parse(
        CryptoJS.AES.decrypt(
          (
            await axios("https://embtaku.pro/encrypt-ajax.php?id=" + pramas, {
              headers: {
                "X-Requested-With": "XMLHttpRequest",
              },
            })
          ).data.data,
          key2,
          { iv: iv }
        ).toString(CryptoJS.enc.Utf8)
      ).source;
    } catch (error) {
      return error;
    }
  };
}
