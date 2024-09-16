const streamtape = async (url) => {
  var r = await fetch(url, {
    headers: {
      Cookie: "_csrf=;_b=;",
    },
  }).then((v) => v.text());
  var link =
    "https:" +
    eval(r.match(/captchalink'\).innerHTML = (.*);/)[1]) +
    "&stream=1";
  console.log(link);
  var d = await fetch(
    "https://streamtape.com/get_video?id=P84Mpp4dv8Fx3J&expires=1708925397&ip=GxEsDRAUKxSHDN&token=joW24k3eiW&stream=1"
  ).then((v) => v.text());
  console.log(d);
};
streamtape(
  "https://streamtape.com/v/P84Mpp4dv8Fx3J/dead-friend-forever-dff-2023-episode-101708817341.0.mp4"
);
