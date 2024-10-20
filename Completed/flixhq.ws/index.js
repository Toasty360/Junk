const baseUrl = "https://flixhq.ws/";
const getSource = async (id) => {
  try {
    const [subUrl, plUrl] = await (await fetch(baseUrl + id))
      .text()
      .then((resp) => {
        return [
          resp.match(/const\s*url\s*=\s*['"](.*?)['"]/)[1],
          resp.match(/const\s*pl_url\s*=\s*['"](.*?)['"]/)[1],
        ];
      });
    const [captions, providers] = await Promise.all([
      (await fetch(subUrl)).json(),
      (await fetch(plUrl)).text(),
    ]);
    const iframe = await (
      await fetch(providers.match(/data-id=["'](.*?)['"]/)[1], {
        headers: {
          Referer: baseUrl,
        },
      })
    )
      .text()
      .then((resp) => resp.match(/iframe.*src=['"](.*?)['"]/)[1]);
    const url = await (await fetch(iframe))
      .text()
      .then(
        (r) =>
          eval(
            /(eval)(\(function[\s\S]*?)(<\/script>)/s
              .exec(r)[2]
              .replace("eval", "")
          ).match(/['"](http.*m3u8.*?)['"]/)[1]
      );
    const result = {
      url,
      captions: captions,
      headers: { referer: iframe },
    };
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// getSource("movie/deadpool-wolverine-06597/");
getSource("series/the-lord-of-the-rings-the-rings-of-power-11963/2-1/");
