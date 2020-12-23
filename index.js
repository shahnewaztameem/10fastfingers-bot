const puppeteer = require('puppeteer');
const cookie = require('./cookie.json');

(async () => {
  const url = 'https://10fastfingers.com/typing-test/english';
  const browser = await puppeteer.launch({
    headless: false, defaultViewport: {
      width: 1920,
      height: 1080,
    },
    args: ['--start-maximized']
  });
  const page = await browser.newPage();
  await page.setCookie(...cookie);
  await page.goto(url, { waitUntil: 'networkidle2' });

  const content = await page.evaluate(() => document.getElementById('words').innerText);
  console.log('Bot Started 🤣');
  const inputSelector = '#inputfield';
  await page.type(inputSelector, content, { delay: 10 });
})();