//! https://hydrahd.me/
const hydrogen = (id) => {
  const map = "abcdefghij";
  return id
    .toLowerCase()
    .split("")
    .map((char) => map[char] || char)
    .reverse()
    .join("");
};
const getSource = async (id) => {
  const relieovo = hydrogen(id);

  const urlovo = await (
    await fetch("https://vidsrc.vip/hydrax.php?id=" + id, {
      headers: {
        Referer: "https://vidsrc.vip/",
      },
    })
  )
    .text()
    .then((r) => {
      // console.log(r);

      return eval(r.match(/const\s+urlovo\s*=\s*(`.*?`);/)[1]);
    });

  const resp = await (
    await fetch(urlovo, {
      headers: {
        Referer: "https://vidsrc.vip/",
      },
    })
  ).text();
  const response = await Promise.all([
    (await fetch("https://vid3c.site/subfetch.php?id=" + id)).json(),
    (
      await fetch(urlovo, {
        headers: {
          Referer: "https://vidsrc.vip/",
        },
      })
    ).json(),
  ]);

  const data = {
    sources: Object.values(response[1])
      .filter((value, _) => value != null && value.length > 0)
      .map((e) => ({
        url: e,
        type: e.includes("m3u8") ? "application/x-mpegURL" : "video/mp4",
      })),
    captions: response[0],
  };
  console.log(data);
};

getSource("912649");
