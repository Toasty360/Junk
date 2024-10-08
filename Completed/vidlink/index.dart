import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:encrypt/encrypt.dart';

class CryptoMethods {
  static Key key = Key.fromBase16(
      "9f8dff95f42e0b9823f16bef28d2ca76063ab987ddd1f69718638f280db2df45");

  static encodeID(String data) {
    final iv = IV.fromSecureRandom(16);
    final encrypter = Encrypter(AES(key, mode: AESMode.cbc));
    final encrypted = encrypter.encrypt(data, iv: iv);
    return '${iv.base16}:${encrypted.base16}';
  }

  static decryptID(String encrypted) {
    final parts = encrypted.split(':');
    final iv = IV.fromBase16(parts[0]);
    final encryptedText = Encrypted.fromBase16(parts[1]);

    final encrypter = Encrypter(AES(key, mode: AESMode.cbc));
    return encrypter.decrypt(encryptedText, iv: iv);
  }
}

const String baseURL = "https://vidlink.pro/api/";

Future<Map> getSource(String id, bool isMovie, [int? sid, int? eid]) async {
  final encoded = CryptoMethods.encodeID(id);

  final response = await Dio().get(baseURL +
      (isMovie ? 'movie/$encoded' : 'tv/$encoded/${sid ?? 1}/${eid ?? 1}'));

  final data = CryptoMethods.decryptID(response.data);
  return jsonDecode(data);
}

void main() async {
  // print(await getSource("957452", true));
  print(await getSource("124364", false, 1, 5));
}
