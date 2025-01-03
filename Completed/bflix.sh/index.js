var baseurl = "https://bflix.sh/";
const getSource = async () => {
  const plUrl = await (
    await fetch("https://bflix.sh/movie/beetlejuice-beetlejuice-52005/")
  )
    .text()
    .then((r) => r.match(/pl_url\s*=\s*['"](.*?)['"]/)[1]);
  let iframe = await (await fetch(plUrl))
    .text()
    .then((r) => r.match(/data-id=['"](.*?)['"]/)[1]);
  iframe = await (await fetch(iframe, { headers: { Referer: baseurl } }))
    .text()
    .then((r) => r.match(/iframe\s*src=['"](.*?)['"]/)[1]);
  const evalued = await (await fetch(iframe))
    .text()
    .then(
      (r) =>
        eval(
          /(eval)(\(function[\s\S]*?)(<\/script>)/s
            .exec(r)[2]
            .replace("eval", "")
        ).match(/['"](https.*?m3u8[^'"]*)['"]/)[1]
    );
  console.log(evalued);
};
getSource();
