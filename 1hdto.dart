import 'package:dio/dio.dart';
import 'package:html/dom.dart';
import 'package:html/parser.dart';

var baseurl = "https://1hd.sh/";

Map Cards(Element e, bool isMovie) {
  if (isMovie) {
    return ({
      "url": e.querySelector(".film-mask")!.attributes["href"],
      "cover": e.querySelector(".film-thumbnail > img")!.attributes["src"],
      "title": e.querySelector("h3")!.text,
      "type": e.querySelector(".film-info")!.children[0].text,
      "year": e.querySelector(".film-info")!.children[1].text,
      "quality": e.querySelector(".quality")!.text,
    });
  }
  return ({
    "url": e.querySelector(".film-mask")!.attributes["href"],
    "cover": e.querySelector(".film-thumbnail > img")!.attributes["src"],
    "title": e.querySelector("h3")!.text,
    "type": e.querySelector(".film-info")!.children[0].text,
    "eps": e.querySelector(".eps")!.text,
    "quality": e.querySelector(".quality")!.text,
  });
}

fetchHome() async {
  var response = await Dio().get(baseurl + "home");
  var doc = parse(response.data);
  Map data = {};
  data["spotlight"] = doc
      .querySelector(".swiper-wrapper")!
      .children
      .map((e) => ({
            "cover": e.querySelector(".slide-cover > img")!.attributes["src"],
            "url": e
                .querySelector(
                    ".container > .slide-element > .is-poster  > .poster-mask")!
                .attributes["href"],
            "title": e.querySelector("h2")!.text,
            "description": e.querySelector(".description")!.text,
            "type": e.querySelector(".film-info")!.children[1].text,
            "year": e.querySelector(".film-info")!.children[2].text,
            "quality": e.querySelector(".is-quality")!.text
          }))
      .toList();
  data["trending"] = {};
  data["trending"]["movie"] = doc
      .querySelector("#trending-movies > .film-list")!
      .children
      .map((e) => Cards(e, true))
      .toList();
  data["trending"]["tv"] = doc
      .querySelector("#trending-series > .film-list")!
      .children
      .map((e) => Cards(e, false))
      .toList();
  print(data["trending"]["movie"][0]);
}

fetchMediaId() async {
  var resp = await Dio()
      .get(baseurl + "watch-movie/watch-boy-kills-world-online-108541");
  getSources(RegExp(r"episodeId.*'(.*?)'").firstMatch(resp.data)!.group(1)!);
}

Future<void> getSources(String id) async {
  final dio = Dio();
  final headers = {'Referer': baseurl};

  try {
    final dataId = await dio
        .get(
          "$baseurl/ajax/movie/episode/servers/$id",
          options: Options(headers: headers),
        )
        .then((value) =>
            RegExp(r'data-id="(.*?)"').firstMatch(value.data)?.group(1));

    final iframeId = await dio
        .get("$baseurl/ajax/movie/episode/server/sources/$dataId")
        .then((value) => RegExp(r'/([^/?]+)\?a')
            .firstMatch(value.data["data"]["link"])
            ?.group(1));
    final data = await dio
        .get(
          "https://megacloud.tv/embed-1/ajax/e-1/getSources?id=$iframeId",
          options: Options(
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
          ),
        )
        .then((value) => value.data);

    print(data);
  } catch (e) {
    print('Error: $e');
  }
}

//https://1hd.to/ajax/movie/season/episodes/81986

Future<List<Map<String, dynamic>>> getSeasons(String id) async {
  var resp = await Dio().get("$baseurl/ajax/movie/seasons/$id");
  final doc = parse(resp.data);
  var seasons = doc
      .querySelectorAll(".ss-item")
      .map((e) => {
            "seasonId": e.attributes["data-id"]!,
            "season": e.querySelector(".ss-name > strong")?.text ?? '',
            "date": e.querySelector("small")?.text ?? '',
            "episodes": getEpisodes(e.attributes["data-id"]!)
          })
      .toList();
  return seasons;
}

Future<List<Map<String, String>>> getEpisodes(String episodeId) async {
  var resp = await Dio().get("$baseurl/ajax/movie/season/episodes/$episodeId");
  final doc = parse(resp.data);
  var episodes = doc
      .querySelectorAll(".ep-item")
      .map((e) => {
            "mediaId": e.attributes["data-id"] ?? '',
            "episode": e.querySelector(".number")?.text ?? '',
            "title": e.querySelector(".name")?.text ?? ''
          })
      .toList();
  return episodes;
}

fetchInfo(String id) async {
  var resp = await Dio().get(baseurl + id);
  final doc = parse(resp.data);
  Map data = {};

  data["cover"] = doc.querySelector(".film-thumbnail-img")!.attributes["src"];
  data["poster"] = doc.querySelector(".slide-cover > img")!.attributes["src"];
  data["quality"] = doc.querySelector(".quality")!.text;
  data["title"] = doc.querySelector("h3")!.text;
  data["description"] = doc.querySelector(".dropdown-text")!.text.trim();
  data["genre"] = doc
      .querySelectorAll(".item-genres > .item-body > a")
      .map((e) => e.text)
      .toList();
  data["release"] = doc
      .querySelectorAll(".others > .item")
      .elementAtOrNull(5)!
      .querySelector(".item-body")!
      .text
      .trim();
  // data["seasons"] = getSeasons(id.split("-").last);
  print(data);
}

search(String q) async {
  var resp = await Dio().get("$baseurl/ajax/movie/search?keyword=$q");
  final doc = parse(resp.data);
  var results = doc
      .querySelectorAll(".nav-item:not(.nav-all)")
      .map((e) => {
            "id": e.attributes["href"] ?? '',
            "title": e.querySelector("h3")!.text,
            "type": e.querySelector(".film-info")!.children.first.text,
            "year": e.querySelector(".film-info")!.children[4].text,
            "cover": e.querySelector(".film-thumbnail-img")!.attributes["src"]
          })
      .toList();
  return results;
}

void main() async {
  // fetchHome();
  // fetchMediaId();
  // fetchInfo("series/watch-walker-online-67413");
  // fetchInfo("movie/godzilla-x-kong-the-new-empire-online-107563");
  // print(await search("date night"));
  // var ep = await (await getSeasons("67413"))[0]["episodes"];
  // print(ep.length);
  // print(ep);
  getSources("1164968");
  // print((await getSeasons("67413"))[0]);
  // print(await getSeasons("67413"));
}
