import crypto from "crypto";

const key = Buffer.from(
  "9f8dff95f42e0b9823f16bef28d2ca76063ab987ddd1f69718638f280db2df45",
  "hex"
);
const algorithm = "aes-256-cbc";

const cryptoMethods = {
  encodeID: function (data) {
    let iv = crypto.randomBytes(16);
    console.log(iv.buffer);

    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = Buffer.concat([
      cipher.update(data, "utf8"),
      cipher.final(),
    ]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  },
  decodeID: function (encrypted) {
    let parts = encrypted.split(":");
    let iv = Buffer.from(parts.shift(), "hex");
    let encryptedText = Buffer.from(parts.join(":"), "hex");

    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);
    return decrypted.toString();
  },
  decrypt: function (encrypted) {
    let parts = encrypted.split(":");
    let iv = Buffer.from(parts.shift(), "hex");
    let encryptedText = Buffer.from(parts.join(":"), "hex");

    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);
    return decrypted.toString();
  },
};

const baseURL = "https://vidlink.pro/api/";
const getSource = async (id, isMovie, sid, eid) => {
  var encoded = cryptoMethods.encodeID(id);
  console.log(encoded);
  //   console.log(
  //     baseURL + (isMovie ? `movie/${encoded}` : `tv/${encoded}/${sid}/${eid}`)
  //   );

  const resp = await (
    await fetch(
      baseURL + (isMovie ? `movie/${encoded}` : `tv/${encoded}/${sid}/${eid}`)
    )
  ).text();
  var link = cryptoMethods.decrypt(resp);
  console.log(link);
};
await getSource("957452", true);
