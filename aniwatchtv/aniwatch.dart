import 'package:dio/dio.dart';
import 'package:html/parser.dart';

import 'model.dart';

class AniWatch {
  String baseURL = "https://aniwatchtv.to/";

  var dio = Dio()
    ..options.headers = {
      "referer": "https://aniwatchtv.to/",
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
    };

  fetchHomeData() async {
    var resp = await dio.get(baseURL + "home");
    var doc = parse(resp.data);

    //spotlight data
    List<Anime> spotlight = [];
    doc.querySelectorAll("#slider .swiper-slide").forEach((item) {
      var anime = Anime(
          item
              .querySelector(".desi-buttons")!
              .children
              .last
              .attributes["href"]!,
          item.querySelector(".desi-head-title")!.text);
      var _temp = item
          .querySelector(".sc-detail")!
          .text
          .split("\n")
          .map((e) => e.replaceAll(RegExp(r"\s+"), "").trim())
          .where((e) => e.isNotEmpty)
          .toList()
          .take(5)
          .toList();
      anime.type = _temp.first;
      anime.duration = _temp[1];
      anime.releaseDate = _temp[2];
      anime.totalEpisodes = _temp[4];
      anime.description = item.querySelector(".desi-description")!.text.trim();
      anime.banner = item.querySelector("img")!.attributes["data-src"];
      spotlight.add(anime);
    });
    // print(spotlight.first);

    //trending data
    List<Anime> trending = [];
    doc.querySelectorAll(".trending-list .swiper-slide").forEach((item) {
      var anime = Anime(
          item.querySelector("a.film-poster")!.attributes["href"]!,
          item.querySelector(".film-title")!.text);
      anime.poster = item.querySelector("img")!.attributes["data-src"];
      trending.add(anime);
    });
    print(trending.first);
  }

  fetchTopAiring() async {
    var resp = await dio.get(baseURL + "top-airing");
    var doc = parse(resp.data);
    List<Anime> topAiring = [];
    doc.querySelectorAll("#main-content .flw-item ").forEach((item) {
      var anime = Anime(
          item.querySelector(".film-poster-ahref")!.attributes["href"]!,
          item.querySelector(".dynamic-name")!.text)
        ..description = item.querySelector(".description").runtimeType != Null
            ? item.querySelector(".description")!.text
            : ""
        ..poster =
            item.querySelector(".film-poster-img")!.attributes["data-src"];

      topAiring.add(anime);
    });
    print(topAiring.first);
  }
}

void main() {
  // AniWatch().fetchHomeData();
  AniWatch().fetchTopAiring();
}
