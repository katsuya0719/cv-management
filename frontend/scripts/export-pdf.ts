// scripts/export-pdf.ts (CommonJS)
const puppeteer = require('puppeteer');

const TARGET_URL = 'http://localhost:3000/enexia';
const OUTPUT_FILE = 'output.pdf';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(TARGET_URL, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: OUTPUT_FILE,
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  console.log(`✅ PDF出力完了: ${OUTPUT_FILE}`);
})();