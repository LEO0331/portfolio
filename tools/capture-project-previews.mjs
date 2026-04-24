import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const repoRoot = process.cwd();
const dataFile = path.join(repoRoot, 'src/data/projects.ts');
const outputDir = path.join(repoRoot, 'src/assets/images/projects');

function extractProjectsArrayContent(source) {
  const marker = 'export const projects';
  const start = source.indexOf(marker);
  if (start === -1) return '';

  const equalsIndex = source.indexOf('=', start);
  if (equalsIndex === -1) return '';

  const arrayStart = source.indexOf('[', equalsIndex);
  if (arrayStart === -1) return '';

  let depth = 0;
  let inString = false;
  let quote = '';
  let escaping = false;

  for (let i = arrayStart; i < source.length; i += 1) {
    const ch = source[i];

    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        escaping = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(arrayStart + 1, i);
      }
    }
  }

  return '';
}

function extractObjectBlocks(arrayContent) {
  const blocks = [];
  let depth = 0;
  let start = -1;
  let inString = false;
  let quote = '';
  let escaping = false;

  for (let i = 0; i < arrayContent.length; i += 1) {
    const ch = arrayContent[i];

    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        escaping = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '{') {
      if (depth === 0) {
        start = i;
      }
      depth += 1;
      continue;
    }

    if (ch === '}') {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        blocks.push(arrayContent.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

function parseProjects(source) {
  const arrayContent = extractProjectsArrayContent(source);
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
  const target = `${project.demoUrl.replace(/\/$/, '')}/`;
  const outFile = path.join(outputDir, `${project.id}.png`);
  const shouldWaitLong = project.isFlutterOrDart;

  try {
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
    failures.push({ id: project.id, url: target, error: String(error) });
    console.error(`Failed ${project.id}: ${target}`);
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
