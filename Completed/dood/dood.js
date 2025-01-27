//c8nlik7frb4l21nr014vvtwi
const baseurl = "https://d0000d.com/";

function makePlay(token) {
  for (
    var a = "",
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = t.length,
      o = 0;
    10 > o;
    o++
  )
    a += t.charAt(Math.floor(Math.random() * n));

  //? maybe token is dynamically generated. need to check.
  //! It has Cloudflare Turnstile.
  return a + `?token=${token}&expiry=` + Date.now();
}

const fetchData = async (id) => {
  var resp = await (
    await fetch(baseurl + id, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      },
    })
  ).text();

  console.log(/function\s+makePlay\(\)\s*{[^}]*}/.exec(resp)[0]);

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
        src: data + makePlay(resp.match(/['"]\?token=(.*?)\&.*['"]/)[1]),
        Referer: baseurl,
      });
    });
};
fetchData("/e/uc28xb0bvj3p");
