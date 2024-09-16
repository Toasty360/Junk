import axios from "axios";
const baseURL = "https://content.kinoprofi.club/";
const getData = async (x) => {
  let sources = [];
  try {
    var a = x.substr(2);
    const b1 = (str) =>
      btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
          String.fromCharCode("0x" + p1)
        )
      );
    const b2 = (str) =>
      decodeURIComponent(
        atob(str)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
    a = b2(
      [
        "RyTwtf15_GLEsXxnpU4Ljjd0ReY-VH",
        "6-xQWMh7ertLp8t_M9huUDk1M0VrYJ",
        "kzuOYQqB_QSOL-xzN_Kz3kkgkHhHit",
        "md-Od2G9RWOgSa5HoBSSbWrCyIqQyY",
        "wNp2wBTNcPRQvTC0_CpxCsq_8T1u9Q",
      ].reduce((acc, k) => acc.replace(`//${b1(k)}`, ""), a)
    );
    sources = [...a.matchAll(/(https.*?),/g)].map((match) =>
      match[1].replace(/\\/g, "")
    );
    return sources;
  } catch (e) {
    console.log("Got rate limit exception");
  }
  return sources;
};

const main = async (id) => {
  const resp = (
    await axios.get(`https://content.kinoprofi.club/${id}.html`, {
      headers: { referer: baseURL },
    })
  ).data;
  const { data } = await axios.get(resp.match(/(https.*?cdnmovies.*?)"/)[1], {
    headers: { referer: baseURL },
  });
  const match = data.match(/data-page="(.*?)"/);
  if (match) {
    return getData(JSON.parse(match[1].replace(/&quot;/g, '"')).props.player);
  } else {
    console.log("Data-page attribute not found.");
  }
};
console.log(await main("49285-ad-zhenshchiny-2019"));
