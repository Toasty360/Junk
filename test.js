import axios from "axios";
function deobfstr(d, i) {
  i = i.toString();
  let s = "";
  for (let j = 0; j < d.length; j += 2) {
    s += String.fromCharCode(
      parseInt(d.substr(j, 2), 16) ^ i.charCodeAt((j / 2) % i.length)
    );
  }
  return s;
}
const videosrc = async (i, attempt = 1) => {
  try {
    const r = await (await fetch(`https://vidsrc.xyz/embed/${i}`)).text();
    const l = await axios
      .get(`http://vidsrc.stream${r.match(/vidsrc.stream(.*?)"/)[1]}`, {
        headers: { Referer: "https://vidsrc.xyz/" },
      })
      .then((r) =>
        deobfstr(
          r.data.match(/data-h="(.*?)"/)[1],
          r.data.match(/data-i="(.*?)"/)[1]
        )
      );
    const r3 = await axios
      .get(`http:${l}`, { headers: { Referer: "https://vidsrc.xyz/" } })
      .then((r) => r.data);
    let sub = "";
    try {
      sub =
        "https://vidsrc.stream/" +
        r3.match(/default_subtitles.*?\/(.*?)\";/)[1];
    } catch (error) {}
    const m = atob(
      r3
        .match(/file:"(.*?)"/)[1]
        .replace(/\/\/\S+?=/g, "")
        .slice(2)
        .replace(/\/@#@\/[^=\/]+==/g, "")
        .replace(/_/g, "/")
        .replace(/-/g, "+")
    );
    axios.get(`https:${r3.match(/pass_path.*?"(.*?)"/)[1]}`);
    return { src: m, sub };
  } catch (e) {
    console.log("fetching again");
    if (attempt < 5) {
      return await videosrc(i, attempt + 1);
    } else {
      console.log("Max attempts reached");
      return { src: "Not found!" };
    }
  }
};

const soaptoday = async (i) => {
  var b = "https://soap2daya.to/";
  var id = await (await fetch(b + i))
    .text()
    .then((r) => r.match(/<iframe[^>]*\s+src=['"]([^'"]+)['"]/i)[1]);
  console.log(await videosrc(id.split("/").pop()));
};
// soaptoday("kung-fu-panda-4");
// console.log(await videosrc("movie?imdb=tt21692408"));
// console.log(await videosrc("tv?imdb=tt2788316&season=1&episode=1"));
console.log(
  "start",
  Math.ceil(Date.now() / 1000),
  Math.ceil(Date.now() / 1000) + 604800
);

// console.log((new Date().getDay() + 7) % 7);
