//? Best indian movie site.

import { load } from "cheerio";
const baseURL = "https://lxc.0ott.com/";

const proxy = "http://localhost:3000/proxy?url=";

const ibommaSrc = async (id) => {
  const r = await fetch(baseURL + id);

  const iframe = /lazyIframe\.src\s*=\s*'([^']*)'/.exec(await r.text())[1];

  const r2 = await fetch(iframe, {
    headers: {
      Referer: baseURL,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.142.86 Safari/537.36",
    },
  });
  var data = {
    m3u8: /file\s*:\s*['"]([^'"]*)['"]/.exec(await r2.text())[1],
    referer: new URL(iframe).origin,
  };
  //! need cors proxy duh
  console.log(
    proxy +
      btoa(data.m3u8) +
      "&headers=" +
      btoa(JSON.stringify({ referer: data.referer }))
  );
  return data;
};
ibommaSrc("hd-n2djv/marco-2024-u7xnz-hindi-movie-watch-online.html");

const getHomeMovies = async (url) => {
  const baseURL = "https://lxc.0ott.com/";
  const r = await fetch(baseURL + url);
  const v = await r.text();

  const $ = load(v);
  var data = $(".post.hentry")
    .map((i, e) => ({
      title: $(e).find(".entry-title").text(),
      id: $(e).find(".entry-title > a").attr("href").replace(baseURL, ""),
      year: $(e).find("span").text(),
      image: $(e).find("img").attr("data-src"),
      url: $(e).find(".entry-title > a").attr("href"),
    }))
    .get();
  console.log(data);
};
// getHomeMovies("hindi-movies");
