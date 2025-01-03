const wish = async (url) => {
  const iframe = await (await fetch(url)).text();
  let m3u8 = eval(
    /(eval)(\(function[\s\S]*?)(<\/script>)/s
      .exec(iframe)[2]
      .replace("eval", "")
  ).match(/file:"(.*?)"/)[1];
  console.log(m3u8);
};
const Animo = async (url) => {
  const jwConfig = await (await fetch(url))
    .text()
    .then((resp) => resp.match(/script.src\s*=\s*['"](.*?)['"]/)[1]);

  let playlist = await (await fetch(jwConfig))
    .text()
    .then((resp) => resp.match(/"playlist"\s*:\s*['"](.*?)['"]/)[1]);
  playlist = playlist.startsWith("//")
    ? new URL(jwConfig).protocol + playlist
    : playlist;
  const data = await (await fetch(playlist)).json();
  const sources = data.playlist[0].sources;
  console.log(sources);
};

const main = async () => {
  const resp = await (
    await fetch(
      "https://www.animotvslash.nl/2024/11/arifureta-from-commonplace-to-worlds.html"
    )
  ).text();

  var episodes = resp
    .match(/let\s+streamingFiles\s*=\s*(\[.*?\]),/s)[1]
    .trim()
    .replace(/'/g, '"')
    .replace(/(\d+):/g, '"$1":')
    .replace(/\/\/\s.*/g, "")
    .replace(/[\n\s]/g, "")
    .replace(/,]/g, "]");

  episodes = JSON.parse(episodes);

  let episode1 = episodes[0].files;
  console.log(episode1);
};

// main();
Animo("https://cdn.jwplayer.com/players/NgsS3XZt-tcoydixg.html");

[
  {
    0: "Animo-M",
    1: "https://cdn.jwplayer.com/players/KfoPy1cU-tcoydixg.html",
    2: "sub",
  },
  {
    0: "Animo-O",
    1: "https://cdn.jwplayer.com/players/1J9w7gcl-tcoydixg.html",
    2: "sub",
  },
  {
    0: "TT",
    1: "https://www.they.tube/e/0ew0n9sn0gnq.html",
    2: "sub",
  },
  {
    0: "Wish",
    1: "https://iplayerhls.com/e/5v1g6wsq2atm",
    2: "sub",
  },
  {
    0: "Moon",
    1: "https://filemoon.to/e/ehzqtnndy4ax/sololevelmovie1080p.mp4",
    2: "sub",
  },
  {
    0: "Tape",
    1: "https://streamtape.com/e/74AKkXJl99uApo2/sololevelmovie1080p.mp4",
    2: "sub",
  },
];
