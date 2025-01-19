import { default as axios } from "axios";

const instance = axios.create({
  headers: {
    Referer: "https://animepahe.ru/",
    Cookie: "__ddg1=;__ddg2_=;",
  },
});
const fetchm3u8 = async (url: string) => {
  try {
    var r = await instance.get(url).then((v) => v.data);
    const link = eval(
      /(eval)(\(function[\s\S]*?)(<\/script>)/.exec(r)![2].replace("eval", "")
    ).match(/https.*?m3u8/)[0];
    return link;
  } catch (e) {
    console.log(e);
    return "";
  }
};

const fetchLinks = async (url: string) => {
  const r = await instance.get(url).then((v) => v.data);
  const reg =
    /<button.*?data-src="(.+?)".*?data-resolution="(.+?)".*?data-audio="(.+?)".*?<\/button>/gm;
  const matches = [...r.matchAll(reg)];
  const data = await Promise.all(
    matches.map(async (m) => {
      const url = await fetchm3u8(m[1]);
      return {
        url,
        res: `${m[2]}p`,
        audio: m[3].toUpperCase(),
        type: m[3] === "jpn" ? "SUB" : "DUB",
      };
    })
  );

  console.log(data);
};

fetchLinks(
  "https://animepahe.ru/play/e4cc04f4-f6fa-e03e-8d73-c7ce50a53469/ab8477a5426ae5b90ba6e5e45fa91cf81f2f0779e997e1be0be7df21b4431b22"
);
