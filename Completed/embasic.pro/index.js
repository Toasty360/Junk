//! trash
import { load } from "cheerio";

class AsianLoad {
  baseURL = "https://embasic.pro/";

  getRecent = async () => {
    const resp = await (await fetch(this.baseURL)).text();
    const $ = load(resp);
    let data = $("li.video-block")
      .map((i, ele) => {
        let id = $(ele).find("a").attr("href").split("/").pop();
        let [name, episode] = $(ele).find("a div.name").text().split("Episode");
        return {
          title: name?.trim(),
          episode: episode?.trim(),
          id: id.split("-episode")[0],
          episodeId: id,
          image: $(ele).find("img").attr("src"),
          time: new Date($(ele).find("a > div.meta > span").text().trim()),
        };
      })
      .get();
    return data;
  };
}

new AsianLoad().getRecent();

export default AsianLoad;
