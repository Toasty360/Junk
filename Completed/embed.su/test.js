(async () => {
  var data = await await fetch("https://vidsrc.cc/v2/embed/tv/124364/2/5", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
  });
  //   console.log(JSON.parse(data));
  console.log(await data.text());
})();
