//! vrf is used (dummy) -- slow response (17.3 seconds)

//vidsrc.cc/v2/embed/tv/124364/1/5

const baseurl = "https://vidsrc.cc/";
const proxy = "https://val-proxy.vercel.app/cors?";
var options = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
  },
};

const getSource = async (movieId, isMovie, season, episode) => {
  const mediaurl =
    baseurl +
    "v2/embed/" +
    (isMovie ? `movie/${movieId}` : `tv/${movieId}/${season}/${episode}`);
  console.log(mediaurl);

  const [title, id, v] = await (
    await fetch(mediaurl, { ...options, mode: "no-cors" })
  )
    .text()
    .then((resp) => {
      return [
        resp.match(/<title>(.*?)<\/title>/)[1],
        resp.match(/data-id="(.*?)"/g)[1].split('"')[1],
        resp.match(/var\s*v\s*=\s*"(.*?)"/)[1],
      ];
    });

  console.log(title, id, v);

  const params = new URLSearchParams({
    id: movieId,
    type: isMovie ? "movie" : "tv",
    v,
    vrf: "uwu",
    isMobile: false,
    ...(isMovie ? {} : { season, episode }),
  });
  // console.log(baseurl + `api/episodes/${id}/servers?${params}`);

  var { data } = await (
    await fetch(baseurl + `api/episodes/${id}/servers?${params}`, options)
  ).json();
  // console.log(data);
  // var referer = `${baseurl}upcloud/e/${item.hash}?init=true&key=${v}`;
  // data.forEach(async (item, index) => {
  //   options.headers.Referer = `${baseurl}${item.name.toLowerCase()}/e/${
  //     item.hash
  //   }?init=true&key=${v}`;
  //   let source = (
  //     await (await fetch(baseurl + "api/source/" + item.hash, options)).json()
  //   ).data;
  //   console.log(item.name, source);
  // });
  let hash = data.find((source) => source.name === "UpCloud").hash;
  // console.log(baseurl + "api/source/" + hash, options);
  // console.log(hash);

  options.headers.Referer = `${baseurl}upcloud/e/${hash}?init=true&key=${v}`;
  const source = (
    await (await fetch(baseurl + "api/source/" + hash, options)).json()
  ).data;

  console.log({
    referer: options.headers.Referer,
    provider: "Upcloud",
    ...source,
  });

  // var finalurl =
  //   proxy +
  //   new URLSearchParams({
  //     url: source.source,
  //     headers: `{"referer":${baseurl},"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"}`,
  //   });
  // console.log(finalurl);
};

console.time("myTimer");
// await getSource(385687, true);
await getSource(76479, false, 1, 1);
console.timeEnd("myTimer");
// ("id=124364&type=tv&season=1&episode=5");
// https://vidsrc.cc/v2/embed/movie/385687
// https://vidsrc.cc/api/episodes/8272/servers?id=385687&type=movie&v=RmFzdCBYXzIwMjNfbnVsbA==&isMobile=false&vrf=MHZ2eTVGeFc%3D

//   console.log(
//     `${baseurl}vidplay/e/${hash}?init=true&key=${btoa(`${movieId}-${id}`)}`
//   );
//   let newHash = await (
//     await fetch(
//       `${baseurl}vidplay/e/${hash}?init=true&key=${btoa(`${movieId}-${id}`)}`,
//       {
//         headers: {
//           Referer: baseurl,
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
//         },
//       }
//     )
//   )
//     .text()
//     .then((resp) => {
//       console.log(resp);
//       return resp.match(/hash="(.*?)"/)[1];
//     });
//   console.log("is same hash?", newHash == hash);
//   hash = newHash;
//   console.log(baseurl + "source/" + hash + "?t=" + Date.now());
