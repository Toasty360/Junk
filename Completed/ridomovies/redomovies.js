import axios from "axios";

const baseURL = "https://ridomovies.tv/";

const getMovie = async (id) => {
  try {
    const iframe = await axios
      .get(baseURL + "api/movies/" + id)
      .then((v) => v.data.data[0].url.match(/(https.*?)"/)[1]);
    const resp = (await axios.get(iframe, { headers: { Referer: baseURL } }))
      .data;
    return {
      src: atob(resp.match(/aHR0cHM6[^|]*/)[0]),
      Referer: iframe,
    };
  } catch (error) {
    return error.message;
  }
};
const getTv = async (id, season, episode) => {
  try {
    const v = await axios
      .get(baseURL + "tv/" + id + "/season-" + season + "/episode-" + episode)
      .then((v) => v.data.match(/api\/episodes\/(.*?)"/)[1]);
    const iframe = await axios
      .get(baseURL + "api/episodes/" + v)
      .then((v) => v.data.data[0].url.match(/(https.*?)"/)[1]);
    console.log(iframe);
    return {
      src: await axios
        .get(iframe, { headers: { Referer: baseURL } })
        .then((v) => v.data.match(/file:"(.*?)"/)[1]),
      Referer: baseURL,
      iframe,
    };
  } catch (error) {
    return error.message;
  }
};
const main = async () => {
  console.log(await getMovie("damsel-rd5"));
  // console.log(await getTv("what-if-rd2", 1, 1));
};
main();
