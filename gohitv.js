import axios from "axios";
import CryptoJS from "crypto-js";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0";
const AES_KEY = "Wcb26arWkvkcAZc378eR";
const APP_KEY = "bywebabcd1234";
const BLOCK_SIZE = 16;

function md5(value) {
  return CryptoJS.MD5(value).toString(CryptoJS.enc.Hex);
}

function decrypt(kv, data) {
  const key = CryptoJS.enc.Utf8.parse(kv.substring(0, BLOCK_SIZE));
  const vector = CryptoJS.enc.Utf8.parse(kv.substring(BLOCK_SIZE));
  const decrypted = CryptoJS.AES.decrypt(data, key, {
    iv: vector,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function decryptResponse(timestamp, did, data) {
  const a = md5(did + timestamp);
  const b = md5(a + AES_KEY);
  return decrypt(b, data);
}

function randId() {
  const charSet = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  return Array.from({ length: 24 }, () =>
    charSet.charAt(Math.floor(Math.random() * charSet.length))
  ).join("");
}

function sign(sid, eid, scid, sq) {
  const params = {
    eid: eid,
    scid: scid,
    sid: sid,
    sq: sq,
    appkey: APP_KEY,
  };
  return md5(new URLSearchParams(params).toString());
}

function printUrl(url, params) {
  if (params) {
    url += `?${new URLSearchParams(params).toString()}`;
  }
  console.log(`Fetching ${url}`);
}

async function get(url, headers = {}, params = {}) {
  printUrl(url, params);
  headers = {
    "User-Agent": USER_AGENT,
    ...headers,
  };
  const response = await axios.get(url, { headers, params });
  return response.data;
}

async function apiRequest(endpoint, params = null) {
  const url = `https://api.gohitv.com/s1/w/series/api/${endpoint}`;
  const did = randId();
  const headers = {
    platform: "pc",
    did: did,
  };
  const response = await get(url, headers, params);
  const decrypted = decryptResponse(response.ts, did, response.data);
  return JSON.parse(decrypted);
}

async function getMediaSources(url) {
  const episodeId = url;

  const epData = await apiRequest("episode/detail", {
    eid: episodeId,
  });

  const seriesId = epData.episode.sid;
  const sourceId = epData.episode.sources[0].scid;

  const sq = 1;

  const sources = await apiRequest("series/rslv", {
    sid: seriesId,
    eid: episodeId,
    scid: sourceId,
    sq: sq,
    sign: sign(seriesId, episodeId, sourceId, sq),
  });

  sources.__meta = {
    series_name: epData.episode.sidAlias,
    episode_no: epData.episode.serialNo,
  };

  return sources;
}

console.log(await getMediaSources("e_EsDH8FO8dTj7e3Vni7Fd"));
