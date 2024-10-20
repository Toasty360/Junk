var x =
  "#9aHR0cHM6Ly9hcHAuc/@#@/PSg9OjE5NzA1Lw==HV0Z2F0ZS5vcmcvY2Rucy9INHNJQUFBQUFBQUFBd1hCMlk2Q01CUUEwRl9xTFcyd0p2TmcxR0k2VWdOMmdiNTFVUm5BQVdPaWhxXzNIRW9EUWl4Yzh3dWhGTkVjY0/@#@/J/@#@/MzMtKi40LzlbNg==T82NDk3Lls6NA==piRGlsQ2ZNNFFJRGVzRTg4a2VaTzNNX0dpemhCV0daNFNFVzB3Z0ZoVVlEWDIxYkRMNUw3YXB2MUduYnFUa3NfOWR1c2x4TWRTTlBBYk0ydFRNRHc4VDFNUHE1Y2JrTGVkQzR6ZXhGbVRRbmZJ/@#@/Ol0mKjFAQDE9Jg==d2l1UFNMYVhlbzJDNExrMzVjWGZtVk5FTkFTb1VqUnp0SDZ0TXdRclYxRlBrUnNTZF9raHMucWpIODZuWl8zd0/@#@/Kiw0KS4oXykoKQ==JGOFRZVnMwQUFBQS0vbGlzdC5tM3U4";
// var v = {
//   bk4: "*,4).(_)()",
//   bk3: "33-*.4/9[6",
//   bk2: ":]&*1@@1=&",
//   bk1: "=(=:19705/",
//   bk0: "%?6497.[:4",
// };
// var a = x.substr(2);
// for (var i = 4; i > -1; i--) {
//   if (v["bk" + i] != "") {
//     a = a.replace("/@#@/" + b1(v["bk" + i]), "");
//   }
// }
// try {
//   a = b2(a);
// } catch (e) {
//   a = "";
// }
// function b1(str) {
//   return btoa(
//     encodeURIComponent(str).replace(
//       /%([0-9A-F]{2})/g,
//       function toSolidBytes(match, p1) {
//         return String.fromCharCode("0x" + p1);
//       }
//     )
//   );
// }
// function b2(str) {
//   return decodeURIComponent(
//     atob(str)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
// }

// console.log(a);

const getData = (x) => {
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
        "*,4).(_)()",
        "33-*.4/9[6",
        ":]&*1@@1=&",
        "=(=:19705/",
        "%?6497.[:4",
      ].reduce((acc, k) => acc.replace("/@#@/" + `${b1(k)}`, ""), a)
    );
    console.log(a);

    sources = [...a.matchAll(/(https.*?),/g)].map((match) =>
      match[1].replace(/\\/g, "")
    );
    console.log(sources);

    return sources;
  } catch (e) {
    console.log(e);
  }
  return sources;
};

getData(x);
