import axios from "axios";
import { load } from "cheerio";
const base = "https://hdrezka.me/";
const getData = (x) => {
  const v = {
    file3_separator: "//_//",
    bk0: "$$#!!@#!@##",
    bk1: "^^^!@##!!##",
    bk2: "####^!!##!@@",
    bk3: "@@@@@!##!^^^",
    bk4: "$$!!@$$@^!@#$$@",
  };
  let a = x.substr(2);
  for (let i = 4; i >= 0; i--)
    if (v["bk" + i]) {
      a = a.replace(
        v.file3_separator +
          btoa(
            encodeURIComponent(v["bk" + i]).replace(
              /%([0-9A-F]{2})/g,
              (_, p1) => String.fromCharCode("0x" + p1)
            )
          ),
        ""
      );
      // console.log(
      //   v.file3_separator +
      //     btoa(
      //       encodeURIComponent(v["bk" + i]).replace(
      //         /%([0-9A-F]{2})/g,
      //         (_, p1) => String.fromCharCode("0x" + p1)
      //       )
      //     )
      // );
    }
  console.log(a);
  try {
    a = decodeURIComponent(
      atob(a)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch (e) {
    a = "";
  }
  return a.split(",").reduce((m, ele) => {
    const [key, value] = ele.split("]");
    m[key.replace("[", "")] = value;
    return m;
  }, {});
};

const main = async (id, type = "movie", _season, _episode) => {
  if (type != "movie") {
    var params = {
      id: id,
      translator_id: 238,
      season: _season,
      episode: _episode,
      action: "get_stream",
    };
  } else {
    var params = {
      id: id,
      translator_id: 238,
      action: "get_movie",
    };
  }
  const resp = (
    await axios.post(
      "https://hdrezka.me/ajax/get_cdn_series/?t=" + new Date().getTime,
      new URLSearchParams(params).toString()
    )
  ).data;
  console.log({
    src: getData(resp.url),
    subtitle: resp.subtitle,
  });
};

const getId = async (q, year, type) => {
  const resp = await (
    await axios.get(
      "https://hdrezka.me/search/?do=search&subaction=search&q=" + q
    )
  ).data;
  const $ = load(resp);
  const id = $(".b-content__inline_item")
    .map((_, e) =>
      $(e)
        .find(".b-content__inline_item-link > div")
        .text()
        .split(",")
        .shift()
        .includes(year) && $(e).find(".entity").text() == type
        ? $(e).attr("data-id")
        : undefined
    )
    .get();
  console.log(id);
};
// getId("flash", "2014", "Сериал");
// getId("Dune: Part Two", "2024", "Фильм");
main(62792, "movie");
// main(42697, "tv", 2, 15);
