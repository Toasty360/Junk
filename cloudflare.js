const puppeteer = require("puppeteer");
const run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({
    Referer: "https://d0000d.com",
  });
  await page.goto("https://dood.yt/e/s1hp5q6djyim").then((value) => {
    console.log(value.text());
  });

  browser.close();
};
run();
