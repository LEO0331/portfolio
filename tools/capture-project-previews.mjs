import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const repoRoot = process.cwd();
const dataFile = path.join(repoRoot, 'src/data/projects.ts');
const outputDir = path.join(repoRoot, 'src/assets/images/projects');

const raw = fs.readFileSync(dataFile, 'utf8');
const blocks = raw.match(/\{[\s\S]*?\n\s*\}(?=,|\n\s*\])/g) ?? [];

const projects = blocks
  .map((block) => {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1];
    const demoUrl = block.match(/demoUrl:\s*"([^"]+)"/)?.[1];
    if (!id || !demoUrl) return null;
    return { id, demoUrl };
  })
  .filter(Boolean);

if (!projects.length) {
  console.error('No projects with demoUrl found.');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const failures = [];

for (const project of projects) {
  const target = `${project.demoUrl.replace(/\/$/, '')}/`;
  const outFile = path.join(outputDir, `${project.id}.png`);

  try {
    console.log(`Capturing ${project.id}: ${target}`);
    await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: outFile, fullPage: false });
  } catch (error) {
    failures.push({ id: project.id, url: target, error: String(error) });
    console.error(`Failed ${project.id}: ${target}`);
  }
}

await browser.close();

console.log(`Done. Captured ${projects.length - failures.length}/${projects.length}.`);
if (failures.length) {
  console.log('Failures:');
  for (const f of failures) {
    console.log(`- ${f.id} ${f.url}`);
  }
  process.exitCode = 2;
}
