import 'dart:convert';
import 'package:dio/dio.dart';

class Warezcdn {
  static const String _baseUrl = "https://embed.warezcdn.link/";
  final Dio _dio;

  Warezcdn()
      : _dio = Dio(BaseOptions(headers: {
          'Referer': _baseUrl,
          'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        }));

  Future<Map<String, dynamic>> fetchEmbedData(String id) async {
    final embedUrl = await _getEmbedUrl(id);
    final playUrl = await _getPlayUrl(embedUrl);
    return _makePost(playUrl);
  }

  Future<String> _getEmbedUrl(String id) async {
    final response =
        await _dio.get("$_baseUrl/getEmbed.php?id=$id&sv=warezcdn&lang=1");
    return RegExp(r'''<iframe.*?src\s*=\s*["\'](.*?)["\']''')
            .firstMatch(response.data)
            ?.group(1) ??
        (throw Exception('Embed URL not found'));
  }

  Future<String> _getPlayUrl(String embedUrl) async {
    final fullUrl =
        embedUrl.startsWith("http") ? embedUrl : "$_baseUrl$embedUrl";
    final response = await _dio.get(fullUrl);
    return RegExp(r'''window.location.href\s*=\s*["\'](.*?)["\'];''')
            .firstMatch(response.data)
            ?.group(1) ??
        (throw Exception('Play URL not found'));
  }

  Future<Map<String, dynamic>> _makePost(String playUrl) async {
    final uri = Uri.parse(playUrl);
    final hash = uri.pathSegments.last;
    final postUrl =
        "${uri.scheme}://${uri.host}/player/index.php?data=$hash&do=getVideo";

    final response = await _dio.post(
      postUrl,
      data: FormData.fromMap({'hash': hash, 'r': _baseUrl}),
      options: Options(headers: {'X-Requested-With': 'XMLHttpRequest'}),
    );

    return jsonDecode(response.data);
  }
}

void main() async {
  final fetcher = Warezcdn();
  try {
    final data = await fetcher.fetchEmbedData("242794");
    print(data);
  } catch (e) {
    print("Error: $e");
  }
}
