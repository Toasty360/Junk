function extractQualityAndLinks(m3u8Content) {
  const lines = m3u8Content.split("\n");
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXT-X-STREAM-INF")) {
      const resolutionMatch = lines[i].match(/RESOLUTION=(\d+x\d+)/);
      const urlMatch = lines[i + 1].match(/\?url=(.*)/);

      if (resolutionMatch && urlMatch) {
        const resolution = resolutionMatch[1];
        const url = decodeURIComponent(urlMatch[1]);

        results.push({ resolution, url });
      }
    }
  }

  console.log(results);
  return results;
}

const fetchWithRetry = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};

const getSource = async () => {
  try {
    var hashResponse = await fetch("https://vidsrc.pro/embed/tv/76479/1/2", {
      headers: {
        Referer: "https://soap2dayto.ac/",
      },
    }).then((resp) => resp.text());

    const decodedHash = JSON.parse(
      atob(
        JSON.parse(hashResponse.match(/window\.vConfig=({.*?})/)[1])
          .hash.split("")
          .reverse()
          .join("")
      )
    );
    const hashToUse = await fetchWithRetry(
      "https://vidsrc.pro/api/e/" + decodedHash[0].hash,
      {
        headers: {
          Referer: "https://soap2dayto.ac/",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        },
        redirect: "follow",
      }
    ).catch(async () => {
      return await fetchWithRetry(
        "https://vidsrc.pro/api/e/" + decodedHash[1].hash,
        {
          headers: {
            Referer: "https://soap2dayto.ac/",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          },
          redirect: "follow",
        }
      );
    });

    const linksResponse = await fetchWithRetry(hashToUse.source);
    const linksText = await linksResponse.text();

    extractQualityAndLinks(linksText);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

getSource();
