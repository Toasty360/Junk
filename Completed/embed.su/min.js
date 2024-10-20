const $ = (a) => document.querySelector(a);
const $$ = (a) => document.querySelectorAll(a);
const isMobile = window.matchMedia("(max-width: 768px)").matches;
window.subCodes = Object.entries({
  afr: "Afrikaans",
  alb: "Albanian",
  ara: "Arabic",
  arm: "Armenian",
  aze: "Azerbaijani",
  ben: "Bengali",
  bul: "Bulgarian",
  zhc: "Chinese(Cantonese)",
  chi: "Chinese(simplified)",
  zht: "Chinese(traditional)",
  hrv: "Croatian",
  cze: "Czech",
  dan: "Danish",
  dut: "Dutch",
  eng: "English",
  fin: "Finnish",
  fre: "French",
  geo: "Georgian",
  ger: "German",
  ell: "Greek",
  heb: "Hebrew",
  hin: "Hindi",
  hun: "Hungarian",
  ind: "Indonesian",
  gle: "Irish",
  ita: "Italian",
  jpn: "Japanese",
  kaz: "Kazakh",
  kor: "Korean",
  nor: "Norwegian",
  per: "Persian",
  pol: "Polish",
  por: "Portuguese",
  rum: "Romanian",
  rus: "Russian",
  scc: "Serbian",
  slv: "Slovenian",
  spa: "Spanish",
  swe: "Swedish",
  tgl: "Tagalog",
  tam: "Tamil",
  tel: "Telugu",
  tha: "Thai",
  tur: "Turkish",
  ukr: "Ukrainian",
  urd: "Urdu",
  uzb: "Uzbek",
  vie: "Vietnamese",
}).map((a) => ({
  value: a[0],
  label: a[1],
}));
let params = new URLSearchParams(window.location.search);
window.refererMeta = document.querySelector('meta[name="referrer"]');
if (vConfig.uwuId) {
  let a = document.createElement("script");
  a.async = true;
  a.src = `https://${atob(vConfig.uwuId)}`;
  document.head.appendChild(a);
}
function reload() {
  let a = new URL(location.href);
  a.searchParams.set("xid", window.vConfig?.xid);
  location.href = a.href;
}
function storage(a, b = null) {
  if (b === null) {
    return JSON.parse(localStorage.getItem(a));
  } else {
    return localStorage.setItem(a, JSON.stringify(b));
  }
}
function config(a = null, b = null) {
  if (b === null) {
    window.playerConfig ||= storage("playerConfig") ?? {};
    return window.playerConfig[a];
  }
  let c = storage("playerConfig") || {};
  window.playerConfig = {
    ...c,
    [a]: b,
  };
  return storage("playerConfig", window.playerConfig);
}
const decode = (a) => atob(a.split("").reverse().join(""));
const fontSizes = (a = null) => {
  let b = config("fontSize") ?? "100%";
  let c = [
    {
      "75%": "1.25rem",
    },
    {
      "100%": "1.5rem",
    },
    {
      "125%": "1.75rem",
    },
    {
      "150%": "2rem",
    },
    {
      "200%": "2.5rem",
    },
    {
      "300%": "3rem",
    },
  ].map((a) => ({
    name: Object.keys(a)[0],
    value: Object.values(a)[0],
  }));
  if (!c.find((a) => a.name === b)) {
    b = "100%";
    config("fontSize", b);
  }
  c = c.map((a) => ({
    ...a,
    default: a?.name === b,
  }));
  if (a) {
    return c.find((b) => b.name === a)?.value;
  } else {
    return c;
  }
};
async function fetchSubs(a = "eng") {
  try {
    let b = `/api/get-subs/${vConfig.episodeId}/${a}?_=${vConfig.v}`;
    return await fetch(b)
      .then((a) => a.json())
      .then((b) =>
        b.length
          ? b.map((b, c) => {
              let d = subCodes.find((b) => b.value === a)?.label;
              return {
                name: `${d} ${c + 1}`,
                value: b,
              };
            })
          : [
              {
                name: "No subtitles found :/",
              },
            ]
      );
  } catch (a) {
    return [
      {
        name: "Error fetching subtitles",
      },
    ];
  }
}
let online_subs = [
  {
    name: "Loading...",
  },
];
let autoPlay = params.get("autoplay") ?? config("autoplay") ?? false;
function _refresh(a) {
  return fetch(a)
    .then((a) => a.json())
    .then((a) =>
      a?.status === 200
        ? (storage("fragLoadErrors", 0), reload())
        : player.emit("error", {
            message: a?.error ?? "Try different server.",
          })
    );
}
window.servers = JSON.parse(decode(vConfig.hash));
window.server = servers.find((a) => a.name.includes(vConfig.server));
window.playerSettings = [
  {
    key: "autoplay",
    type: "switcher",
    name: "AutoPlay",
    default: config("autoplay") ?? false,
    onChange: (a) => config("autoplay", a),
  },
  {
    key: "servers",
    type: "selector",
    name: "Server",
    children: servers.map((a) => {
      let b = a?.name?.split(/\s_/)?.[0];
      if (b === "raze") {
        b += " [4K]";
      }
      return {
        name: b.toUpperCase().split("_")[0],
        hash: a?.hash,
        default: b.includes(window.server.name),
      };
    }),
    onChange: async (a) => await changeServer(a),
  },
  {
    name: "Subtitles",
    type: "selector",
    key: "subtitle",
    children: [
      {
        name: "Enable Subtitles",
        type: "switcher",
        key: "enable-subtitle",
        default: config("caption") && config("caption") !== "off",
        onChange: (a) => {
          let b = subtitles.find((a) => a.default)?.name ?? "off";
          b = b.split(" ")[0].toLowerCase();
          if (a) {
            ui.subtitle.show();
          } else {
            ui.subtitle.hide();
          }
          config("caption", a ? b : "off");
        },
      },
      {
        name: "Subtitles Delay",
        type: "selector",
        key: "subtitle-delay",
        children: [-5, -3, -2, -1, 0, 1, 2, 3, 5].map((a) => ({
          name: `${a}s`,
          value: a,
          default: a == 0,
        })),
        onChange: ({ value: a }) => {
          window.subtitle_delay = a;
          subtitles = ui.subtitle.options.source.map((b) => ({
            ...b,
            offset: a,
          }));
          ui.subtitle.changeSource(subtitles);
          ui.setting.updateLabel("subtitle-delay", `${a}s`);
        },
      },
      {
        type: "selector",
        key: "font-size",
        name: "Font Size",
        children: fontSizes(),
        onChange: ({ value: a, name: b }) => {
          ui.subtitle.$dom.style.fontSize = a;
          config("fontSize", b);
          ui.setting.updateLabel("font-size", b);
        },
      },
      {
        name: "Select Subtitles",
        type: "selector",
        key: "select-subtitle",
        children: [
          {
            name: "OFF",
            value: null,
          },
        ],
      },
    ],
  },
];
if (vConfig.episodeId.startsWith("a:")) {
  playerSettings.push({
    name: "Audio",
    type: "selector",
    key: "lang",
    children: ["sub", "dub"].map((a) => {
      let b = params.get("audio") ?? "sub";
      return {
        name: a.toUpperCase(),
        value: a,
        default: b === a,
      };
    }),
    onChange: ({ value: a }) => {
      if (params.get("audio") !== a) {
        params.set("audio", a);
        location.search = params.toString();
      }
    },
  });
} else {
  playerSettings
    .find((a) => a.key === "subtitle")
    .children.push({
      name: "Online Subtitles",
      type: "selector",
      key: "online-subtitle",
      children: window.subCodes?.map((a) => ({
        name: a?.label,
        type: "selector",
        key: `online-subtitle-${a?.value}`,
        children: online_subs,
        onChange: () => {},
      })),
    });
}
window.player = window.OPlayer.make("#player", {
  volume: config("volume") ?? 0.75,
  autoplay: autoPlay,
  preload: "auto",
  playsinline: true,
  source: {
    title: vConfig.title ?? "",
    format: "hls",
  },
})
  .use([
    OUI({
      theme: {
        primaryColor: `#${params.get("theme") ?? "fff"}`,
      },
      controlBar: true,
      pictureInPicture: true,
      coverButton: true,
      keyboard: {
        global: true,
      },
      slideToSeek: "always",
      speeds: ["0.25", "0.5", "1.0", "1.25", "1.5", "1.75", "2.0"],
      forceLandscapeOnFullscreen: true,
      miniProgressBar: false,
      settings: playerSettings,
      qualitySwitch: "smooth",
    }),
    OHls({
      forceHLS: true,
      withBitrate: true,
      qualitySwitch: "smooth",
      defaultQuality: 1080,
      config: {
        levelLoadingTimeOut: 15000,
        fragLoadingTimeOut: 25000,
        levelLoadingMaxRetry: 5,
        fragLoadingMaxRetry: 5,
      },
      errorHandler(a, b) {
        if (b.details === "manifestLoadError") {
          if (Date.now() - +storage("lastManifestError") < 10000) {
            return;
          }
          storage("lastManifestError", Date.now());
        }
        if (["fragLoadError", "levelLoadError"].includes(b.details)) {
          let a = +(storage("fragLoadErrors") ?? 0) + 1;
          storage("fragLoadErrors", +a);
          if (a < 5) {
            return;
          }
        }
      },
    }),
    OVttThumbnails(),
    new OChromecast(),
    new OAirplay(),
  ])
  .create();
