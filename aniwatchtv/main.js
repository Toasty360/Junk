import axios from "axios";

/*
https://aniwatchtv.to/ajax/v2/episode/list/19132
https://aniwatchtv.to/ajax/v2/episode/servers?episodeId=123156
https://aniwatchtv.to/ajax/v2/episode/sources?id=1107695
https://megacloud.tv/embed-2/e-1/oWHtZl5KyLus?k=1&autoPlay=1&oa=0&asi=1
https://megacloud.tv/embed-2/ajax/e-1/getSources?id=oWHtZl5KyLus
*/

const getSource = async () => {
  const mcloudID = await await axios
    .get("https://aniwatchtv.to/ajax/v2/episode/sources?id=1107695")
    .then((response) => response.data.link.match(/\/([^\/?]+)\?/)[1]);
  console.log(
    "https://megacloud.tv/embed-2/ajax/e-1/getSources?id=" + mcloudID
  );

  const resp = await axios.get(
    "https://megacloud.tv/embed-2/ajax/e-1/getSources?id=" + mcloudID,
    {
      headers: {
        Referer: "https://aniwatchtv.to/",
      },
    }
  );

  const data = await resp.data;
  console.log(data);
};
getSource();
