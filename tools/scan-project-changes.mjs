import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractObjectBlocks, requireProjectsArrayContent } from './project-source.mjs';
import { setStringProperty, validateGeneratedProjectsSource } from './sync-projects-from-github.mjs';
import { sanitizePublicDemoUrl } from './public-demo-url.mjs';
import { PINS_FILE, fetchPinnedRepositories, applyPinnedRepositories } from './sync-github-pins.mjs';

const STATE_FILE = '.github/project-scan-state.json';
const REPORT_FILE = '.github/project-scan-report.md';

async function githubJson(endpoint, optional = false) {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'portfolio-monthly-scan',
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
    },
    signal: AbortSignal.timeout(30000)
  });
  if (optional && response.status === 404) return null;
  if (!response.ok) throw new Error(`GitHub API ${response.status}: ${endpoint}`);
  return response.json();
}

function text(value) {
  // Repository metadata is untrusted text, never executable Markdown/HTML.
  return String(value ?? '').replace(/[&<>`*_[\]\\@]/g, (character) => `&#${character.charCodeAt(0)};`).replace(/[\r\n]/g, ' ');
}

export async function scanProjects(source, previous, request = githubJson, owner = 'LEO0331') {
  if (!/^[A-Za-z0-9-]{1,39}$/.test(owner)) throw new Error('Invalid GitHub owner');
  const blocks = extractObjectBlocks(requireProjectsArrayContent(source, 'Missing projects array'));
  const state = { version: 1, projects: {}, candidates: [] };
  const changes = [];
  const represented = new Set();
  let nextSource = source;

  // Paginate and reuse the owner listing to keep the normal scan below the
  // unauthenticated API limit; redirects/external owners need individual lookups.
  const repositories = [];
  for (let page = 1; ; page += 1) {
    const batch = await request(`/users/${owner}/repos?per_page=100&page=${page}&sort=full_name`);
    repositories.push(...batch);
    if (batch.length < 100) break;
  }
  const byName = new Map(repositories.map((repo) => [repo.full_name.toLowerCase(), repo]));

  for (const block of blocks) {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1];
    const repoUrl = block.match(/repoUrl:\s*"([^"]+)"/)?.[1];
    if (!repoUrl) continue;
    const ref = repoUrl.match(/^https:\/\/github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9_.-]+)(\/[^?#]*)?$/);
    if (!id || !ref) throw new Error(`Invalid GitHub reference for ${id ?? repoUrl}`);
    const endpoint = `/repos/${ref[1]}/${ref[2]}`;
    const repo = byName.get(`${ref[1]}/${ref[2]}`.toLowerCase()) ?? await request(endpoint, true);
    const old = previous?.projects?.[id];
    if (!repo) {
      state.projects[id] = { repoUrl, missing: true };
      if (JSON.stringify(old) !== JSON.stringify(state.projects[id])) changes.push(`${text(id)}: repository unavailable (deleted, private, or moved). Review its display status.`);
      continue;
    }
    represented.add(repo.full_name.toLowerCase());
    const readme = await request(`${endpoint}/readme`, true);
    const current = {
      repoUrl: repo.html_url,
      pushedAt: repo.pushed_at,
      description: repo.description ?? '',
      homepage: repo.homepage ?? '',
      defaultBranch: repo.default_branch,
      archived: repo.archived,
      readmeSha: readme?.sha ?? null
    };
    state.projects[id] = current;
    const fields = Object.keys(current).filter((key) => JSON.stringify(old?.[key]) !== JSON.stringify(current[key]));
    if (!old) changes.push(`${text(id)}: initial baseline recorded; review current README, demo, bilingual copy, and preview.`);
    else if (fields.length) changes.push(`${text(id)}: ${fields.map(text).join(', ')} changed. Review current README/demo, English and Chinese copy, stack, status, and preview.`);

    const safeDemo = sanitizePublicDemoUrl(repo.homepage?.trim());
    const demoUrl = block.match(/demoUrl:\s*"([^"]+)"/)?.[1];
    const isSubproject = ref[3] && ref[3] !== '/';
    if (safeDemo && safeDemo !== demoUrl && !isSubproject) {
      const updated = setStringProperty(block, 'demoUrl', safeDemo);
      if (updated !== block) {
        nextSource = nextSource.replace(block, updated);
        changes.push(`${text(id)}: proposed approved demo URL ${text(safeDemo)}.`);
      }
    } else if (current.homepage && !safeDemo && (!old || old.homepage !== current.homepage)) {
      changes.push(`${text(id)}: homepage needs public-host review before updating the demo URL.`);
    }
  }

  state.candidates = repositories.filter((repo) => !repo.fork && !repo.archived && !repo.disabled &&
    repo.name.toLowerCase() !== 'portfolio' && !represented.has(repo.full_name.toLowerCase()))
    .map((repo) => repo.full_name).sort();
  if (JSON.stringify(state.candidates) !== JSON.stringify(previous?.candidates ?? [])) {
    changes.push(`New/unlisted repository candidates (review-only): ${state.candidates.map(text).join(', ') || 'none'}.`);
  }
  validateGeneratedProjectsSource(nextSource, blocks.length);
  return { state, source: nextSource, changes };
}

