//? use their api to get data.
//! They provide mp4 links. and it needs cors proxy
(async () => {
  const resp = await (
    await fetch("https://kisskh.co/api/DramaList/Episode/169986.png")
  ).text();

  console.log(resp);
})();
