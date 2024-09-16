var decode = function (x) {
  if (x.substr(0, 2) == "#1") {
    return saltD(pepper(x.substr(2), -1));
  } else if (x.substr(0, 2) == "#0") {
    return saltD(x.substr(2));
  } else {
    return x;
  }
};

var _keyStr = abc + "0123456789+/=";
const saltD = function (e) {
  var t = "";
  var n, r, i;
  var s, o, u, a;
  var f = 0;
  e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (f < e.length) {
    s = _keyStr.indexOf(e.charAt(f++));
    o = _keyStr.indexOf(e.charAt(f++));
    u = _keyStr.indexOf(e.charAt(f++));
    a = _keyStr.indexOf(e.charAt(f++));
    n = (s << 2) | (o >> 4);
    r = ((o & 15) << 4) | (u >> 2);
    i = ((u & 3) << 6) | a;
    t = t + dechar(n);
    if (u != 64) {
      t = t + dechar(r);
    }
    if (a != 64) {
      t = t + dechar(i);
    }
  }
  t = ud(t);
  return t;
};
const ud = function (e) {
  var t = "";
  var n = 0;
  var r = 0;
  var c1 = 0;
  var c2 = 0;
  while (n < e.length) {
    r = e.charCodeAt(n);
    if (r < 128) {
      t += dechar(r);
      n++;
    } else if (r > 191 && r < 224) {
      c2 = e.charCodeAt(n + 1);
      t += dechar(((r & 31) << 6) | (c2 & 63));
      n += 2;
    } else {
      c2 = e.charCodeAt(n + 1);
      // c3 = e.charCodeAt(n + 2);
      t += dechar(
        ((r & 15) << 12) | ((c2 & 63) << 6) | (e.charCodeAt(n + 2) & 63)
      );
      n += 3;
    }
  }
  return t;
};

var pepper = function (s, n) {
  s = s.replace(/\+/g, "#");
  s = s.replace(/#/g, "+");
  var a = sugar("xx??x?=xx????=") * n;
  if (n < 0) a += abc.length / 2;
  var r = abc.substr(a * 2) + abc.substr(0, a * 2);
  return s.replace(/[A-Za-z]/g, function (c) {
    return r.charAt(abc.indexOf(c));
  });
};
var sugar = function (x) {
  x = x.split(dechar(61));
  var result = "";
  var c1 = dechar(120);
  var chr;
  for (var i in x) {
    if (x.hasOwnProperty(i)) {
      var encoded = "";
      for (var j in x[i]) {
        if (x[i].hasOwnProperty(j)) {
          encoded += x[i][j] == c1 ? dechar(49) : dechar(48);
        }
      }
      chr = parseInt(encoded, 2);
      result += dechar(chr.toString(10));
    }
  }
  return result.substr(0, result.length - 1);
};
var dechar = function (x) {
  return String.fromCharCode(x);
};
function _ud(e) {
  var t = "";
  var n = 0;
  var r = 0;
  var c1 = 0;
  var c2 = 0;
  while (n < e.length) {
    r = e.charCodeAt(n);
    if (r < 128) {
      t += String.fromCharCode(r);
      n++;
    } else if (r > 191 && r < 224) {
      c2 = e.charCodeAt(n + 1);
      t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
      n += 2;
    } else {
      c2 = e.charCodeAt(n + 1);
      t += String.fromCharCode(
        ((r & 15) << 12) | ((c2 & 63) << 6) | (e.charCodeAt(n + 2) & 63)
      );
      n += 3;
    }
  }
  return t;
}
var abc = String.fromCharCode(
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122
);

console.log(
  decode(
    "#1MGo9wvhVd3Jjd3FZyrwQC2aWdji2MLwhbH00C2l#zHs7bG0UyLUQajimfumneqi2KZxjbZwSbJ0QyLUQaji2KZxjbZwSbJ0iDGwjyLUiwr0hMG5ZaLpTMKBmyvMVaNmTaHBgd2JXMLxieu9Zy2wYyvacwNxSwjUQLGlTwjwQC319gLFZfLUiwr0hMkwPMGl7gKBieuBPyuIQf2s9wjw7gEPhwqohwqohwqohwqohwqohaOJVM3FQc24hMksPd3FZyGp7qjohwqohwqohwqohwqohwqohwqohdNJ0eLxVwux0c2sPaK5kc2FmJJxxE29Udu9VaK50yvB0djlVdNJXcutkaGhWxGicAq05EG1uLLTZgGlWaZXywqohwqohwqohwqohwqohwqohwqohwqohaOJVM3FQc24heu9Hc2YQasx5euJnyu1ieuBPzqpXAGlhfXPhwqohwqohwqohwqohwqohwqohwqohwqohwqohdNJ0eLxVwtB0dNmVaZ5NdN9UE2iidlBWauIPwkp4wjoSwvoYyHTywqohwqohwqohwqohwqohwqohwqp9yGl7qjohwqohwqohwqohwqohwqp9qjohwqohwqohwqohwqohwqpNeK5keumWcjpjAjinevwQwvTywqohwqohwqohwqohwqohwqohwqpZaLF1dN4hauJkc2FmJJxxE29Udu9VaK50yut0c2wPd3FZyG5nduYQeqhjwjlVcKtXyua1cNB0bK9VyuAQwvTywqohwqohwqohwqohwqohwqohwqohwqohdNJ0eLxVwqwmwjoSwqhjArojwqThMZ5kbutZE29laIt0yroQzOFWI3FZbK5Oyrs2yGlVd2YQM2IPzHwQCXPhwqohwqohwqohwqohwqohwqohwv0QzNQWbK4PwjwQyHTywqohwqohwqohwqohwqohwv0="
  )
);
