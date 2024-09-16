!(function () {
  var o = (function () {
    var e = true;
    return function (t, r) {
      var n = e
        ? function () {
            if (r) {
              var n = r.apply(t, arguments);
              r = null;
              return n;
            }
          }
        : function () {};
      e = false;
      return n;
    };
  })();
  var f = (function () {
    var t = true;
    return function (r, e) {
      var n = t
        ? function () {
            if (e) {
              var t = e.apply(r, arguments);
              e = null;
              return t;
            }
          }
        : function () {};
      t = false;
      return n;
    };
  })();
  !(function () {
    !(function (n, t) {
      var e = o(this, function () {
        return e
          .toString()
          .search("(((.+)+)+)+$")
          .toString()
          .constructor(e)
          .search("(((.+)+)+)+$");
      });
      e();
      (function () {
        f(this, function () {
          var r = new RegExp("function *\\( *\\)");
          var e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
          var o = _0x707aba("init");
          if (!r.test(o + "chain") || !e.test(o + "input")) {
            o("0");
          } else {
            _0x707aba();
          }
        })();
      })();
      if ("object" == typeof exports && "undefined" != typeof module) {
        module.exports = t();
      } else if ("function" == typeof define && define.amd) {
        define(t);
      } else {
        (n =
          "undefined" != typeof globalThis
            ? globalThis
            : n || self).DisDevTool = t();
      }
    })(this, function () {
      "use strict";

      function j(n) {
        return (j =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function e(n, t) {
        if (!(n instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function T(n, t) {
        for (var o = 0; o < t.length; o++) {
          var i = t[o];
          i.enumerable = i.enumerable || false;
          i.configurable = true;
          if ("value" in i) {
            i.writable = true;
          }
          Object.defineProperty(n, i.key, i);
        }
      }
      function n(n, t, r) {
        var o = {
          writable: false,
        };
        if (t) {
          T(n.prototype, t);
        }
        if (r) {
          T(n, r);
        }
        Object.defineProperty(n, "prototype", o);
      }
      function t(n, t, r) {
        var i = {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true,
        };
        if (t in n) {
          Object.defineProperty(n, t, i);
        } else {
          n[t] = r;
        }
      }
      function r(n, t) {
        if ("function" != typeof t && null !== t) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }
        var e = {
          writable: false,
        };
        n.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: n,
            writable: true,
            configurable: true,
          },
        });
        Object.defineProperty(n, "prototype", e);
        if (t) {
          G(n, t);
        }
      }
      function Q(n) {
        return (Q = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function G(n, t) {
        return (G = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, t) {
              n.__proto__ = t;
              return n;
            })(n, t);
      }
      function o(i) {
        var u = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) {
            return false;
          }
          if (Reflect.construct.sham) {
            return false;
          }
          if ("function" == typeof Proxy) {
            return true;
          }
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (n) {
            return false;
          }
        })();
        return function () {
          var r = Q(i);
          var e = this;
          var o = u
            ? ((o = Q(this).constructor), Reflect.construct(r, arguments, o))
            : r.apply(this, arguments);
          if (!o || ("object" != typeof o && "function" != typeof o)) {
            if (undefined !== o) {
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            }
            if (undefined === (o = e)) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
          }
          return o;
        };
      }
      function A(n, t) {
        if (null == t || t > n.length) {
          t = n.length;
        }
        var r = 0;
        for (var e = new Array(t); r < t; r++) {
          e[r] = n[r];
        }
        return e;
      }
      function M(r, n) {
        var o;
        var i;
        var u;
        var f;
        var a =
          ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
          r["@@iterator"];
        if (a) {
          u = true;
          f = false;
          return {
            s: function () {
              a = a.call(r);
            },
            n: function () {
              var n = a.next();
              u = n.done;
              return n;
            },
            e: function (n) {
              f = true;
              i = n;
            },
            f: function () {
              try {
                if (!(u || null == a["return"])) {
                  a["return"]();
                }
              } finally {
                if (f) {
                  throw i;
                }
              }
            },
          };
        }
        if (
          Array.isArray(r) ||
          (a = (function (n, t) {
            var e;
            if (n) {
              return "string" == typeof n
                ? A(n, t)
                : "Map" ===
                    (e =
                      "Object" ===
                        (e = Object.prototype.toString.call(n).slice(8, -1)) &&
                      n.constructor
                        ? n.constructor.name
                        : e) || "Set" === e
                ? Array.from(n)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? A(n, t)
                : undefined;
            }
          })(r)) ||
          (n && r && "number" == typeof r.length)
        ) {
          if (a) {
            r = a;
          }
          o = 0;
          return {
            s: (n = function () {}),
            n: function () {
              var t = {
                done: true,
              };
              return o >= r.length
                ? t
                : {
                    done: false,
                    value: r[o++],
                  };
            },
            e: function (n) {
              throw n;
            },
            f: n,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var X = false;
      var i = {};
      function _(n) {
        i[n] = false;
      }
      function K() {
        for (var n in i)
          if (i[n]) {
            return (X = true);
          }
        return (X = false);
      }
      function U(n) {
        var t = new Date().getTime();
        n();
        return new Date().getTime() - t;
      }
      var f = {
        iframe: false,
        pc: false,
        qqBrowser: false,
        firefox: false,
        macos: false,
        edge: false,
        oldEdge: false,
        ie: false,
        iosChrome: false,
        iosEdge: false,
        chrome: false,
        seoBot: false,
        mobile: false,
      };
      var a;
      var F = "";
      var V = false;
      function J() {
        if (0 !== null.length) {
          var r = location.href;
          if (F === r) {
            return V;
          }
          F = r;
          var e;
          var o = false;
          var i = M(null);
          try {
            for (i.s(); !(e = i.n()).done; ) {
              var u = e.value;
              if ("string" == typeof u) {
                if (-1 !== r.indexOf(u)) {
                  o = true;
                  break;
                }
              } else {
                if (u.test(r)) {
                  o = true;
                  break;
                }
              }
            }
          } catch (n) {
            i.e(n);
          } finally {
            i.f();
          }
          return (V = o);
        }
      }
      (k = a = undefined || {})[(k.Unknown = -1)] = "Unknown";
      k[(k.RegToString = 0)] = "RegToString";
      k[(k.DefineId = 1)] = "DefineId";
      k[(k.Size = 2)] = "Size";
      k[(k.DateToString = 3)] = "DateToString";
      k[(k.FuncToString = 4)] = "FuncToString";
      k[(k.Debugger = 5)] = "Debugger";
      k[(k.Performance = 6)] = "Performance";
      k[(k.DebugLib = 7)] = "DebugLib";
      var Z = {
        key: "init",
        value: function () {},
      };
      n(e1, [
        {
          key: "onDevToolOpen",
          value: function () {
            var r;
            console.warn(
              "You don't have permission to use DEVTOOL!ã€type = ".concat(
                this.type,
                "ã€‘"
              )
            );
            window.clearTimeout(n1);
            s.ondevtoolopen(this.type, u1);
            r = this.type;
            i[r] = true;
          },
        },
        Z,
      ]);
      var H = {
        key: "init",
        value: function () {},
      };
      var Y;
      var c = e1;
      r(W, c);
      Y = o(W);
      n(
        W,
        [
          H,
          {
            key: "detect",
            value: function () {
              var r;
              if (
                true ===
                  (null ==
                  (r = null == (r = window.eruda) ? undefined : r._devTools)
                    ? undefined
                    : r._isShow) ||
                (window._vcOrigConsole &&
                  window.document.querySelector("#__vconsole.vc-toggle"))
              ) {
                this.onDevToolOpen();
              }
            },
          },
        ],
        [
          {
            key: "isUsing",
            value: function () {
              return !!window.eruda || !!window._vcOrigConsole;
            },
          },
        ]
      );
      var $ = 0;
      var n1 = 0;
      var t1 = [];
      var r1 = 0;
      function W() {
        var t = {
          type: a.DebugLib,
        };
        e(this, W);
        return Y.call(this, t);
      }
      function e1(n) {
        var r = n.type;
        var n = undefined === (n = n.enabled) || n;
        e(this, e1);
        this.type = a.Unknown;
        this.enabled = true;
        this.type = r;
        this.enabled = n;
        if (this.enabled) {
          t1.push(this);
          this.init();
        }
      }
      function o1(u) {
        function t() {
          s = true;
        }
        function r() {
          s = false;
        }
        var i;
        var a;
        var c;
        var s = false;
        function v() {
          (document[a] === i ? t : r)();
        }
        function l(t) {
          return function () {
            if (t) {
              t();
            }
            var n = t.apply(undefined, arguments);
            if (r) {
              r();
            }
            return n;
          };
        }
        var x = window.alert;
        var y = window.confirm;
        var p = window.prompt;
        try {
          window.alert = l(x);
          window.confirm = l(y);
          window.prompt = l(p);
        } catch (n) {}
        if (undefined !== document.hidden) {
          i = "hidden";
          c = "visibilitychange";
          a = "visibilityState";
        } else if (undefined !== document.mozHidden) {
          i = "mozHidden";
          c = "mozvisibilitychange";
          a = "mozVisibilityState";
        } else if (undefined !== document.msHidden) {
          i = "msHidden";
          c = "msvisibilitychange";
          a = "msVisibilityState";
        } else if (undefined !== document.webkitHidden) {
          i = "webkitHidden";
          c = "webkitvisibilitychange";
          a = "webkitVisibilityState";
        }
        document.removeEventListener(c, v, false);
        document.addEventListener(c, v, false);
        $ = window.setInterval(function () {
          if (!(u.isSuspend || s || J())) {
            var r;
            var e;
            var o = M(t1);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var i = r.value;
                _(i.type);
                i.detect(r1++);
              }
            } catch (n) {
              o.e(n);
            } finally {
              o.f();
            }
            s1();
            if ("function" == typeof s.ondevtoolclose && ((e = X), !K()) && e) {
              s.ondevtoolclose();
            }
          }
        }, s.interval);
        n1 = setTimeout(function () {
          if (!(false || W.isUsing())) {
            i1();
          }
        }, s.stopIntervalTime);
      }
      function i1() {
        window.clearInterval($);
      }
      function u1() {
        i1();
        try {
          window.opener = null;
          window.open("", "_self");
          window.close();
          window.history.back();
        } catch (n) {
          console.log(n);
        }
        setTimeout(function () {
          window.location.href =
            "" ||
            "https://theajack.github.io/disable-devtool/404.html?h=".concat(
              encodeURIComponent(location.host)
            );
        }, 500);
      }
      var s = {
        md5: "",
        ondevtoolopen: u1,
        ondevtoolclose: null,
        url: "",
        timeOutUrl: "",
        tkName: "ddtk",
        interval: 500,
        disableMenu: true,
        stopIntervalTime: 5e3,
        clearIntervalWhenDevOpenTrigger: false,
        detectors: [0, 1, 3, 4, 5, 6, 7],
        clearLog: true,
        disableSelect: false,
        disableCopy: false,
        disableCut: false,
        disablePaste: false,
        ignore: null,
        disableIframeParents: true,
        seo: true,
      };
      var f1 = ["detectors", "ondevtoolclose", "ignore"];
      var a1 = {
        log: function () {},
        table: function () {},
        clear: function () {},
      };
      var N;
      var c1;
      var W1;
      var R = window.console || a1;
      function s1() {
        W1();
      }
      var v1 = function () {
        return false;
      };
      function d1(r) {
        var a = (123).macos
          ? function (n, t) {
              return n.metaKey && n.altKey && (t === 73 || t === 74);
            }
          : function (n, t) {
              return n.ctrlKey && n.shiftKey && (t === 73 || t === 74);
            };
        var c = (123).macos
          ? function (n, t) {
              return (
                (n.metaKey && n.altKey && t === 85) || (n.metaKey && t === 83)
              );
            }
          : function (n, t) {
              return n.ctrlKey && (t === 83 || t === 85);
            };
        r.addEventListener(
          "keydown",
          function (n) {
            var t = (n = n || r.event).keyCode || n.which;
            if (t === 123 || a(n, t) || c(n, t)) {
              return h1(r, n);
            }
          },
          true
        );
        v(r, "contextmenu");
      }
      function v(t, n) {
        t.addEventListener(n, function (n) {
          return h1(t, n);
        });
      }
      function h1(n, t) {
        if (!J() && !v1()) {
          (t = t || n.event).returnValue = false;
          t.preventDefault();
          return false;
        }
      }
      function l1(n) {
        var r = (function (n, t) {
          n[t >> 5] |= 128 << t % 32;
          n[14 + (((t + 64) >>> 9) << 4)] = t;
          var o = 1732584193;
          var i = -271733879;
          var u = -1732584194;
          var f = 271733878;
          for (var a = 0; a < n.length; a += 16) {
            var c = o;
            var W = i;
            var s = u;
            var v = f;
            var o = p(
              ((o = p(p(o, (i & u) | (~i & f)), p(n[a + 0], -680876936))) <<
                7) |
                (o >>> 25),
              i
            );
            var f = p(
              ((f = p(p(f, (o & i) | (~o & u)), p(n[a + 1], -389564586))) <<
                12) |
                (f >>> 20),
              o
            );
            var u = p(
              ((u = p(p(u, (f & o) | (~f & i)), p(n[a + 2], 606105819))) <<
                17) |
                (u >>> 15),
              f
            );
            var i = p(
              ((i = p(p(i, (u & f) | (~u & o)), p(n[a + 3], -1044525330))) <<
                22) |
                (i >>> 10),
              u
            );
            o = p(
              ((o = p(p(o, (i & u) | (~i & f)), p(n[a + 4], -176418897))) <<
                7) |
                (o >>> 25),
              i
            );
            f = p(
              ((f = p(p(f, (o & i) | (~o & u)), p(n[a + 5], 1200080426))) <<
                12) |
                (f >>> 20),
              o
            );
            u = p(
              ((u = p(p(u, (f & o) | (~f & i)), p(n[a + 6], -1473231341))) <<
                17) |
                (u >>> 15),
              f
            );
            i = p(
              ((i = p(p(i, (u & f) | (~u & o)), p(n[a + 7], -45705983))) <<
                22) |
                (i >>> 10),
              u
            );
            o = p(
              ((o = p(p(o, (i & u) | (~i & f)), p(n[a + 8], 1770035416))) <<
                7) |
                (o >>> 25),
              i
            );
            f = p(
              ((f = p(p(f, (o & i) | (~o & u)), p(n[a + 9], -1958414417))) <<
                12) |
                (f >>> 20),
              o
            );
            u = p(
              ((u = p(p(u, (f & o) | (~f & i)), p(n[a + 10], -42063))) << 17) |
                (u >>> 15),
              f
            );
            i = p(
              ((i = p(p(i, (u & f) | (~u & o)), p(n[a + 11], -1990404162))) <<
                22) |
                (i >>> 10),
              u
            );
            o = p(
              ((o = p(p(o, (i & u) | (~i & f)), p(n[a + 12], 1804603682))) <<
                7) |
                (o >>> 25),
              i
            );
            f = p(
              ((f = p(p(f, (o & i) | (~o & u)), p(n[a + 13], -40341101))) <<
                12) |
                (f >>> 20),
              o
            );
            u = p(
              ((u = p(p(u, (f & o) | (~f & i)), p(n[a + 14], -1502002290))) <<
                17) |
                (u >>> 15),
              f
            );
            o = p(
              ((o = p(
                p(
                  o,
                  ((i = p(
                    ((i = p(
                      p(i, (u & f) | (~u & o)),
                      p(n[a + 15], 1236535329)
                    )) <<
                      22) |
                      (i >>> 10),
                    u
                  )) &
                    f) |
                    (u & ~f)
                ),
                p(n[a + 1], -165796510)
              )) <<
                5) |
                (o >>> 27),
              (i = p(
                ((i = p(p(i, (u & f) | (~u & o)), p(n[a + 15], 1236535329))) <<
                  22) |
                  (i >>> 10),
                u
              ))
            );
            f = p(
              ((f = p(p(f, (o & u) | (i & ~u)), p(n[a + 6], -1069501632))) <<
                9) |
                (f >>> 23),
              o
            );
            u = p(
              ((u = p(p(u, (f & i) | (o & ~i)), p(n[a + 11], 643717713))) <<
                14) |
                (u >>> 18),
              f
            );
            i = p(
              ((i = p(p(i, (u & o) | (f & ~o)), p(n[a + 0], -373897302))) <<
                20) |
                (i >>> 12),
              u
            );
            o = p(
              ((o = p(p(o, (i & f) | (u & ~f)), p(n[a + 5], -701558691))) <<
                5) |
                (o >>> 27),
              i
            );
            f = p(
              ((f = p(p(f, (o & u) | (i & ~u)), p(n[a + 10], 38016083))) << 9) |
                (f >>> 23),
              o
            );
            u = p(
              ((u = p(p(u, (f & i) | (o & ~i)), p(n[a + 15], -660478335))) <<
                14) |
                (u >>> 18),
              f
            );
            i = p(
              ((i = p(p(i, (u & o) | (f & ~o)), p(n[a + 4], -405537848))) <<
                20) |
                (i >>> 12),
              u
            );
            o = p(
              ((o = p(p(o, (i & f) | (u & ~f)), p(n[a + 9], 568446438))) << 5) |
                (o >>> 27),
              i
            );
            f = p(
              ((f = p(p(f, (o & u) | (i & ~u)), p(n[a + 14], -1019803690))) <<
                9) |
                (f >>> 23),
              o
            );
            u = p(
              ((u = p(p(u, (f & i) | (o & ~i)), p(n[a + 3], -187363961))) <<
                14) |
                (u >>> 18),
              f
            );
            i = p(
              ((i = p(p(i, (u & o) | (f & ~o)), p(n[a + 8], 1163531501))) <<
                20) |
                (i >>> 12),
              u
            );
            o = p(
              ((o = p(p(o, (i & f) | (u & ~f)), p(n[a + 13], -1444681467))) <<
                5) |
                (o >>> 27),
              i
            );
            f = p(
              ((f = p(p(f, (o & u) | (i & ~u)), p(n[a + 2], -51403784))) << 9) |
                (f >>> 23),
              o
            );
            u = p(
              ((u = p(p(u, (f & i) | (o & ~i)), p(n[a + 7], 1735328473))) <<
                14) |
                (u >>> 18),
              f
            );
            o = p(
              ((o = p(
                p(
                  o,
                  (i = p(
                    ((i = p(
                      p(i, (u & o) | (f & ~o)),
                      p(n[a + 12], -1926607734)
                    )) <<
                      20) |
                      (i >>> 12),
                    u
                  )) ^
                    u ^
                    f
                ),
                p(n[a + 5], -378558)
              )) <<
                4) |
                (o >>> 28),
              (i = p(
                ((i = p(p(i, (u & o) | (f & ~o)), p(n[a + 12], -1926607734))) <<
                  20) |
                  (i >>> 12),
                u
              ))
            );
            f = p(
              ((f = p(p(f, o ^ i ^ u), p(n[a + 8], -2022574463))) << 11) |
                (f >>> 21),
              o
            );
            u = p(
              ((u = p(p(u, f ^ o ^ i), p(n[a + 11], 1839030562))) << 16) |
                (u >>> 16),
              f
            );
            i = p(
              ((i = p(p(i, u ^ f ^ o), p(n[a + 14], -35309556))) << 23) |
                (i >>> 9),
              u
            );
            o = p(
              ((o = p(p(o, i ^ u ^ f), p(n[a + 1], -1530992060))) << 4) |
                (o >>> 28),
              i
            );
            f = p(
              ((f = p(p(f, o ^ i ^ u), p(n[a + 4], 1272893353))) << 11) |
                (f >>> 21),
              o
            );
            u = p(
              ((u = p(p(u, f ^ o ^ i), p(n[a + 7], -155497632))) << 16) |
                (u >>> 16),
              f
            );
            i = p(
              ((i = p(p(i, u ^ f ^ o), p(n[a + 10], -1094730640))) << 23) |
                (i >>> 9),
              u
            );
            o = p(
              ((o = p(p(o, i ^ u ^ f), p(n[a + 13], 681279174))) << 4) |
                (o >>> 28),
              i
            );
            f = p(
              ((f = p(p(f, o ^ i ^ u), p(n[a + 0], -358537222))) << 11) |
                (f >>> 21),
              o
            );
            u = p(
              ((u = p(p(u, f ^ o ^ i), p(n[a + 3], -722521979))) << 16) |
                (u >>> 16),
              f
            );
            i = p(
              ((i = p(p(i, u ^ f ^ o), p(n[a + 6], 76029189))) << 23) |
                (i >>> 9),
              u
            );
            o = p(
              ((o = p(p(o, i ^ u ^ f), p(n[a + 9], -640364487))) << 4) |
                (o >>> 28),
              i
            );
            f = p(
              ((f = p(p(f, o ^ i ^ u), p(n[a + 12], -421815835))) << 11) |
                (f >>> 21),
              o
            );
            u = p(
              ((u = p(p(u, f ^ o ^ i), p(n[a + 15], 530742520))) << 16) |
                (u >>> 16),
              f
            );
            o = p(
              ((o = p(
                p(
                  o,
                  u ^
                    ((i = p(
                      ((i = p(p(i, u ^ f ^ o), p(n[a + 2], -995338651))) <<
                        23) |
                        (i >>> 9),
                      u
                    )) |
                      ~f)
                ),
                p(n[a + 0], -198630844)
              )) <<
                6) |
                (o >>> 26),
              (i = p(
                ((i = p(p(i, u ^ f ^ o), p(n[a + 2], -995338651))) << 23) |
                  (i >>> 9),
                u
              ))
            );
            f = p(
              ((f = p(p(f, i ^ (o | ~u)), p(n[a + 7], 1126891415))) << 10) |
                (f >>> 22),
              o
            );
            u = p(
              ((u = p(p(u, o ^ (f | ~i)), p(n[a + 14], -1416354905))) << 15) |
                (u >>> 17),
              f
            );
            i = p(
              ((i = p(p(i, f ^ (u | ~o)), p(n[a + 5], -57434055))) << 21) |
                (i >>> 11),
              u
            );
            o = p(
              ((o = p(p(o, u ^ (i | ~f)), p(n[a + 12], 1700485571))) << 6) |
                (o >>> 26),
              i
            );
            f = p(
              ((f = p(p(f, i ^ (o | ~u)), p(n[a + 3], -1894986606))) << 10) |
                (f >>> 22),
              o
            );
            u = p(
              ((u = p(p(u, o ^ (f | ~i)), p(n[a + 10], -1051523))) << 15) |
                (u >>> 17),
              f
            );
            i = p(
              ((i = p(p(i, f ^ (u | ~o)), p(n[a + 1], -2054922799))) << 21) |
                (i >>> 11),
              u
            );
            o = p(
              ((o = p(p(o, u ^ (i | ~f)), p(n[a + 8], 1873313359))) << 6) |
                (o >>> 26),
              i
            );
            f = p(
              ((f = p(p(f, i ^ (o | ~u)), p(n[a + 15], -30611744))) << 10) |
                (f >>> 22),
              o
            );
            u = p(
              ((u = p(p(u, o ^ (f | ~i)), p(n[a + 6], -1560198380))) << 15) |
                (u >>> 17),
              f
            );
            i = p(
              ((i = p(p(i, f ^ (u | ~o)), p(n[a + 13], 1309151649))) << 21) |
                (i >>> 11),
              u
            );
            o = p(
              ((o = p(p(o, u ^ (i | ~f)), p(n[a + 4], -145523070))) << 6) |
                (o >>> 26),
              i
            );
            f = p(
              ((f = p(p(f, i ^ (o | ~u)), p(n[a + 11], -1120210379))) << 10) |
                (f >>> 22),
              o
            );
            u = p(
              ((u = p(p(u, o ^ (f | ~i)), p(n[a + 2], 718787259))) << 15) |
                (u >>> 17),
              f
            );
            i = p(
              ((i = p(p(i, f ^ (u | ~o)), p(n[a + 9], -343485551))) << 21) |
                (i >>> 11),
              u
            );
            o = p(o, c);
            i = p(i, W);
            u = p(u, s);
            f = p(f, v);
          }
          return Array(o, i, u, f);
        })(
          (function (n) {
            var r = Array();
            for (var o = 0; o < n.length * 8; o += 8) {
              r[o >> 5] |= (n.charCodeAt(o / 8) & 255) << o % 32;
            }
            return r;
          })(n),
          n.length * 8
        );
        var o = "";
        for (var i = 0; i < 4 * r.length; i++) {
          o +=
            "0123456789abcdef".charAt((r[i >> 2] >> ((i % 4) * 8 + 4)) & 15) +
            "0123456789abcdef".charAt((r[i >> 2] >> ((i % 4) * 8)) & 15);
        }
        return o;
      }
      function p(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
      }
      r(m, c);
      k1 = o(m);
      n(m, [
        {
          key: "init",
          value: function () {
            this.lastTime = 0;
            this.reg = /./;
            N(this.reg);
            this.reg.toString = function () {
              return "";
            };
          },
        },
        {
          key: "detect",
          value: function () {
            N(this.reg);
          },
        },
      ]);
      var y1;
      var p1;
      var k1;
      var k = m;
      r(C, c);
      p1 = o(C);
      n(C, [
        {
          key: "init",
          value: function () {
            var o = this;
            this.div = document.createElement("div");
            this.div.__defineGetter__("id", function () {
              o.onDevToolOpen();
            });
            Object.defineProperty(this.div, "id", {
              get: function () {
                o.onDevToolOpen();
              },
            });
          },
        },
        {
          key: "detect",
          value: function () {
            N(this.div);
          },
        },
      ]);
      r(g, c);
      y1 = o(g);
      n(g, [
        {
          key: "init",
          value: function () {
            var o = this;
            this.checkWindowSizeUneven();
            window.addEventListener(
              "resize",
              function () {
                setTimeout(function () {
                  o.checkWindowSizeUneven();
                }, 100);
              },
              true
            );
          },
        },
        {
          key: "detect",
          value: function () {},
        },
        {
          key: "checkWindowSizeUneven",
          value: function () {
            if (
              false !==
              (e =
                null != window.devicePixelRatio
                  ? window.devicePixelRatio
                  : !(
                      null != (e = window.screen) ||
                      !e.deviceXDPI ||
                      !e.logicalXDPI
                    ) && e.deviceXDPI / e.logicalXDPI)
            ) {
              var r = 200 < window.outerWidth - window.innerWidth * e;
              var e = 300 < window.outerHeight - window.innerHeight * e;
              if (r || e) {
                this.onDevToolOpen();
                return false;
              }
              _(this.type);
            }
            return true;
          },
        },
      ]);
      function g() {
        var r = {
          type: a.Size,
          enabled: true && true,
        };
        e(this, g);
        return y1.call(this, r);
      }
      function C() {
        var t = {
          type: a.DefineId,
        };
        e(this, C);
        return p1.call(this, t);
      }
      function m() {
        var r = {
          type: a.RegToString,
          enabled: false || false,
        };
        e(this, m);
        return k1.call(this, r);
      }
      r(q, c);
      L1 = o(q);
      n(q, [
        {
          key: "init",
          value: function () {
            var t = this;
            this.count = 0;
            this.date = new Date();
            this.date.toString = function () {
              t.count++;
              return "";
            };
          },
        },
        {
          key: "detect",
          value: function () {
            this.count = 0;
            N(this.date);
            s1();
            if (2 <= this.count) {
              this.onDevToolOpen();
            }
          },
        },
      ]);
      var w;
      var b1;
      var O1;
      var S1;
      var L1;
      r(B, c);
      S1 = o(B);
      n(B, [
        {
          key: "init",
          value: function () {
            var t = this;
            this.count = 0;
            this.func = function () {};
            this.func.toString = function () {
              t.count++;
              return "";
            };
          },
        },
        {
          key: "detect",
          value: function () {
            this.count = 0;
            N(this.func);
            s1();
            if (2 <= this.count) {
              this.onDevToolOpen();
            }
          },
        },
      ]);
      r(P, c);
      O1 = o(P);
      n(P, [
        {
          key: "detect",
          value: function () {
            var r = new Date().getTime();
            if (100 < new Date().getTime() - r) {
              this.onDevToolOpen();
            }
          },
        },
      ]);
      r(D, c);
      b1 = o(D);
      n(D, [
        {
          key: "init",
          value: function () {
            this.maxPrintTime = 0;
            this.largeObjectArray = (function () {
              var n = (function () {
                var n = {};
                for (var t = 0; t < 500; t++) {
                  n["".concat(t)] = "".concat(t);
                }
                return n;
              })();
              var t = [];
              for (var r = 0; r < 50; r++) {
                t.push(n);
              }
              return t;
            })();
          },
        },
        {
          key: "detect",
          value: function () {
            var r = this;
            var e = U(function () {
              c1(r.largeObjectArray);
            });
            var o = U(function () {
              N(r.largeObjectArray);
            });
            this.maxPrintTime = Math.max(this.maxPrintTime, o);
            s1();
            if (0 === e || 0 === this.maxPrintTime) {
              return false;
            }
            if (e > 10 * this.maxPrintTime) {
              this.onDevToolOpen();
            }
          },
        },
      ]);
      var c = D;
      t((w = {}), a.RegToString, k);
      t(w, a.DefineId, C);
      t(w, a.Size, g);
      t(w, a.DateToString, q);
      t(w, a.FuncToString, B);
      t(w, a.Debugger, P);
      t(w, a.Performance, c);
      t(w, a.DebugLib, W);
      function D() {
        var r = {
          type: a.Performance,
          enabled: false || true,
        };
        e(this, D);
        return b1.call(this, r);
      }
      function P() {
        var r = {
          type: a.Debugger,
          enabled: false || false,
        };
        e(this, P);
        return O1.call(this, r);
      }
      function B() {
        var r = {
          type: a.FuncToString,
          enabled: true && true,
        };
        e(this, B);
        return S1.call(this, r);
      }
      function q() {
        var r = {
          type: a.DateToString,
          enabled: true && true,
        };
        e(this, q);
        return L1.call(this, r);
      }
      var D1;
      var P1;
      var B1;
      var q1;
      var I = Object.assign(
        function (n) {
          function t(n) {
            n = 0 < arguments.length && undefined !== n ? n : "";
            var e = {
              success: !n,
              reason: n,
            };
            return e;
          }
          if (I.isRunning) {
            return t("already running");
          }
          r = navigator.userAgent.toLowerCase();
          e = (function () {
            var t = navigator;
            var r = t.platform;
            if ("number" == typeof (t = t.maxTouchPoints)) {
              return 1 < t;
            }
            if ("string" == typeof r) {
              t = r.toLowerCase();
              if (/(mac|win)/i.test(t)) {
                return false;
              }
              if (/(android|iphone|ipad|ipod|arch)/i.test(t)) {
                return true;
              }
            }
            return /(iphone|ipad|ipod|ios|android)/i.test(
              navigator.userAgent.toLowerCase()
            );
          })();
          o = !!window.top && window !== window.top;
          i = !e;
          c = -1 !== r.indexOf("qqbrowser");
          W = -1 !== r.indexOf("firefox");
          s = -1 !== r.indexOf("macintosh");
          v = -1 !== r.indexOf("edge");
          d = v && !(-1 !== r.indexOf("chrome"));
          h = d || -1 !== r.indexOf("trident") || -1 !== r.indexOf("msie");
          l = -1 !== r.indexOf("crios");
          x = -1 !== r.indexOf("edgios");
          y = -1 !== r.indexOf("chrome") || l;
          p =
            !e &&
            /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(
              r
            );
          Object.assign(f, {
            iframe: o,
            pc: i,
            qqBrowser: c,
            firefox: W,
            macos: s,
            edge: v,
            oldEdge: d,
            ie: h,
            iosChrome: l,
            iosEdge: x,
            chrome: y,
            seoBot: p,
            mobile: e,
          });
          N = R.log;
          c1 = R.table;
          W1 = R.clear;
          (function (n) {
            var e;
            var o = 0 < arguments.length && undefined !== n ? n : {};
            for (e in s) {
              if (
                !(
                  undefined === o[e] ||
                  (j(s[e]) !== j(o[e]) && -1 === f1.indexOf(e))
                )
              ) {
                s[e] = o[e];
              }
            }
            if (
              "function" == typeof s.ondevtoolclose &&
              true === s.clearIntervalWhenDevOpenTrigger
            ) {
              s.clearIntervalWhenDevOpenTrigger = false;
              console.warn(
                "ã€DISABLE-DEVTOOLã€‘clearIntervalWhenDevOpenTrigger åœ¨ä½¿ç”¨ ondevtoolclose æ—¶æ— æ•ˆ"
              );
            }
          })(n);
          if (
            s.md5 &&
            l1(
              ((o = s.tkName),
              (i = window.location.search),
              (c = window.location.hash),
              "" !==
                (i = "" === i && "" !== c ? "?".concat(c.split("?")[1]) : i) &&
              undefined !== i &&
              ((c = new RegExp("(^|&)" + o + "=([^&]*)(&|$)", "i")),
              null != (o = i.substr(1).match(c)))
                ? unescape(o[2])
                : "")
            ) === s.md5
          ) {
            return t("token passed");
          }
          var r;
          var e;
          var o;
          var i;
          var c;
          var W;
          var s;
          var v;
          var d;
          var h;
          var l;
          var x;
          var y;
          var p;
          if (s.seo && false) {
            return t("seobot");
          }
          I.isRunning = true;
          o1(I);
          v1 = function () {
            return I.isSuspend;
          };
          var C = window.top;
          var m = window.parent;
          d1(window);
          if (s.disableIframeParents && C && m && C !== window) {
            for (; m !== C; ) {
              d1(m);
              m = m.parent;
            }
            d1(C);
          }
          ("all" === s.detectors ? Object.keys(w) : s.detectors).forEach(
            function (n) {
              new w[n]();
            }
          );
          return t();
        },
        {
          isRunning: false,
          isSuspend: false,
          md5: l1,
          version: "0.3.6",
          DetectorType: a,
          isDevToolOpened: K,
        }
      );
      if (
        (k =
          "undefined" != typeof window &&
          window.document &&
          (D1 = document.querySelector("[disable-devtool-auto]"))
            ? ((P1 = [
                "disable-menu",
                "disable-select",
                "disable-copy",
                "disable-cut",
                "disable-paste",
                "clear-log",
              ]),
              (B1 = ["interval"]),
              (q1 = {}),
              ["md5", "url", "tk-name", "detectors"]
                .concat(P1, B1)
                .forEach(function (n) {
                  var o;
                  var i = D1.getAttribute(n);
                  if (null !== i) {
                    if (-1 !== B1.indexOf(n)) {
                      i = parseInt(i);
                    } else if (-1 !== P1.indexOf(n)) {
                      i = "false" !== i;
                    } else if ("detector" === n && "all" !== i) {
                      i = i.split(" ");
                    }
                    q1[
                      -1 === (n = n).indexOf("-")
                        ? n
                        : ((o = false),
                          n
                            .split("")
                            .map(function (n) {
                              return "-" === n
                                ? ((o = true), "")
                                : o
                                ? ((o = false), n.toUpperCase())
                                : n;
                            })
                            .join(""))
                    ] = i;
                  }
                }),
              q1)
            : null)
      ) {
        I(k);
      }
      return I;
    });
  })();
})();
function _0x707aba(n) {
  function o(n) {
    if (typeof n === "string") {
      return function (n) {}.constructor("while (true) {}").apply("counter");
    } else if (("" + n / n).length !== 1 || n % 20 === 0) {
      (function () {
        return true;
      })
        .constructor("debugger")
        .call("action");
    } else {
      (function () {
        return false;
      })
        .constructor("debugger")
        .apply("stateObject");
    }
    o(++n);
  }
  try {
    if (n) {
      return o;
    } else {
      o(0);
    }
  } catch (n) {}
}
!(function () {
  var _ = (function () {
    var t = true;
    return function (r, o) {
      var n = t
        ? function () {
            if (o) {
              var t = o.apply(r, arguments);
              o = null;
              return t;
            }
          }
        : function () {};
      t = false;
      return n;
    };
  })();
  var E = (function () {
    var o = true;
    return function (t, r) {
      var n = o
        ? function () {
            if (r) {
              var n = r.apply(t, arguments);
              r = null;
              return n;
            }
          }
        : function () {};
      o = false;
      return n;
    };
  })();
  !(function () {
    var n = {
      2: 2,
      5: 5,
      6: 6,
    };
    var t = {
      2: 2,
    };
    var r = {
      1: 1,
    };
    var o = {
      3: 3,
      4: 4,
    };
    !(function s(v, W, d) {
      function k(t, n) {
        var i = n.VkYCX.split("|");
        var e = 0;
        while (true) {
          switch (i[e++]) {
            case "0":
              return W[t].exports;
            case "1":
              h();
              continue;
            case "2":
              if (!W[t]) {
                if (!v[t]) {
                  var u = "function" == typeof require && require;
                  if (!n && u) {
                    return u(t, true);
                  }
                  if (g) {
                    return g(t, true);
                  }
                  (n = new Error(
                    n.rbaxF(
                      n.ELNbH("Cannot", " ") + "find" + " " + "module",
                      " "
                    ) +
                      "'" +
                      t +
                      "'"
                  )).code =
                    n.jXmLR(
                      n.kaXqp("M", "O") +
                        "D" +
                        "U" +
                        "L" +
                        "E" +
                        "_" +
                        "N" +
                        "O" +
                        "T" +
                        "_" +
                        "F",
                      "O"
                    ) +
                    "U" +
                    "N" +
                    "D";
                  throw n;
                }
                var c = {
                  exports: {},
                };
                u = W[t] = c;
                v[t][0].call(
                  u.exports,
                  function (n) {
                    return k(v[t][1][n] || n);
                  },
                  u,
                  u.exports,
                  s,
                  v,
                  W,
                  d
                );
              }
              continue;
            case "3":
              (function () {
                E(this, function () {
                  var r = new RegExp("function *\\( *\\)");
                  var o = new RegExp(
                    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
                    "i"
                  );
                  var i = _0x1f3f16("init");
                  if (!r.test(i + "chain") || !o.test(i + "input")) {
                    i("0");
                  } else {
                    _0x1f3f16();
                  }
                })();
              })();
              continue;
            case "4":
              var f = {
                nhVSn: "(((.+)+)+)+$",
              };
              var a = f;
              continue;
            case "5":
              var h = _(this, function () {
                return h
                  .toString()
                  .search(a.nhVSn)
                  .toString()
                  .constructor(h)
                  .search("(((.+)+)+)+$");
              });
              continue;
          }
          break;
        }
      }
      var g = "function" == typeof require && require;
      for (var t = 0; t < d.length; t++) {
        k(d[t]);
      }
      return k;
    })(
      {
        1: [
          function (n, t, r) {
            "use strict";

            var i = {
              value: true,
            };
            Object.defineProperty(r, "t", i);
            r.u = r.i = undefined;
            var a =
              r.yLqyh("ABCDEFGHIJKLMNOPQRSTUVW", "X") +
              "Y" +
              "Zabcdefghijklmnopqrstuvwxyz0123456789" +
              "+" +
              "/";
            r.i = function (n) {
              if (
                (n =
                  (n = (n = "".concat(n)).replace(/[\t\n\f\r]/g, "")).length %
                    4 ==
                  0
                    ? n.replace(/==?$/, "")
                    : n).length %
                  4 ==
                  1 ||
                /[^+/0-9A-Za-z]/.test(n)
              ) {
                return null;
              }
              var r;
              var o = "";
              var i = 0;
              var e = 0;
              for (var u = 0; o.tqhkI(u, n.length); u++) {
                r = n[u];
                i = (i <<= 6) | ((r = a.indexOf(r)) < 0 ? undefined : r);
                if (24 === (e += 6)) {
                  o =
                    (o =
                      (o += String.fromCharCode((16711680 & i) >> 16)) +
                      String[o.UZnoA("fromChar", "Code")]((65280 & i) >> 8)) +
                    String.fromCharCode(255 & i);
                  i = e = 0;
                }
              }
              if (12 === e) {
                i >>= 4;
                o += String[o.UZnoA("fromChar", "Code")](i);
              } else if (18 === e) {
                i >>= 2;
                o =
                  (o += String.fromCharCode((65280 & i) >> 8)) +
                  String.fromCharCode(255 & i);
              }
              return o;
            };
            r.u = function (n) {
              n = "".concat(n);
              for (o = 0; o < n.length; o++) {
                if (255 < n.charCodeAt(o)) {
                  return null;
                }
              }
              var r = "";
              for (var o = 0; o < n.length; o += 3) {
                var i = [undefined, undefined, undefined, undefined];
                i[0] = n[o.UZnoA("char", "Code") + "At"](o) >> 2;
                i[1] = (3 & n.charCodeAt(o)) << 4;
                if (n.length > o + 1) {
                  i[1] |= n.charCodeAt(o.uKScd(o, 1)) >> 4;
                  i[2] = (15 & n[o.aGsEn("charCode", "At")](o + 1)) << 2;
                }
                if (n.length > o + 2) {
                  i[2] |= n.charCodeAt(o + 2) >> 6;
                  i[3] = 63 & n.charCodeAt(o + 2);
                }
                for (var e = 0; e < i.length; e++) {
                  r +=
                    "undefined" == typeof i[e]
                      ? "="
                      : (function (n) {
                          if (0 <= n && n < 64) {
                            return a[n];
                          }
                        })(i[e]);
                }
              }
              return r;
            };
          },
          {},
        ],
        2: [
          function (n, t, r) {
            "use strict";

            function f(n) {
              for (var t = 1; t < arguments.length; t++) {
                var r;
                var o = arguments[t];
                for (r in o) n[r] = o[r];
              }
              return n;
            }
            var i = {
              value: true,
            };
            Object.defineProperty(r, "t", i);
            r["default"] = undefined;
            var e = {
              path: "/",
            };
            a = {
              read: function (n) {
                return (n = '"' === n[0] ? n.slice(1, -1) : n).replace(
                  /(%[\dA-F]{2})+/gi,
                  decodeURIComponent
                );
              },
              write: function (n) {
                return encodeURIComponent(n).replace(
                  /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                  decodeURIComponent
                );
              },
            };
            e;
            var a;
            var u = Object.create({
              set: s,
              get: function (n) {
                if (
                  "undefined" != typeof document &&
                  (!arguments.length || n)
                ) {
                  var t = document.cookie ? document.cookie.split("; ") : [];
                  var r = {};
                  for (var o = 0; o < t.length; o++) {
                    var i = t[o].split("=");
                    var e = i.slice(1).join("=");
                    try {
                      var u = decodeURIComponent(i[0]);
                      r[u] = (e = '"' === e[0] ? e.slice(1, -1) : e).replace(
                        /(%[\dA-F]{2})+/gi,
                        decodeURIComponent
                      );
                      if (n === u) {
                        break;
                      }
                    } catch (n) {}
                  }
                  return n ? r[n] : r;
                }
              },
              remove: function (n, t) {
                var o = {
                  expires: -1,
                };
                s(n, "", f({}, t, o));
              },
            });
            function s(n, t, r) {
              if ("undefined" != typeof document) {
                if ("number" == typeof (r = f({}, e, r)).expires) {
                  r.expires = new Date(Date.now() + 86400000 * r.expires);
                }
                if (r.expires) {
                  r.expires = r.expires.toUTCString();
                }
                n = encodeURIComponent(n)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape);
                var e;
                var u = "";
                for (e in r)
                  if (r[e] && ((u += "; " + e), true !== r[e])) {
                    u += "=" + r[e].split(";")[0];
                  }
                return (document.cookie =
                  n +
                  "=" +
                  encodeURIComponent(t).replace(
                    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                    decodeURIComponent
                  ) +
                  u);
              }
            }
            r["default"] = u;
          },
          {},
        ],
        3: [
          function (n, t, r) {
            "use strict";

            var o = {
              value: true,
            };
            var c = {
              enumerable: true,
              get: function () {
                return h["default"];
              },
            };
            var f = {
              enumerable: true,
              get: function () {
                return s["default"];
              },
            };
            var a = {
              enumerable: true,
              get: function () {
                return v["default"];
              },
            };
            Object.defineProperty(r, "t", o);
            r.o = undefined;
            Object.defineProperty(r, "Cookie", c);
            r.FW = undefined;
            Object.defineProperty(r, "Storage", f);
            Object.defineProperty(r, "Util", a);
            var h = n(2);
            var s = n(5);
            var v = n(6);
            var W = (r.o = window.jQuery);
            var d = (r.FW = {});
            var x = {
              dataType: "json",
            };
            W.ajaxSetup(x);
            d.define = function (t) {
              d[t] = function () {
                this.v.apply(this, arguments);
              };
              d[t].prototype =
                2 < arguments.length
                  ? W.extend.apply(
                      null,
                      [true, {}].concat([].slice.call(arguments, 1))
                    )
                  : arguments[1];
              if ("undefined" == typeof d[t].prototype.v) {
                d[t].prototype.v = function () {};
              }
              d[t].bind = function (n) {
                return d.bind(t, n);
              };
              return d[t];
            };
            d.bind = function (r, n, t) {
              W(document).on(t || "ActiveHtml", function () {
                W(n).each(function (n, t) {
                  t = W(t);
                  if (!t.data(r)) {
                    t.data(r, new d[r](t));
                  }
                });
              });
            };
            d.activate = function (n) {
              W(document).trigger("ActiveHtml", [n]);
            };
            W.fn.extend(true, {
              activate: d.activate,
              scrollFocus: function () {
                W("html,body").animate(
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
            d.define("AutoComplete", {
              v: function (n, t, r) {
                this.h = n;
                this.l;
                this.p = 2;
                this.m = 350;
                this._ = null;
                this.h.keyup(W.proxy(this.g, this));
                if (t) {
                  this.h.on("autocomplete:query", t);
                }
                if (r) {
                  this.h.on("autocomplete:reset", r);
                }
              },
              g: function (n) {
                var t = this;
                if (this.l) {
                  clearTimeout(this.l);
                }
                if (!(-1 < [37, 38, 39, 40, 13].indexOf(n.keyCode))) {
                  this.l = setTimeout(function () {
                    var n = W.trim(t.h.val());
                    t.h.trigger("autocomplete:reset");
                    if (!(n.length < t.p)) {
                      t.h.trigger("autocomplete:query", [W.trim(n)]);
                    }
                  }, this.m);
                }
              },
            });
          },
          n,
        ],
        4: [
          function (n, t, r) {
            "use strict";

            var e = {
              value: true,
            };
            Object.defineProperty(r, "t", e);
            r["default"] = undefined;
            function u() {
              s("body,html").empty();
            }
            var h = n(2);
            var s = window.jQuery;
            var c = window.DisDevTool;
            function v() {
              try {
                c({
                  ondevtoolopen: function (n, t) {
                    u();
                    t();
                  },
                });
              } catch (n) {}
              function n() {
                var n = document.createElement("script");
                n.innerHTML = "//# sourceMappingURL=/app.js.map";
                document.body.appendChild(n);
                document.body.removeChild(n);
              }
              var t;
              if (window.location.pathname !== "/404") {
                n();
                setInterval(n, 1500);
                setTimeout(function n() {
                  if ((t = t || null != h["default"].get("sourceVersion"))) {
                    h["default"].remove("sourceVersion");
                    u();
                  } else {
                    setTimeout(n, 1000);
                  }
                }, 200);
              }
            }
            r["default"] = function () {
              if (
                !(
                  0 ||
                  new RegExp("(Xbox|PlayStation)", "i").exec(
                    navigator.userAgent
                  ) ||
                  -1 < window.location.href.indexOf("dev.")
                )
              ) {
                if (new RegExp("/embed/").test(window.location.href)) {
                  s(document).ready(function () {
                    var i;
                    var e;
                    var u;
                    if (!h["default"].get("__pf")) {
                      i = false;
                      u = (e = [
                        "https://aniwave.to/home",
                        "https://anix.to/home",
                        "https://zoroxtv.to/home",
                        "https://animesuge.to/home",
                        "https://mangafire.to/home",
                      ])[Math.floor(Math.random() * e.length)];
                      s(window).click(function (n) {
                        if (!i) {
                          n.preventDefault();
                          i = true;
                          h["default"].set("__pf", 1, {
                            expires: new Date(new Date().getTime() + 300000),
                          });
                          window.open(
                            "".concat(u, "?utm_source=vid"),
                            "_blank"
                          );
                        }
                      });
                    }
                  });
                }
                var n = !!navigator.webdriver;
                try {
                  var t;
                  var r = [];
                  Object.keys(window).forEach(function (n) {
                    if (
                      (t = new RegExp(
                        "^([\\w]+)_(Symbol|Array|Promise)",
                        "i"
                      ).exec(n))
                    ) {
                      r.push(t[1]);
                    }
                  });
                  if (3 <= r.length && r[0] === r[1] && r[0] === r[2]) {
                    n = true;
                  }
                } catch (n) {}
                if (n) {
                  setInterval(u, 500);
                }
                v();
              }
            };
          },
          t,
        ],
        5: [
          function (n, t, r) {
            "use strict";

            var e;
            var u = {
              value: true,
            };
            Object.defineProperty(r, "t", u);
            r["default"] = undefined;
            try {
              e = window.localStorage || false;
            } catch (n) {}
            var c = {
              C: {},
              getItem: function (n) {
                return this.C[n] || null;
              },
              setItem: function (n, t) {
                this.C[n] = t;
              },
              removeItem: function (n) {
                delete this.C[n];
              },
              clear: function () {
                this.C = {};
              },
            };
            var f = e || c;
            r["default"] = {
              get: function (n, t, r) {
                var o = f.getItem(n);
                if (null === o) {
                  return t;
                }
                if (r) {
                  return o;
                }
                try {
                  return JSON.parse(o);
                } catch (n) {
                  return t;
                }
              },
              set: function (n, t) {
                try {
                  f.setItem(n, JSON.stringify(t));
                  return true;
                } catch (n) {
                  return false;
                }
              },
              remove: function (n) {
                return f.removeItem(n);
              },
              clear: function () {
                return f.clear();
              },
            };
          },
          {},
        ],
        6: [
          function (n, t, r) {
            "use strict";

            var i = {
              value: true,
            };
            Object.defineProperty(r, "t", i);
            r["default"] = undefined;
            var e = n(1);
            window.jQuery;
            r["default"] = {
              S: function (n, t) {
                var n = new RegExp("[?&]".concat(n, "(=([^&$]+))?")).exec(
                  window.location.search
                );
                var r = null;
                return (r =
                  null !==
                    (r =
                      null !== n
                        ? n[2]
                          ? decodeURIComponent(decodeURI(n[2]))
                          : ""
                        : r) &&
                  "undefined" != typeof t &&
                  (/^(1|true|yes)$/.test(r) && (r = true),
                  /^(0|false|no)$/.test(r))
                    ? false
                    : r);
              },
              I: function (n) {
                n = encodeURIComponent("".concat(n));
                return (function (n) {
                  var o = {
                    ocJLG: function (n, t) {
                      return o.LFYge(n, t);
                    },
                  };
                  var i = 5;
                  var e = "";
                  for (var u = 0; u < n.length; u++) {
                    var i;
                    var e;
                    var u;
                    var c = n.charCodeAt(u);
                    if (o.AtVDa(u % i, 1) || u % i == 4) {
                      c -= 2;
                    } else if (u % i == 3) {
                      c += 5;
                    } else if (o.zHFsU(u, i) == 0) {
                      c -= 4;
                    } else if (u % i == 2) {
                      c -= 6;
                    }
                    e += String[o.LFYge("from", "Char") + "Code"](c);
                  }
                  return e;
                })(a(this.j("p8HVMm5j8mH8aRSk", n)));
              },
              R: function (n) {
                0;
                n = e.i(
                  n.replaceAll("_", "/")[r.yLqyh("replace", "All")]("-", "+")
                );
                n = this.j("WXrUARXb1aDLaZjI", n);
                return decodeURIComponent(n);
              },
              j: function (n, t) {
                var i;
                var e = [];
                var u = 0;
                var c = "";
                for (var f = 0; f < 256; f++) {
                  e[f] = f;
                }
                for (f = 0; f < 256; f++) {
                  u = (u + e[f] + n.charCodeAt(f % n.length)) % 256;
                  i = e[f];
                  e[f] = e[u];
                  e[u] = i;
                }
                var f = 0;
                var u = 0;
                for (var a = 0; a < t.length; a++) {
                  i = e[(f = (f + 1) % 256)];
                  e[f] = e[(u = (u + e[f]) % 256)];
                  e[u] = i;
                  c += String.fromCharCode(
                    t.charCodeAt(a) ^ e[(e[f] + e[u]) % 256]
                  );
                }
                return c;
              },
            };
            function a(n) {
              0;
              return e.u(n).replaceAll("/", "_").replaceAll("+", "-");
            }
          },
          r,
        ],
        7: [
          function (n, t, r) {
            "use strict";

            var h = n(3);
            var n = n(4);
            var i = h.FW.define("Stat", {
              v: function () {
                this.U();
              },
              U: function () {
                try {
                  var r = document.referrer;
                  var o = window.location;
                  var i = "https://"
                    .concat(o.hostname)
                    .concat(o.pathname, "?ref=")
                    .concat(r);
                  var e = "".concat(o.href, r.yLqyh(" ", "-") + " ").concat(r);
                  var u = "https://whos.amung.us/pingjs/?k="
                    .concat("nrhtn9q665mn", "&c=s&x=")
                    .concat(encodeURIComponent(i), "&v=29&r=")
                    .concat(Math.ceil(9999 * Math.random()), "&t=")
                    .concat(encodeURIComponent(e));
                  0;
                  var c = h.o("<script />").attr("src", u);
                  c.appendTo(document.body);
                  setTimeout(function () {
                    return c.remove();
                  }, 5000);
                } catch (n) {}
              },
            });
            var e = h.FW.define("Embed", {
              v: function (n) {
                this.O = n;
                this.k = n.data("season");
                this.M = n.data("episode");
                this.D = false;
                this.A = n.find("main");
                0;
                this.P = h.o("#ep-panel");
                0;
                this.T = h.o("#close-ep-btn");
                0;
                this.q = h.o("#episode-btn");
                0;
                this.F = h.o("#btn-play");
                0;
                this.B = h.o("#servers");
                this.H = this.P.find(".episodes");
                this.N = this.P.find(".episodes a");
                this.V = this.P.find(".season-current");
                this.Z = this.P.find(".season-items a");
                this.L = h.o.proxy(this.X, this);
                this.q.click(h.o.proxy(this.$, this));
                this.T.click(h.o.proxy(this.J, this));
                this.N.click(h.o.proxy(this.G, this));
                this.Z.click(h.o.proxy(this.K, this));
                this.F.click(h.o.proxy(this.W, this));
                this.Y();
                this.nn();
              },
              nn: function () {
                var n = this;
                var t = 0;
                var r = setInterval(function () {
                  n.tn();
                  if (3 <= ++t) {
                    clearInterval(r);
                  }
                }, 10000);
              },
              tn: function () {
                function o() {
                  i.rn(
                    o.JhyjZ(
                      o.pdtNf(
                        o.JhyjZ(o.JhyjZ("Please", " ") + "remove", " "),
                        "sandbox"
                      ),
                      " "
                    ) +
                      "attribute" +
                      " " +
                      "from" +
                      " " +
                      "your" +
                      " " +
                      "iframe" +
                      "."
                  );
                }
                var i = this;
                try {
                  return void (
                    window.frameElement.hasAttribute("sandbox") && o()
                  );
                } catch (n) {}
                try {
                  document.domain;
                } catch (n) {
                  try {
                    return void (
                      -1 !=
                        n
                          .toString()
                          .toLowerCase()
                          [o.USVGU("index", "Of")]("sandbox") && o()
                    );
                  } catch (n) {}
                }
                try {
                  if (
                    !window.navigator.plugins.namedItem(
                      o.AwOfK(o.BjRuK("Chrome ", "P") + "D", "F") +
                        " " +
                        "Viewer"
                    )
                  ) {
                    return false;
                  }
                } catch (n) {
                  return false;
                }
                var e = document.createElement("object");
                e.data =
                  o.nuXzd(
                    o.nuXzd(o.AwOfK("data:", "application") + "/", "pdf") +
                      ";" +
                      "base64" +
                      ",",
                    "a"
                  ) + "G1t";
                e.style =
                  o.noWsv("position:absolute;top:", "-") +
                  "500px" +
                  ";" +
                  "left" +
                  ":" +
                  "-" +
                  "500px" +
                  ";" +
                  "visibility" +
                  ":" +
                  "hidden" +
                  ";";
                e.onerror = function () {
                  o();
                };
                e.onload = function () {
                  e.parentNode.removeChild(e);
                };
                document.body.appendChild(e);
              },
              Y: function () {
                var t = this;
                var r = this.H.filter(":visible").find("a:first");
                if (!(1 != this.H.length || r.length)) {
                  r = this.H.find("a:first");
                }
                this.un(r);
                if (this.D) {
                  this.en(r, function () {
                    t.on();
                  });
                }
              },
              cn: function () {
                var n = this.N.filter(".active");
                return (n = n.length ? n : this.N.first());
              },
              fn: function (n) {
                if (!n.hasClass("active")) {
                  this.Z.removeClass("active");
                  n.addClass("active");
                }
                this.V.text(n.text());
              },
              an: function (n) {
                this.H.hide()
                  .filter("[data-season=".concat(n.data("number"), "]"))
                  .slideDown();
              },
              un: function (n) {
                if (!n.hasClass("active")) {
                  this.N.removeClass("active");
                  n.addClass("active");
                }
              },
              en: function (n, t) {
                var o = this;
                this.A.loading();
                h.o
                  .ajax(
                    (o.noWsv("ajax/embed", "/") + "episode" + "/")
                      .concat(n.data("id"), "/sources")
                      .concat(window.location.search)
                  )
                  .done(function (n) {
                    if (200 !== n.status) {
                      o.rn(n.message);
                    } else {
                      o.sn(n.result);
                      if (t) {
                        t();
                      }
                    }
                  })
                  .fail(function () {
                    o.rn(
                      o.nuXzd(
                        o.noWsv(
                          o.pdtNf(o.hdkAd("Unable to load ", "the"), " "),
                          "episode"
                        ) +
                          "," +
                          " ",
                        "please"
                      ) +
                        " " +
                        "try" +
                        " " +
                        "again" +
                        "."
                    );
                  });
              },
              on: function () {
                var n = this.vn.first();
                this.hn(n);
              },
              sn: function (n) {
                var r = h.o.proxy(this.dn, this);
                var o = this.B.find(".servers").empty();
                this.B.hide();
                for (var i = 0; i < n.length; i++) {
                  0;
                  h.o(
                    o.pdtNf("<a class", "=") +
                      '"' +
                      "dropdown" +
                      "-" +
                      "item" +
                      '"' +
                      " " +
                      "/" +
                      ">"
                  )
                    .attr("href", "#")
                    .addClass(i ? "" : "active")
                    .attr(o.RllVy("data", "-") + "id", n[i].id)
                    .text(n[i].title)
                    .click(r)
                    .appendTo(o);
                }
                if (1 < n.length) {
                  this.B.show();
                }
                this.vn = this.B.find("a");
              },
              hn: function (n) {
                var r = this;
                h.o
                  .ajax(
                    "ajax/embed/source/"
                      .concat(n.data("id"))
                      .concat(window.location.search)
                  )
                  .done(function (n) {
                    n = h.Util.R(n.result.url);
                    r.ln(n);
                  });
              },
              ln: function (n) {
                if (this.D) {
                  n += "".concat(
                    n.indexOf("?") < 0 ? "?" : "&",
                    "autostart=true"
                  );
                }
                0;
                n = h
                  .o("<iframe />")
                  .attr("src", n)
                  .attr("allow", "autoplay; fullscreen")
                  .attr("allowfullscreen", "yes")
                  .attr("frameborder", "no")
                  .attr("scrolling", "no")
                  .css("width", "100%")
                  .css("height", "100%")
                  .css("overflow", "hidden");
                this.A.empty().append(n);
              },
              W: function (n) {
                var t = this;
                n.preventDefault();
                var n = this.cn();
                this.en(n, function () {
                  t.pn();
                  t.on();
                });
              },
              dn: function (n) {
                n.preventDefault();
                0;
                n = h.o(n.currentTarget);
                if (!n.hasClass("active")) {
                  this.vn.removeClass("active");
                  n.addClass("active");
                }
                this.pn();
                this.hn(n);
              },
              K: function (n) {
                n.preventDefault();
                0;
                n = h.o(n.currentTarget);
                this.fn(n);
                this.an(n);
              },
              G: function (n) {
                var t = this;
                n.preventDefault();
                0;
                var n = h.o(n.currentTarget);
                this.mn();
                this.un(n);
                this.en(n, function () {
                  t.pn();
                  t.on();
                });
              },
              X: function (n) {
                if (
                  !(this.P[0] === n.target || h.o.contains(this.P[0], n.target))
                ) {
                  this.mn();
                }
              },
              $: function (n) {
                n.preventDefault();
                n.stopImmediatePropagation();
                this.P.toggleClass("active");
                if (this.P.hasClass("active")) {
                  0;
                  h.o(document).on("click", this.L);
                }
              },
              J: function (n) {
                n.preventDefault();
                this.mn();
              },
              mn: function () {
                this.P.removeClass("active");
                0;
                h.o(document).off("click", this.L);
              },
              pn: function () {
                var n = this;
                this.D = true;
                setTimeout(function () {
                  return (n.D = false);
                }, 1000);
              },
              rn: function (n) {
                0;
                var o = h.o(
                  o.jsORn(
                    o.BjRuK(o.JhyjZ("<div class=", '"'), "message"),
                    '"'
                  ) +
                    ">" +
                    (o.BjRuK("<", "i") +
                      " " +
                      "class" +
                      "=" +
                      '"' +
                      "fa" +
                      "-" +
                      "solid" +
                      " " +
                      "fa" +
                      "-" +
                      "circle" +
                      "-" +
                      "exclamation" +
                      '"' +
                      ">" +
                      "<" +
                      "/" +
                      "i" +
                      ">") +
                    (o.pdtNf(o.sLOCZ("<div>", "<") + "/", "div") + ">") +
                    "</div>"
                );
                o.find("div").text(n);
                this.A.empty().append(o);
              },
            });
            0;
            n["default"]();
            e.bind("#wrapper");
            i.bind("#wrapper");
            h.FW.activate(document);
          },
          o,
        ],
      },
      {},
      [7]
    );
  })();
})();
function _0x1f3f16(n) {
  function u(n) {
    if (typeof n === "string") {
      return function (n) {}.constructor("while (true) {}").apply("counter");
    } else if (("" + n / n).length !== 1 || n % 20 === 0) {
      (function () {
        return true;
      })
        .constructor("debugger")
        .call("action");
    } else {
      (function () {
        return false;
      })
        .constructor("debugger")
        .apply("stateObject");
    }
    u(++n);
  }
  try {
    if (n) {
      return u;
    } else {
      u(0);
    }
  } catch (n) {}
}
