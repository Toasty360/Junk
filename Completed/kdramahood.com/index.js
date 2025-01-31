const main = async (id) => {
  const resp = await (await fetch("https://kdramahood.com/nt/" + id))
    .text()
    .then((r) =>
      r
        .match(/playerInstance5\.setup\(({.*?})\);/s)?.[1]
        .replace(/[\t\s]/g, "")
        .replace(/,}/g, "}")
        .replace(/\'/g, '"')
        .replace(/(\b[a-zA-Z_]+\b)(?=\s*:)/g, '"$1"')
        .replace(/""https":/g, '"https:')
        .replace(/(true|false|null)/g, (match) => match.toLowerCase())
    );

  if (!resp) return;
  const { sources, tracks } = JSON.parse(resp);
  console.log({
    sources,
    tracks,
  });
};

main("weak-hero-class-1-ep-8");
