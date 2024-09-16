import axios from "axios";
function deobfstr(data, id) {
  id = id.toString();
  let src = "";

  for (let i = 0; i < data.length; i += 2) {
    src += String.fromCharCode(
      parseInt(data.substr(i, 2), 16) ^ id.charCodeAt((i / 2) % id.length)
    );
  }
  return src;
}

console.log(
  deobfstr(
    "Dqw6nfuzf7Wyc1KQ0ZCnZcO1ZKR1cBNRJPTSk0ORtCBjlRAFZfDh1WPW86EU4KKlwkQF9YO0E8EA1scygFKXAzCnUgenYuHAAXcQ5IYGgbeRcVeAwVXgojUUcmExkvdwcjBCdNRyhdRGcqGAtKaG0fIRxaQS57LTNnfhc4EyF4IH5zC18AKQVrCzQXTRRvGmQYSVxgAmVvFkpwJWI8JVNDEkcDVVQqWwFqFw8VGlcoZ2ZtVkMRRwotaXc1KBkyBTQsdQx/eBcBQAw0bApJdmtPIEt0QiZNKFZVUz82G0ZSATp5I11yAgdxCRZrFEJoDVBmfAYGMVU/VUNzFWonIkVcLkxTfHkwCX07KCMzQHcfTiZcdXRTeDgibk10aTkRdwIAdTlffl49fCkRME9iYQMZZ3AKXgtlGF5SdREdIzFVRgxeEQNhODpRFW8cS0UTNREOEW90FBo+UXoVIy0UH0YgEUYIQ0IlDWA0JDo3QBw4RTVWClMoSig+T1J3Ey0GAAMffCRPAFxTXDRvPzZ3VDQaDGd6YwBKHRNIRQQqHzdwOiUHLgJzPjp2EgAYUw4KNEklUVtHSkJqEho=6DmsEYr6iw3UakbA",
    "KJHidj7det"
  )
);

const videosrc = async (id) => {
  var base = `https://vidsrc.xyz/embed/${id}`;
  var r = await (await fetch(base)).text();
  var resp = await (await fetch("https:" + r.match(/src="(.*?)"/)[1])).text();
};
// videosrc("movie?tmdb=693134");
// console.log(r.match(/data-hash="(.*?)"/)[1]);
// console.log(deobfstr(r.match(/data-hash="(.*?)"/)[1], id));

//   var link = await axios
//     .get("http://vidsrc.stream" + r.match(/vidsrc.stream(.*?)"/)[1], {
//       headers: {
//         Cookie: "cf_clearance=;",
//         Referer: "https://vidsrc.xyz/",
//       },
//     })
//     .then((resp) => resp.config.url);
//   console.log(link);