export function renderReport(changes) {
  return '# Monthly portfolio repository scan\n\n' +
    (changes.length ? changes.map((change) => `- ${change}`).join('\n') : 'No repository or project-link changes detected.') +
    '\n\nApproved demo URLs and GitHub-pinned homepage selection are proposed automatically. New entries, renamed repository links, descriptions, translations, and images require curation. Repository pushes are a review signal, not proof of a visible product change.\n\n' +
    'Before merging: inspect changed READMEs and live demos, curate src/data/projects.ts and src/data/projects.zh.ts, capture and visually verify affected previews, update progress.md and session-handoff.md, and rerun the full verification gate. Merging to main uses the existing GitHub Pages deployment.\n';
}

async function main() {
  const source = fs.readFileSync('src/data/projects.ts', 'utf8');
  const previous = fs.existsSync(STATE_FILE) ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')) : undefined;
  if (previous && previous.version !== 1) throw new Error('Unsupported scan state version');
  const owner = process.env.GITHUB_OWNER || 'LEO0331';
  const repositories = await fetchPinnedRepositories(owner, process.env.GITHUB_TOKEN);
  const result = await scanProjects(source, previous, githubJson, owner);
  const pinned = applyPinnedRepositories(result.source, repositories, result.state.projects);
  const snapshot = { owner, repositories, projectIds: pinned.projectIds };
  const oldPins = fs.existsSync(PINS_FILE) ? JSON.parse(fs.readFileSync(PINS_FILE, 'utf8')) : undefined;
  if (JSON.stringify(snapshot) !== JSON.stringify(oldPins) || pinned.source !== result.source) {
    result.changes.push(`GitHub pin selection/order updated: ${repositories.map(text).join(', ') || 'none'}.`);
  }
  // Include unresolved pins for review without creating placeholder cards.
  if (result.changes.length) {
    for (const repo of pinned.unmatched) result.changes.push(`Unmatched pinned repository: ${text(repo)}. Add a curated record only if appropriate.`);
    for (const repo of pinned.ambiguous) result.changes.push(`Ambiguous pinned repository: ${text(repo)}. Multiple catalogue records match; choose a project explicitly.`);
  }
  // Write only after the entire scan succeeds; rate limits/errors cannot accept a partial baseline.
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(result.state, null, 2)}\n`);
  fs.writeFileSync(PINS_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
  fs.writeFileSync('src/data/projects.ts', pinned.source);
  if (result.changes.length || !fs.existsSync(REPORT_FILE)) fs.writeFileSync(REPORT_FILE, renderReport(result.changes));
  console.log(`${result.changes.length} project scan findings. Report: ${REPORT_FILE}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
