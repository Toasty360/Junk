import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:encrypt/encrypt.dart';
import 'dart:typed_data';

var baseUrl = "https://moviesapi.club";
var password = "1FHuaQhhcsKgpTRB";

Future<String> decrypt(String jsonStr, String password) async {
  final jsonData = jsonDecode(jsonStr);
  print(jsonData["iv"]);
  final iv = IV(hexToBytes(jsonData["iv"]));
  final key = Key.fromUtf8(password);
  final salt = hexToBytes(jsonData["s"]);
  var data = Encrypter(AES(key, mode: AESMode.cbc)).decrypt(
      Encrypted.fromBase64(jsonData["ct"]),
      iv: iv,
      associatedData: salt);
  print(data);
  return data;
}

Uint8List hexToBytes(String hex) {
  if (hex.length % 2 != 0) {
    throw FormatException("Invalid hex string");
  }

  var length = hex.length ~/ 2;
  var bytes = Uint8List(length);

  for (var i = 0; i < length; i++) {
    bytes[i] = int.parse(hex.substring(i * 2, i * 2 + 2), radix: 16);
  }

  if (bytes.length != 16) {
    throw ArgumentError(
        "Initialization vector must be 16 bytes long, but got ${bytes.length}");
  }

  return bytes;
}

Future<void> getSource(String id, bool isMovie, int s, int e) async {
  var dio = Dio();

  // Generate the URL based on whether it's a movie or TV show
  var url = isMovie ? '$baseUrl/movie/$id' : '$baseUrl/tv/$id-$s-$e';
  print(url);
  // Step 1: Get iframe URL
  var response =
      await dio.get(url, options: Options(headers: {"Referer": baseUrl}));
  var iframeMatch = RegExp(r'<iframe.* src="(.*?)"').firstMatch(response.data);
  var iframeUrl = iframeMatch?.group(1);

  if (iframeUrl == null) {
    throw 'Unable to find iframe URL';
  }

  // Step 2: Get encrypted JSON string from iframe
  var iframeResponse =
      await dio.get(iframeUrl, options: Options(headers: {"Referer": baseUrl}));
  var scriptMatch = RegExp(
    r'''<script\s+type="text\/javascript\">.*?'(.*?)'.*?<\/script>''',
    dotAll: true,
  ).firstMatch(iframeResponse.data);
  var jsonStr = scriptMatch?.group(1);
  if (jsonStr == null) {
    throw 'Unable to find encrypted string';
  }

  // Step 3: Decrypt the JSON string
  var decryptedString = await decrypt(jsonStr, password);
  print(decryptedString.codeUnits);

  // Step 4: Extract sources and tracks using regex
  var sourceReg = RegExp(r'sources\s*:\s*(\[[^\]]*\])');
  var tracksReg = RegExp(r'tracks\s*:\s*(\[[^\]]*\])');

  var sourcesMatch = sourceReg.firstMatch(decryptedString);
  var tracksMatch = tracksReg.firstMatch(decryptedString);

  var sources = sourcesMatch != null ? jsonDecode(sourcesMatch.group(1)!) : [];
  var tracks = tracksMatch != null ? jsonDecode(tracksMatch.group(1)!) : [];

  // Final media object
  var media = {
    "sources": sources,
    "tracks": tracks,
    "referer": baseUrl,
    "provider": "Movieapi.club",
  };

  print(media);
}

void main() async {
  await getSource("385687", true, 0, 0); // for movies
  // await getSource("some-tv-id", false, 1, 1); // for TV shows, season 1, episode 1
}
