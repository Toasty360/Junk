(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    37617: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 25277));
    },
    25277: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return h;
        },
      });
      var r = a(57437),
        i = a(57638);
      let n = async (e) => {
        if (!e) throw Error("Invalid data provided");
        let t = await fetch(
          "/api/movie/".concat(e[0], "?multiLang=").concat(!0 === e[2] ? 1 : 0)
        );
        if (!t.ok) throw Error("Failed to fetch data");
        let a = await t.text();
        return JSON.parse((0, i.decrypt)(a.toString()));
      };
      var s = a(79159),
        l = a(29039),
        c = a(41178),
        o = a(66648),
        d = a(3274),
        f = a(16463);
      a(31877);
      var h = (e) => {
        let { data: t } = e,
          a = (0, f.useSearchParams)(),
          i = "true" === a.get("multiLang"),
          h = a.get("player"),
          u = (0, f.useParams)(),
          {
            data: m,
            isLoading: v,
            streamError: x,
          } = (0, l.ZP)(
            [null == t ? void 0 : t.id, "MovieStream", i],
            (e) => n(e),
            {
              revalidateOnFocus: !1,
              revalidateOnMount: !0,
              revalidateOnReconnect: !1,
              refreshWhenOffline: !1,
              refreshWhenHidden: !1,
              refreshInterval: 0,
            }
          );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "w-[100vw] h-[100vh] min-h-screen overflow-y-hidden",
            children: [
              "589972" === u.id &&
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center w-full h-full min-h-screen text-center ",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "font-semibold capitalize",
                      children: "This content is not accessible",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xs",
                      children: "Please Check back another time",
                    }),
                  ],
                }),
              !m &&
                !v &&
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center w-full h-full min-h-screen text-center ",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "font-semibold capitalize",
                      children: "we Coudn't find this Movie",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-xs",
                      children: "Please Check back another time",
                    }),
                  ],
                }),
              v &&
                (0, r.jsxs)("div", {
                  className:
                    "flex items-center justify-center w-full h-full min-h-screen bg-black",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center w-full h-full min-h-screen gap-4 text-center bg-black/80",
                      children: [
                        (0, r.jsx)(d.Z, {
                          style: {
                            color:
                              "#".concat(a.get("primaryColor") || "ffffff") ||
                              0,
                          },
                          className: "animate-spin size-10 md:size-14",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-sm font-semibold uppercase md:text-md",
                          children: "Fetching Data, Please wait...",
                        }),
                      ],
                    }),
                    (0, r.jsx)(o.default, {
                      priority: !0,
                      src: "//wsrv.nl/?url=https://image.tmdb.org/t/p/w500".concat(
                        null == t ? void 0 : t.backdrop_path,
                        "&bg=black&blur=3&tint=black"
                      ),
                      alt: "loader",
                      width: 100,
                      height: 100,
                      className: "object-cover w-[100vw] h-[100vh] ",
                    }),
                  ],
                }),
              t &&
                !v &&
                (() => {
                  var e;
                  if (
                    (null == m
                      ? void 0
                      : null === (e = m.stream) || void 0 === e
                      ? void 0
                      : e.playlist) &&
                    (null == t ? void 0 : t.id)
                  )
                    return "jw" === h
                      ? (0, r.jsx)(c.Z, {
                          data: t,
                          stream: m,
                        })
                      : (0, r.jsx)(s.Z, {
                          data: { ...t, stream: m },
                          mediaInfo: "movie",
                        });
                })(),
            ],
          }),
        });
      };
    },
    57638: function (e, t, a) {
      "use strict";
      var r = a(86300).Buffer;
      let i = a(75683),
        n = "9f8dff95f42e0b9823f16bef28d2ca76063ab987ddd1f69718638f280db2df45",
        s = "aes-256-cbc";
      if (!n) throw Error("Encryption key is not set in environment variables");
      e.exports = {
        encrypt: function (e) {
          let t = i.randomBytes(16),
            a = i.createCipheriv(s, r.from(n, "hex"), t),
            l = a.update(e);
          return (
            (l = r.concat([l, a.final()])),
            t.toString("hex") + ":" + l.toString("hex")
          );
        },
        decrypt: function (e) {
          let t = e.split(":"),
            a = r.from(t.shift(), "hex"),
            l = r.from(t.join(":"), "hex"),
            c = i.createDecipheriv(s, r.from(n, "hex"), a),
            o = c.update(l);
          return (o = r.concat([o, c.final()])).toString();
        },
      };
    },
  },
  function (e) {
    e.O(
      0,
      [707, 184, 950, 240, 99, 218, 288, 223, 795, 309, 705, 971, 23, 744],
      function () {
        return e((e.s = 37617));
      }
    ),
      (_N_E = e.O());
  },
]);
