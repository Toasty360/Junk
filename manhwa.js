import axios from "axios";
import { load } from "cheerio";

(async () => {
  const { data } = await axios.get(
    "https://manhwatop.com/manga/return-of-the-flowery-mountain-sect-series/chapter-122/",
    {
      headers: {
        Referer:
          "https://manhwatop.com/manga/return-of-the-flowery-mountain-sect-series/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Cookie: "cf_clearance=",
      },
    }
  );
  var images = load(data)(".reading-content > img")
    .map((i, img) => img.attribs["data-src"])
    .get();
  console.log(images);
})();
