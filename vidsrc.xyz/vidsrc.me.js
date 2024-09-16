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
  const reverseString = inputString.split("").reverse().join("");
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
(async () => {
  var urlHash =
    "eqqmp://qjpqo2.irjfklrppqobxjexsbk.zlj/pqobxj_kbt2/E4pFXXXXXXXXXt3Kv3HZJYeX4ScHOOgQmWSIqVhAYDHvZ_uVKFij1KxYm6_oJ_LaCxKoPtfphxTJlKTmE9FQLnR9XNmgdg9p5i49apQh.g7JAtnCl6GdHcaDS4NagBrJhrITwp9xYKZnjuWImwZdvzfgM3bUUFjXivEhjvyALOQuGsAMyDkRzqpjkDXfJydn7KFek1G.Wl0KMjn30vWJvO497wG41WcuzttpzfGlmbZM4_mlkKYKFWNJNllZEr_Ey0agSS9o_I2V5K22dMwohDSFUMv1wUveEFr23AuJq4jv25kO8Oc4PzZiF_yl5WeEs6acv9qzbqRO4_GDUbr2wsNJmNizMN2NTFHInGTF_NLAAjErNNBXXX--/jxpqbo.j3r8";
  var hash =
    "Dqw6nfuzf7Wyc1KQ0ZCnZcO1ZKR1YBNRJPTSk0ORtCBjlRAFZfDh1WPW86EU4KKlwkQF9YO0E8EBALD28/IXAzCnUgenYuKkRgEQ5PaGEUagdkDnZUQwwpZhA2DzsrfxkNdzJrY0EqUTAlGhdkYRF8JlFpV1ZKET1YSy0RH0ZZMSgMUUxxWDlAGQUNTERwKhAbVWRZV2prKVR1JRkpPGAmEUMofQYGBX46CjhJG0c+QBlIW1IBQTMBa00tDi5ZRyd8YxRKXhY+eSM2IxxmQWAYEXVGYSZrEjFrVA4eCDxBPSRsDUFbKhkDEAQhH21XDkksXEx5Jhc3NkFRDWk/H1MfKloLA38mHgd9NTI8UlAsbwJuU308W2ANSV0gCD04S0svWlcNcjxefxsxGDVNQjphMn8MVFJDOld9XA0yEyV1BT5cD0xmLFxmIScbT2VJNVgJemhECH8BIRRDHgk7O0UXOgYlSGIGBWZkIg8qTn8SdwlAT28PWzU0TlYJOhsgfwEDVU9NfCBFazIFEy5sdjMZeG5MAwodFiBSSjMTGwVZAnlDMRVaOw9SCQMYL2JkdkU3VkpQFgE0VFcc6DmsEYr6iw3UakbA";
  //   var url = simpleSubstitutionCipher(s);
  console.log(yetAnotherDecryption(hash));
})();

//   var darta = await (
//     await fetch(url, {
//       headers: {
//         Referer: "https://flickersky.com/",
//       },
//     })
//   ).text();
//   console.log(darta);
