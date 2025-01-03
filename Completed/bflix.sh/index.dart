import 'package:dio/dio.dart';
import 'package:html/dom.dart';
import 'package:html/parser.dart';

class Bflix {
  final baseUrl = "https://bflix.sh";

  Future getSource(String id) async {
    final url = baseUrl + id;
    final response = (await Dio().get(url)).data;
    var plurl =
        RegExp(r'''pl_url\s*=\s*['"](.*?)['"]''').firstMatch(response)![1];
    var iframe = await Dio().get(plurl!).then((resp) =>
        RegExp(r'''data-id=['"](.*?)['"]''').firstMatch(resp.data)![1]);
    iframe = await Dio()
        .get(iframe!, options: Options(headers: {"Referer": baseUrl}))
        .then((value) => RegExp(r'''iframe\s*src=['"](.*?)['"]''')
            .firstMatch(value.data)![1]);
    var eval = await Dio()
        .get(iframe!)
        .then((resp) => RegExp(r'(eval.*?\)\)\))').firstMatch(resp.data)![1]!);
    var p = RegExp(r'\[\{(.*?)\}\]').firstMatch(eval)![1];
    var acMatch = RegExp(r',([\d]+,[\d]+),').firstMatch(eval)!.group(1);
    var ac = acMatch!.split(',');
    var k =
        eval.split(acMatch).last.split(".")[0].replaceAll("'", "").split("|");
    var c = int.parse(ac[1].trim());
    var a = int.parse(ac[0].trim());

    while (c-- > 0) {
      if (k[c] != "") {
        p = p!.replaceAll(RegExp(r'\b' + c.toRadixString(a) + r'\b'), k[c]);
      }
    }
    return RegExp(r'''['"](.*?)['"]''').firstMatch(p!)![1];
  }

  Future getId(String title, int year, bool isMovie) async {
    final url = baseUrl + "/livesearch?q=$title";
    final response = (await Dio().get(url)).data;
    var doc = parse(response);
    Element e = doc.querySelectorAll(".film").firstWhere((e) {
      int? _year = int.tryParse(
          e.querySelectorAll(".dot").last.previousElementSibling!.text);
      return (int.tryParse(e
                          .querySelectorAll(".dot")
                          .last
                          .text
                          .split(" ")
                          .last
                          .trim()) ==
                      null
                  ? true
                  : false) ==
              isMovie &&
          (e.querySelector(".film-name")!.text.toLowerCase())
              .contains(title.toLowerCase()) &&
          (year != 0 ? (year == _year) : true);
    });
    print({
      "id": e.attributes["href"],
      "title": e.querySelector(".film-name")!.text,
      "year": isMovie
          ? int.tryParse(
              e.querySelectorAll(".dot").last.previousElementSibling!.text)
          : "N/A",
      "isMovie": isMovie,
      "image": e.querySelector("img")!.attributes["src"]
    });
    return e.attributes["href"]!.replaceAll(baseUrl, "");
  }
}

void main() {
  Bflix bflix = Bflix();
  bflix.getId("The Shawshank Redemption", 1994, true).then((id) {
    print(id);
  }).catchError((error) {
    print('Error: $error');
  });
  // bflix.getId("from", 0, false);
  // bflix.getId("transformers", 2017, true);
  // bflix.getSource("/series/from-86969/").then((source) {
  //   print(source);
  // }).catchError((error) {
  //   print('Error: $error');
  // });
}

// test(){
//   var s = 
// }