import 'dart:convert';
import 'package:dio/dio.dart';

List<Map<String, String>> extractQualityAndLinks(String m3u8Content) {
  final lines = m3u8Content.split("\n");
  final results = <Map<String, String>>[];

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXT-X-STREAM-INF")) {
      final resolutionMatch =
          RegExp(r'RESOLUTION=(\d+x\d+)').firstMatch(lines[i]);
      final urlMatch = lines[i + 1].contains("http")
          ? RegExp(r'\?url=(.*)').firstMatch(lines[i + 1])?.group(1)
          : lines[i + 1];

      if (resolutionMatch != null && urlMatch != null) {
        final resolution = resolutionMatch.group(1)?.split("x").last;
        var url = Uri.decodeComponent(urlMatch);
        if (!url.startsWith("http")) {
          url = "https://" +
              url.split("base=").last +
              url.split("viper").last.split(".png")[0];
        }
        results.add({'resolution': resolution!, 'url': url});
      }
    }
  }

  return results;
}

Future<void> getSource(
  int id,
  bool isMovie, {
  int? season,
  int? episode,
}) async {
  final dio = Dio();

  final response = await dio.get(
    "https://vidlink.pro/embed/${isMovie ? 'movie/$id' : 'tv/$id/$season/$episode'}",
    options: Options(
      headers: {'Referer': 'https://soap2dayto.ac/'},
    ),
  );
  final responseBody = response.data.toString();
  final vConfigMatch =
      RegExp(r'window\.vConfig=({.*?})').firstMatch(responseBody);
  if (vConfigMatch == null) throw 'Pattern not found';

  final data = json.decode(vConfigMatch.group(1)!);
  String atobString = data['hash'].split('').reversed.join('');
  while (atobString.length % 4 != 0) {
    atobString += '=';
  }
  final List decodedHash = json.decode(utf8.decode(base64Decode(atobString)));
  final sourceHash = decodedHash[0]['hash'];
  print(sourceHash);
  final sourceResponse = await dio.get(
    'https://vidsrc.pro/api/e/$sourceHash',
    options: Options(
      headers: {
        'Referer': 'https://soap2dayto.ac/',
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      },
    ),
  );
  final sourceData = sourceResponse.data;
  final m3u8Response = await dio.get(
    sourceData['source'],
    options: Options(
      headers: {
        'Referer': 'https://vidsrc.pro/',
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      },
    ),
  );
  final links = extractQualityAndLinks(m3u8Response.data.toString());
  String downloadUrl = "";
  try {} catch (e) {
    final download = decodedHash.firstWhere((a) => a['name']!.contains('raze'));
    downloadUrl = Uri.encodeFull(
        'https://vidsrc.pro/download?title=${data['title']}&hash=${download['hash']}');
  }

  String defaultsrc = sourceData['source'];
  if (defaultsrc.contains("viper")) {
    defaultsrc = "https://" +
        defaultsrc.split("base=").last +
        defaultsrc.split("viper").last.split(".png")[0];
  }
  final result = {
    'qualities': links,
    'download': downloadUrl,
    'subtitles': sourceData['subtitles'],
    'default': defaultsrc,
  };

  print(result);
}

getSourceFromAPI(
  int id,
  bool isMovie, {
  int? season,
  int? episode,
}) async {
  try {
    final response = await Dio().get(
        "https://hugo.vidlink.pro/api/${isMovie ? 'movie/$id' : 'tv/$id/$season/$episode'}");
    final m3u8Response = await Dio().get(
      response.data["stream"]["playlist"],
      options: Options(
        headers: {
          'Referer': 'https://vidsrc.pro/',
          'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        },
      ),
    );
    print({
      'default': response.data["stream"]["playlist"],
      "qualities": extractQualityAndLinks(m3u8Response.data),
      "subtitles": response.data["stream"]["captions"]
    });
  } catch (error) {
    print(error);
    return {};
  }
}

void main() {
  getSourceFromAPI(76479, false, season: 4, episode: 2);
  // getSource(786892, true);
}

// /tv/76479/1/2