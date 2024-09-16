import axios from "axios";

//! you silly it won't work cus they saving your ip address. it won't work unless you open the website.

var baseURL = "https://1hd.to/";
const getSources = async (id) => {
  const { data } = await axios.get(
    baseURL + "ajax/movie/episode/servers/" + id,
    { headers: { Referer: baseURL } }
  );
  const iframe = await (
    await axios.get(
      baseURL +
        "ajax/movie/episode/server/sources/" +
        data.match(/data-id="(.*?)"/)[1]
    )
  ).data["data"]["link"];
  var source = (
    await axios.get(
      "https://megacloud.tv/embed-1/ajax/e-1/getSources?id=" +
        iframe.match(/\/([^\/?]+)\?a/)[1],
      {
        headers: { Referer: iframe, "X-Requested-With": "XMLHttpRequest" },
      }
    )
  ).data;
  console.log(source);
};

(async () => {
  var resp = await axios.get(baseURL);
  console.log(resp.headers);
})();

// getSources("1434400");
