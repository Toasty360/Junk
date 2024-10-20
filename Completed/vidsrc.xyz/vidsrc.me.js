function decodeRot13AndBase64(inputString) {
  const reversedString = inputString.split("").reverse().join("");

  const rot13String = reversedString.replace(/[a-zA-Z]/g, function (char) {
    return String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
    );
  });

  const finalReversedString = rot13String.split("").reverse().join("");
  return atob(finalReversedString);
}

function simpleSubstitutionCipher(inputString) {
  const charMap = {
    x: "a",
    y: "b",
    z: "c",
    a: "d",
    b: "e",
    c: "f",
    d: "g",
    e: "h",
    f: "i",
    g: "j",
    h: "k",
    i: "l",
    j: "m",
    k: "n",
    l: "o",
    m: "p",
    n: "q",
    o: "r",
    p: "s",
    q: "t",
    r: "u",
    s: "v",
    t: "w",
    u: "x",
    v: "y",
    w: "z",
    X: "A",
    Y: "B",
    Z: "C",
    A: "D",
    B: "E",
    C: "F",
    D: "G",
    E: "H",
    F: "I",
    G: "J",
    H: "K",
    I: "L",
    J: "M",
    K: "N",
    L: "O",
    M: "P",
    N: "Q",
    O: "R",
    P: "S",
    Q: "T",
    R: "U",
    S: "V",
    T: "W",
    U: "X",
    V: "Y",
    W: "Z",
  };

  // Replace each character in the input string with its corresponding mapped value
  return inputString.replace(
    /[xyzabcdefghijklmnopqrstuvwXYZABCDEFGHIJKLMNOPQRSTUVW]/g,
    function (char) {
      return charMap[char];
    }
  );
}
function yetAnotherDecryption(inputString) {
  const reverseString = inputString.split("").reverse().join("");
  const base64Decoded = atob(
    reverseString.replace(/-/g, "+").replace(/_/g, "/")
  );
  let result = "";

  // Decrypt by shifting characters by a different amount (7)
  const shiftAmount = 7;
  for (let i = 0; i < base64Decoded.length; i++) {
    result += String.fromCharCode(base64Decoded.charCodeAt(i) - shiftAmount);
  }

  return result;
}
function anotherDecryption(inputString) {
  const reverseString = inputString.split("").reverse().join("");
  const base64Decoded = atob(
    reverseString.replace(/-/g, "+").replace(/_/g, "/")
  );
  let result = "";

  // Decrypt by shifting characters by a fixed number (in this case 5)
  const shiftAmount = 5;
  for (let i = 0; i < base64Decoded.length; i++) {
    result += String.fromCharCode(base64Decoded.charCodeAt(i) - shiftAmount);
  }

  return result;
}
function xorDecryption(inputString) {
  const xorKey = "pWB9V)[*4I`nJpp?ozyB~dbr9yt!_n4u";
  let decrypted = "";

  // Decode the hex string and XOR each character with the xorKey
  const hexDecoded = inputString
    .match(/.{1,2}/g)
    .map((hex) => String.fromCharCode(parseInt(hex, 16)))
    .join("");

  // Perform XOR operation on each character with the key
  for (let i = 0; i < hexDecoded.length; i++) {
    decrypted += String.fromCharCode(
      hexDecoded.charCodeAt(i) ^ xorKey.charCodeAt(i % xorKey.length)
    );
  }

  // Shift each character back by 3 positions
  let shifted = "";
  for (let i = 0; i < decrypted.length; i++) {
    shifted += String.fromCharCode(decrypted.charCodeAt(i) - 3);
  }

  return atob(shifted);
}
function splitAndReverseChunks(inputString) {
  const chunkSize = 3;
  const chunks = [];

  // Split the input string into chunks of 3 characters
  for (let i = 0; i < inputString.length; i += chunkSize) {
    chunks.push(inputString.slice(i, i + chunkSize));
  }

  // Reverse the chunks and join them into a single string
  return chunks.reverse().join("");
}
const KJHidj7det = (input) => {
  const decoded = atob(input.slice(10, -16));
  const key = '3SAY~#%Y(V%>5d/Yg"$G[Lh1rK4a;7ok';
  const extendedKey = key
    .repeat(Math.ceil(decoded.length / key.length))
    .substring(0, decoded.length);

  let result = "";
  for (let i = 0; i < decoded.length; i++) {
    result += String.fromCharCode(
      decoded.charCodeAt(i) ^ extendedKey.charCodeAt(i)
    );
  }
  return result;
};
(async () => {
  var urlHash =
    "eqqmp://qjpqo2.irjfklrppqobxjexsbk.zlj/pqobxj_kbt2/E4pFXXXXXXXXXt3Kv3HZJYeX4ScHOOgQmWSIqVhAYDHvZ_uVKFij1KxYm6_oJ_LaCxKoPtfphxTJlKTmE9FQLnR9XNmgdg9p5i49apQh.g7JAtnCl6GdHcaDS4NagBrJhrITwp9xYKZnjuWImwZdvzfgM3bUUFjXivEhjvyALOQuGsAMyDkRzqpjkDXfJydn7KFek1G.Wl0KMjn30vWJvO497wG41WcuzttpzfGlmbZM4_mlkKYKFWNJNllZEr_Ey0agSS9o_I2V5K22dMwohDSFUMv1wUveEFr23AuJq4jv25kO8Oc4PzZiF_yl5WeEs6acv9qzbqRO4_GDUbr2wsNJmNizMN2NTFHInGTF_NLAAjErNNBXXX--/jxpqbo.j3r8";
  var hash =
    "Dqw6nfuzf7Wyc1KQ0ZCnZcO1ZKR1YBNRJPTSk0ORtCBjlRAFZfDh1WPW86EU4KKlwkQF9YO0E8EBALD28/IXAzCnUgenYuKkRgDg5NaGYUagdkDnZUQwkpdhQ1bh4LXgIRbSx3XCYNBxsQDBVhTj9qAHxYY1duNDNMUS4pIiUDNhxGMgloKQV3BHBuDEVLPHhgYk1WFV0aP1FePS0tCX4iEWwUCF4jHlY2ID4dG3MxfC59RGBWZGE+ZGAJbTohaR8kWyhyBQ4eASEnN01VExRRBhVUBzBtLx0QaitrATF/OAd1Kkp/BSJLPSZvRkRNF0w/T1BRCUYKLk1tMA8tJ1M1CXJYX2Y+A388Dx0UTmcuTTFBbWMSdQ8DW3sUEypffTspUClvRFkNcR8IMxkXSx9FBU1qBVZZHz0XFTVpJy8JAxpTIn5FLRJhFnEXJ3dVHW0zUwlDHGM+F1pvczMpBVxAAXoCDn4lO0I/KW45VXcVTThXT3gzYGgTZ3ERMj0GYx8NRVMIAjw6RgkHEjQTEyxbZElQRFIdPElncz0iGiZlRCF8Cwl+B1xxfSIOE1dmCHkTZH90SQJ2CkNXMz4+RlxBPgw=6DmsEYr6iw3UakbA";

  //   var url = simpleSubstitutionCipher(s);

  console.log(KJHidj7det(hash));
})();

//   var darta = await (
//     await fetch(url, {
//       headers: {
//         Referer: "https://flickersky.com/",
//       },
//     })
//   ).text();
//   console.log(darta);
