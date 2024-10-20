import 'dart:convert';
import 'package:encrypt/encrypt.dart';

class CryptoJSAesJson {
  /// Encrypt any value
  static String encrypt(dynamic value, String password) {
    final key = Key.fromUtf8(password
        .padRight(32, '0')
        .substring(0, 32)); // Ensure the key is 32 bytes long
    final iv = IV.fromLength(16); // Use a random IV for each encryption

    final encrypter = Encrypter(AES(key));

    final encrypted = encrypter.encrypt(jsonEncode(value), iv: iv);
    return jsonEncode({
      'ct': encrypted.base64,
      'iv': iv.base64,
    }).replaceAll(RegExp(r'\s'), '');
  }

  /// Decrypt a previously encrypted value
  static dynamic decrypt(String jsonStr, String password) {
    final Map<String, dynamic> jsonMap = jsonDecode(jsonStr);
    final key = Key.fromUtf8(password
        .padRight(32, '0')
        .substring(0, 32)); // Ensure the key is 32 bytes long
    final iv = IV.fromBase64(jsonMap['iv']);

    final encrypter = Encrypter(AES(key));

    final decrypted = encrypter.decrypt64(jsonMap['ct'], iv: iv);
    return jsonDecode(decrypted);
  }
}
