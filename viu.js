class ViuBaseIE {
  _real_initialize() {
    const viu_auth_res = this._request_webpage(
      "https://www.viu.com/api/apps/v2/authenticate",
      null,
      "Requesting Viu auth",
      {
        acct: "test",
        appid: "viu_desktop",
        fmt: "json",
        iid: "guest",
        languageid: "default",
        platform: "desktop",
        userid: "guest",
        useridtype: "guest",
        ver: "1.0",
      },
      this.geo_verification_headers()
    );

    this._auth_token = viu_auth_res.info()["X-VIU-AUTH"];
  }

  async _call_api(path, ...args) {
    const headers = this.geo_verification_headers();
    headers["X-VIU-AUTH"] = this._auth_token;

    const response = await this._download_json(
      "https://www.viu.com/api/" + path,
      ...args,
      { headers }
    );

    if (response.response.status !== "success") {
      throw new ExtractorError(
        `${this.IE_NAME} said: ${response.response.message}`,
        true
      );
    }

    return response.response;
  }
}

class ViuIE extends ViuBaseIE {
  constructor(url) {
    super(url);
    this._VALID_URL =
      /(?:viu:|https?:\/\/[^/]+\.viu\.com\/[a-z]{2}\/media\/)(\d+)/;
  }

  async _real_extract(url) {
    const video_id = this._match_id(url);

    const video_data = await this._call_api(
      "clip/load",
      video_id,
      "Downloading video data",
      {
        appid: "viu_desktop",
        fmt: "json",
        id: video_id,
      }
    );

    const title = video_data.item[0].title;

    let m3u8_url = null;
    let url_path = video_data.item[0].urlpathd || video_data.item[0].urlpath;
    let tdirforwhole = video_data.item[0].tdirforwhole;
    let hls_file = video_data.item[0].jwhlsfile;

    if (url_path && tdirforwhole && hls_file) {
      m3u8_url = `${url_path}/${tdirforwhole}/${hls_file}`;
    } else {
      m3u8_url = video_data.item[0].href;
    }

    const formats = this._extract_m3u8_formats(m3u8_url, video_id, "mp4");
    this._sort_formats(formats);

    const subtitles = {};
    for (const [key, value] of Object.entries(video_data.item[0])) {
      const mobj = key.match(/^subtitle_(?<lang>[^_]+)_(?<ext>(vtt|srt))/);
      if (mobj) {
        const lang = mobj.groups.lang;
        subtitles[lang] = subtitles[lang] || [];
        subtitles[lang].push({
          url: value,
          ext: mobj.groups.ext,
        });
      }
    }

    return {
      id: video_id,
      title: title,
      description: video_data.item[0].description,
      series: video_data.item[0].moviealbumshowname,
      episode: title,
      episode_number: int_or_none(video_data.item[0].episodeno),
      duration: int_or_none(video_data.item[0].duration),
      formats: formats,
      subtitles: subtitles,
    };
  }
}
class ViuPlaylistIE extends ViuBaseIE {
  constructor(url) {
    super(url);
    this.IE_NAME = "viu:playlist";
    this._VALID_URL =
      /https?:\/\/www\.viu\.com\/[^/]+\/listing\/playlist-(\d+)/;
  }

  async _real_extract(url) {
    const playlist_id = this._match_id(url);
    const playlist_data = await this._call_api(
      "container/load",
      playlist_id,
      "Downloading playlist info",
      {
        appid: "viu_desktop",
        fmt: "json",
        id: "playlist-" + playlist_id,
      }
    );

    const entries = [];
    for (const item of playlist_data.container.item || []) {
      const item_id = item.id;
      if (!item_id) {
        continue;
      }
      const entryId = item_id.toString();
      entries.push(this.url_result("viu:" + entryId, "Viu", entryId));
    }

    return this.playlist_result(
      entries,
      playlist_id,
      playlist_data.container.title
    );
  }
}

class ViuOTTIE {
  constructor(url) {
    this.IE_NAME = "viu:ott";
    this._VALID_URL =
      /https?:\/\/(?:www\.)?viu\.com\/ott\/([a-z]{2})\/[a-z]{2}-[a-z]{2}\/vod\/(\d+)/;
    this._AREA_ID = {
      HK: 1,
      SG: 2,
      TH: 4,
      PH: 5,
    };
  }

  async _real_extract(url) {
    const match = url.match(this._VALID_URL);
    const country_code = match[1];
    const video_id = match[2];

    const query = {
      r: "vod/ajax-detail",
      platform_flag_label: "web",
      product_id: video_id,
    };

    const area_id = this._AREA_ID[country_code.toUpperCase()];
    if (area_id) {
      query["area_id"] = area_id;
    }

    const product_data = await this._download_json(
      `http://www.viu.com/ott/${country_code}/index.php`,
      video_id,
      "Downloading video info",
      { query }
    );

    const video_data = product_data.data.current_product;
    if (!video_data) {
      throw new ExtractorError(
        "This video is not available in your region.",
        true
      );
    }

    const stream_data = await this._download_json(
      `https://d1k2us671qcoau.cloudfront.net/distribute_web_${country_code}.php`,
      video_id,
      "Downloading stream info",
      {
        query: {
          ccs_product_id: video_data.ccs_product_id,
        },
        headers: {
          Referer: url,
          Origin: url.match(/https?:\/\/[^/]+/)[0],
        },
      }
    );

    const stream_sizes = stream_data.data.stream.size || {};
    const formats = [];
    for (const [vid_format, stream_url] of Object.entries(
      stream_data.data.stream.url || {}
    )) {
      const height = this._search_regex(/s(\d+)p/, vid_format, "height", null);
      formats.push({
        format_id: vid_format,
        url: stream_url,
        height: height ? parseInt(height) : undefined,
        ext: "mp4",
        filesize: int_or_none(stream_sizes[vid_format]),
      });
    }
    this._sort_formats(formats);

    const subtitles = {};
    for (const sub of video_data.subtitle || []) {
      const sub_url = sub.url;
      if (!sub_url) {
        continue;
      }
      const name = sub.name;
      subtitles[name] = subtitles[name] || [];
      subtitles[name].push({
        url: sub_url,
        ext: "srt",
      });
    }

    const title = video_data.synopsis.trim();

    return {
      id: video_id,
      title: title,
      description: video_data.description,
      series: product_data.data.series?.name,
      episode: title,
      episode_number: int_or_none(video_data.number),
      duration: int_or_none(stream_data.data.stream.duration),
      thumbnail: video_data.cover_image_url,
      formats: formats,
      subtitles: subtitles,
    };
  }
}
