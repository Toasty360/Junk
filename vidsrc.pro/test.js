(async () => {
  var data = await (
    await fetch("https://hugo.vidlink.pro/api/movie/786892")
  ).json();
  //   console.log(JSON.parse(data));
  console.log(data);
  console.log(data.stream.captions[0]);
})();
