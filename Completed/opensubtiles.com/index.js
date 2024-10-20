const baseUrl =
  "https://rest.opensubtitles.org/search/episode-6/imdbid-1405406/season-6/sublanguageid-eng";

var options = {
  method: "GET",
  headers: {
    "X-User-Agent": "trailers.to-UA",
  },
};
const getSubs = async () => {
  const subs = await (await fetch(baseUrl, options)).json();
  const resp = await (await fetch(subs[0].SubDownloadLink)).text();
  console.log(resp);
};

getSubs();
