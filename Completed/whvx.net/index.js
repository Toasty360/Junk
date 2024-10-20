const queryParams = new URLSearchParams({
  query: JSON.stringify({
    tmdbId: "872585",
    type: "movie",
  }),
  provider: "astra",
}).toString();

const baseUrl = "https://www.whvx.net";
const baseAPiUrl = "https://api.whvx.net/";
const options = {
  headers: {
    Origin: baseUrl,
  },
};

// https://api.whvx.net/status -> nova / astra
const getSource = async () => {
  try {
    const resourceId = await (
      await fetch(`${baseAPiUrl}search/?${queryParams}`, options)
    )
      .json()
      .then((res) => res.url);
    const source = await (
      await fetch(
        `${baseAPiUrl}source/?${new URLSearchParams({
          resourceId,
          provider: "astra",
        }).toString()}`,
        options
      )
    ).json();
    console.log(JSON.stringify(source, null, 2));
  } catch (error) {
    console.error(error);
  }
};

await getSource();
