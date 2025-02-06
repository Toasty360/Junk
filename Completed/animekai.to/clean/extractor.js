export class AnimekaiDecoder {
  #reverseIt = (n) => {
    return n.split("").reverse().join("");
  };
  #base64UrlEncode = (str) => {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };
  #substitute = (input, keys, values) => {
    const map = Object.fromEntries(
      keys.split("").map((key, i) => [key, values[i] || ""])
    );
    let a = input
      .split("")
      .map((char) => map[char] || char)
      .join("");
    console.log("substitute", a);

    return a;
  };
  #transform = (n, t) => {
    let v = Array.from({ length: 256 }, (_, i) => i),
      c = 0,
      f = "";
    console.log("transform", n.length);

    for (let w = 0; w < 256; w++) {
      c = (c + v[w] + n.charCodeAt(w % n.length)) % 256;
      [v[w], v[c]] = [v[c], v[w]];
    }
    for (let a = (c = 0), w = 0; a < t.length; a++) {
      w = (w + 1) % 256;
      c = (c + v[w]) % 256;
      [v[w], v[c]] = [v[c], v[w]];
      f += String.fromCharCode(t.charCodeAt(a) ^ v[(v[w] + v[c]) % 256]);
    }

    return f;
  };
  #base64UrlDecode = (n) => {
    n = n
      .padEnd(n.length + ((4 - (n.length % 4)) % 4), "=")
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    return atob(n);
  };

  GenerateToken = (n) => {
    n = encodeURIComponent(n);

    let temp1 = this.#base64UrlEncode(
      this.#transform("gEUzYavPrGpj", this.#reverseIt(n))
    );

    temp1 = this.#substitute(temp1, "U8nv0tEFGTb", "bnGvE80UtTF");
    temp1 = this.#substitute(temp1, "9ysoRqBZHV", "oqsZyVHBR9");
    temp1 = this.#reverseIt(
      this.#base64UrlEncode(this.#transform("CSk63F7PwBHJKa", temp1))
    );
    temp1 = this.#substitute(temp1, "cKj9BMN15LsdH", "NL5cdKs1jB9MH");
    return this.#base64UrlEncode(
      this.#reverseIt(
        this.#base64UrlEncode(this.#transform("T2zEp1WHL9CsSk7", temp1))
      )
    );
  };
  DecodeIframeData = (n) => {
    var temp1 = this.#base64UrlDecode(
      this.#reverseIt(this.#base64UrlDecode(n))
    );
    console.log("temp1", temp1.length);

    var temp2 = this.#transform("T2zEp1WHL9CsSk7", temp1);

    var temp3 = this.#reverseIt(
      this.#substitute(temp2, "NL5cdKs1jB9MH", "cKj9BMN15LsdH")
    );
    var temp4 = this.#transform("CSk63F7PwBHJKa", this.#base64UrlDecode(temp3));
    var temp5 = this.#substitute(temp4, "oqsZyVHBR9", "9ysoRqBZHV");
    var temp6 = this.#base64UrlDecode(
      this.#substitute(temp5, "bnGvE80UtTF", "U8nv0tEFGTb")
    );
    n = this.#reverseIt(this.#transform("gEUzYavPrGpj", temp6));

    return decodeURIComponent(n);
  };
  Decode = (n) => {
    n = this.#base64UrlDecode(this.#base64UrlDecode(n));
    n = this.#reverseIt(this.#transform("E438hS1W9oRmB", n));
    n = this.#reverseIt(
      this.#substitute(n, "D5qdzkGANMQZEi", "Q5diEGMADkZzNq")
    );
    n = this.#base64UrlDecode(
      this.#substitute(
        this.#transform("NZcfoMD7JpIrgQE", this.#base64UrlDecode(n)),
        "kTr0pjKzBqZV",
        "kZpjzTV0KqBr"
      )
    );
    n = this.#reverseIt(
      this.#substitute(
        this.#transform("Gay7bxj5B81TJFM", n),
        "zcUxoJTi3fgyS",
        "oSgyJUfizcTx3"
      )
    );
    return decodeURIComponent(n);
  };
}
const { GenerateToken, DecodeIframeData, Decode } = new AnimekaiDecoder();

