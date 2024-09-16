import { load } from "cheerio";

const baseURL = "https://www.0ott.com/iipip68yf2/ewoodo74oj/";

const ibommaSrc = async (id) => {
  const r = await fetch(baseURL + id);
  const iframe = /lazyIframe\.src\s*=\s*'([^']*)'/.exec(await r.text())[1];
  const r2 = await fetch(iframe, {
    headers: {
      Referer: baseURL,
    },
  });
  data = {
    m3u8: /file\s*:\s*['"]([^'"]*)['"]/.exec(await r2.text())[1],
    referer: "https://ib22-4-ind2k--api.c19.space/",
  };
  console.log(data);
  return data;
};
// ibommaSrc("hd-m1djv/fight-club-2023-y2rbf-hindi-movie-watch-online.html");

const getHomeMovies = async (url) => {
  const r = await fetch(url);
  const v = await r.text();

  const $ = load(v);
  var data = $(".post.hentry")
    .map((i, e) => ({
      title: $(e).find(".entry-title").text(),
      year: $(e).find("span").text(),
      image: $(e).find("img").attr("data-src"),
      url: $(e).find(".entry-title > a").attr("href"),
    }))
    .get();
  console.log(data);
  // ibommaSrc(data);
};
// getHomeMovies("https://www.iradha.tv/hindi-movies/");
