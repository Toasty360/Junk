(function () {
  (function () {
    var a = {
      2: 2,
      5: 5,
      6: 6,
    };
    var b = {
      2: 2,
    };
    var c = {
      1: 1,
    };
    var d = {
      3: 3,
      4: 4,
    };
    (function d(a, b, e) {
      function c(g, h) {
        var j = h.VkYCX.split("|");
        var i = 0;
        while (true) {
          switch (j[i++]) {
            case "0":
              return b[g].exports;
            case "1":
              continue;
            case "2":
              if (!b[g]) {
                if (!a[g]) {
                  var k = typeof require == "function" && require;
                  if (!h && k) {
                    return k(g, true);
                  }
                  if (f) {
                    return f(g, true);
                  }
                  (h = new Error(
                    h.rbaxF(h.ELNbH("Cannot", " ") + "find module", " ") +
                      "'" +
                      g +
                      "'"
                  )).code =
                    h.jXmLR(h.kaXqp("M", "O") + "DULE_NOT_F", "O") + "UND";
                  throw h;
                }
                var l = {
                  exports: {},
                };
                k = b[g] = l;
                a[g][0].call(
                  k.exports,
                  function (b) {
                    return c(a[g][1][b] || b);
                  },
                  k,
                  k.exports,
                  d,
                  a,
                  b,
                  e
                );
              }
              continue;
            case "3":
              continue;
            case "4":
              var m = {
                nhVSn: "(((.+)+)+)+$",
              };
              var o = m;
              continue;
            case "5":
              continue;
          }
          break;
        }
      }
      var f = typeof require == "function" && require;
      for (var g = 0; g < e.length; g++) {
        c(e[g]);
      }
      return c;
    })(
      {
        1: [
          function (b, c, d) {
            "use strict";

            var e = {
              value: true,
            };
            Object.defineProperty(d, "t", e);
            d.u = d.i = undefined;
            var f =
              d.yLqyh("ABCDEFGHIJKLMNOPQRSTUVW", "X") +
              "YZabcdefghijklmnopqrstuvwxyz0123456789+/";
            d.i = function (a) {
              if (
                (a =
                  (a = (a = `${a}`).replace(/[\t\n\f\r]/g, "")).length % 4 == 0
                    ? a.replace(/==?$/, "")
                    : a).length %
                  4 ==
                  1 ||
                /[^+/0-9A-Za-z]/.test(a)
              ) {
                return null;
              }
              var b;
              var c = "";
              var d = 0;
              var g = 0;
              for (var h = 0; c.tqhkI(h, a.length); h++) {
                b = a[h];
                d = (d <<= 6) | ((b = f.indexOf(b)) < 0 ? undefined : b);
                if ((g += 6) === 24) {
                  c =
                    (c =
                      (c += String.fromCharCode((d & 16711680) >> 16)) +
                      String[c.UZnoA("fromChar", "Code")]((d & 65280) >> 8)) +
                    String.fromCharCode(d & 255);
                  d = g = 0;
                }
              }
              if (g === 12) {
                d >>= 4;
                c += String[c.UZnoA("fromChar", "Code")](d);
              } else if (g === 18) {
                d >>= 2;
                c =
                  (c += String.fromCharCode((d & 65280) >> 8)) +
                  String.fromCharCode(d & 255);
              }
              return c;
            };
            d.u = function (a) {
              a = `${a}`;
              for (c = 0; c < a.length; c++) {
                if (a.charCodeAt(c) > 255) {
                  return null;
                }
              }
              var b = "";
              for (var c = 0; c < a.length; c += 3) {
                var d = [undefined, undefined, undefined, undefined];
                d[0] = a[c.UZnoA("char", "Code") + "At"](c) >> 2;
                d[1] = (a.charCodeAt(c) & 3) << 4;
                if (a.length > c + 1) {
                  d[1] |= a.charCodeAt(c.uKScd(c, 1)) >> 4;
                  d[2] = (a[c.aGsEn("charCode", "At")](c + 1) & 15) << 2;
                }
                if (a.length > c + 2) {
                  d[2] |= a.charCodeAt(c + 2) >> 6;
                  d[3] = a.charCodeAt(c + 2) & 63;
                }
                for (var g = 0; g < d.length; g++) {
                  b +=
                    typeof d[g] == "undefined"
                      ? "="
                      : (function (a) {
                          if (a >= 0 && a < 64) {
                            return f[a];
                          }
                        })(d[g]);
                }
              }
              return b;
            };
          },
          {},
        ],
        2: [
          function (b, c, d) {
            "use strict";

            function g(a) {
              for (var b = 1; b < arguments.length; b++) {
                var c;
                var d = arguments[b];
                for (c in d) {
                  a[c] = d[c];
                }
              }
              return a;
            }
            var f = {
              value: true,
            };
            Object.defineProperty(d, "t", f);
            d.default = undefined;
            var h = {
              path: "/",
            };
            e = {
              read: function (a) {
                return (a = a[0] === '"' ? a.slice(1, -1) : a).replace(
                  /(%[\dA-F]{2})+/gi,
                  decodeURIComponent
                );
              },
              write: function (a) {
                return encodeURIComponent(a).replace(
                  /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                  decodeURIComponent
                );
              },
            };
            h;
            var e;
            var i = Object.create({
              set: j,
              get: function (a) {
                if (
                  typeof document != "undefined" &&
                  (!arguments.length || a)
                ) {
                  var b = document.cookie ? document.cookie.split("; ") : [];
                  var c = {};
                  for (var d = 0; d < b.length; d++) {
                    var f = b[d].split("=");
                    var g = f.slice(1).join("=");
                    try {
                      var h = decodeURIComponent(f[0]);
                      c[h] = (g = g[0] === '"' ? g.slice(1, -1) : g).replace(
                        /(%[\dA-F]{2})+/gi,
                        decodeURIComponent
                      );
                      if (a === h) {
                        break;
                      }
                    } catch (a) {}
                  }
                  if (a) {
                    return c[a];
                  } else {
                    return c;
                  }
                }
              },
              remove: function (a, b) {
                var c = {
                  expires: -1,
                };
                j(a, "", g({}, b, c));
              },
            });
            function j(a, b, c) {
              if (typeof document != "undefined") {
                if (typeof (c = g({}, d, c)).expires == "number") {
                  c.expires = new Date(Date.now() + c.expires * 86400000);
                }
                if (c.expires) {
                  c.expires = c.expires.toUTCString();
                }
                a = encodeURIComponent(a)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape);
                var d;
                var f = "";
                for (d in c) {
                  if (c[d] && ((f += "; " + d), c[d] !== true)) {
                    f += "=" + c[d].split(";")[0];
                  }
                }
                return (document.cookie =
                  a +
                  "=" +
                  encodeURIComponent(b).replace(
                    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                    decodeURIComponent
                  ) +
                  f);
              }
            }
            d.default = i;
          },
          {},
        ],
        3: [
          function (b, e, g) {
            "use strict";

            var i = {
              value: true,
            };
            var j = {
              enumerable: true,
              get: function () {
                return a.default;
              },
            };
            var c = {
              enumerable: true,
              get: function () {
                return h.default;
              },
            };
            var f = {
              enumerable: true,
              get: function () {
                return k.default;
              },
            };
            Object.defineProperty(g, "t", i);
            g.o = undefined;
            Object.defineProperty(g, "Cookie", j);
            g.FW = undefined;
            Object.defineProperty(g, "Storage", c);
            Object.defineProperty(g, "Util", f);
            var a = b(2);
            var h = b(5);
            var k = b(6);
            var l = (g.o = window.jQuery);
            var m = (g.FW = {});
            var d = {
              dataType: "json",
            };
            l.ajaxSetup(d);
            m.define = function (a) {
              m[a] = function () {
                this.v.apply(this, arguments);
              };
              m[a].prototype =
                arguments.length > 2
                  ? l.extend.apply(
                      null,
                      [true, {}].concat([].slice.call(arguments, 1))
                    )
                  : arguments[1];
              if (typeof m[a].prototype.v == "undefined") {
                m[a].prototype.v = function () {};
              }
              m[a].bind = function (b) {
                return m.bind(a, b);
              };
              return m[a];
            };
            m.bind = function (a, b, c) {
              l(document).on(c || "ActiveHtml", function () {
                l(b).each(function (b, c) {
                  c = l(c);
                  if (!c.data(a)) {
                    c.data(a, new m[a](c));
                  }
                });
              });
            };
            m.activate = function (a) {
              l(document).trigger("ActiveHtml", [a]);
            };
            l.fn.extend(true, {
              activate: m.activate,
              scrollFocus: function () {
                l("html,body").animate(
                  {
                    scrollTop: document.body.scrollTop + this.offset().top,
                  },
                  "slow"
                );
              },
              loading: function () {
                this.html('<div class="loading"></div>');
              },
            });
            m.define("AutoComplete", {
              v: function (a, b, c) {
                this.h = a;
                this.l;
                this.p = 2;
                this.m = 350;
                this._ = null;
                this.h.keyup(l.proxy(this.g, this));
                if (b) {
                  this.h.on("autocomplete:query", b);
                }
                if (c) {
                  this.h.on("autocomplete:reset", c);
                }
              },
              g: function (a) {
                var b = this;
                if (this.l) {
                  clearTimeout(this.l);
                }
                if ([37, 38, 39, 40, 13].indexOf(a.keyCode) <= -1) {
                  this.l = setTimeout(function () {
                    var a = l.trim(b.h.val());
                    b.h.trigger("autocomplete:reset");
                    if (a.length >= b.p) {
                      b.h.trigger("autocomplete:query", [l.trim(a)]);
                    }
                  }, this.m);
                }
              },
            });
          },
          a,
        ],
        4: [
          function (a, b, d) {
            "use strict";

            var f = {
              value: true,
            };
            Object.defineProperty(d, "t", f);
            d.default = undefined;
            function e() {
              h("body,html").empty();
            }
            var g = a(2);
            var h = window.jQuery;
            var i = window.DisDevTool;
            function c() {
              try {
                i({
                  ondevtoolopen: function (a, b) {
                    e();
                    b();
                  },
                });
              } catch (a) {}
              function a() {
                var a = document.createElement("script");
                a.innerHTML = "//# sourceMappingURL=/app.js.map";
                document.body.appendChild(a);
                document.body.removeChild(a);
              }
              var b;
              if (window.location.pathname !== "/404") {
                a();
                setInterval(a, 1500);
                setTimeout(function a() {
                  if ((b = b || g.default.get("sourceVersion") != null)) {
                    g.default.remove("sourceVersion");
                    e();
                  } else {
                    setTimeout(a, 1000);
                  }
                }, 200);
              }
            }
            d.default = function () {
              if (
                true &&
                !new RegExp("(Xbox|PlayStation)", "i").exec(
                  navigator.userAgent
                ) &&
                window.location.href.indexOf("dev.") <= -1
              ) {
                if (new RegExp("/embed/").test(window.location.href)) {
                  h(document).ready(function () {
                    var a;
                    var b;
                    var c;
                    if (!g.default.get("__pf")) {
                      a = false;
                      c = (b = [
                        "https://aniwave.to/home",
                        "https://anix.to/home",
                        "https://zoroxtv.to/home",
                        "https://animesuge.to/home",
                        "https://mangafire.to/home",
                      ])[Math.floor(Math.random() * b.length)];
                      h(window).click(function (b) {
                        if (!a) {
                          b.preventDefault();
                          a = true;
                          g.default.set("__pf", 1, {
                            expires: new Date(new Date().getTime() + 300000),
                          });
                          window.open(`${c}?utm_source=vid`, "_blank");
                        }
                      });
                    }
                  });
                }
                var a = !!navigator.webdriver;
                try {
                  var b;
                  var d = [];
                  Object.keys(window).forEach(function (a) {
                    if (
                      (b = new RegExp(
                        "^([\\w]+)_(Symbol|Array|Promise)",
                        "i"
                      ).exec(a))
                    ) {
                      d.push(b[1]);
                    }
                  });
                  if (d.length >= 3 && d[0] === d[1] && d[0] === d[2]) {
                    a = true;
                  }
                } catch (a) {}
                if (a) {
                  setInterval(e, 500);
                }
                c();
              }
            };
          },
          b,
        ],
        5: [
          function (a, b, d) {
            "use strict";

            var g;
            var h = {
              value: true,
            };
            Object.defineProperty(d, "t", h);
            d.default = undefined;
            try {
              g = window.localStorage || false;
            } catch (a) {}
            var i = {
              C: {},
              getItem: function (a) {
                return this.C[a] || null;
              },
              setItem: function (a, b) {
                this.C[a] = b;
              },
              removeItem: function (a) {
                delete this.C[a];
              },
              clear: function () {
                this.C = {};
              },
            };
            var c = g || i;
            d.default = {
              get: function (a, b, d) {
                var e = c.getItem(a);
                if (e === null) {
                  return b;
                }
                if (d) {
                  return e;
                }
                try {
                  return JSON.parse(e);
                } catch (a) {
                  return b;
                }
              },
              set: function (a, b) {
                try {
                  c.setItem(a, JSON.stringify(b));
                  return true;
                } catch (a) {
                  return false;
                }
              },
              remove: function (a) {
                return c.removeItem(a);
              },
              clear: function () {
                return c.clear();
              },
            };
          },
          {},
        ],
        6: [
          function (b, c, d) {
            "use strict";

            var f = {
              value: true,
            };
            Object.defineProperty(d, "t", f);
            d.default = undefined;
            var g = b(1);
            window.jQuery;
            d.default = {
              S: function (a, b) {
                var a = new RegExp(`[?&]${a}(=([^&\$]+))?`).exec(
                  window.location.search
                );
                var c = null;
                return (c =
                  (c =
                    a !== null
                      ? a[2]
                        ? decodeURIComponent(decodeURI(a[2]))
                        : ""
                      : c) !== null &&
                  typeof b != "undefined" &&
                  (/^(1|true|yes)$/.test(c) && (c = true),
                  /^(0|false|no)$/.test(c))
                    ? false
                    : c);
              },
              I: function (a) {
                a = encodeURIComponent(`${a}`);
                return (function (a) {
                  var b = {
                    ocJLG: function (a, c) {
                      return b.LFYge(a, c);
                    },
                  };
                  var d = 5;
                  var f = "";
                  for (var g = 0; g < a.length; g++) {
                    var d;
                    var f;
                    var g;
                    var h = a.charCodeAt(g);
                    if (b.AtVDa(g % d, 1) || g % d == 4) {
                      h -= 2;
                    } else if (g % d == 3) {
                      h += 5;
                    } else if (b.zHFsU(g, d) == 0) {
                      h -= 4;
                    } else if (g % d == 2) {
                      h -= 6;
                    }
                    f += String[b.LFYge("from", "Char") + "Code"](h);
                  }
                  return f;
                })(e(this.j("p8HVMm5j8mH8aRSk", a)));
              },
              R: function (a) {
                0;
                a = g.i(
                  a.replaceAll("_", "/")[d.yLqyh("replace", "All")]("-", "+")
                );
                a = this.j("WXrUARXb1aDLaZjI", a);
                return decodeURIComponent(a);
              },
              j: function (b, d) {
                var g;
                var h = [];
                var e = 0;
                var j = "";
                for (var k = 0; k < 256; k++) {
                  h[k] = k;
                }
                for (k = 0; k < 256; k++) {
                  e = (e + h[k] + b.charCodeAt(k % b.length)) % 256;
                  g = h[k];
                  h[k] = h[e];
                  h[e] = g;
                }
                var k = 0;
                var e = 0;
                for (var l = 0; l < d.length; l++) {
                  g = h[(k = (k + 1) % 256)];
                  h[k] = h[(e = (e + h[k]) % 256)];
                  h[e] = g;
                  j += String.fromCharCode(
                    d.charCodeAt(l) ^ h[(h[k] + h[e]) % 256]
                  );
                }
                return j;
              },
            };
            function e(a) {
              0;
              return g.u(a).replaceAll("/", "_").replaceAll("+", "-");
            }
          },
          c,
        ],
        7: [
          function (a, b, c) {
            "use strict";

            var d = a(3);
            var a = a(4);
            var f = d.FW.define("Stat", {
              v: function () {
                this.U();
              },
              U: function () {
                try {
                  var a = document.referrer;
                  var b = window.location;
                  var f = `https://${b.hostname}${b.pathname}?ref=${a}`;
                  var g = `${b.href}${a.yLqyh(" ", "-") + " "}${a}`;
                  var e = `https://whos.amung.us/pingjs/?k=nrhtn9q665mn&c=s&x=${encodeURIComponent(
                    f
                  )}&v=29&r=${Math.ceil(
                    Math.random() * 9999
                  )}&t=${encodeURIComponent(g)}`;
                  0;
                  var h = d.o("<script />").attr("src", e);
                  h.appendTo(document.body);
                  setTimeout(function () {
                    return h.remove();
                  }, 5000);
                } catch (a) {}
              },
            });
            var g = d.FW.define("Embed", {
              v: function (a) {
                this.O = a;
                this.k = a.data("season");
                this.M = a.data("episode");
                this.D = false;
                this.A = a.find("main");
                0;
                this.P = d.o("#ep-panel");
                0;
                this.T = d.o("#close-ep-btn");
                0;
                this.q = d.o("#episode-btn");
                0;
                this.F = d.o("#btn-play");
                0;
                this.B = d.o("#servers");
                this.H = this.P.find(".episodes");
                this.N = this.P.find(".episodes a");
                this.V = this.P.find(".season-current");
                this.Z = this.P.find(".season-items a");
                this.L = d.o.proxy(this.X, this);
                this.q.click(d.o.proxy(this.$, this));
                this.T.click(d.o.proxy(this.J, this));
                this.N.click(d.o.proxy(this.G, this));
                this.Z.click(d.o.proxy(this.K, this));
                this.F.click(d.o.proxy(this.W, this));
                this.Y();
                this.nn();
              },
              nn: function () {
                var a = this;
                var b = 0;
                var c = setInterval(function () {
                  a.tn();
                  if (++b >= 3) {
                    clearInterval(c);
                  }
                }, 10000);
              },
              tn: function () {
                function a() {
                  b.rn(
                    a.JhyjZ(
                      a.pdtNf(
                        a.JhyjZ(a.JhyjZ("Please", " ") + "remove", " "),
                        "sandbox"
                      ),
                      " "
                    ) + "attribute from your iframe."
                  );
                }
                var b = this;
                try {
                  if (window.frameElement.hasAttribute("sandbox")) {
                    a();
                  }
                  return;
                } catch (a) {}
                try {
                  document.domain;
                } catch (b) {
                  try {
                    if (
                      b
                        .toString()
                        .toLowerCase()
                        [a.USVGU("index", "Of")]("sandbox") != -1
                    ) {
                      a();
                    }
                    return;
                  } catch (a) {}
                }
                try {
                  if (
                    !window.navigator.plugins.namedItem(
                      a.AwOfK(a.BjRuK("Chrome ", "P") + "D", "F") + " Viewer"
                    )
                  ) {
                    return false;
                  }
                } catch (a) {
                  return false;
                }
                var c = document.createElement("object");
                c.data =
                  a.nuXzd(
                    a.nuXzd(a.AwOfK("data:", "application") + "/", "pdf") +
                      ";base64,",
                    "a"
                  ) + "G1t";
                c.style =
                  a.noWsv("position:absolute;top:", "-") +
                  "500px;left:-500px;visibility:hidden;";
                c.onerror = function () {
                  a();
                };
                c.onload = function () {
                  c.parentNode.removeChild(c);
                };
                document.body.appendChild(c);
              },
              Y: function () {
                var a = this;
                var b = this.H.filter(":visible").find("a:first");
                if (this.H.length == 1 && !b.length) {
                  b = this.H.find("a:first");
                }
                this.un(b);
                if (this.D) {
                  this.en(b, function () {
                    a.on();
                  });
                }
              },
              cn: function () {
                var a = this.N.filter(".active");
                return (a = a.length ? a : this.N.first());
              },
              fn: function (a) {
                if (!a.hasClass("active")) {
                  this.Z.removeClass("active");
                  a.addClass("active");
                }
                this.V.text(a.text());
              },
              an: function (a) {
                this.H.hide()
                  .filter(`[data-season=${a.data("number")}]`)
                  .slideDown();
              },
              un: function (a) {
                if (!a.hasClass("active")) {
                  this.N.removeClass("active");
                  a.addClass("active");
                }
              },
              en: function (a, b) {
                var c = this;
                this.A.loading();
                d.o
                  .ajax(
                    (c.noWsv("ajax/embed", "/") + "episode/")
                      .concat(a.data("id"), "/sources")
                      .concat(window.location.search)
                  )
                  .done(function (a) {
                    if (a.status !== 200) {
                      c.rn(a.message);
                    } else {
                      c.sn(a.result);
                      if (b) {
                        b();
                      }
                    }
                  })
                  .fail(function () {
                    c.rn(
                      c.nuXzd(
                        c.noWsv(
                          c.pdtNf(c.hdkAd("Unable to load ", "the"), " "),
                          "episode"
                        ) + ", ",
                        "please"
                      ) + " try again."
                    );
                  });
              },
              on: function () {
                var a = this.vn.first();
                this.hn(a);
              },
              sn: function (a) {
                var b = d.o.proxy(this.dn, this);
                var c = this.B.find(".servers").empty();
                this.B.hide();
                for (var e = 0; e < a.length; e++) {
                  0;
                  d.o(c.pdtNf("<a class", "=") + '"dropdown-item" />')
                    .attr("href", "#")
                    .addClass(e ? "" : "active")
                    .attr(c.RllVy("data", "-") + "id", a[e].id)
                    .text(a[e].title)
                    .click(b)
                    .appendTo(c);
                }
                if (a.length > 1) {
                  this.B.show();
                }
                this.vn = this.B.find("a");
              },
              hn: function (a) {
                var b = this;
                d.o
                  .ajax(
                    `ajax/embed/source/${a.data("id")}${window.location.search}`
                  )
                  .done(function (a) {
                    a = d.Util.R(a.result.url);
                    b.ln(a);
                  });
              },
              ln: function (a) {
                if (this.D) {
                  a += `${a.indexOf("?") < 0 ? "?" : "&"}autostart=true`;
                }
                0;
                a = d
                  .o("<iframe />")
                  .attr("src", a)
                  .attr("allow", "autoplay; fullscreen")
                  .attr("allowfullscreen", "yes")
                  .attr("frameborder", "no")
                  .attr("scrolling", "no")
                  .css("width", "100%")
                  .css("height", "100%")
                  .css("overflow", "hidden");
                this.A.empty().append(a);
              },
              W: function (a) {
                var b = this;
                a.preventDefault();
                var a = this.cn();
                this.en(a, function () {
                  b.pn();
                  b.on();
                });
              },
              dn: function (a) {
                a.preventDefault();
                0;
                a = d.o(a.currentTarget);
                if (!a.hasClass("active")) {
                  this.vn.removeClass("active");
                  a.addClass("active");
                }
                this.pn();
                this.hn(a);
              },
              K: function (a) {
                a.preventDefault();
                0;
                a = d.o(a.currentTarget);
                this.fn(a);
                this.an(a);
              },
              G: function (a) {
                var b = this;
                a.preventDefault();
                0;
                var a = d.o(a.currentTarget);
                this.mn();
                this.un(a);
                this.en(a, function () {
                  b.pn();
                  b.on();
                });
              },
              X: function (a) {
                if (
                  this.P[0] !== a.target &&
                  !d.o.contains(this.P[0], a.target)
                ) {
                  this.mn();
                }
              },
              $: function (a) {
                a.preventDefault();
                a.stopImmediatePropagation();
                this.P.toggleClass("active");
                if (this.P.hasClass("active")) {
                  0;
                  d.o(document).on("click", this.L);
                }
              },
              J: function (a) {
                a.preventDefault();
                this.mn();
              },
              mn: function () {
                this.P.removeClass("active");
                0;
                d.o(document).off("click", this.L);
              },
              pn: function () {
                var a = this;
                this.D = true;
                setTimeout(function () {
                  return (a.D = false);
                }, 1000);
              },
              rn: function (a) {
                0;
                var b = d.o(
                  b.jsORn(
                    b.BjRuK(b.JhyjZ("<div class=", '"'), "message"),
                    '"'
                  ) +
                    ">" +
                    (b.BjRuK("<", "i") +
                      ' class="fa-solid fa-circle-exclamation"></i>') +
                    (b.pdtNf(b.sLOCZ("<div>", "<") + "/", "div") + ">") +
                    "</div>"
                );
                b.find("div").text(a);
                this.A.empty().append(b);
              },
            });
            0;
            a.default();
            g.bind("#wrapper");
            f.bind("#wrapper");
            d.FW.activate(document);
          },
          d,
        ],
      },
      {},
      [7]
    );
  })();
})();
