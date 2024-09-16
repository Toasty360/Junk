//? video links are not playable maybe cus it's IP protected

const getLinks = async (id) => {
  var resp = await fetch("https://flixtor.to" + id);
  var cookie = resp.headers.get("set-cookie");
  var movieID = id.split("/").reverse()[1];
  var url = "https://flixtor.to/ajax/v4/m/46112786?_=" + new Date().getTime;
  var g = await fetch(url, {
    headers: {
      Referer:
        "https://flixtor.to/watch/movie/46112786/godzilla-x-kong-the-new-empire",
      "X-Requested-With": "XMLHttpRequest",
      Cookie:
        cookie +
        "; _pk_id.1.6ee3=e8c493139aa2c07a.1628233034.; _pk_ses.1.6ee3=1",
    },
  }).then((response) => response.text());
  var h = decodeURIComponent(
    escape(
      atob(
        g.replace(/[a-zA-Z]/g, function (e) {
          return String.fromCharCode(
            ("Z" >= e ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26
          );
        })
      )
    )
  );
  for (var l = [], m = 0; m < h.length; m++) {
    var p = h.charCodeAt(m);
    l[m] =
      33 <= p && 126 >= p
        ? String.fromCharCode(33 + ((p + 14) % 94))
        : String.fromCharCode(p);
  }
  h = JSON.parse(l.join(""));
  console.log(h);
};

getLinks("/watch/movie/46112786/godzilla-x-kong-the-new-empire");
