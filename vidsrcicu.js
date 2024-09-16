(async () => {
  fetch("https://vidsrc.to/embed/movie/823464").then(async (v) => {
    console.log(await v.text());
  });
})();
