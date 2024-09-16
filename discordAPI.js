import axios from "axios";
import { load } from "cheerio";

// (async () => {
//   var url = "http://www.fortunecookiemessage.com/";
//   const resp = await axios(url);
//   const $ = load(resp.data);
//   console.log($(".cookie-link").text());
// })();

// (async () => {
//   var url = "https://aipickupline.fun/?";
//   const resp = await axios(url);
//   const $ = load(resp.data);
//   console.log($("center").text().trim());
// })();

(async () => {
  var url =
    "https://generatorfun.com/code/model/generatorcontent.php?recordtable=generator&gen=Y&itemnumber=10&recordkey=14";
  const resp = await axios(url, {
    headers: {},
  });
  const $ = load(resp.data);
  console.log(
    $("p")
      .map((i, e) => $(e).text().trim())
      .get()
  );
})();
