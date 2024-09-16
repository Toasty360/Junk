//! It works but it's not realiable source.

import axios from "axios";
const baseURL = "https://1hd.sh/";
const GetSource = async (id) => {
  const { data } = await axios.get(baseURL + id);
  const ajaxResp = (await axios.get(data.match(/pl_url.*(https.*?)['"]/)[1]))
    .data;
  const iframe = (await axios.get(ajaxResp.match(/data-id=["'](.*?)["']/)[1]))
    .data;
  const resp = (await axios.get(iframe.match(/src=["'](.*?)["']/)[1])).data;
  const evalFuntion = resp.match(/eval(\(f.*?)\)\)\)/g).pop();
  var p = evalFuntion.match(/\[\{(.*?)\}\]/)[1];
  const acMatch = evalFuntion.match(/,([\d]+,[\d]+),/);
  const k = evalFuntion.split(acMatch[0]).pop().split(".")[0].split("|");
  const ac = acMatch ? acMatch[1].split(",") : [36, k.length];
  var [a, c] = ac;

  while (c--)
    if (k[c])
      p = p.replace(new RegExp("\\b" + c.toString(a) + "\\b", "g"), k[c]);
  console.log(p);
};

GetSource("movie/godzilla-x-kong-the-new-empire-67926/");
// console.log(
//   eval(
//     resp
//       .match(/eval(\(f.*?)\)\)\)/g)
//       .pop()
//       .replace("eval", "")
//   ).match(/file:"(.*?)"/)[1]
// );

// const animepahe = async () => {
//   const { data } = await axios.get("https://kwik.si/e/Kbic8NJPFiDy", {
//     headers: {
//       Referer: "https://animepahe.ru/",
//       Cookie: "__ddg1=;__ddg2_=;__ddgid_=;__ddgmark_=;SERVERID=",
//     },
//   });
//   const evalF = data.match(/eval(\(f.*?)\}\)\)/g).pop();
//   var p = evalF.match(/\'(.[^']*?)';/)[1].replace("\\", "");
//   const ac = evalF
//     .split(p)
//     .pop()
//     .match(/,([\d]+,[\d]+),/);
//   var k = evalF.split(ac[0]).pop().split(".")[0].replace(/'/g, "").split("|");
//   var [a, c] = ac[1].split(",");
//   console.log(p, a, c, k.length);
//   let e = (c) => {
//     console.log(c, a);
//     return (
//       (c < a ? "" : e(parseInt(c / a))) +
//       ((c %= a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//     );
//   };

//   while (c--) {
//     if (k[c]) {
//       p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
//       console.log(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
//     }
//   }
//   console.log(p);
// };

// animepahe();
