import { load } from "cheerio";
class videosrc {
  baseURL = "https://vidsrc.xyz/embed/";
  headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
    Referer: "https://vidsrc.xyz/",
    Cookie:
      "cf_clearance=.ETqVYe_FZLnbOzmCPOUvrx2DGabjWThjSYwQwoE5KI-1735449830-1.2.1.1-Alc2nlYHXWpywJaG5fOlT0fGfkuDI_aRf6ziN.2Eu7s8m8D_B3.iq.rZhoGH__CJB8fQVSDMnzo5LsNiJcpVoLZ8NhZpK_WqaSwVcQRTtPvuxnCfikmcFI3pMlhvtI1Q_Dg9CzJDRMuMboJ60zDUa2QIdI1YDMmnVOXfeIaNILBeY8RE_Wwme51VxonzzJY6d6GOZ3191w_dtil.gweBizdrlELAQiuhEmD406FcaViAie8DIA.gEIsdoMlztnUSOtYq4I9BalsYXR3NdhcLZhOAr3jibu.B.LJnIa2WeMdGo5G7PLpFgEF4jU9EsEnOtqD5yATCV3anSD.SGXCGP7NF3S8Kw3pt5njVpM6OpIA",
  };
  _decryptMethods = {
    TsA2KGDGux: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      const base64String = reversedString.replace(/-/g, "+").replace(/_/g, "/");
      const decodedString = atob(base64String);
      let result = "";
      const shift = 7;
      for (let i = 0; i < decodedString.length; i++) {
        result += String.fromCharCode(decodedString.charCodeAt(i) - shift);
      }
      return result;
    },

    ux8qjPHC66: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      const hexPairs = reversedString
        .match(/.{1,2}/g)
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
      const key = "X9a(O;FMV2-7VO5x;Ao:dN1NoFs?j,";
      let result = "";
      for (let i = 0; i < hexPairs.length; i++) {
        result += String.fromCharCode(
          hexPairs.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
      }
      return result;
    },

    xTyBxQyGTA: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      let result = "";
      for (let i = 0; i < reversedString.length; i += 2) {
        result += reversedString[i];
      }
      return atob(result);
    },

    IhWrImMIGL: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      const rot13String = reversedString.replace(/[a-zA-Z]/g, (char) => {
        return String.fromCharCode(
          char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
        );
      });
      const finalReversedString = rot13String.split("").reverse().join("");
      return atob(finalReversedString);
    },

    o2VSUnjnZl: (inputString) => {
      const substitutionMap = {
        x: "a",
        y: "b",
        z: "c",
        a: "d",
        b: "e",
        c: "f",
        d: "g",
        e: "h",
        f: "i",
        g: "j",
        h: "k",
        i: "l",
        j: "m",
        k: "n",
        l: "o",
        m: "p",
        n: "q",
        o: "r",
        p: "s",
        q: "t",
        r: "u",
        s: "v",
        t: "w",
        u: "x",
        v: "y",
        w: "z",
        X: "A",
        Y: "B",
        Z: "C",
        A: "D",
        B: "E",
        C: "F",
        D: "G",
        E: "H",
        F: "I",
        G: "J",
        H: "K",
        I: "L",
        J: "M",
        K: "N",
        L: "O",
        M: "P",
        N: "Q",
        O: "R",
        P: "S",
        Q: "T",
        R: "U",
        S: "V",
        T: "W",
        U: "X",
        V: "Y",
        W: "Z",
      };
      return inputString.replace(
        /[xyzabcdefghijklmnopqrstuvwXYZABCDEFGHIJKLMNOPQRSTUVW]/g,
        (char) => {
          return substitutionMap[char];
        }
      );
    },

    eSfH1IRMyL: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      let shiftedString = "";
      for (let i = 0; i < reversedString.length; i++) {
        shiftedString += String.fromCharCode(reversedString.charCodeAt(i) - 1);
      }
      let result = "";
      for (let i = 0; i < shiftedString.length; i += 2) {
        result += String.fromCharCode(parseInt(shiftedString.substr(i, 2), 16));
      }
      return result;
    },

    Oi3v1dAlaM: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      const base64String = reversedString.replace(/-/g, "+").replace(/_/g, "/");
      const decodedString = atob(base64String);
      let result = "";
      const shift = 5;
      for (let i = 0; i < decodedString.length; i++) {
        result += String.fromCharCode(decodedString.charCodeAt(i) - shift);
      }
      return result;
    },

    sXnL9MQIry: (inputString) => {
      const xorKey = "pWB9V)[*4I`nJpp?ozyB~dbr9yt!_n4u";
      let decrypted = "";
      const hexDecoded = inputString
        .match(/.{1,2}/g)
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
      for (let i = 0; i < hexDecoded.length; i++) {
        decrypted += String.fromCharCode(
          hexDecoded.charCodeAt(i) ^ xorKey.charCodeAt(i % xorKey.length)
        );
      }
      let shifted = "";
      for (let i = 0; i < decrypted.length; i++) {
        shifted += String.fromCharCode(decrypted.charCodeAt(i) - 3);
      }

      return atob(shifted);
    },

    JoAHUMCLXV: (inputString) => {
      const reversedString = inputString.split("").reverse().join("");
      const base64String = reversedString.replace(/-/g, "+").replace(/_/g, "/");
      const decodedString = atob(base64String);
      let result = "";
      const shift = 3;
      for (let i = 0; i < decodedString.length; i++) {
        result += String.fromCharCode(decodedString.charCodeAt(i) - shift);
      }
      return result;
    },
    KJHidj7det: (input) => {
      const decoded = atob(input.slice(10, -16));
      const key = '3SAY~#%Y(V%>5d/Yg"$G[Lh1rK4a;7ok';

      const extendedKey = key
        .repeat(Math.ceil(decoded.length / key.length))
        .substring(0, decoded.length);

      let result = "";
      for (let i = 0; i < decoded.length; i++) {
        result += String.fromCharCode(
          decoded.charCodeAt(i) ^ extendedKey.charCodeAt(i)
        );
      }
      return result;
    },
    playerjs: (x) => {
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
            "*,4).(_)()",
            "33-*.4/9[6",
            ":]&*1@@1=&",
            "=(=:19705/",
            "%?6497.[:4",
          ].reduce((acc, k) => acc.replace("/@#@/" + `${b1(k)}`, ""), a)
        );
        return a;
      } catch (err) {
        console.log("faild to decode error: " + err);
      }
    },
  };

  fetchSource = async (id, type, sid, eid) => {
    var url = `${this.baseURL}${
      type != "TV"
        ? `movie?${id.startsWith("tt") ? "imdb" : "tmdb"}=${id}`
        : `tv?${
            id.startsWith("tt") ? "imdb" : "tmdb"
          }=${id}&season=${sid}&episode=${eid}`
    }`;

    const urlRCP = await fetch(url)
      .then((resp) => resp.text())
      .then((resp) => {
        let match = resp.match(/src="(.*?)"/)[1];
        if (match == undefined || match == "") {
          throw new Error("No source found");
        }
        if (match.startsWith("http")) return match;
        else if (match.startsWith("/embed"))
          return this.baseURL.split("/embed")[0] + match;
        else return "https:" + match;
      });

    //! Enabled turnstile
    const urlPRORCP = await fetch(urlRCP, {
      headers: { ...this.headers, Referer: url },
    })
      .then((resp) => resp.text())
      .then(async (resp) => {
        console.log(resp);
        return (
          urlRCP.split("rcp")[0] + resp.match(/src.*['"](\/prorcp.*?)['"]/)[1]
        );
      });

    const encryptedURLNode = await fetch(urlPRORCP, {
      headers: {
        ...this.headers,
        Referer: urlRCP,
      },
    })
      .then((resp) => resp.text())
      .then((text) => {
        var temp = text.match(/Playerjs\({.*file:"(.*?)",.*?}\)/)?.[1];
        if (temp != undefined && temp != "") {
          return { id: "playerjs", content: temp };
        }
        const $ = load(text);
        const node = $("#reporting_content").next();
        return { id: node.attr("id"), content: node.text() };
      });
    var source = {
      source: this._decryptMethods[encryptedURLNode.id](
        encryptedURLNode.content
      ),
      Referer: urlRCP.split("rcp")[0],
    };
    console.log(source);

    return source;
  };
}
// new videosrc().fetchSource(1241982, "MOVIE");
new videosrc().fetchSource("tt5180504", "TV", 1, 2);
// new videosrc().fetchSource("tt6263850", "MOVIE");

// TsA2KGDGux = faild == working;
// ux8qjPHC66 = faild == working
// xTyBxQyGTA = faild == working
// IhWrImMIGL = done == working
// o2VSUnjnZl = done == working
// eSfH1IRMyL = faild == working
// Oi3v1dAlaM = faild (contains - and _) == working
// sXnL9MQIry = done == working
// JoAHUMCLXV = faild == working

// KJHidj7det = faild == working

// const getData = (x) => {
//   let sources = [];
//   try {
//     var a = x.substr(2);
//     const b1 = (str) =>
//       btoa(
//         encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
//           String.fromCharCode("0x" + p1)
//         )
//       );

//     const b2 = (str) =>
//       decodeURIComponent(
//         atob(str)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       );
//     a = b2(
//       [
//         "*,4).(_)()",
//         "33-*.4/9[6",
//         ":]&*1@@1=&",
//         "=(=:19705/",
//         "%?6497.[:4",
//       ].reduce((acc, k) => acc.replace("/@#@/" + `${b1(k)}`, ""), a)
//     );
//     console.log(a);

//     sources = [...a.matchAll(/(https.*?),/g)].map((match) =>
//       match[1].replace(/\\/g, "")
//     );
//     console.log(sources);

//     return sources;
//   } catch (e) {
//     console.log(e);
//   }
//   return sources;
// };

// https://vidsrc.xyz/embed/tv?imdb=tt5180504?season=1&episode=2
// https://vidsrc.xyz/embed/tv?imdb=tt5180504&season=1&episode=1&color=e600e6
