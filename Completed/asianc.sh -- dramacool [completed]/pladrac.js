import CryptoJS from "crypto-js";
var key = CryptoJS.enc.Utf8.parse("93422192433952489752342908585752");
var iv = CryptoJS.enc.Utf8.parse("9262859232435825");

const GenerateParams = async (msg) => {
  var data2 = CryptoJS.enc.Utf8.stringify(
    CryptoJS.AES.decrypt(msg, key, { iv: iv })
  );
  var data3 = data2.substring(0, data2.indexOf("&"));
  return `id=${encodeURIComponent(
    CryptoJS.AES.encrypt(data3, key, { iv: iv }).toString()
  )}${data2.substring(data2.indexOf("&"))}&alias=${encodeURIComponent(data3)}`;
};

const GetM3U8 = async (hash) => {
  var requestData = await GenerateParams(hash);
  return JSON.parse(
    CryptoJS.enc.Utf8.stringify(
      CryptoJS.AES.decrypt(
        (
          await (
            await fetch(`https://pladrac.net/encrypt-ajax.php?${requestData}`)
          ).json()
        ).data,
        key,
        { iv: iv }
      )
    )
  );
};

const main = async () => {
  // var id = "the-impossible-heir-2024-episode-8";
  var id = "no-way-out-the-roulette-2024-episode-8";

  var resp = await (await fetch("https://asianc.co/" + id + ".html")).text();

  var presp = await (
    await fetch("https:" + resp.match(/iframe.*src=['"](.*?)['"].*iframe>/)[1])
  ).text();
  var data = await GetM3U8(presp.match(/data-value="(.*)"/)[1]);
  console.log(data);
};

main();
