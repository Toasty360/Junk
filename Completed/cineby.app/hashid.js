//! testing.

class Hashids1 {
  constructor(
    salt = "",
    minLength = 0,
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    sepsChars = "cfhistuCFHISTU"
  ) {
    if (typeof minLength !== "number") {
      throw TypeError(
        `Hashids: Provided 'minLength' has to be a number (is ${typeof minLength})`
      );
    }
    if (typeof salt !== "string") {
      throw TypeError(
        `Hashids: Provided 'salt' has to be a string (is ${typeof salt})`
      );
    }
    if (typeof alphabet !== "string") {
      throw TypeError(
        `Hashids: Provided alphabet has to be a string (is ${typeof alphabet})`
      );
    }

    this.salt = Array.from(salt);
    this.minLength = minLength;

    // Initialize alphabet and separators
    const uniqueAlphabet = [...new Set(Array.from(alphabet))];
    const uniqueSeps = Array.from(sepsChars);

    if (uniqueAlphabet.length < 16) {
      throw Error(
        `Hashids: alphabet must contain at least 16 unique characters, provided: ${uniqueAlphabet.join(
          ""
        )}`
      );
    }

    this.alphabet = this.filterArray(uniqueAlphabet, uniqueSeps);
    let seps = this.filterArray(uniqueSeps, uniqueAlphabet, true);

    // Adjust separators
    seps = this.consistentShuffle(seps, this.salt);

    if (seps.length === 0 || this.alphabet.length / seps.length > 3.5) {
      let sepsLength = Math.ceil(this.alphabet.length / 3.5);
      if (sepsLength > seps.length) {
        const diff = sepsLength - seps.length;
        seps.push(...this.alphabet.slice(0, diff));
        this.alphabet = this.alphabet.slice(diff);
      }
    }

    // Shuffle alphabet
    this.alphabet = this.consistentShuffle(this.alphabet, this.salt);

    // Set up guards
    const guardsLength = Math.ceil(this.alphabet.length / 12);

    if (this.alphabet.length < 3) {
      this.guards = seps.slice(0, guardsLength);
      this.seps = seps.slice(guardsLength);
    } else {
      this.guards = this.alphabet.slice(0, guardsLength);
      this.alphabet = this.alphabet.slice(guardsLength);
      this.seps = seps;
    }

    // Compile regular expressions
    this.guardsRegExp = this.makeRegExp(this.guards);
    this.sepsRegExp = this.makeRegExp(this.seps);
    this.allowedCharsRegExp = this.makeAllowedRegExp([
      ...this.alphabet,
      ...this.guards,
      ...this.seps,
    ]);
  }

  encode(first, ...numbers) {
    let inputs = Array.isArray(first)
      ? first
      : [...(first != null ? [first] : []), ...numbers];

    if (inputs.length === 0) return "";

    if (!inputs.every(this.isInteger)) {
      inputs = inputs.map((n) =>
        typeof n === "bigint" || typeof n === "number"
          ? n
          : this.parseNumber(String(n))
      );
    }

    return inputs.every(this.isValidNumber)
      ? this._encode(inputs).join("")
      : "";
  }

  decode(id) {
    return id && typeof id === "string" && id.length !== 0
      ? this._decode(id)
      : [];
  }

  encodeHex(str) {
    let hex = str;

    switch (typeof hex) {
      case "bigint":
        hex = hex.toString(16);
        break;
      case "string":
        if (!/^[\dA-Fa-f]+$/.test(hex)) return "";
        break;
      default:
        throw Error(
          `Hashids: The provided value is neither a string, nor a BigInt (got: ${typeof hex})`
        );
    }

    const numbers = this.splitIntoChunks(hex, 12, (chunk) =>
      parseInt(`1${chunk}`, 16)
    );
    return this.encode(numbers);
  }

  decodeHex(id) {
    return this.decode(id)
      .map((number) => number.toString(16).slice(1))
      .join("");
  }

  isValidId(id) {
    return this.allowedCharsRegExp.test(id);
  }

  // Private methods
  _encode(numbers) {
    let { alphabet } = this;

    const numbersIdSum = numbers.reduce(
      (sum, num, i) =>
        sum +
        (typeof num === "bigint"
          ? Number(num % BigInt(i + 100))
          : num % (i + 100)),
      0
    );

    let result = [alphabet[numbersIdSum % alphabet.length]];
    let alphabetCopy = [...result];

    numbers.forEach((num, i) => {
      const buffer = alphabetCopy.concat(this.salt, alphabet);
      alphabet = this.consistentShuffle(alphabet, buffer);
      const last = this.toAlphabet(num, alphabet);

      result.push(...last);

      if (i + 1 < numbers.length) {
        const code = last[0].codePointAt(0) + i;
        const sepsIndex =
          typeof num === "bigint" ? Number(num % BigInt(code)) : num % code;
        result.push(this.seps[sepsIndex % this.seps.length]);
      }
    });

    if (result.length < this.minLength) {
      const prefixGuardIndex =
        (numbersIdSum + result[0].codePointAt(0)) % this.guards.length;
      result.unshift(this.guards[prefixGuardIndex]);

      if (result.length < this.minLength) {
        const suffixGuardIndex =
          (numbersIdSum + result[2].codePointAt(0)) % this.guards.length;
        result.push(this.guards[suffixGuardIndex]);
      }
    }

    const halfLength = Math.floor(alphabet.length / 2);
    while (result.length < this.minLength) {
      alphabet = this.consistentShuffle(alphabet, alphabet);
      result.unshift(...alphabet.slice(halfLength));
      result.push(...alphabet.slice(0, halfLength));

      const excess = result.length - this.minLength;
      if (excess > 0) {
        const halfExcess = excess / 2;
        result = result.slice(halfExcess, halfExcess + this.minLength);
      }
    }

    return result;
  }

