import axios from "axios";
const embed = "http://vidsrc.stream";
const baseurl = "https://vidsrc.xyz/";
(async function main() {
  var base = baseurl + "embed/movie?tmdb=693134";
  var r = (await axios(base)).data.match(/vidsrc.stream(.*?)"/)[1];
  let resp = await axios.get(embed + r, {
    headers: {
      Cookie: "cf_clearance=;",
      Referer: baseurl,
    },
  });
  var sitekey = resp.data.match(/data-sitekey="(.*?)"/)[1];
  var body = {
    sitekey: sitekey,
    url: embed + r,
    invisible: true,
  };
  var trun = (await axios.post("https://turn.seized.live/solve", body)).data;
  console.log(trun);
  var status = await axios.post(
    "http://vidsrc.stream/rcp_verify",
    {
      token: trun.token,
    },
    {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-GB,en;q=0.6",
        Connection: "keep-alive",
        Host: "vidsrc.stream",
        Referer: "https://vidsrc.xyz/",
        "sec-ch-ua": '"Brave";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "Sec-Fetch-Dest": "iframe",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      },
    }
  );
  console.log(status.data);
})();
