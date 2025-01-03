const baseUrl = "https://embed.su/";

const stringReverse = (s) => s.split("").reverse().join("");

const getSource = async () => {
  const vconfig = await (
    await fetch(baseUrl + "embed/movie/872585", {
      headers: { Referer: "https://embed.su/" },
    })
  )
    .text()
    .then((resp) => JSON.parse(atob(resp.match(/atob\(['"`](.*?)['"`]\)/)[1])));
  var encodedHash = atob(vconfig.hash);
  let decodedHash = atob(
    stringReverse(
      encodedHash
        .split(".")
        .map((item) => stringReverse(item))
        .join("")
    )
  );

  let { name, hash } = JSON.parse(decodedHash)[0];

  let sources = await (
    await fetch(baseUrl + "api/e/" + hash, {
      headers: { Referer: "https://embed.su/" },
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
    })
  ).json();
  sources["source"] = "https:/" + sources["source"].split(name).pop();
  console.log(sources);
};

getSource();