  _decode(id) {
    if (!this.isValidId(id)) {
      throw Error(
        `The provided ID (${id}) is invalid, as it contains characters that do not exist in the alphabet (${this.guards.join(
          ""
        )}${this.seps.join("")}${this.alphabet.join("")})`
      );
    }

    const parts = id.split(this.guardsRegExp);
    const startPos = parts.length === 3 || parts.length === 2 ? 1 : 0;
    const idBreakdown = parts[startPos];

    if (!idBreakdown?.length) return [];

    const lottery = idBreakdown[0];
    const idArray = idBreakdown.slice(lottery.length).split(this.sepsRegExp);
    let lastAlphabet = this.alphabet;
    const result = [];

    for (const subId of idArray) {
      const buffer = [lottery, ...this.salt, ...lastAlphabet];
      lastAlphabet = this.consistentShuffle(
        lastAlphabet,
        buffer.slice(0, lastAlphabet.length)
      );
      result.push(this.fromAlphabet(Array.from(subId), lastAlphabet));
    }

    return this._encode(result).join("") === id ? result : [];
  }

  // Utility methods
  filterArray(arr, exclude, checkInclusion = false) {
    return arr.filter((item) =>
      checkInclusion ? exclude.includes(item) : !exclude.includes(item)
    );
  }

  isInteger(n) {
    return (
      typeof n === "bigint" ||
      (!Number.isNaN(Number(n)) && Math.floor(Number(n)) === n)
    );
  }

  isValidNumber(n) {
    return typeof n === "bigint" || (n >= 0 && Number.isSafeInteger(n));
  }

  parseNumber(str) {
    if (!/^\+?\d+$/.test(str)) return Number.NaN;

    const num = parseInt(str, 10);
    if (Number.isSafeInteger(num)) return num;

    this.checkBigInt();
    return BigInt(str);
  }

  consistentShuffle(alphabet, salt) {
    if (!salt.length) return alphabet;

    let integer;
    const shuffled = [...alphabet];

    for (let i = shuffled.length - 1, v = 0, p = 0; i > 0; i--, v++) {
      v %= salt.length;
      p += integer = salt[v].codePointAt(0);
      const j = (integer + v + p) % i;

      // Swap characters at positions i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  toAlphabet(input, alphabet) {
    const id = [];
    if (typeof input === "bigint") {
      const alphabetLength = BigInt(alphabet.length);
      do {
        id.unshift(alphabet[Number(input % alphabetLength)]);
        input /= alphabetLength;
      } while (input > BigInt(0));
    } else {
      do {
        id.unshift(alphabet[input % alphabet.length]);
        input = Math.floor(input / alphabet.length);
      } while (input > 0);
    }
    return id;
  }

  fromAlphabet(input, alphabet) {
    return input.reduce((carry, item) => {
      const index = alphabet.indexOf(item);
      if (index === -1) {
        throw Error(
          `The provided ID (${input.join(
            ""
          )}) is invalid, as it contains characters that do not exist in the alphabet (${alphabet.join(
            ""
          )})`
        );
      }
      if (typeof carry === "bigint") {
        return carry * BigInt(alphabet.length) + BigInt(index);
      }
      const value = carry * alphabet.length + index;
      if (Number.isSafeInteger(value)) {
        return value;
      }
      this.checkBigInt();
      return BigInt(carry) * BigInt(alphabet.length) + BigInt(index);
    }, 0);
  }

  splitIntoChunks(str, size, transform) {
    return Array.from({ length: Math.ceil(str.length / size) }, (_, i) =>
      transform(str.slice(i * size, (i + 1) * size))
    );
  }

  makeRegExp(arr) {
    return new RegExp(
      arr
        .map(this.escapeRegExp)
        .sort((a, b) => b.length - a.length)
        .join("|")
    );
  }

  makeAllowedRegExp(arr) {
    return new RegExp(
      `^[${arr
        .map(this.escapeRegExp)
        .sort((a, b) => b.length - a.length)
        .join("")}]+$`
    );
  }

  escapeRegExp(str) {
    return str.replace(/[\s#$()*+,.?[\\\]^{|}-]/g, "\\$&");
  }

  checkBigInt(message = "BigInt is not available in this environment") {
    if (typeof BigInt !== "function") {
      throw TypeError(message);
    }
  }
}

export default Hashids1;
const hait = new Hashids1();
console.log(hait.encode("69696367616067316334643661313263616969666469"));
