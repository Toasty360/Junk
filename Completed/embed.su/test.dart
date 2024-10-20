import 'dart:convert';
import 'package:dio/dio.dart';

class VidsrcPro {
  String vidSrcBaseURL = "http://embed.su";

  Future getSource(
    int id,
    bool isMovie, {
    int? season,
    int? episode,
  }) async {
    final dio = Dio();
    print(
        "$vidSrcBaseURL/embed/${isMovie ? 'movie/$id' : 'tv/$id/$season/$episode'}"
            .split(":"));
    final response = (await dio.get(
      "$vidSrcBaseURL/embed/${isMovie ? 'movie/$id' : 'tv/$id/$season/$episode'}",
      options: Options(
        headers: {'Referer': vidSrcBaseURL},
      ),
    ));

    final vConfigMatch =
        RegExp(r'window\.vConfig\s*=\s*(.*?);').firstMatch(response.data);
    if (vConfigMatch == null) throw 'Pattern not found';
    var data;
    if (vConfigMatch[1]!.startsWith("JSON")) {
      data = json.decode(utf8.decode(base64Decode(
          RegExp(r'\(`(.*)`\)').firstMatch(vConfigMatch[1]!)![1]!)));
    } else {
      data = json.decode(vConfigMatch.group(1)!);
    }

    String atobString = data['hash'].split('').reversed.join('');
    while (atobString.length % 4 != 0) {
      atobString += '=';
    }
    final List decodedHash = json.decode(utf8.decode(base64Decode(atobString)));
    print(decodedHash);
    final sourceHash = decodedHash[0]['hash'];
    final sourceResponse = await dio.get(
      '$vidSrcBaseURL/api/e/$sourceHash',
      options: Options(
        headers: {
          'Referer': vidSrcBaseURL,
          'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        },
      ),
    );
    if (sourceResponse.statusCode != 200) {
      throw Exception('Failed to get video source');
    }
    final sourceData = sourceResponse.data;
    String defaultsrc = sourceData['source'];
    // final name = decodedHash[0]['name'];

    // if (defaultsrc.contains("viper") && defaultsrc.contains(".png")) {
    //   defaultsrc =
    //       "https://${defaultsrc.split("base=").last}${defaultsrc.split("viper").last.split(".png")[0]}";
    // } else {
    //   defaultsrc =
    //       defaultsrc.split(":").first + ":/" + defaultsrc.split(name).last;
    // }
    print(defaultsrc);
    var links = (await dio.get(defaultsrc,
        options: Options(
            receiveTimeout: Duration(seconds: 3),
            validateStatus: (status) => true,
            headers: {
              'Referer': vidSrcBaseURL,
            })));
    print(links.requestOptions.headers);
    print(links.data);
  }
}

void main() {
  final vidSrcPro = VidsrcPro();
  vidSrcPro.getSource(533535, true);
}
