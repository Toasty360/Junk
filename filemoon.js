import axios from "axios";

//working so good!! --> idk the source website, mostly it's /d/ ig
const filemoon = async (id) => {
  var { data } = await axios("https://filemoon.sx/e/" + id);
  data = data.substring(
    data.indexOf("eval(function") + 5,
    data.lastIndexOf(")))")
  );
  var packed = data.split(",").slice(-3);
  var p = data.match(/\[\{.*"(.*?)"\}\]/)[0];
  var a = packed[0];
  var c = packed[1];
  var k = packed[2].split(".")[0].split("|");
  while (c--)
    if (k[c])
      p = p.replace(new RegExp("\\b" + c.toString(a) + "\\b", "g"), k[c]);
  console.log(p.match(/file:"(.*?)"/)[1]);
};

filemoon("yrsjdg3lfzru");
// filemoon("tdoze1lsgolm");
// filemoon("t4y13a3r0oub");
