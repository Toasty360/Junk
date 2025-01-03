//! check test.js

import axios from "axios";
export default class DramaAPI {
  baseUrl = "https://kisskh.co/";
  client = axios.create({
    baseURL: this.baseUrl,
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      Referer: this.baseUrl,
    },
  });
  async getTrending() {
    const response = await this.client.get("api/DramaList/Show");
    const data = await response.data;
    return data;
  }
}

const api = new DramaAPI();
const data = await api.getTrending();
console.log(data);
