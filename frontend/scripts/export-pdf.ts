// scripts/export-pdf.ts (CommonJS)
const puppeteer = require('puppeteer');

const BASE_URL = 'https://cv-management-sand.vercel.app/jp/';

// コマンドライン引数からページパスを取得（例: node export-pdf.js jp/enexia）
const pageArg = process.argv[2] || '';
const TARGET_URL = `${BASE_URL}/${pageArg}`;

const OUTPUT_FILE = `${pageArg || 'output'}.pdf`;

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