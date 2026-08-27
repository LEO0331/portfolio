import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { extractObjectBlocks, requireProjectsArrayContent } from './project-source.mjs';
import { toPublicDemoUrl } from './public-demo-url.mjs';

const repoRoot = process.cwd();
const dataFile = path.join(repoRoot, 'src/data/projects.ts');
const outputDir = path.join(repoRoot, 'src/assets/images/projects');

function parseProjects(source) {
  const arrayContent = requireProjectsArrayContent(source, 'Unable to locate projects array in src/data/projects.ts');
  const blocks = extractObjectBlocks(arrayContent);

  return blocks
    .map((block) => {
      const id = block.match(/id:\s*"([^"]+)"/)?.[1];
      const demoUrl = block.match(/demoUrl:\s*"([^"]+)"/)?.[1];
      const techStackRaw = block.match(/techStack:\s*\[([\s\S]*?)\]/)?.[1] ?? '';
      const isFlutterOrDart = /"Flutter"|"Dart"/.test(techStackRaw);

      if (!id || !demoUrl) return null;
      return { id, demoUrl, isFlutterOrDart };
    })
    .filter(Boolean);
}

const raw = fs.readFileSync(dataFile, 'utf8');
const projects = parseProjects(raw);

const targetIds = new Set(
  (process.env.TARGET_IDS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
);

const filteredProjects = targetIds.size ? projects.filter((project) => targetIds.has(project.id)) : projects;

if (!projects.length) {
  console.error('No projects with demoUrl found.');
  process.exit(1);
}

if (!filteredProjects.length) {
  console.error('No matching projects found for TARGET_IDS filter.');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const failures = [];

for (const project of filteredProjects) {
  const outFile = path.join(outputDir, `${project.id}.png`);
  const shouldWaitLong = project.isFlutterOrDart;

  try {
    const target = toPublicDemoUrl(project.demoUrl);
    console.log(`Capturing ${project.id}: ${target}`);
    await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});

    if (shouldWaitLong) {
      await page.locator('body').click({ position: { x: 24, y: 24 }, timeout: 3000 }).catch(() => {});
      await page.waitForTimeout(30000);
    } else {
      await page.waitForTimeout(2000);
    }

    await page.screenshot({ path: outFile, fullPage: false });
  } catch (error) {
    failures.push({ id: project.id, url: project.demoUrl, error: String(error) });
    console.error(`Failed ${project.id}: ${project.demoUrl}`);
  }
}

await browser.close();

console.log(`Done. Captured ${filteredProjects.length - failures.length}/${filteredProjects.length}.`);
if (failures.length) {
  console.log('Failures:');
  for (const f of failures) {
    console.log(`- ${f.id} ${f.url}`);
  }
  process.exitCode = 2;
}
