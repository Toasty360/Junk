import axios, { Axios } from "axios";
function deobfstr(data, id) {
  id = id.toString();
  let src = "";

  for (let i = 0; i < data.length; i += 2) {
    src += String.fromCharCode(
      parseInt(data.substr(i, 2), 16) ^ id.charCodeAt((i / 2) % id.length)
    );
  }
  return src;
}

const videosrc = async (id) => {
  try {
    var base = `https://vidsrc.xyz/embed/${id}`;
    var r = await (await fetch(base)).text();
    var link = await axios
      .get("http://vidsrc.stream" + r.match(/vidsrc.stream(.*?)"/)[1], {
        headers: {
          Cookie: "cf_clearance=;",
          Referer: "https://vidsrc.xyz/",
        },
      })
      .then((resp) => resp.config.url);
    // const page = await browser.newPage();
    // await page.setExtraHTTPHeaders({
    //   referer: "https://vidsrc.xyz/",
    //   Cookie: "cf_clearance=;",
    //   "User-Agent":
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    // });
    // await page.goto("https://vidsrc.xyz/");
    // await page.reload();
    // const cookies = await page.cookies();

    // let data = await page.evaluate(async (r) => {
    //   console.log(r);
    // });
    // console.log(data);
    // await browser.close();
    var r3 = await axios
      .get("https:" + link, {
        headers: {
          Referer: "https://vidsrc.xyz/",
        },
      })
      .then((resp) => resp.data);
    var m3u8 = atob(
      r3
        .match(/file:"(.*?)"/)[1]
        .replace(/\/\/\S+?=/g, "")
        .slice(2)
        .replace(/\/@#@\/[^=\/]+==/g, "")
        .replace(/_/g, "/")
        .replace(/-/g, "+")
    );
    try {
      axios.get("https:" + r3.match(/pass_path.*?"(.*?)"/)[1]);
    } catch (error) {
      console.log(error.message);
    }

    //   return m3u8;
  } catch (e) {
    console.log(e.message);
    return "404";
  }
};
// const soaptoday = async (id) => {
//   var base = "https://soap2daya.to/";
//   var r = await (await fetch(base + id)).text();
//   var id = r.match(/<iframe[^>]*\s+src=['"]([^'"]+)['"]/i)[1];
//   var m3u8 = "";
//   do {
//     console.log("fetching");

//     m3u8 = await videosrc(id.split("/").pop());
//   } while (m3u8 == "404");
//   console.log({ src: m3u8 });
// };

console.log(await videosrc("movie?tmdb=693134"));
// console.log(await videosrc("tv?tmdb=65844&season=1&episode=8"));

//www.imdb.com/title/tt15009428/?ref_=chtmvm_t_7
// soaptoday("argylle");
