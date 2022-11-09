const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.traversymedia.com');

  //  Get a screenshot of the page
  // await page.screenshot({ path: 'example.png', fullPage: true });

  //  Get a PDF of the page
  //   await page.pdf({ path: 'example.pdf', format: 'A4' });

  await browser.close();
}

run();
