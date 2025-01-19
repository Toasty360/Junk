const referer = "https://animepahe.ru/";
const fetchm3u8 = async (url) => {
  var r = await fetch("https://kwik.si/e/pSVK5bFhgLkf", {
    headers: {
      Referer: referer,
    },
  }).then((v) => v.text());

  const link = eval(
    /(eval)(\(function[\s\S]*?)(<\/script>)/s.exec(r)[2].replace("eval", "")
  ).match(/https.*?m3u8/)[0];
  console.log(link);

  return link;
};
const fetchkiwi = async (url) => {
  const r = await fetch(url, {
    headers: {
      Cookie: "__ddg1=;__ddg2_=;",
    },
  }).then((v) => v.text());
  const m3u8 = await fetchm3u8(r.match(/let url = "(.*)"/)[1]);
  console.log({
    url: m3u8,
    thumbnail: r.match(/https?:\/\/[^\s]*\.jpg/)[0],
  });
};
// fetchkiwi(
//   "https://animepahe.ru/play/e1087a5a-7838-5d94-4dc1-bb4c400a64ca/fbc04ceac81df3c9307a46a937ee6c103a0210580a96c179f3f735450d151323"
// );

fetchm3u8();
