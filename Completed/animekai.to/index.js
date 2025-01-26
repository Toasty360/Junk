import { load } from "cheerio";
import AnimekaiDecoder from "./decoder.js";
// import { AnimekaiDecoder } from "./extractor.js";

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
  Accept: "text/html, */*; q=0.01",
  "Accept-Language": "en-US,en;q=0.5",
  "Sec-GPC": "1",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Priority: "u=0",
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
  referer: "https://animekai.to/",
  Cookie:
    "usertype=guest; session=hxYne0BNXguMc8zK1FHqQKXPmmoANzBBOuNPM64a; cf_clearance=WfGWV1bKGAaNySbh.yzCyuobBOtjg0ncfPwMhtsvsrs-1737611098-1.2.1.1-zWHcaytuokjFTKbCAxnSPDc_BWAeubpf9TAAVfuJ2vZuyYXByqZBXAZDl_VILwkO5NOLck8N0C4uQr4yGLbXRcZ_7jfWUvfPGayTADQLuh.SH.7bvhC7DmxrMGZ8SW.hGKEQzRJf8N7h6ZZ27GMyqOfz1zfrOiu9W30DhEtW2N7FAXUPrdolyKjCsP1AK3DqsDtYOiiPNLnu47l.zxK80XogfBRQkiGecCBaeDOJHenjn._Zgykkr.F_2bj2C3AS3A5mCpZSlWK5lqhV6jQSQLF9wKWitHye39V.6NoE3RE",
};
const decoder = AnimekaiDecoder;
const proxy = "https://slave.nopile6577.workers.dev/cors?url=";

const getEpisodes = async (id) => {
  const resp = await fetch("https://animekai.to/watch/" + id, {
    headers,
  });
  const doc = await resp.text();
  const dataId = doc.match(/class="rate-box".*?data-id\s*=\s*["'](.*?)['"]/)[1];
  const episodeHtml = await (
    await fetch(
      `https://animekai.to/ajax/episodes/list?ani_id=${dataId}&_=${decoder.generate_token(
        dataId
      )}`
    )
  ).json();
  const $ = load(episodeHtml.result);
  const episodes = $("a")
    .map((i, el) => {
      return {
        number: el.attribs["num"],
        slug: el.attribs["slug"],
        title: $(el).find("span").text(),
        id: el.attribs["token"],
      };
    })
    .get();
  console.log(episodes);
};
// getEpisodes(" ");
// getEpisodes("amagami-san-chi-no-enmusubi-90k5");
[
  { number: "1", title: "1", id: "m0LcxEijT-5iyJvT58dr" },
  { number: "2", title: "2", id: "2xTZwg22WOdojpDa7pgv" },
];
const getServers = async (id) => {
  const resp = await (
    await fetch(
      `	https://animekai.to/ajax/links/list?token=${id}&_=${decoder.generate_token(
        id
      )}`,
      {
        headers: {
          ...headers,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
  ).json();
  const $ = load(resp.result);
  const servers = $(".server-items")
    .map((i, el) => {
      const type = el.attribs["data-id"];
      const servers = $(el)
        .find("span")
        .map((i, server) => ({
          server: $(server).text(),
          id: server.attribs["data-lid"],
        }))
        .get();

      return {
        [`${type}`]: servers,
      };
    })
    .get();
  return servers;
};
// getServers("2xTZwg22WOdojpDa7pgv");

// [
//   {
//     sub: [
//       { server: "UpCloud", id: "mxWbnE3zBw" },
//       { server: "MegaCloud", id: "mxWbnE3zBA" },
//     ],
//   },
//   {
//     dub: [
//       { server: "UpCloud", id: "mxWbnEz1DQ" },
//       { server: "MegaCloud", id: "mxWbnEz1Ag" },
//     ],
//   },
// ];

const getSources = async (id) => {
  const { result } = await (
    await fetch(
      `https://animekai.to/ajax/links/view?id=${id}&_=${decoder.generate_token(
        id
      )}`,
      {
        headers: {
          ...headers,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
  ).json();
  let { url } = JSON.parse(
    decoder.decode_iframe_data(result).replace(/\\/gm, "")
  );
  url = url.replace(/\/(e|e2)\//, "/media/");

  const sources = await fetch(url, { headers })
    .then((r) => r.json())
    .then((r) => decoder.decode(r.result).replace(/\\/gm, ""));
  console.log(sources);
  return JSON.parse(sources);
};

getSources("mxWbnEz1DQ");
