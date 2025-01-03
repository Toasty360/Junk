import 'dart:convert';
import 'dart:typed_data';
import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';
import 'package:encrypt/encrypt.dart';
import 'package:http/http.dart' as http;

const baseurl = 'https://m4ufree.se';
String cookie = '';

final key = Key.fromBase64(
    base64.encode(utf8.encode("37911490979715163134003223491201")));
final key2 = Key.fromBase64(
    base64.encode(utf8.encode("54674138327930866480207815084989")));
final iv = IV.fromBase64(base64.encode(utf8.encode("3134003223491201")));

String _encryptAES(String text) {
  final encrypter = Encrypter(AES(key, mode: AESMode.cbc));
  final encrypted = encrypter.encrypt(text, iv: iv);
  return encrypted.base64;
}

String _decryptAES(String encryptedText, key) {
  final encrypter = Encrypter(AES(key, mode: AESMode.cbc));
  final decrypted = encrypter.decrypt64(encryptedText, iv: iv);
  return decrypted;
}

class DoSomeShit {
  String encryptData(String data, String key) {
    final keyBytes = Key.fromUtf8(key);
    final iv = IV.fromLength(16); // Adjust IV as necessary
    final encrypter = Encrypter(AES(keyBytes, mode: AESMode.cbc));
    final encrypted = encrypter.encrypt(data, iv: iv);
    return hex.encode(encrypted.bytes);
  }

  String decryptData(String encryptedHex, String key) {
    try {
      final keyBytes = Key.fromUtf8(key);
      final iv = IV.fromLength(16); // Ensure the same IV used during encryption
      final encrypter = Encrypter(AES(keyBytes, mode: AESMode.cbc));

      // Decode hex to bytes
      final encryptedBytes = hex.decode(encryptedHex);

      // Ensure that encryptedBytes is not empty
      if (encryptedBytes.isEmpty) {
        throw Exception("No data to decrypt. Encrypted hex may be invalid.");
      }

      // Decrypt the data
      final decrypted = encrypter
          .decryptBytes(Encrypted(Uint8List.fromList(encryptedBytes)), iv: iv);
      return utf8.decode(decrypted);
    } catch (error) {
      print("Error decrypting data: $error");
      return '';
    }
  }

  String formatCookies(String cookieString) {
    final regex = RegExp(r'XSRF-TOKEN=(.*?);.*laravel_session=(.*?);');
    final match = regex.firstMatch(cookieString);
    final xsrf = match?.group(1);
    final session = match?.group(2);
    return 'XSRF-TOKEN=$xsrf; laravel_session=$session';
  }

  Future<String?> extractSource(String idfileEnc, String idUserEnc,
      String domainApiView, String domainApi) async {
    final fileId = decryptData(idfileEnc, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn");
    final userId = decryptData(idUserEnc, "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O");

    await http.get(Uri.parse(domainApiView + fileId));

    final playerData = jsonEncode({
      "idfile": fileId,
      "iduser": userId,
      "domain_play": baseurl,
      "platform": "Win32",
      "hlsSupport": true,
    });

    final encryptedData =
        encryptData(playerData, "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ");
    final hash = md5
        .convert(
            utf8.encode(encryptedData + "KRWN3AdgmxEMcd2vLN1ju9qKe8Feco5h"))
        .toString();

    final response = await http.post(
      Uri.parse(domainApi + "/playiframe"),
      headers: {
        "Referer": "https://play9str.playm4u.xyz",
        "Origin": "https://play9str.playm4u.xyz",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: "data=$encryptedData%7C$hash",
    );

    final Map<String, dynamic> resp = json.decode(response.body);
    if (resp['type'] == "url-m3u8-encv1") {
      return decryptData(resp['data'], "oJwmvmVBajMaRCTklxbfjavpQO7SZpsL");
    } else {
      print("error: $resp");
      return "error";
    }
  }
}

Future<void> getSource(String id) async {
  final shit = DoSomeShit();

  try {
    final response = await http.get(Uri.parse(baseurl + id));
    cookie = shit.formatCookies(response.headers['set-cookie'] ?? '');

    final responseText = response.body;
    final link = RegExp(r'singlemv\s*active.*?data="(.*?)"')
        .firstMatch(responseText)
        ?.group(1);
    final token = RegExp(r'''csrf-token.*content\s*=\s*[\'"](.*?)[\'"]''')
        .firstMatch(responseText)
        ?.group(1);

    final postResponse = await http.post(
      Uri.parse(baseurl + "/ajax"),
      headers: {
        "Origin": baseurl,
        "Referer": baseurl + id,
        "cookie": cookie,
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: {"m4u": link ?? "", "_token": token},
    );

    final dataSrc = RegExp(r'''src=[\'"](.*?)[\'"]''')
        .firstMatch(postResponse.body)
        ?.group(1);
    final dataResponse = await http.get(Uri.parse(dataSrc ?? ''));

    final r = dataResponse.body;
    final idfileEnc =
        RegExp(r'''idfile_enc\s*=\s*[\'"](.*?)[\'"]''').firstMatch(r)?.group(1);
    final idUserEnc =
        RegExp(r'''idUser_enc\s*=\s*[\'"](.*?)[\'"]''').firstMatch(r)?.group(1);
    final domainApiView = RegExp(r'''DOMAIN_API_VIEW\s*=\s*[\'"](.*?)[\'"]''')
        .firstMatch(r)
        ?.group(1);
    final domainApi =
        RegExp(r'''DOMAIN_API\s*=\s*[\'"](.*?)[\'"]''').firstMatch(r)?.group(1);
    final captions = jsonDecode(RegExp(r'''data_subs\s*=\s*[\'"](.*?)[\'"];''')
            .firstMatch(r)
            ?.group(1) ??
        '[]');

    final source = {
      'url': await shit.extractSource(idfileEnc ?? "", idUserEnc ?? "",
          domainApiView ?? "", domainApi ?? ""),
      'captions':
          captions.map((c) => {"label": c['label'], "url": c['file']}).toList(),
    };

    print(source);
  } catch (error) {
    print("Error: $error");
  }
}

void main() {
  getSource("/watch-y69ay-the-wild-robot-2024-movie-online-free-m4ufree.html");
}
