function f0001(_0x3f90c2, _0x1b80b5) {
  let _0x49e0af = CryptoJS.AES.encrypt(_0x3f90c2, _0x1b80b5).toString();
  let _0x2e5b8c = CryptoJS.enc.Base64.parse(_0x49e0af);
  _0x49e0af = _0x2e5b8c.toString(CryptoJS.enc.Hex);
  return _0x49e0af;
}
function f0002(_0x110358, _0xdc15f3) {
  let _0x5580e5;
  try {
    let _0x3587e7 = CryptoJS.enc.Hex.parse(_0x110358);
    let _0x1a2aa2 = _0x3587e7.toString(CryptoJS.enc.Base64);
    _0x5580e5 = CryptoJS.AES.decrypt(_0x1a2aa2, _0xdc15f3);
    _0x5580e5 = _0x5580e5.toString(CryptoJS.enc.Utf8);
  } catch (_0xae9527) {
    console.log("Error decrypting data: " + _0xae9527);
  }
  return _0x5580e5;
}
function f0003() {
  var _0x3673a6 = window.MediaSource || window.WebKitMediaSource;
  if (!_0x3673a6) {
    return false;
  }
  var _0x5b54da = self.SourceBuffer || self.WebKitSourceBuffer;
  var _0x4f5c1d =
    _0x3673a6 &&
    typeof _0x3673a6.isTypeSupported == "function" &&
    _0x3673a6.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
  var _0x1a9429 =
    !_0x5b54da ||
    (_0x5b54da.prototype &&
      typeof _0x5b54da.prototype.appendBuffer == "function" &&
      typeof _0x5b54da.prototype.remove == "function");
  return !!_0x4f5c1d && !!_0x1a9429;
}
function reportHls(_0x224d7e) {
  var _0x3e2999 = {
    platform: navigator.platform || "noplf",
    hlsSupport: f0003(),
    provider: _0x224d7e.getProvider().name,
    jwplayer: jwplayer("mediaplayer").getEnvironment(),
  };
  var _0x130cc9 = f0001(
    JSON.stringify(_0x3e2999),
    "aK7ZWN71if8mN60SMl99RBvIwcEUNEaS"
  );
  var _0x32fc6d = {
    data: _0x130cc9,
  };
  $.post(DOMAIN_API + "/Report", _0x32fc6d);
}
function LoadPlay() {
  if (typeof devtoolsDetector === "undefined") {
    thongbao("Error Load Lib JS!");
    return;
  }
  var _0x1f273c = f0002(idfile_enc, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn");
  var _0x31ebec = f0002(idUser_enc, "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O");
  $.get(DOMAIN_API_VIEW + _0x1f273c);
  var _0x249e0b = {
    error: AjaxError,
  };
  $.ajaxSetup(_0x249e0b);
  if (DEV_PLAY == "thang") {
    var _0x23f36b = "https://my.9stream.net";
  } else {
    var _0x23f36b =
      document.referrer.split("/").slice(0, 3).join("/") ||
      window.self.location.ancestorOrigins[0] ||
      "";
  }
  if (VerLoad == "") {
    var _0x25d874 = navigator.platform || "noplf";
  } else {
    var _0x25d874 = VerLoad;
  }
  var _0x32b828 = {
    idfile: _0x1f273c,
    iduser: _0x31ebec,
    domain_play: _0x23f36b,
    platform: _0x25d874,
    hlsSupport: f0003(),
    jwplayer: jwplayer("mediaplayer").getEnvironment(),
  };
  let _0x972dd1 = f0001(
    JSON.stringify(_0x32b828),
    "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ"
  );
  var _0x30ca8c = CryptoJS.MD5(
    _0x972dd1 + "KRWN3AdgmxEMcd2vLN1ju9qKe8Feco5h"
  ).toString();
  $.post(
    DOMAIN_API + "/playiframe",
    {
      data: _0x972dd1 + "|" + _0x30ca8c,
    },
    function (_0x2f3fed) {
      if (_0x2f3fed) {
        if (_0x2f3fed.status == 0) {
          thongbao(_0x2f3fed.msg);
        } else if (_0x2f3fed.status == 1) {
          if (_0x2f3fed.type == "url-m3u8-encv1") {
            var _0x65db9a = f0002(
              _0x2f3fed.data,
              "oJwmvmVBajMaRCTklxbfjavpQO7SZpsL"
            );
            jwpSTXplayer(_0x65db9a, "v0", _0x2f3fed.checkhls || false);
            f0006();
          } else {
            thongbao("Type Data Not Support!");
          }
        }
      }
    }
  );
}
function f0006() {
  var _0x266a4e = document.createElement("meta");
  _0x266a4e.name = "referrer";
  _0x266a4e.content = "no-referrer";
  document.getElementsByTagName("head")[0].appendChild(_0x266a4e);
}
function AjaxError(_0xab09ed, _0x11ab74) {
  if (_0xab09ed.status == 0) {
    thongbao("Please Check Your Network or AD Block!");
  } else if (_0xab09ed.status == 404) {
    alert("Requested URL not found.");
  } else if (_0xab09ed.status == 500) {
    alert("Internel Server Error.");
  } else {
    alert("Unknow Error.\n" + _0xab09ed.responseText);
  }
}
