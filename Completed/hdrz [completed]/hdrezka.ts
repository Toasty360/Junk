const base = "https://rezka-ua.tv/";

interface DataObject {
  [key: string]: string;
}

const getData = (x: string): DataObject => {
  const v: DataObject = {
    file3_separator: "//_//",
    bk0: "$$#!!@#!@##",
    bk1: "^^^!@##!!##",
    bk2: "####^!!##!@@",
    bk3: "@@@@@!##!^^^",
    bk4: "$$!!@$$@^!@#$$@",
  };
  let a: string = x.substr(2);
  for (let i = 4; i >= 0; i--) {
    if (v["bk" + i]) {
      a = a.replace(
        v.file3_separator +
          btoa(
            encodeURIComponent(v["bk" + i]).replace(
              /%([0-9A-F]{2})/g,
              (_, p1) => String.fromCharCode(parseInt("0x" + p1, 16))
            )
          ),
        ""
      );
    }
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
  return a.split(",").reduce((m: any, ele) => {
    const [key, value] = ele.split("]");
    m[key.replace("[", "")] = value
      .split("or")
      .map((v) => ({ url: v.trim(), m3u8: v.includes("m3u8") }));
    return m;
  }, {});
};
function formatCookies(cookieArray: string[]) {
  const cookieString = cookieArray.join("; ");
  const [, phpsessid, dleUserTaken, dleUserToken] = cookieString.match(
    /PHPSESSID=([^;]+);.*dle_user_taken=([^;]+);.*dle_user_token=([^;]+);/
  )!;
  console.log(
    `PHPSESSID=${phpsessid}; dle_user_taken=${dleUserTaken}; dle_user_token=${dleUserToken}`
  );

  return `PHPSESSID=${phpsessid}; dle_user_taken=${dleUserTaken}; dle_user_token=${dleUserToken}`;
}

const initator = async (
  id: string,
  type: "movie" | "series" = "movie",
  _season?: string,
  _episode?: string
): Promise<any> => {
  const params: Record<string, any> = {
    id,
    translator_id: 238,
    action: type !== "movie" ? "get_stream" : "get_movie",
    ...(type !== "movie" && { season: _season || "", episode: _episode || "" }),
  };

  let resp;
  let idk: Headers;

  try {
    // Fetch headers only when needed
    const cookieResponse = await fetch(base, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        Referer: base,
        "x-requested-with": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    idk = cookieResponse.headers;
    console.log(new URLSearchParams(params).toString());

    // Make the POST request
    resp = await fetch(base + "ajax/get_cdn_series/?t=" + Date.now(), {
      method: "POST",
      headers: {
        Cookie: formatCookies(idk.getSetCookie()),
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        Referer: base,
        "x-requested-with": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "id=2886&translator_id=238&is_director=1&favs=43769b40-2c77-45fd-9f5f-e26ac2f4c6c3&action=get_movie",
    });

    // Return structured response
    if (resp.ok) {
      const data = await resp.json();
      if (!data.success) throw new Error(JSON.stringify(data));
      console.log(data);

      return {
        quality: getData(data.url),
        subtitle: data.subtitle
          ? data.subtitle?.split(",").map((e: string) => {
              const [Lang, url] = e.replace("[", "").split("]");
              return { Lang, url };
            })
          : [],
      };
    } else throw new Error("Invalid response");
  } catch (error) {
    console.error("Error in initator:", error);
    // Improve the error handling for API response
    return {
      src: "Not found",
      err: error instanceof Error ? error.message : "Unknown error",
      body: resp?.body,
    };
  }
};

const getMedia = async (id: string): Promise<any> => {
  const resp = await fetch(base + id, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      Referer: base,
    },
  });
  if (!resp.ok) throw new Error("Invalid response");
  const doc = await resp.text();
  const favs = doc.match(/ctrl_favs.*?value=['"](.*?)['"]/)?.[1];
  let cookie = formatCookies(resp.headers.getSetCookie());
  return {
    cookie,
    favs,
  };
};

getMedia("/films/drama/2886-rekviem-po-mechte-2000");
