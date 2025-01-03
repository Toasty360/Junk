interface Info {
  title: string;
  year: number;
  type: "movie" | "tv";
  season: number;
  episode: number;
  MovieId: number;
}
const fetchServerUrl = async () => {
  let MovieInfo: Info = {
    title: "Movie Title",
    year: 2023,
    type: "movie",
    season: 1,
    episode: 1,
    MovieId: 912649,
  };

  const BASE_URL = "https://api.vidjoy.pro/rabbit/fetch/";
  let url = BASE_URL + MovieInfo.MovieId;

  if (MovieInfo?.type === "tv") {
    url += `?ss=${MovieInfo.season}&ep=${MovieInfo.episode}&sr=0`;
  } else {
    url += "?sr=0";
  }

  console.log(url);
  const response = await fetch(
    "https://api.vidjoy.pro/rabbit/fetch/912649?sr=0"
  );

  console.log(response);

  if (!response.ok) {
    return null;
  }

  const jsondata = await response.json();
  console.log(jsondata);
  return {
    url: jsondata?.url?.link,
    referer: jsondata?.headers?.Referer,
    subtitle: jsondata?.tracks,
  };
  // } catch (error) {
  //   console.error("Error in fetchServerUrl:", error);
  //   return null;
  // }
};
fetchServerUrl();
// try {
//   const data = await fetchServerUrl();
//   console.log(data);
//   if (data) {
//     setWatchInfo({
//       server: data.url,
//       item: item,
//       referer: data.referer,
//       subtitle: data.subtitle,
//       iframe: false,
//       loading: false,
//     });
//   } else {
//     setWatchInfo({ loading: false });
//   }
// } catch (error) {}
