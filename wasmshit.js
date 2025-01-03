// Run example:
import { readFile, readFileSync, writeFileSync } from "fs";
// (async () => {
//   let resp = await fetch("https://vidsrc.cc/saas/images/b-loading.png?t=1", {
//     headers: {
//       "Content-Type": "application/wasm",
//       Referer: "https://vidsrc.cc/",
//       Origin: "https://vidsrc.cc/",
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
//     },
//   });
//   writeFileSync("vidsrc.wasm", await resp.text());
// })();

const data = readFileSync("vidsrc.wasm");
console.log(data);
