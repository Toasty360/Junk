function extractQualityAndLinks(m3u8Content) {
  const lines = m3u8Content.split("\n");
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXT-X-STREAM-INF")) {
      const resolutionMatch = lines[i].match(/RESOLUTION=(\d+x\d+)/);

      const urlMatch = lines[i + 1].includes("http")
        ? lines[i + 1].match(/\?url=(.*)/)[1]
        : lines[i + 1];

      if (resolutionMatch && urlMatch) {
        const resolution = resolutionMatch[1].split("x").pop();
        var url = decodeURIComponent(urlMatch);
        if (!url.startsWith("http")) {
          url =
            "https://" +
            url.split("base=").pop() +
            url.split("viper").pop().split(".png")[0];
        }
        results.push({ resolution, url });
      }
    }
  }

  return results;
}

const getSource = async () => {
  const data = JSON.parse(
    (
      await (
        await fetch("https://vidlink.pro/embed/movie/1215162", {
          headers: { Referer: "https://soap2dayto.ac/" },
        })
      ).text()
    ).match(/window\.vConfig=({.*?})/)[1]
  );
  var decodedHash = JSON.parse(atob(data.hash.split("").reverse().join("")));
  console.log(decodedHash);

  var resp = await (
    await fetch("https://vidsrc.pro/api/e/" + decodedHash[0].hash, {
      method: "GET",
      headers: {
        Referer: "https://soap2dayto.ac/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      redirect: "follow",
    })
  ).json();
  var links = await (
    await fetch(resp.source, {
      method: "GET",
      headers: {
        Referer: "https://vidsrc.pro/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      redirect: "follow",
    })
  )
    .text()
    .then((resp) => extractQualityAndLinks(resp));
  var download = decodedHash.find((a) => a.name.includes("raze"));
  var downloadurl = `https://vidsrc.pro/download?title=${data.title}&hash=${download?.hash}`;
  var result = {
    soruces: links,
    download: encodeURI(downloadurl),
    subtitles: resp.subtitles,
  };
  console.log(result);
};
getSource();
