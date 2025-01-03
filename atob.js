// // var encodedString;
// // var decodedString = atob(encodedString);
// // console.log(decodedString); // This will output the decoded string

// // var encodedString =
// //   "eyJ0aXRsZSI6Ik9wcGVuaGVpbWVyIDIwMjMiLCJzZXJ2ZXIiOiJ2aXBlciIsInJlZiI6Imh0dHBzOi8vZW1iZWQuc3UvIiwieGlkIjoiOFNkejVDWmxKV2JsOXlMNk1IYzBSSGEiLCJ1d3VJZCI6ImNtRnBhMmxxWVhWellTNXVaWFF2TlM4M056WXpOemN3IiwiZXBpc29kZUlkIjoibTo4NzI1ODU6MToxIiwiaGFzaCI6ImQxbklvdFdVanBXT0lwVk14c0dSNVJHU1NaMmFTeFVWNGwyUTRvbE1tQlZNblJXTWFCRFppaEhTQjlGY1JabUk2SUNhekZHYWl3aUlsZFdZekppT2lVV2JoNW1JN3hTZmljblF5UTNabTFHYVlGR05LVmxRMWczTUxOVFRCQjFWMHAyUTRvbE1tQlZNblJXTWFCRFppaEhTQjlGY1JabUk2SUNhekZHYWl3aUl5VkdjcFpuSTZJU1p0Rm1iaXMzVyIsInBvc3RlciI6IiJ9";
// // var decodedString = atob(encodedString);
// // console.log(decodedString); // This will output the decoded string
// // //0PHz4VJV

// // (function () {
// //   var id = 385687;
// //   var movieId = id.toString();

// //   if (movieId) {
// //     // Some encoded verification value calculation
// //     var verificationValue = btoa(someEncodedValue(movieId));

// //     // Set the encoded verification value in sessionStorage
// //     console.log("vrf_" + movieId, verificationValue);
// //     console.log(atob(verificationValue));
// //   }

// //   function someEncodedValue(id) {
// //     // Placeholder for the actual encoding logic
// //     const encoded = id
// //       .split("")
// //       .map((c) => String.fromCharCode(c.charCodeAt(0) + 1))
// //       .join("");
// //     return encoded;
// //   }
// // })();

// // var headers = { Referer: "https://moviesapi.club/" };
// // var encoded = btoa(JSON.stringify(headers));
// // console.log(encoded);

// const decodedString = Buffer.from(
//   "eyJSZWZlcmVyIjoiaHR0cHM6Ly9tb3ZpZXNhcGkuY2x1Yi8ifQ==",
//   "base64"
// ).toString("utf-8");
// console.log(JSON.parse(decodedString));

// ("http://localhost:3000/proxy?url=https://1.isonline.pro/oyrwuww/uwu.m3u8&headers=eyJvcmlnaW4iOiJodHRwczovL2NhdGZsaXguc3UvIn0=");

// ("http://localhost:3000/proxy?url=https://hls33-eu.zcdn.stream/38d4520ff845027bb58fbb9d88c19b44/2023-11-09/video.m3u8?auth=a0be9733acc3d4027e0c80fde539c59d&expires=1729516968&type=edge&asn=19108&node=7F3yCRjY1YzfWVlvDsRJAU4V2BYD1EmWWZ77bvrn6yXoOp_bD_7oBFgMs6l-vkZ7Lca39uYWZUARHf2ilsQYjG0FHwrvDT5WijM18HItAx_5BY28JQTmC2EJ7eh77IO1jA3zIjBidGGPKm7YzQw6Jg&headers=eyJSZWZlcmVyIjoiaHR0cHM6Ly9tb3ZpZXNhcGkuY2x1Yi8ifQ==");

// const formatUrl = (url, headers) => {
//   const proxyUrl = "http://localhost:3000/proxy";
//   const encodedHeaders = btoa(JSON.stringify(headers));
//   const proxyUrlWithHeaders = `${proxyUrl}?url=${encodeURIComponent(
//     url
//   )}&headers=${encodedHeaders}`;
//   console.log(proxyUrlWithHeaders);
// };

