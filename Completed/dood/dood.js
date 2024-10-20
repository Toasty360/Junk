function makePlay() {
  for (
    var a = "",
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = t.length,
      o = 0;
    10 > o;
    o++
  )
    a += t.charAt(Math.floor(Math.random() * n));
  return a + "?token=c8nlik7frb4l21nr014vvtwi&expiry=" + Date.now();
}

const baseurl = "https://d0000d.com/";

const fetchm3u8 = async (id) => {
  fetch(baseurl + id)
    .then((r) => r.text())
    .then((data) => {
      fetch(
        baseurl + "/pass_md5/" + /\$.get\('\/pass_md5\/([^']+)'/.exec(data)[1],
        {
          headers: {
            Referer: baseurl,
          },
        }
      )
        .then((r) => r.text())
        .then((data) => {
          console.log({
            src: data + makePlay(),
            Referer: baseurl,
          });
        });
    });
};
// fetchm3u8("/e/1kih2jr7oq11");
//azm.to only movies

// var CSRF_TOKEN = "m0PU2q0QW8BP9xZc3LynptAiCbY4ePJjxnKpPbtY";
// var link =
//   "CRUVERJbTk4FEwgXBE8GDg4GDQRPAg4MTg4RBA9eCAVcUA07BQgjJDMxDwoyJTssFzIZN1FWBiwpKzRYKyoNVFk0HQkYBRMAGQ==";

// fetch("https://ww1.streamm4u.com/anhjax", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body:
//     "_token=" +
//     encodeURIComponent(CSRF_TOKEN) +
//     "&m4u=" +
//     encodeURIComponent(link),
// })
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (dataReturn) {
//     console.log(dataReturn);
//   })
//   .catch(function (error) {
//     console.error("Error:", error);
//   });

const fetchData = async (id) => {
  var resp = await (await fetch(baseurl + id)).text();
  eval(/function\s+makePlay\(\)\s*{[^}]*}/.exec(resp)[0]);
  fetch(
    baseurl + "/pass_md5/" + /\$.get\('\/pass_md5\/([^']+)'/.exec(resp)[1],
    {
      headers: {
        Referer: baseurl,
      },
    }
  )
    .then((r) => r.text())
    .then((data) => {
      console.log({
        src: data + makePlay(),
        Referer: baseurl,
      });
    });
};
fetchData("/e/s1hp5q6djyim");