window.ui = player.context.ui;
window.subtitle_delay = 0;
window.positions = storage("positions") ?? {};
function customSubtitle(a, b) {
  if (!subtitles.find((b) => b.name === a)) {
    let c = b.dataset.value;
    subtitles = subtitles.map((a) => ({
      ...a,
      default: false,
      offset: subtitle_delay,
    }));
    subtitles.push({
      name: a,
      src: c,
      default: true,
      offset: subtitle_delay,
    });
    ui.subtitle.changeSource(subtitles);
    updateSelectSubtitle(a);
    b.parentElement.querySelector('[role="menuitem"]')?.click();
    $('[data-key="online-subtitle"] [role="menuitem"]')?.click();
    let d = $('[data-key="subtitle"] [data-key="select-subtitle"]');
    d.click();
    d.querySelector("[data-index]:last-child")?.click();
    ui.setting.updateLabel("select-subtitle", a);
  }
}
async function updateSelectSubtitle(a = null) {
  let b = $$('[data-key="Subtitle"] [data-index]');
  while (!b.length) {
    await new Promise((a) => setTimeout(a, 100));
    b = $$('[data-key="Subtitle"] [data-index]');
  }
  let c = $('[data-key="select-subtitle"] [data-index="0"]');
  $$('[data-key="select-subtitle"] [data-index]').forEach((a) => {
    if (a.dataset.index != 0) {
      a.remove();
    }
  });
  b.forEach((a) => {
    let b = a.cloneNode(true);
    b.addEventListener("click", () => {
      if (b.innerText === "OFF") {
        if ($('[data-key="enable-subtitle"][aria-checked="true"]')) {
          ui.setting?.select("enable-subtitle");
        }
        ui.subtitle.hide();
      } else {
        subtitles = subtitles.map((a) => ({
          ...a,
          default: a.name === b.innerText.trim(),
        }));
        ui.subtitle.changeSource(subtitles);
        setTimeout(() => {
          ui.subtitle.show();
          if ($('[data-key="enable-subtitle"][aria-checked="false"]')) {
            ui.setting?.select("enable-subtitle");
          }
        }, 500);
      }
      ui.setting.updateLabel("select-subtitle", b.innerText);
      config("caption", b.innerText.split(" ")[0].toLowerCase());
    });
    c.insertAdjacentElement("beforebegin", b);
  });
  c.remove();
}
$$('[data-key^="online-subtitle-"]').forEach(async (a) => {
  a.addEventListener("click", async (a) => {
    if (!a.target.dataset.key) {
      return;
    }
    let b = a.target.dataset.key.split("-").pop();
    let c = $(`[data-key="online-subtitle-${b}"] [data-index="0"]`);
    if (c) {
      let a = await fetchSubs(b);
      a.map((a) => {
        let b = c.cloneNode(true);
        b.querySelector("span").innerText = a.name;
        delete b.dataset.index;
        if (a?.value) {
          b.dataset.value = a.value;
          b.setAttribute("onclick", `customSubtitle('${a.name}', this)`);
        }
        c.insertAdjacentElement("beforebegin", b);
      });
      c.remove();
    }
  });
});
async function changeServer(a, b = false) {
  window.refererMeta.content = "origin";
  let c = a.name.toLowerCase().split(/[^\w]/g)[0];
  let d = `/api/e/${a?.hash}`;
  if (b) {
    d += "?refresh=true";
  }
  let e = setTimeout(() => reload(), 100000);
  fetch(d)
    .then((a) => a.json())
    .then(async (d) => {
      clearTimeout(e);
      if (!d?.source || d?.error) {
        if (d?.code === 1) {
          return setTimeout(async () => await changeServer(a, 1), 1000);
        } else if (d?.code === 2) {
          return reload();
        } else if (b) {
          return await changeServer(a, 0);
        } else {
          return player.emit("error", {
            message: d?.error ?? "Try different server.",
          });
        }
      }
      if (d.format === "mp4") {
        let a = d.source.split(",").map((a) => {
          let [b, c] = a.split("|");
          return {
            name: b,
            value: c,
            default: b === "1080p",
          };
        });
        let b = a.find((a) => a.default)?.name ?? a[0].name;
        a = a.map((a) => ({
          ...a,
          default: a.name === b,
        }));
        ui.setting.unregister("oplayer-plugin-hls-Quality");
        ui.setting.register({
          key: "quality",
          type: "selector",
          name: "Quality",
          children: a,
          onChange: ({ name: a, value: b }) => {
            player.changeQuality({
              src: b,
              format: "auto",
            });
            ui.setting.updateLabel("quality", a);
          },
        });
        let c = a.find((a) => a.default)?.value;
        window.refererMeta.content = "no-referrer";
        player.changeQuality({
          src: c,
          format: "auto",
        });
      } else {
        window.refererMeta.content = "origin";
        player.changeQuality({
          src: d.source,
          format: "hls",
        });
      }
      config("server", c);
      window.subtitles = d.subtitles ?? [];
      if (subtitles.length) {
        subtitles = Object.values(subtitles).map((a) => {
          const b = config("caption") ?? "off";
          const c = a?.label?.toLowerCase()?.startsWith(b?.toLowerCase());
          return {
            default: c,
            name: a.label,
            src: a?.url ?? a?.file,
            offset: subtitle_delay,
          };
        });
        ui.subtitle.changeSource(subtitles);
        let b = a.name === "raze" ? "Raze [4K]" : a.name;
        ui.setting.updateLabel("servers", b.toUpperCase().split("_")[0]);
        setTimeout(async () => updateSelectSubtitle(), 500);
      }
      if (d?.thumbnails) {
        ui.changThumbnails({
          src: d.thumbnails,
        });
      }
    });
}
setTimeout(async () => {
  await changeServer(window.server ?? servers[0]);
}, 500);
window.addEventListener("keydown", (a) => {
  return {
    ENTER: () => player.togglePlay(),
    ARROWUP: () => (player.volume += 0.1),
  }[a.key.toUpperCase()]?.();
});
player.once("canplay", () => {
  if (positions[vConfig.episodeId]) {
    setTimeout(() => player.seek(positions[vConfig.episodeId]), 500);
  }
  parent.postMessage(
    {
      key: "player-config",
      data: storage("playerConfig"),
    },
    "*"
  );
  ui.subtitle.$dom.style.fontSize = fontSizes().find((a) => a.default).value;
  if (servers.find((a) => a.name.includes("raze"))) {
    ui.menu.register([
      {
        name: "Download",
        key: "download",
        icon: "download",
      },
    ]);
    $("[aria-label=Download]").addEventListener("click", (a) => {
      a.preventDefault();
      a.stopPropagation();
      let b = vConfig.title;
      let c = servers.find((a) => a.name.includes("raze"));
      let d = `/download?title=${b}&hash=${c?.hash}`;
      let e = document.createElement("a");
      e.href = d;
      e.target = "_blank";
      e.click();
      e.remove();
    });
  }
});
window.addEventListener("message", (a) => {
  if (a.origin !== location.origin && a.data?.key === "player-config") {
    let b = a.data.data;
    let c = false;
    if (!b) {
      return;
    }
    let d = ["autoplay", "server", "volume", "caption", "fontSize"];
    window.playerConfig = storage("playerConfig") ?? {};
    for (let a in b) {
      if (d.includes(a)) {
        if (window.playerConfig[a] !== b[a]) {
          c = true;
        }
        window.playerConfig[a] = b[a];
        storage("playerConfig", window.playerConfig);
      }
    }
    if (c) {
      return reload();
    }
  }
});
player.on(
  ["timeupdate", "volumechange", "ended", "videoqualitychange"],
  (a) => {
    switch (a.type) {
      case "timeupdate":
        if (!window.positions) {
          return;
        }
        let b = Math.floor(player.currentTime);
        if (positions?.[vConfig.episodeId] == b || b < 5) {
          return;
        }
        positions[vConfig.episodeId] = b;
        storage("positions", positions);
        if (vConfig.episodeId.startsWith("a:") && b % 5 == 0) {
          parent.postMessage(
            {
              key: "progress",
              timestamp: b,
              duration: player.duration,
            },
            "*"
          );
        }
        break;
      case "volumechange":
        config("volume", player.volume);
        break;
      case "ended":
        parent.postMessage(
          {
            key: "video-ended",
            data: true,
          },
          "*"
        );
        break;
      case "videoqualitychange":
        let c =
          document
            .querySelector('[data-key="servers"] [aria-checked="true"] span')
            ?.innerText?.trim() ?? "";
        if (!c.toLowerCase().includes("raze")) {
          ui.setting.unregister("quality");
        }
        break;
      default:
    }
  }
);
let counter = document.createElement("img");
let path = location.pathname;
let title = document.title;
let referer = vConfig.referer.includes("http")
  ? vConfig.referer
  : `http://${vConfig.referer}`;
let ref = new URL(referer ?? "http://vidsrc.pro")?.host;
counter.src = `https://count.vidsrc.pro/count?p=${path}&r=${ref}&t=${title}`;
counter.style.display = "none";
document.body.appendChild(counter);
