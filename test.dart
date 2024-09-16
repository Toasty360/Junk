// import 'package:dio/dio.dart';
// final dio = Dio();
// const id = "series/young-sheldon-29524/1-2/";
// // const id = "movie/dune-part-two-35437/";
// const baseURL = "https://1hd.sh/";
// getLinks() async {
//   String data = (await dio.get(baseURL + id)).data!;
//   String iframeUrl = await dio
//       .get(RegExp(r'pl_url.*(https.*)+').firstMatch(data)![1]!)
//       .then(
//           (data) => RegExp(r'data-id=.(.*).').firstMatch(data.data)?[1] ?? "");
//   String evalFunction = await dio
//       .get(RegExp(r'src="([^"]+)"')
//           .firstMatch((await dio.get(iframeUrl)).data)![1]!)
//       .then((value) =>
//           RegExp(r'eval\(f.*\)\)\)').allMatches(value.data!).last[0] ?? "");
//   String p = RegExp(r'\[\{(.*"(.*)".*)\}\]').firstMatch(evalFunction)?[2] ?? "";
//   var url = p;
//   String acMatch =
//       RegExp(r',([\d]+,[\d]+),').firstMatch(evalFunction)?[1] ?? "";
//   List<String> k = evalFunction.split(acMatch).last.split(".").first.split("|");
//   List<int> ac = acMatch.isNotEmpty
//       ? acMatch.split(",").map(int.parse).toList()
//       : [36, k.length];
// int c = ac[1];
// print(p);
// while (c-- > 0) {
//   if (k[c] != "") {
//     p = p.replaceAll(RegExp("\\b${c.toRadixString(ac[0])}\\b"), k[c]);
//   }
// }
// print(p);
//   RegExp(r'\d\w').allMatches(url).toList().reversed.forEach((element) {
//     var i = k[int.parse(element[0]!, radix: ac[0])];
//     if (i != "") url = url.replaceAll(element[0]!, i);
//   });
//   print(url);
//   print(p == url);
// }
// void main() async {
//   // getLinks();
// }

