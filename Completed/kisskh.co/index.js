import getKey from "./key.js";

(async () => {
  const id = "173638";
  //err=false&ts=null&time=null
  const resp = await (
    await fetch(
      `https://kisskh.co/api/DramaList/Episode/${id}.png?kkey=${getKey(id)}`
    )
  ).text();
  console.log(resp);
})();
