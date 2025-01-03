import axios from "axios";

const BASE_URL = "https://rezka-ua.tv/";

const _getData = (x) => {
  const v = {
    file3_separator: "//_//",
    bk0: "$$#!!@#!@##",
    bk1: "^^^!@##!!##",
    bk2: "####^!!##!@@",
    bk3: "@@@@@!##!^^^",
    bk4: "$$!!@$$@^!@#$$@",
  };
  let a = x.substr(2);
  for (let i = 4; i >= 0; i--)
    if (v["bk" + i]) {
      a = a.replace(
        v.file3_separator +
          btoa(
            encodeURIComponent(v["bk" + i]).replace(
              /%([0-9A-F]{2})/g,
              (_, p1) => String.fromCharCode("0x" + p1)
            )
          ),
        ""
      );
    }
  try {
    a = decodeURIComponent(
      atob(a)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch (e) {
    a = "";
  }
  return a.split(",").reduce((m, ele) => {
    const [key, value] = ele.split("]");
    m[key.replace("[", "")] = value;
    return m;
  }, {});
};

function _formatCookies(cookieArray) {
  const cookieString = cookieArray.join("; ");
  const [, phpsessid, dleUserTaken, dleUserToken] = cookieString.match(
    /PHPSESSID=([^;]+);.*dle_user_taken=([^;]+);.*dle_user_token=([^;]+);/
  );
  return `PHPSESSID=${phpsessid}; dle_user_taken=${dleUserTaken}; dle_user_token=${dleUserToken}`;
}

let Max_turns = 2;
const someShit = async (id, cookie) => {
  const resp = await fetch(BASE_URL + id, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      Referer: BASE_URL,
      Cookie: cookie,
    },
  });
  if (!resp.ok) throw new Error("Invalid response");
  const doc = await resp.text();
  const favs = doc.match(/ctrl_favs.*?value=['"](.*?)['"]/)?.[1];
  let _cookie = _formatCookies(resp.headers.getSetCookie());
  if (!favs && Max_turns != 0) {
    console.log("retrieving with cookies", Max_turns);
    Max_turns--;

    return someShit(id, _cookie);
  }
  return {
    _cookie,
    favs,
  };
};

(async () => {
  const { cookie, favs } = await someShit(
    "/films/fiction/68659-chuzhoy-romul-2024"
  );
  console.log(cookie, favs);

  const params = {
    id: 1967,
    translator_id: 238,
    is_director: 0,
    favs: favs,
    is_camrip: 0,
    is_ads: 0,
    action: "get_movie",
  };
  const resp = (
    await axios.post(
      `${BASE_URL}ajax/get_cdn_series/?t=${Date.now()}`,
      new URLSearchParams(params).toString(),
      {
        headers: {
          Cookie: cookie,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Referer: BASE_URL,
        },
      }
    )
  ).data;
  console.log(resp);

  console.log({
    src: _getData(resp.url),
    subtitle: resp.subtitle,
  });
})();
