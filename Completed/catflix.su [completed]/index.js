//! doesn't have latest data compared to vidsrc

class Catflix {
  baseUrl = "https://catflix.su/";
  juiceUrl = "https://turbovid.eu/api/cucked/juice_key";

  decryptHexWithKey = (hex, key) => {
    const binary = this.hexToBinary(hex);
    return this.xorDecrypt(binary, key);
  };

  hexToBinary = (hex) => {
    let binary = "";
    for (let i = 0; i < hex.length; i += 2) {
      binary += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return binary;
  };

  xorDecrypt = (binary, key) => {
    return [...binary]
      .map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
      )
      .join("");
  };

  getSource = async () => {
    const iframe = await fetch(`${this.baseUrl}/movies/the-well/`)
      .then((resp) => resp.text())
      .then((data) => data.match(/<iframe.*?src\s*=\s*['"](.*?)['"]/)[1]);
    const options = { headers: { Referer: iframe } };
    const [juiceData, iframeData] = await Promise.all([
      fetch(this.juiceUrl, options).then((resp) => resp.json()),
      fetch(iframe).then((resp) => resp.text()),
    ]);

    const [apkey, xxid] = [
      iframeData.match(/apkey\s*=\s*['"](.*?)["']/)[1],
      iframeData.match(/xxid\s*=\s*['"](.*?)["']/)[1],
    ];

    const theJuiceData = await fetch(
      `https://turbovid.eu/api/cucked/the_juice/?${apkey}=${xxid}`,
      options
    ).then((resp) => resp.json());

    const source = {
      url: this.decryptHexWithKey(theJuiceData.data, juiceData.juice),
      provider: "Catflix",
      headers: { Origin: iframe.split("embed")[0] },
    };

    console.log(source);
  };
}

const catflix = new Catflix();
catflix.getSource();