// console.log(GenerateToken("mxefmE7zAQ")); //Z0p5MFFvdE81ZzRHMnhaVC1QTnhHRTJUWFo
console.log(
  DecodeIframeData(
    "UWhjbndMU1VlR1A5aTJZQ19NbENIR1NYWndENnFaSHMxQUsyaWhDT09Uc2JvZHBlU0N0MWQ1azVNdEVtVzJDRXhwN0k5cWhYNHFaY1FLMzNvaWl4djZDV1JDSnp6aktrbHJDakp1YVppcTIwODhkM1hWd0tvRjdvY0ZVaDBnZ1UwXzJTX0U2M3pwUF9WWm84R2NvblR2c0U3NW90TmQ5WHpHSzVqeHJ3XzI3RnY3MktGaEs5OHF1NkNQUThTWmFLQzI3b3pKdVE4Y09qaGJwRHNpZ2d6Z09IRmwwR0ppam14ODlkMVFLRUtwdDlFa0dYQjJkdXduU0tKZmJLTEdDSnBiYzhBYWFudUkyMUJSdWhkT2N5SEtqeHRkVGlIMTh4T1NpdXI1dGhQVnRCakp3M1lCNzV6cnNlTFhzRmFJZ2ZhNDUySG5oQUJsQ1JPVURHVGhtT25xMVpnMHhXelEtZkVXZklVTlcycGRqTGh4ZTdQVFk2SUsyQVYtemF2aEtEUzVwbV9mLUpBQlJmMGI"
  )
);
// console.log(
//   Decode(
//     "YXgwQnVZUVVQVjhwSVFfbnpmM21DZ2dUN2ItWE1TeUp5OUdINlBsb0lHX2FjWXJmS2JoVHlNakdOMF95U1pzbUtPb3VvRUNKeVNnT0VtTjZxSjZIbjlUYnBtUmlLd2VFb0pTNHJsTW1pOEtLa1luQmJfQWE3SjBxSldyalVuZTJWUUVkcnpTNWh4eGpBSkpTS1JLaGk4bi1NVmRYVlJHQmdCNzVVTVUyQ1RjbzF4a0dHU09ZNW9nalpIWV9jNWxmTjc3RW05S3JZd05iRWFoMVR2Z1p5NThjb3hSMm01bUZwTmVsUTlJR1BQcHVRUjJNZVZraDRramN2c0NSVGNPZ25QQnFzY3JKVEROQ3BVZFhhOWFTdFRsTjN3Q3EzakRaQnUxS2E3ZXA2d0VBZlk3TWMwWTdyQWxsVHZYSkx3cHBCMmJYNkRtRXRZd1FzelV2anJDQnFBcGtRS214aTRpd3doNnZVWGhJV1ZmTDhnaGdKVnVXc1BpTzVIQW9NcVcwYUtqaHpnNHBTbHJfVG9OV0VIVkp1NnhseklDTjZhdEN6bXh1Zl9jNEtyQ3BzbDcxN2R4QzZ3MHZMMWlKbXdLajZzWUtfdUQ3bVRsNU1iVUxVZlUtQTJEOUk3b3Fqamt2OUhfMnhqNk9PdjN0YjdYNzlhQ0NLR3lPVklkUDdTUnY5ZWotX0lWYXlsbG1sQU50M0c3TTVuQjZoUmZKaV9HQUlQdmJLVUVqXzZjcHJjazNFeTNtMFFXbk1sbWVzd1ZpUGkxU3diNHJBblpEbEdKcHEtSG5FT1FRVWloQ0xTbkN1MjBnMUtVQlVQZkdJcWhrZmtLelNxeVptSW1ZZmRQMWN3M1MzNWtpdjNlMUk0dHZXYXBYUXVFRVJpdE13OE1ZNGg0dFVRT3NSRXlILVFQSmYxWmxidUpsNmRxQkFNc095Q3N2S0xwNmhDZUl4dktMd2c1VUVxcHJORTNyY0lQenZXalBoMmF1ZFBDUDBVUjRUdF9Kbm1SMlQ0YkdoZWlIRjNGZVZHVG93U0NJQ1NocHp1MTVZM1ZoM3JnRVZ2RGVONGpiaTloeUlRZ1o1R1RUcWE2QXUxRFFrMGlNSEdCcmdIT1VQLWctbE55SmNpa05PbmgwWV9HbzI0RmxYS1I3SXl0b3dJTExjZzdPcjd1Y05kZ2tMMVE1Q0xDNHJKcmlPTjJWOGtySWNlV3o0anVwN0VRblpSRUM5VmJtT3BlSnYtMk5mdUIxVVoyOEJBTXFKOVFJWjd1Y09tbmdEWjVZekE3QjJlaGhYOWRDeTFnX0JGazE2RUJnVTJhaThTOFg3QV8wTF9WM0dteDRKeUVEMHBfa01ZLV82ZWVPalgwQzZxbE5OLTVUZ1d2b0FzNDZkcFk4cDBfa0kybHF1blJKdktQT2xMSVpFSW9IY0dfeVU5RVA2Xy1jYmVhQ1JrTXV0Z0xkbzIyOVFseUNqVkVRSXNzTnc5MUZyQUdUR3ZhOHg0Vk1JSGpWZHVjTFBoRmF2X0s3eGh2NURrWlRLM29MZURXZ1JaeTNkR0FHZGJzS2gxMU5uQnJ5S3dtdlBGN0Z0T1JFbnZkcGp6aWhSSS1tSnVnYnJDOHBKLTI5ODdncExGMVhEQ05SRERGTFRiTV9acXZfenpQM3JQMDJjd3B4LWUtcUY2NWV0MjhDQWstTkNDUE9DV1FhY2lKUWljXzBPWl9KcWxERG9WMlBNNU54R0tUZE1BYk9JZXlQbVBHVXpZR1hyRXUtWXpMSk1aMjJKMXhFS2pscTVmUERta0tMb0NSVGZfQVU1T1p4WEVqd25Kd21SUHJwNnI0S21WTkJSY01NaGp6Z1NyN0xtNmZNajNCYVFlbzZNV3NZU3Fmb2ZsQ1RjUEZXSTJudmdDWVBDRy1VNGxMYm5xOHFJLXU0Tmx4Rk14TF81MjdsWmZoVEUwa1dlS3NVLV9GOG9TTWdCR2E1LUkyWHpJcHJUU2FVM0hiaWI0NTUtVlczNkQ3WFVDTUxEeExOSGRGV215WnFUem5rcElVTFVsR3N4R0pQbXpXUS1rODgzR0k1MGJMSU91eHBETTZ3M01XVzBtNGt4UmlEN0ZTZnJ5ZjZ1QUhUZDVNY3JFeDItamdMVF85OVUzOHNDbWxQQ3Ezbk9ybDlRTFpacTlUZUFoTDNpbkZjc0I1dVpnZjBuWjFKakhFZ3BPSGpNOGd4eHlScGxtRFRZWVlVeXBzTWJWQXFNR2U5X3hTdGFWN2xWNm5wazF2ZWVPX01XdHdOTVFER2VFbHRJZmJTU1hIck9odEJaZkR3d3RvN1hELS1pTEttRWNBR2lrbFVzYnZSbEh1LTRNQzVrOEpwa3dWMVdBM0s0VXYyNGhHOUpRT2JNbnpEYXZaNnh6dlV6QlBVS051V1hiQi11UFNidWc"
//   )
// );
