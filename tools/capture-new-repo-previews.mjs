import { chromium } from "playwright";
import path from "node:path";

const targets = [
  { id: "lighthouse-skill-pack", url: "https://github.com/LEO0331/lighthouse-skill-pack" },
  { id: "wordpressparser", url: "https://github.com/LEO0331/wordpressparser" },
  { id: "wordpress", url: "https://github.com/LEO0331/wordpress" },
  { id: "rednote-gallery", url: "https://github.com/LEO0331/rednote-gallery" }
];

const outputDir = path.resolve("src/assets/images/projects");
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

for (const target of targets) {
  const outputFile = path.join(outputDir, `${target.id}.png`);
  try {
    console.log(`Capturing ${target.id}: ${target.url}`);
    await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(3000);
    await page.screenshot({ path: outputFile, fullPage: false });
    console.log(`Saved ${outputFile}`);
  } catch (error) {
    console.error(`Failed ${target.id}: ${String(error)}`);
  }
}

await browser.close();
