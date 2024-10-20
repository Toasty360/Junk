import 'dart:convert';
import 'dart:typed_data';
import 'package:archive/archive.dart';
import 'package:dio/dio.dart';

final baseUrl =
    "https://rest.opensubtitles.org/search/episode-6/imdbid-1405406/season-6/sublanguageid-eng";

var dio = Dio();

Future<String> loadSubtitles() async {
  try {
    var response = await dio.get(baseUrl,
        options: Options(headers: {
          "X-User-Agent": "trailers.to-UA",
        }));
    if (response.data.isEmpty) {
      throw Exception('No subtitles found');
    }
    var subs = response.data;
    var downloadLink = subs[0]["SubDownloadLink"];
    var zipResponse = await dio.get<Uint8List>(
      downloadLink,
      options: Options(responseType: ResponseType.bytes),
    );
    var bytes = zipResponse.data!;
    var decodedBytes = GZipDecoder().decodeBytes(bytes);

    String srtContent = utf8.decode(decodedBytes);
    return srtContent;
  } catch (e) {
    throw Exception("Faild to get subtitles");
  }
}

void main() async {
  var subs = await loadSubtitles();
  print(subs);
}
