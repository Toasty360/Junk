import { load } from "cheerio";
import CryptoJS from "crypto-js";
import { Decrypt, format, hex } from "./decode.js";

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "en-US,en;q=0.5",
  "Sec-GPC": "1",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
  Referer: "https://ww.bmovies.vip/",
};

// const getKey = (iv, a, s) => {
//   const key = CryptoJS.enc.Hex.parse(a);
//   const salt = CryptoJS.enc.Hex.parse(s);
//   const iv = CryptoJS.enc.Hex.parse(iv);
//   return CryptoJS.PBKDF2(key, salt, { keySize: 8, iterations: 1000 });
// };

const getSources = async (server) => {
  const { src } = await (
    await fetch(
      `https://ww.bmovies.vip/ajax/movie/episode/server/sources/${server.id}_${server.name}`,
      {
        headers: {
          ...headers,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
  ).json();
  const vConfig = await fetch(src, {
    headers: {
      ...headers,
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((r) => r.text())
    .then((r) => JSON.parse(r.match(/vConfig\s+=\s+({.*?});/)[1]));

  const mediaJson = {
    servers: vConfig.servers.map((a) => {
      return {
        ...a,
        mid: vConfig.id.split("/")[0],
        hash: vConfig.hash,
        default: a.name === vConfig.server,
      };
    }),
    title: vConfig.title,
    id: vConfig.episodeId,
    mid: vConfig.mid,
    poster: vConfig.poster,
    time: vConfig.time,
  };
  const s = mediaJson.servers[0];

  const encrypted = JSON.parse(
    CryptoJS.AES.encrypt(
      JSON.stringify(s.mid + "/" + s.type + "?srv=" + s.id),
      s.hash,
      { format }
    ).toString()
  );
  // console.log(s.hash);

  let media = await (
    await fetch(
      `https://fstream365.com/ajax/getSources/?id=${hex(encrypted.ct)}&h=${hex(
        s.hash
      )}&a=${encrypted.iv}&t=${encrypted.s}`,
      {
        headers: {
          ...headers,
          Referer: "https://fstream365.com/",
        },
      }
    )
  ).json();

  media = {
    ...media,
    sources: Decrypt(media.sources, encrypted.iv, 0, encrypted.s),
  };
  return media;
};

const main = async (id, episode) => {
  const resp = await fetch(
    `https://ww.bmovies.vip/ajax/movie/episode/servers/${id}_${episode}`,
    {
      headers: {
        ...headers,
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );
  if (!resp.ok) {
    console.log("No servers found");
    return;
  }
  const $ = load((await resp.json()).html);
  const servers = $("a")
    .map((_, el) => ({
      server: $(el).attr("title").split(" ").pop(),
      id: $(el).attr("data-id"),
      name: $(el).attr("data-name"),
    }))
    .get();
  console.log(servers);

  const server = servers[2];
  //works for all servers
  return getSources(server);
};

console.log(await main("72172", "2_2"));
