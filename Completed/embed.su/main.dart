import 'dart:convert';
import 'package:dio/dio.dart';

Future<List<Map<String, String>>> extractQualityAndLinks(
    String url, String name) async {
  final m3u8Content = await (await Dio().get(
    url,
    options: Options(
      validateStatus: (status) => true,
      receiveTimeout: Duration(seconds: 3),
      headers: {
        'Referer': "https://vidsrc.pro/",
      },
    ),
  ))
      .data;
  final List<String> lines = m3u8Content.split("\n");
  final results = <Map<String, String>>[];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXT-X-STREAM-INF")) {
      final resolutionMatch =
          RegExp(r'RESOLUTION=(\d+x\d+)').firstMatch(lines[i]);

      results.add({
        "quality": resolutionMatch?.group(1)?.split("x").last ?? "Unknown",
        "link": lines[i + 1],
      });
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
    "https://vidsrc.pro/embed/${isMovie ? 'movie/$id' : 'tv/$id/$season/$episode'}",
    options: Options(
      validateStatus: (status) => true,
      headers: {'Referer': 'https://vidsrc.pro/'},
    ),
  );
  var referer = "http://" + response.realUri.host;
  final vConfigMatch =
      RegExp(r'window\.vConfig\s*=\s*(.*?);').firstMatch(response.data);
  if (vConfigMatch == null) throw 'Pattern not found';
  var data;
  if (vConfigMatch[1]!.startsWith("JSON")) {
    data = json.decode(utf8.decode(
        base64Decode(RegExp(r'\(`(.*)`\)').firstMatch(vConfigMatch[1]!)![1]!)));
  } else {
    data = json.decode(vConfigMatch.group(1)!);
  }

  String atobString = data['hash'].split('').reversed.join('');
  while (atobString.length % 4 != 0) {
    atobString += '=';
  }
  final List decodedHash = json.decode(utf8.decode(base64Decode(atobString)));
  final name = decodedHash[0]['name'];
  final sourceHash = decodedHash[0]['hash'];
  final sourceResponse = await dio.get(
    '${referer}/api/e/$sourceHash',
    options: Options(
      validateStatus: (status) => true,
      headers: {
        'Referer': referer,
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      },
    ),
  );
  final sourceData = sourceResponse.data;

  String defaultsrc = "https:/" + sourceData['source'].split(name).last;
  var links = await extractQualityAndLinks(defaultsrc, name);

  final result = {
    "referer": referer,
    'qualities': links,
    'subtitles': sourceData['subtitles'],
    'default': defaultsrc,
  };

  print(result);
}

void main() async {
  getSource(872585, true);
  // getSource(957452, true, season: 4, episode: 2);

  // var r = await Dio().get(
  //     "https://tmstr.luminousstreamhaven.com/stream_new2/H4sIAAAAAAAAAw3PwW6DIAAA0F8SqOvcbU7BYMWAAupNhMUhdibrtO3Xb5d3f8ie3YhONkk.wSsaYTSOMYIujs__vJyStylLW_mVrFNm_ejtMnRs5mjepyBmC29xlc1tBUQ.6ByVKBB.FasrAuaKEpYt0dRVh8vnh_a2lCrFFyiBkj9R7.3ToPejlrNWMBFmVcEpSm1uYaMoUMttEwEfvbTfLVSxJLjqge1tIaMKWWQ8vuqMUbWKuoQcCaTCGLa979LGZGJn0d0bLQjzHBp9X5sclAbGzHR9VH_ccnPFeVvQRjwxc.s9dcvxYFDtfEmORoVC463R5P_j57XW4LchdFd4yNqFny7PYXPkALyNkj.TTwx4QQEAAA--/master.m3u8",
  //     options: Options(headers: {"Referer": "https://flickersky.com/"}));
  // // print(r.data);
  // print(extractQualityAndLinks(r.data));
}

// /tv/76479/1/2

// 141723 --> 1956 movie


// <script>window.vConfig={"title":"The Crow","server":"viper","hash":"0VficGTzgXRkRGauJ0N1ckZBZVUIdzdS1EU0QlY04kMm1EZRNWOCV0YjhGWChHcRZmI6ICazFGaiwiIyVGcpZnI6ISZtFmbis3W","referer":"https://vidsrc.pro/","xid":"wLvJHcuMmczRWa29yL6MHc0RHa","episodeId":"m:957452:1:1","captchaKey":"6LeJdnYpAAAAAAV2gCg0ttyy5oNCKealvAQ4I8fR","v":"2.7.20","uwuId":""}</script>



// try {
//   } catch (e) {
//     if (defaultsrc.contains(name)) {
//       var finalurl = Uri.parse(defaultsrc);
//       Match? match = RegExp('$name.*?(.*?).png').firstMatch(finalurl.path);
//       if (match != null) {
//         defaultsrc = finalurl.scheme +
//             "://" +
//             finalurl.queryParameters["base"]! +
//             match[1]!;
//       } else {
//         print("Unable to find name in path");
//       }
//     }
//     links = await extractQualityAndLinks(defaultsrc, name);
//   }