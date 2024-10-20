import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:html/parser.dart';

class OpenSubtitle {
  final baseUrl = "https://www.opensubtitles.com/";
  final unknownShit =
      "/hearing_impaired-exclude/machine_translated-/trusted_sources-only";

  Future getCaptions(String id, bool isMovie,
      {String? season = "all", String? episode = "all"}) async {
    final response = await Dio()
        .get(baseUrl +
            "en/en/search-tvshows/q-${id}$unknownShit/season-$season/episode-$episode")
        .then((resp) => RegExp(r'<tbody>(.*?)</tbody>', dotAll: true)
            .firstMatch(resp.data)!
            .group(1)!);
    var doc = parse("<table>$response</table>");
    return jsonEncode(doc.querySelectorAll("tr").map((e) {
      return {
        "name": e.querySelector("em")!.text.trim(),
        "link": baseUrl +
            e.querySelector(".vip_area .ddl_trigger_no")!.attributes["href"]!,
      };
    }).toList());
  }
}

void main() {
  OpenSubtitle openSubtitle = OpenSubtitle();
  // openSubtitle.getCaptions("tt2049403", true).then((data) {
  //   print(data);
  // });
  openSubtitle
      .getCaptions("tt7631058", false, season: "1", episode: "2")
      .then((data) {
    print(data);
  });
}
