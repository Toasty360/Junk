import express from "express";
const app = express();
const port = 3000;

const JuicyCodes = {
  Juice: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Run: function (e) {
    let t = "";
    let n,
      r,
      i,
      s,
      o,
      u,
      a,
      f = 0;

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
      if (u !== 64) t += String.fromCharCode(r);
      if (a !== 64) t += String.fromCharCode(i);
    }
    return this.utf8(t);
  },
  utf8: function (a) {
    let b = "",
      c = 0,
      d;
    while (c < a.length) {
      d = a.charCodeAt(c);
      if (d < 128) {
        b += String.fromCharCode(d);
        c++;
      } else if (d > 191 && d < 224) {
        b += String.fromCharCode(((d & 31) << 6) | (a.charCodeAt(c + 1) & 63));
        c += 2;
      } else {
        b += String.fromCharCode(
          ((d & 15) << 12) |
            ((a.charCodeAt(c + 1) & 63) << 6) |
            (a.charCodeAt(c + 2) & 63)
        );
        c += 3;
      }
    }
    return b;
  },
  decode: function (list, dif) {
    let s = "";
    list.forEach((value) => {
      s += String.fromCharCode(value - dif);
    });
    return s;
  },
};

const getSource = async (id) => {
  const [list, dif] = await (
    await fetch("https://flixon.click/" + id, {
      headers: {
        Referer: "https://onionplay.asia/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
    })
  )
    .text()
    .then((r) => {
      console.log(r);

      return [
        JSON.parse(r.match(/\[\d.*\]/g)[0]),
        Number(r.match(/parseInt\(value\)\s*-\s*(.*?)\)/)[1]),
      ];
    });

  const iframe = JuicyCodes.decode(list, dif).match(
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
    .then((r) => eval(r.match(/JuicyCodes.Run\((.*?)\)/)[1]));

  const link = eval(
    /(eval)(\(function[\s\S]*?)\n/s
      .exec(JuicyCodes.Run(juicevalue))[2]
      .replace("eval", "")
  ).match(/['"](http.*m3u8.*?)['"]/)[1];

  return {
    url: "https://proxy-3.onionflux.best" + new URL(link).pathname,
    headers: {
      Referer: iframe,
    },
  };
};

app.get("/source/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const source = await getSource(id);
    res.json(source);
  } catch (error) {
    console.log(error);

    res.status(500).json("Media not available");
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
