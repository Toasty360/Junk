// import 'dart:convert';
import 'package:dio/dio.dart';

//!this shit not working in dart ://

var baseUrl = "https://moviesapi.club";
var password = "1FHuaQhhcsKgpTRB";

decrypt(String jsonStr, String password) {
  // final parsedJson = json.decode(jsonStr);
}

// String encrypt(Map<String, dynamic> data, String password) {
//   final iv = IV.fromLength(16); // Generate a new IV dynamically
//   final key =
//       Key.fromUtf8(password); // Derive or use the password directly as key
//   final encrypter = Encrypter(AES(key, mode: AESMode.cbc));

//   final encrypted = encrypter.encrypt(json.encode(data), iv: iv);

//   final result = {
//     'ct': base64.encode(encrypted.bytes),
//     'iv': hex.encode(iv.bytes), // Convert the IV to a hex string
//     // Optionally include salt if using one
//   };

//   return json.encode(result);
// }

// String _decryptAES(String encryptedText) {

//   return decrypted;
// }

// Uint8List _hexToBytes(String hex) {
//   return Uint8List.fromList(List.generate(hex.length ~/ 2,
//       (i) => int.parse(hex.substring(i * 2, i * 2 + 2), radix: 16)));
// }

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
  // print(CryptoJSAesJson.decrypt(jsonStr, password));
  var decryptedString = await decrypt(jsonStr, password);
  print(decryptedString);

  // // Step 4: Extract sources and tracks using regex
  // var sourceReg = RegExp(r'sources\s*:\s*(\[[^\]]*\])');
  // var tracksReg = RegExp(r'tracks\s*:\s*(\[[^\]]*\])');

  // var sourcesMatch = sourceReg.firstMatch(decryptedString);
  // var tracksMatch = tracksReg.firstMatch(decryptedString);

  // var sources = sourcesMatch != null ? jsonDecode(sourcesMatch.group(1)!) : [];
  // var tracks = tracksMatch != null ? jsonDecode(tracksMatch.group(1)!) : [];

  // // Final media object
  // var media = {
  //   "sources": sources,
  //   "tracks": tracks,
  //   "referer": baseUrl,
  //   "provider": "Movieapi.club",
  // };

  // print(media);
}

void main() async {
  await getSource("385687", true, 0, 0); // for movies
  // await getSource("some-tv-id", false, 1, 1); // for TV shows, season 1, episode 1
}
