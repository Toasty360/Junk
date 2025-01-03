import 'dart:convert';
import 'dart:developer';
import 'package:http/http.dart' as http;

class JuicyCodes {
  static parseScript(String evalF) {
    String p = RegExp(r'\[\{(.*?)\}\]').firstMatch(evalF)![1]!;
    RegExpMatch acMatch = RegExp(r',([\d]+,[\d]+),').allMatches(evalF).last;
    int c = int.parse(acMatch[1]!.split(",").last);
    List<String> k = evalF
        .split(acMatch[0]!)
        .last
        .split(".")[0]
        .replaceAll("'", "")
        .split("|");
    while (c > 0) {
      c--;
      if (k[c] != "") {
        p = p.replaceAll(RegExp(r'\b' + c.toRadixString(36) + r'\b'), k[c]);
      }
    }

    return p;
  }

  static const String Juice =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  static String run(String e) {
    String t = '';
    var f = 0;
    var s, o, u, a;
    var n, r, i;
    e = e.replaceAll('"+"', "").replaceAll(RegExp(r'[^A-Za-z0-9+/=]'), '');

    while (f < e.length) {
      s = Juice.indexOf(e[f++]);
      o = Juice.indexOf(e[f++]);
      u = Juice.indexOf(e[f++]);
      a = Juice.indexOf(e[f++]);

      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;

      t += String.fromCharCode(n);
      if (u != 64) {
        t += String.fromCharCode(r);
      }
      if (a != 64) {
        t += String.fromCharCode(i);
      }
    }
    // e = e.replaceAll(RegExp(r'[^A-Za-z0-9+/=]'), '');
    // while (f < e.length) {
    //   s = Juice.indexOf(e[f++]);
    //   o = Juice.indexOf(e[f++]);
    //   u = Juice.indexOf(e[f++]);
    //   a = Juice.indexOf(e[f++]);
    //   n = (s << 2) | (o >> 4);
    //   r = ((o & 15) << 4) | (u >> 2);
    //   i = ((u & 3) << 6) | a;
    //   t += String.fromCharCode(n);
    //   if (u != 64) {
    //     t += String.fromCharCode(r);
    //   }
    //   if (a != 64) {
    //     t += String.fromCharCode(i);
    //   }
    // }
    return utf8(t);
  }

  static String utf8(String a) {
    var b = '';
    for (int c = 0; c < a.length;) {
      int d = a.codeUnitAt(c);
      if (d < 128) {
        b += String.fromCharCode(d);
        c++;
      } else if (d > 191 && d < 224) {
        int c2 = a.codeUnitAt(c + 1);
        b += String.fromCharCode(((d & 31) << 6) | (c2 & 63));
        c += 2;
      } else {
        int c2 = a.codeUnitAt(c + 1);
        int c3 = a.codeUnitAt(c + 2);
        b += String.fromCharCode(
            ((d & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        c += 3;
      }
    }
    log(b);
    return b;
  }

  static String decode(List<int> list, int dif) {
    return list.map((value) => String.fromCharCode(value - dif)).join();
  }
}

const String proxy = "http://venus-proxy.vercel.app/";

Future<void> getSource(String id) async {
  final response = await http.get(
    Uri.parse('https://flixon.ovh/$id'),
    headers: {
      'Referer': 'https://onionplay.asia/',
      'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    },
  );

  if (response.statusCode == 200) {
    final responseBody = response.body;
    final list = jsonDecode(RegExp(r'\[\d.*\]').firstMatch(responseBody)![0]!)
        as List<dynamic>;
    final dif = int.parse(
        RegExp(r'parseInt\(value\)\s*-\s*(\d+)').firstMatch(responseBody)![1]!);

    final decodedIframe = JuicyCodes.decode(list.cast<int>(), dif);
    final iframe = RegExp(r'''location.replace\(['\"](.*?)['\"]''')
        .firstMatch(decodedIframe)![1]!;

    final juiceResponse = await http.get(
      Uri.parse(iframe),
      headers: {'Referer': 'https://flixon.ovh/'},
    );

    final juicevalue =
        RegExp(r'JuicyCodes.Run\((.*?)\)').firstMatch(juiceResponse.body)![1]!;
    final parsedJuice = JuicyCodes.run(juicevalue);
    final link = RegExp(r'''["'](http.*?\.m3u8.*?)["']''')
        .firstMatch(JuicyCodes.parseScript(parsedJuice))![1]!;
    print(link);
  } else {
    print('Failed to fetch source.');
  }
}

void main(List<String> args) {
  getSource("84773-1-2");
}
