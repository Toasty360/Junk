import axios from "axios";

const main = async () => {
  var data = await (
    await axios.get("https://www.tiktok.com/@privatebodyguard1")
  ).data;
  console.log(data);
};
main();
