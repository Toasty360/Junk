import 'package:dio/dio.dart';

Future<String> getLinks(String id) async {
  String resp = await (await Dio().get("https://kwik.si/e/$id",
          options: Options(headers: {
            "Referer": "https://animepahe.ru/",
            "Cookie": "__ddg1=;__ddg2_=;__ddgid_=;__ddgmark_=;SERVERID=",
          })))
      .data;
  String evalF = RegExp(r'eval(\(f.*?)\}\)\)').allMatches(resp).last.group(0)!;
  String p =
      RegExp(r"'(.[^']*?)';").firstMatch(evalF)!.group(1)!.replaceAll("\\", "");
  List<String> ac =
      RegExp(r',([\d]+,[\d]+),').allMatches(evalF).last.group(1)!.split(",");

  List<String> k =
      evalF.split(ac[0]).last.split(".")[0].replaceAll("'", "").split("|");
  int a = int.parse(ac[0]);
  int c = int.parse(ac[1]);

  String e(c) {
    return (c < a ? "" : e(c ~/ a)) +
        ((c %= a) > 35 ? String.fromCharCode(c + 29) : c.toRadixString(36));
  }

  while (c-- > 0) {
    if (k[c] != "") {
      var temp = RegExp(r'\b' + e(c) + r'\b');
      p = p.replaceAll(temp, k[c]);
    }
  }

  print(p);
  return p;
}

Crimson(String id) async {
  String resp = await (await Dio().get("https://kwik.si/e/$id",
          options: Options(headers: {
            "Referer": "https://animepahe.ru/",
            "Cookie": "__ddg1=;__ddg2_=;__ddgid_=;__ddgmark_=;SERVERID=",
          })))
      .data;
  String evalF = RegExp(r'eval(\(f.*?)\}\)\)').allMatches(resp).last.group(0)!;
  String p =
      RegExp(r"'(.[^']*?)';").firstMatch(evalF)!.group(1)!.replaceAll("\\", "");
  String acMatch = RegExp(r',([\d]+,[\d]+),').allMatches(evalF).last.group(1)!;
  List<String> ac = acMatch.split(",");

  List<String> k =
      evalF.split(acMatch).last.split(".")[0].replaceAll("'", "").split("|");

  int a = int.parse(ac[0]);
  int c = int.parse(ac[1]);
  String e(c) {
    return (c < a ? "" : e(c ~/ a)) +
        ((c %= a) > 35 ? String.fromCharCode(c + 29) : c.toRadixString(36));
  }

  while (c-- > 0) {
    if (k[c] != "") {
      var temp = RegExp(r'\b' + e(c) + r'\b');
      p = p.replaceAll(temp, k[c]);
    }
  }
  print(p);
}

void main() async {
  // getLinks("YCpqzTJr7jhn");
  Crimson("YCpqzTJr7jhn");

  // Dio dio = Dio();
  // var iframe = await Dio()
  //     .get(
  //         "https://animepahe.ru/play/c4debd2b-bb39-b433-ddcb-eedf68209821/dc659761e3f32076ea32a545745ae058b819b7a337ad9cf3ead708616e7e15c1",
  //         options: Options(headers: {
  //           'Referer': 'https://animepahe.ru/',
  //           'Cookie': '__ddg1=;__ddg2_=;__ddgid_=; __ddgmark_=;SERVERID=',
  //         }))
  //     .then((value) =>  );
  // print(" test $iframe");
}
