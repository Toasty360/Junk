//! Needs proxy

var JuicyCodes = {
  Juice: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Run: function (e) {
    var t = "";
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f = 0;
    e = e.replace(new RegExp("[^A-Za-z0-9+\\/=]", "g"), "");
    while (f < e.length) {
      s = this.Juice.indexOf(e.charAt(f++));
      o = this.Juice.indexOf(e.charAt(f++));
      u = this.Juice.indexOf(e.charAt(f++));
      a = this.Juice.indexOf(e.charAt(f++));
      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;
      t += String.fromCharCode(n);
      if (u != 64) {
        t += String.fromCharCode(r);
      }
      if (a != 64) {
        t += String.fromCharCode(i);
      }
    }
    t = JuicyCodes.utf8(t);
    return t;
  },
  utf8: function (a) {
    var c1,
      c2 = 0;
    for (var b = "", c = 0, d = (c1 = c2 = 0); c < a.length; ) {
      d = a.charCodeAt(c);
      if (d < 128) {
        b += String.fromCharCode(d);
        c++;
      } else if (d > 191 && d < 224) {
        c2 = a.charCodeAt(c + 1);
        b += String.fromCharCode(((d & 31) << 6) | (c2 & 63));
        c += 2;
      } else {
        c2 = a.charCodeAt(c + 1);
        c3 = a.charCodeAt(c + 2);
        b += String.fromCharCode(
          ((d & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        c += 3;
      }
    }
    return b;
  },
  decode: function (list, dif) {
    var s = "";
    list.forEach(function nYUJUhJ(value) {
      s += String.fromCharCode(value - dif);
    });

    return s;
  },
};
const proxy = "http://venus-proxy.vercel.app/";
const getSource = async (id) => {
  try {
    const [list, dif] = await (
      await fetch("https://flixon.ovh/" + id, {
        headers: {
          Referer: "https://onionplay.asia/",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        },
      })
    )
      .text()
      .then((r) => {
        return [
          JSON.parse(r.match(/\[\d.*\]/g)[0]),
          Number(r.match(/parseInt\(value\)\s*-\s*(\d.*?)\)/)[1]),
        ];
      });
    var iframe = JuicyCodes.decode(list, dif).match(
      /location.replace\(['"](.*?)['"]/
    )[1];
    console.log(iframe);

    const juicevalue = await (
      await fetch(iframe, {
        headers: {
          referer: "https://flixon.ovh/",
          "User-Agent":
            " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Upgrade-Insecure-Requests": "1",
        },
      })
    )
      .text()
      .then((r) => {
        console.log("Contains JuicyCodes?", r.includes("JuicyCodes"));
        return eval(r.match(/JuicyCodes.Run\((.*?)\)/)[1]);
      });
    const decodedEval = eval(
      /(eval)(\(function[\s\S]*?)\n/s
        .exec(JuicyCodes.Run(juicevalue))[2]
        .replace("eval", "")
    );

    const link = decodedEval.match(/['"](http.*m3u8[^'"]*)['"]/)[1];
    console.log(link);
    const url = new URL(link);
    url.hostname = "proxy-3.onionflux.best";
    url.pathname = url.pathname;
    const source = {
      url: url.href,
      headers: {
        Referer: iframe,
      },
    };
    console.log(source);
  } catch (error) {
    console.log(error);
  }
};

// const idk = await fetch(link, { headers: { referer: iframe } });
// console.log(idk.headers);

// console.log(await idk.text());

// const url = new URL(link);
// url.hostname = "proxy-3.onionflux.best";
// url.pathname = "/hls" + url.pathname;
// const source = {
//   url: url.href,
//   headers: {
//     Referer: iframe,
//   },
// };
// console.log(source);
// const finalurl =
//   proxy +
//   `proxy?url=${encodeURIComponent(btoa(url.href))}&headers=${btoa(
//     JSON.stringify(source.headers)
//   )}`;

// console.log(finalurl);

// https://flixon.ovh/124364-3-5

// getSource("124364-3-5");
// getSource("976734");
// getSource("912649");
// tt16366836;

getSource("tt16366836");

//lord of the rings
// getSource("tt7631058-1-2"); //error
// getSource("84773-1-2");

// getSource("tt16366836");

// console.log(
//   btoa("https://onionplay.asia/") +
//     "&headers=" +
//     btoa(JSON.stringify({ referer: "https://onionplay.asia/" }))
// );

// https://cdn-2.onionflux.com/wYH-tQAkejG0JSFxbr4_LNww_VQg2l6BwL9XENGPr1r0v3QPZ82ktdDquvjrjy69W3B2YfNa1LSYcDNXYZ5mYQ/yhjKqwR3flG5pbnrLghB25NiJ3lSDf0WqUZJVujOnfY/video.m3u8?token=c5QwU4FMuwZoPSO0359jzWErI4_7jT-IuslwkqPEpVI

// https://cdn-2.onionflux.com/oV0UeMOXMkgIDLBi4maFUMRfQh7r7alTMufPrk_kGEzltPHN6j3zcp8osred79f1Cfw89aNbotw7McWjryN-GA/Fxtrp5SvkyTSPlPTtUYPvxxYdWyD4piVbDzq0Cpe9L0/video.m3u8?token=snONNEm6UZaXWJ-0ZP5GLVEWj_be5vVm6YFUDw0g9KM