// // formatUrl("https://1.isonline.pro/oyrwuww/uwu.m3u8", {
// //   origin: "https://catflix.su",
// // });
// // formatUrl(
// //   "https://hls33-eu.zcdn.stream/38d4520ff845027bb58fbb9d88c19b44/2023-11-09/video.m3u8?auth=a0be9733acc3d4027e0c80fde539c59d&expires=1729516968&type=edge&asn=19108&node=7F3yCRjY1YzfWVlvDsRJAU4V2BYD1EmWWZ77bvrn6yXoOp_bD_7oBFgMs6l-vkZ7Lca39uYWZUARHf2ilsQYjG0FHwrvDT5WijM18HItAx_5BY28JQTmC2EJ7eh77IO1jA3zIjBidGGPKm7YzQw6Jg",
// //   {
// //     Referer: "https://moviesapi.club/",
// //   }
// // );

// // http://localhost:3000/proxy?url=&headers=eyJSZWZlcmVyIjoiaHR0cHM6Ly9tb3ZpZXNhcGkuY2x1Yi8ifQ%3D%3D
// console.log(
//   decodeURIComponent(
//     "https%3A%2F%2Fdelivery-uc-uc-131-35.ua.plxcdn.stream%2Ffiles%2FFAGFDFCE%2F360K%2F2023%2FEBEAAIAE%2F11%2FBBBCDFAC%2F09%2FIDFHBEFE%2F11197-000.ts%3Ftoken%3DbJ5NZNQLpBnT6mtQOq13Gg%26expires%3D1729533109%26asn%3D19108%26speed%3D500%26delivery%3Dsrv33-eu"
//   )
// );

// // https://delivery-uc-uc-131-35.ua.plxcdn.stream/files/FAGFDFCE/360K/2023/EBEAAIAE/11/BBBCDFAC/09/IDFHBEFE/11197-000.ts?token=2rn2AGkxShlu6cLKFtmIIg&expires=1729533589&asn=19108&speed=500&delivery=srv33-eu

// // https://delivery-uc-uc-131-35.ua.plxcdn.stream/files/FAGFDFCE/360K/2023/EBEAAIAE/11/BBBCDFAC/09/IDFHBEFE/11197-000.ts?token=bJ5NZNQLpBnT6mtQOq13Gg&expires=1729533109&asn=19108&speed=500&delivery=srv33-eu

// console.log(
//   atob(
//     decodeURIComponent(
//       "eJw9jW1ygjAURaN8qFWwb4YFuAWKUPndBXQJmZA8aDTkOSFiu%2FvGdtp%2F5957Zi5jbFnsYTGnG4huoobDsT2W8tS02J7quurLUsrqtW%2BqBrsXhbKCjZ64F51BH8N6GoXz3M8x7Aa06LTkkhRm8Bysv%2BZi6W5jSDonrMogGYNhMlh1ju4TuiKC2IoRIXn3H%2BjCLs7kUhZA2x9Y0lRE%2BVO%2BzXcpy7PQbK9G%2BJ7cyLV6mIMTCmHxBmspPA7kvmClcLp4ugKQUfzf%2F30y2t4%2BIVU4axkiPY6%2FAV8USwQ%3D"
//     )
//   )
// );
// console.log(atob("667538".split("").reverse().join("")));

// var url = "https://api.vidjoy.pro/rabbit/fetch/912649?sr=0";
// var proxy = "https://slave.docadan488.workers.dev/proxy?url=";
// var headers = {
//   Referer: "https://moviesapi.club/",
//   Authorization:
//     "bearer " +
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
// };

// console.log(proxy + btoa(url) + "&headers=" + btoa(JSON.stringify(headers)));

// fetch("https://api.vidjoy.pro/rabbit/fetch/912649?sr=0")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//   });

// console.log(atob("aHR0cHM6Ly9hYXBhbmVsLmRldmNvcnAubWUvcmV2Lw=="));

(async () => {
  const url = "https://vidsrc.cc/saas/images/b-loading.png?t=1";
  const resp = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/wasm",
      Referer: "https://vidsrc.cc/v2/embed/movie/385687?autoPlay=false",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
    },
  });
  const text = await resp.arrayBuffer();
  console.log(text);
})();
