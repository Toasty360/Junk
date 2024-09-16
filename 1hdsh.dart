import 'package:dio/dio.dart';

const String baseURL = "https://1hd.sh/";

Future<void> getSource(String id) async {
  final dio = Dio(BaseOptions(headers: {
    "Referer": baseURL,
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"
  }));
  final startTime = DateTime.now();

  final data1 = (await dio.get(baseURL + id)).data;

  final ajaxResp = (await dio
          .get(RegExp(r"pl_url.*(https.*?)'").firstMatch(data1)!.group(1)!))
      .data;
  final iframeData = (await dio
          .get(RegExp(r'data-id="(.*?)"').firstMatch(ajaxResp)!.group(1)!))
      .data;
  final finalData =
      (await dio.get(RegExp(r'src="(.*?)"').firstMatch(iframeData)!.group(1)!))
          .data;

  final evalMatch = RegExp(r'eval(\(f.*?\)\)\))').firstMatch(finalData);
  if (evalMatch == null) return;
  final evalFunction = evalMatch.group(1);
  var p = RegExp(r'\[\{(.*?)\}\]').firstMatch(evalFunction!)?.group(1);
  final acMatch = RegExp(r',([\d]+,[\d]+),').firstMatch(evalFunction);
  final k =
      evalFunction.split(acMatch!.group(0)!).last.split('.').first.split('|');
  final ac = acMatch.group(1)!.split(',');

  for (var c = int.parse(ac[1]); c-- > 0;) {
    if (k[c].isNotEmpty)
      p = p?.replaceAll(
          RegExp('\\b' + c.toRadixString(int.parse(ac[0])) + '\\b'), k[c]);
  }

  print(RegExp(r'"(.*?)"').firstMatch(p!)!.group(1));

  final executionTime = DateTime.now().difference(startTime);
  print('Execution time: ${executionTime.inMilliseconds} ms');
}

Future<Map> _DoodStream(String s) async {
  var doodybaseurl = "https://d0000d.com";
  var url = RegExp(r'<li class="doodstream" rel="\d+" data-video="([^"]+)">')
      .firstMatch(s)![1];
  try {
    var dood = await (await Dio().get(url!,
            options: Options(
              headers: {'Referer': baseURL},
            )))
        .data;
    var resp = await (await Dio().get(
            doodybaseurl +
                "/pass_md5/" +
                RegExp(r"\$.get\('\/pass_md5\/([^']+)'").firstMatch(dood)![1]!,
            options: Options(
              headers: {'Referer': doodybaseurl},
            )))
        .data;

    return {
      "src": dood.contains("src: data + makePlay()")
          ? resp +
              "urcodesucks?token=${RegExp(r'\?token=([^&]+)').firstMatch(dood)![1]}&expiry=${DateTime.now().millisecondsSinceEpoch}"
          : resp.data,
      "type": "video/mp4",
      "referer": doodybaseurl
    };
  } catch (e) {}
  return {"src": "not found"};
}

void main() {
  getSource("series/the-fable-02144/1-1/");
}
