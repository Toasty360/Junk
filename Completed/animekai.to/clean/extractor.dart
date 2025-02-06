import 'dart:convert';

class AnimekaiDecoder {
  String _reverseIt(String n) {
    return n.split('').reversed.join();
  }

  String _base64UrlEncode(String str) {
    List<int> latin1Bytes = latin1.encode(str);
    String encoded = base64.encode(latin1Bytes);
    return encoded
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll(RegExp(r'=+$'), '');
  }

  String _substitute(String input, String keys, String values) {
    final map = Map.fromIterables(
        keys.split(''), values.padRight(keys.length, '').split(''));

    return input.split('').map((char) => map[char] ?? char).join();
  }

  String _transform(String n, String t) {
    List<int> v = List.generate(256, (i) => i);
    int c = 0;
    String f = '';

    for (int w = 0; w < 256; w++) {
      c = (c + v[w] + n.codeUnitAt(w % n.length)) % 256;
      int temp = v[w];
      v[w] = v[c];
      v[c] = temp;
    }

    int w = 0;
    c = 0;
    for (int a = 0; a < t.length; a++) {
      w = (w + 1) % 256;
      c = (c + v[w]) % 256;

      int temp = v[w];
      v[w] = v[c];
      v[c] = temp;

      f += String.fromCharCode(t.codeUnitAt(a) ^ v[(v[w] + v[c]) % 256]);
    }

    return f;
  }

  String _base64UrlDecode(String n) {
    try {
      String paddedN = n
          .padRight(n.length + ((4 - (n.length % 4)) % 4), '=')
          .replaceAll('-', '+')
          .replaceAll('_', '/');
      List<int> decodedBytes = base64.decode(paddedN);
      return latin1.decode(decodedBytes);
    } catch (e) {
      return n;
    }
  }

  String generateToken(String n) {
    n = Uri.decodeComponent(n);
    String temp1 = _base64UrlEncode(_transform('gEUzYavPrGpj', _reverseIt(n)));
    temp1 = _substitute(temp1, 'U8nv0tEFGTb', 'bnGvE80UtTF');
    temp1 = _substitute(temp1, '9ysoRqBZHV', 'oqsZyVHBR9');

    temp1 = _reverseIt(_base64UrlEncode(_transform('CSk63F7PwBHJKa', temp1)));

    temp1 = _substitute(temp1, 'cKj9BMN15LsdH', 'NL5cdKs1jB9MH');

    return _base64UrlEncode(
        _reverseIt(_base64UrlEncode(_transform('T2zEp1WHL9CsSk7', temp1))));
  }

  String decodeIframeData(String n) {
    var temp1 = _base64UrlDecode(_reverseIt(_base64UrlDecode(n)));

    var temp2 = _transform('T2zEp1WHL9CsSk7', temp1);

    var temp3 =
        _reverseIt(_substitute(temp2, 'NL5cdKs1jB9MH', 'cKj9BMN15LsdH'));

    var temp4 = _transform('CSk63F7PwBHJKa', _base64UrlDecode(temp3));

    var temp5 = _substitute(temp4, 'oqsZyVHBR9', '9ysoRqBZHV');

    var temp6 =
        _base64UrlDecode(_substitute(temp5, 'bnGvE80UtTF', 'U8nv0tEFGTb'));

    n = _reverseIt(_transform('gEUzYavPrGpj', temp6));

    return Uri.decodeComponent(n);
  }

  String decode(String n) {
    n = _base64UrlDecode(_base64UrlDecode(n));

    n = _reverseIt(_transform('E438hS1W9oRmB', n));

    n = _reverseIt(_substitute(n, 'D5qdzkGANMQZEi', 'Q5diEGMADkZzNq'));

    n = _base64UrlDecode(_substitute(
        _transform('NZcfoMD7JpIrgQE', _base64UrlDecode(n)),
        'kTr0pjKzBqZV',
        'kZpjzTV0KqBr'));

    n = _reverseIt(_substitute(
        _transform('Gay7bxj5B81TJFM', n), 'zcUxoJTi3fgyS', 'oSgyJUfizcTx3'));
    return Uri.decodeComponent(n);
  }
}

