//https://uhdmovies.dad/
const tetst = async () => {
  const data = (
    await fetch(
      "https://tech.unblockedgames.world/?go=pepe-66bf3d20335b2"
    ).then((resp) => resp.text())
  ).match(/url=(.*?)"/)[1];

  const data2 = (await fetch(data).then((resp) => resp.text())).match(
    /file\/(.*?)"/
  )[1];
  const url = new URL(data);
  const newurl = url.protocol + "//" + url.hostname + "/zfile/" + data2;

  const mediaLink = (await fetch(newurl).then((resp) => resp.text())).match(
    /<iframe.*src="(.*?)"/
  )[1];
  console.log(mediaLink);
};
tetst();
