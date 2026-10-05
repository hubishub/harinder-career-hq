import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "preview-shots");
const base = "http://127.0.0.1:3000";

const pages = [
  ["home", "/"],
  ["experience", "/experience"],
  ["skills", "/skills"],
  ["markets-us-eu", "/markets/us-eu"],
  ["markets-india", "/markets/india"],
  ["playbooks", "/playbooks"],
  ["proof", "/proof"],
  ["resume", "/resume"],
  ["contact", "/contact"],
  ["about", "/about"],
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: "light",
});
const page = await context.newPage();

for (const [name, route] of pages) {
  const url = base + route;
  console.log("capturing", url);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(500);
  const file = path.join(outDir, `${name}.png`);
  await page.screenshot({ path: file, fullPage: true });
  console.log("wrote", file);
}

await browser.close();
console.log("done");