void main() {
  var decoders = AnimekaiDecoder();
  var a = decoders.generateToken("mxefmE7zAQ");
  print(a);
  // var a = decoders.decodeIframeData(
  //     "UWhjbndMU1VlR1A5aTJZQ19NbENIR1NYWndENnFaSHMxQUsyaWhDT09Uc2JvZHBlU0N0MWQ1azVNdEVtVzJDRXhwN0k5cWhYNHFaY1FLMzNvaWl4djZDV1JDSnp6aktrbHJDakp1YVppcTIwODhkM1hWd0tvRjdvY0ZVaDBnZ1UwXzJTX0U2M3pwUF9WWm84R2NvblR2c0U3NW90TmQ5WHpHSzVqeHJ3XzI3RnY3MktGaEs5OHF1NkNQUThTWmFLQzI3b3pKdVE4Y09qaGJwRHNpZ2d6Z09IRmwwR0ppam14ODlkMVFLRUtwdDlFa0dYQjJkdXduU0tKZmJLTEdDSnBiYzhBYWFudUkyMUJSdWhkT2N5SEtqeHRkVGlIMTh4T1NpdXI1dGhQVnRCakp3M1lCNzV6cnNlTFhzRmFJZ2ZhNDUySG5oQUJsQ1JPVURHVGhtT25xMVpnMHhXelEtZkVXZklVTlcycGRqTGh4ZTdQVFk2SUsyQVYtemF2aEtEUzVwbV9mLUpBQlJmMGI");
  // print(a);

  // var a = decoders.decode(
  //     "YXgwQnVZUVVQVjhwSVFfbnpmM21DZ2dUN2ItWE1TeUp5OUdINlBsb0lHX2FjWXJmS2JoVHlNakdOMF95U1pzbUtPb3VvRUNKeVNnT0VtTjZxSjZIbjlUYnBtUmlLd2VFb0pTNHJsTW1pOEtLa1luQmJfQWE3SjBxSldyalVuZTJWUUVkcnpTNWh4eGpBSkpTS1JLaGk4bi1NVmRYVlJHQmdCNzVVTVUyQ1RjbzF4a0dHU09ZNW9nalpIWV9jNWxmTjc3RW05S3JZd05iRWFoMVR2Z1p5NThjb3hSMm01bUZwTmVsUTlJR1BQcHVRUjJNZVZraDRramN2c0NSVGNPZ25QQnFzY3JKVEROQ3BVZFhhOWFTdFRsTjN3Q3EzakRaQnUxS2E3ZXA2d0VBZlk3TWMwWTdyQWxsVHZYSkx3cHBCMmJYNkRtRXRZd1FzelV2anJDQnFBcGtRS214aTRpd3doNnZVWGhJV1ZmTDhnaGdKVnVXc1BpTzVIQW9NcVcwYUtqaHpnNHBTbHJfVG9OV0VIVkp1NnhseklDTjZhdEN6bXh1Zl9jNEtyQ3BzbDcxN2R4QzZ3MHZMMWlKbXdLajZzWUtfdUQ3bVRsNU1iVUxVZlUtQTJEOUk3b3Fqamt2OUhfMnhqNk9PdjN0YjdYNzlhQ0NLR3lPVklkUDdTUnY5ZWotX0lWYXlsbG1sQU50M0c3TTVuQjZoUmZKaV9HQUlQdmJLVUVqXzZjcHJjazNFeTNtMFFXbk1sbWVzd1ZpUGkxU3diNHJBblpEbEdKcHEtSG5FT1FRVWloQ0xTbkN1MjBnMUtVQlVQZkdJcWhrZmtLelNxeVptSW1ZZmRQMWN3M1MzNWtpdjNlMUk0dHZXYXBYUXVFRVJpdE13OE1ZNGg0dFVRT3NSRXlILVFQSmYxWmxidUpsNmRxQkFNc095Q3N2S0xwNmhDZUl4dktMd2c1VUVxcHJORTNyY0lQenZXalBoMmF1ZFBDUDBVUjRUdF9Kbm1SMlQ0YkdoZWlIRjNGZVZHVG93U0NJQ1NocHp1MTVZM1ZoM3JnRVZ2RGVONGpiaTloeUlRZ1o1R1RUcWE2QXUxRFFrMGlNSEdCcmdIT1VQLWctbE55SmNpa05PbmgwWV9HbzI0RmxYS1I3SXl0b3dJTExjZzdPcjd1Y05kZ2tMMVE1Q0xDNHJKcmlPTjJWOGtySWNlV3o0anVwN0VRblpSRUM5VmJtT3BlSnYtMk5mdUIxVVoyOEJBTXFKOVFJWjd1Y09tbmdEWjVZekE3QjJlaGhYOWRDeTFnX0JGazE2RUJnVTJhaThTOFg3QV8wTF9WM0dteDRKeUVEMHBfa01ZLV82ZWVPalgwQzZxbE5OLTVUZ1d2b0FzNDZkcFk4cDBfa0kybHF1blJKdktQT2xMSVpFSW9IY0dfeVU5RVA2Xy1jYmVhQ1JrTXV0Z0xkbzIyOVFseUNqVkVRSXNzTnc5MUZyQUdUR3ZhOHg0Vk1JSGpWZHVjTFBoRmF2X0s3eGh2NURrWlRLM29MZURXZ1JaeTNkR0FHZGJzS2gxMU5uQnJ5S3dtdlBGN0Z0T1JFbnZkcGp6aWhSSS1tSnVnYnJDOHBKLTI5ODdncExGMVhEQ05SRERGTFRiTV9acXZfenpQM3JQMDJjd3B4LWUtcUY2NWV0MjhDQWstTkNDUE9DV1FhY2lKUWljXzBPWl9KcWxERG9WMlBNNU54R0tUZE1BYk9JZXlQbVBHVXpZR1hyRXUtWXpMSk1aMjJKMXhFS2pscTVmUERta0tMb0NSVGZfQVU1T1p4WEVqd25Kd21SUHJwNnI0S21WTkJSY01NaGp6Z1NyN0xtNmZNajNCYVFlbzZNV3NZU3Fmb2ZsQ1RjUEZXSTJudmdDWVBDRy1VNGxMYm5xOHFJLXU0Tmx4Rk14TF81MjdsWmZoVEUwa1dlS3NVLV9GOG9TTWdCR2E1LUkyWHpJcHJUU2FVM0hiaWI0NTUtVlczNkQ3WFVDTUxEeExOSGRGV215WnFUem5rcElVTFVsR3N4R0pQbXpXUS1rODgzR0k1MGJMSU91eHBETTZ3M01XVzBtNGt4UmlEN0ZTZnJ5ZjZ1QUhUZDVNY3JFeDItamdMVF85OVUzOHNDbWxQQ3Ezbk9ybDlRTFpacTlUZUFoTDNpbkZjc0I1dVpnZjBuWjFKakhFZ3BPSGpNOGd4eHlScGxtRFRZWVlVeXBzTWJWQXFNR2U5X3hTdGFWN2xWNm5wazF2ZWVPX01XdHdOTVFER2VFbHRJZmJTU1hIck9odEJaZkR3d3RvN1hELS1pTEttRWNBR2lrbFVzYnZSbEh1LTRNQzVrOEpwa3dWMVdBM0s0VXYyNGhHOUpRT2JNbnpEYXZaNnh6dlV6QlBVS051V1hiQi11UFNidWc");

  // print(a);
}
