import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractObjectBlocks, requireProjectsArrayContent } from './project-source.mjs';
import { sanitizePublicDemoUrl } from './public-demo-url.mjs';

const PROJECTS_FILE = path.join(process.cwd(), 'src/data/projects.ts');
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'LEO0331';
const WRITE_MODE = process.argv.includes('--write');

function parseArgs() {
  const args = process.argv.slice(2);
  const ownerArg = args.find((arg) => arg.startsWith('--owner='));
  const owner = ownerArg ? ownerArg.split('=')[1] : GITHUB_OWNER;
  if (!/^[A-Za-z0-9-]{1,39}$/.test(owner)) {
    throw new Error('Invalid GitHub owner. Use only letters, numbers, or hyphen (max 39 chars).');
  }
  return {
    owner,
    write: WRITE_MODE
  };
}

function getHeaders() {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'portfolio-project-sync-script'
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function githubJson(url) {
  const response = await fetch(url, { headers: getHeaders() });
  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}) for ${url}`);
  }
  return response.json();
}

function parseRepoFromUrl(repoUrl) {
  if (!repoUrl) return null;
  const match = repoUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/?#]+)/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

function repoKey(value) {
  return (value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function extractProjectMeta(block) {
  const id = block.match(/id:\s*"([^"]+)"/)?.[1];
  const repoUrl = block.match(/repoUrl:\s*"([^"]+)"/)?.[1];
  const demoUrl = block.match(/demoUrl:\s*"([^"]+)"/)?.[1];

  if (!id || !repoUrl) return null;

  return {
    id,
    repoUrl,
    demoUrl,
    repoRef: parseRepoFromUrl(repoUrl)
  };
}

function setStringProperty(block, property, value) {
  const encodedValue = JSON.stringify(String(value));
  const simplePattern = new RegExp(`(\\s{4}${property}:\\s*)"[^"]*"(,?)`);
  const multilinePattern = new RegExp(`(\\s{4}${property}:\\s*)\\n\\s*"[^"]*"(,?)`);

  if (simplePattern.test(block)) {
    return block.replace(simplePattern, `$1${encodedValue}$2`);
  }

  if (multilinePattern.test(block)) {
    return block.replace(multilinePattern, `$1${encodedValue}$2`);
  }

  if (property === 'demoUrl') {
    const imagePattern = /(\n\s{4}image:\s*"[^"]+",)/;
    if (imagePattern.test(block)) {
      return block.replace(imagePattern, `$1\n    demoUrl: ${encodedValue},`);
    }
  }

  return block;
}

function kebab(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function shouldIncludeAsNewProject(repo, existingRepoNames) {
  if (repo.fork || repo.archived || repo.disabled) return false;
  const normalizedName = repoKey(repo.name);
  if (existingRepoNames.has(normalizedName)) return false;
  if (normalizedName === 'portfolio') return false;

  const hasSignal = Boolean(repo.homepage) || Boolean(repo.description);
  if (!hasSignal) return false;

  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
  const keywordSignal = /app|web|tool|portfolio|react|flutter|md|design|project|utility|reader|tracker|workflow/.test(haystack);
  return keywordSignal;
}

function validateGeneratedProjectsSource(source, expectedProjectCount) {
  const arrayContent = requireProjectsArrayContent(source, 'Generated source no longer contains a readable projects array.');
  const blocks = extractObjectBlocks(arrayContent);
  if (blocks.length !== expectedProjectCount) {
    throw new Error(`Generated source changed the project count unexpectedly (${blocks.length} !== ${expectedProjectCount}).`);
  }

  const ids = blocks.map((block) => block.match(/id:\s*"([^"]+)"/)?.[1]);
  const slugs = blocks.map((block) => block.match(/slug:\s*"([^"]+)"/)?.[1]);
  if (ids.some((id) => !id) || slugs.some((slug) => !slug)) {
    throw new Error('Generated source contains a project without an id or slug.');
  }
  if (new Set(ids).size !== ids.length || new Set(slugs).size !== slugs.length) {
    throw new Error('Generated source contains duplicate project ids or slugs.');
  }
}

async function main() {
  const { owner, write } = parseArgs();

  const source = fs.readFileSync(PROJECTS_FILE, 'utf8');
  const arrayContent = requireProjectsArrayContent(source, 'Unable to locate projects array in src/data/projects.ts');
  const blocks = extractObjectBlocks(arrayContent);
  const parsedProjects = blocks.map((block) => ({ block, meta: extractProjectMeta(block) })).filter((row) => row.meta);
  const repos = await githubJson(`https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`);
  const reposByName = new Map(repos.map((repo) => [repoKey(repo.name), repo]));

  const updates = [];
  const updatedBlocks = new Map();

  for (const row of parsedProjects) {
    const { block, meta } = row;
    if (!meta.repoRef) continue;
    if (meta.repoRef.owner.toLowerCase() !== owner.toLowerCase()) {
      console.warn(`Skipped metadata update for ${meta.id}: repository owner is outside ${owner}.`);
      continue;
    }

    const repo = reposByName.get(repoKey(meta.repoRef.repo));
    if (!repo) {
      console.warn(`Skipped metadata update for ${meta.id}: repository was not returned by the public owner listing.`);
      continue;
    }

    let nextBlock = block;
    const projectChanges = [];

    const nextDemo = repo.homepage?.trim();
    const safeDemo = sanitizePublicDemoUrl(nextDemo);
    if (safeDemo && safeDemo !== meta.demoUrl) {
      nextBlock = setStringProperty(nextBlock, 'demoUrl', safeDemo);
      projectChanges.push(`demoUrl -> ${safeDemo}`);
    }

    if (projectChanges.length > 0 && nextBlock !== block) {
      updatedBlocks.set(block, nextBlock);
      updates.push({ id: meta.id, changes: projectChanges });
    }
  }

  const existingRepoNames = new Set(
    parsedProjects
      .map((row) => repoKey(row.meta.repoRef?.repo))
      .filter(Boolean)
  );

  const newRepoCandidates = repos.filter((repo) => shouldIncludeAsNewProject(repo, existingRepoNames));

  let nextSource = source;
  for (const [oldBlock, newBlock] of updatedBlocks.entries()) {
    nextSource = nextSource.replace(oldBlock, newBlock);
  }

  console.log(`Existing project updates: ${updates.length}`);
  for (const update of updates) {
    console.log(`- ${update.id}`);
    for (const change of update.changes) {
      console.log(`  - ${change}`);
    }
  }

  console.log(`New project candidates: ${newRepoCandidates.length}`);
  for (const repo of newRepoCandidates) {
    console.log(`- ${kebab(repo.name)} (${repo.html_url})`);
  }
  if (newRepoCandidates.length > 0) {
    console.log('New candidates are review-only and are never inserted automatically. Curate accepted entries manually.');
  }

  if (write) {
    validateGeneratedProjectsSource(nextSource, blocks.length);
    fs.writeFileSync(PROJECTS_FILE, nextSource, 'utf8');
    console.log('Applied sanitized demo URL updates to existing entries in src/data/projects.ts');
  } else {
    console.log('Dry run only. Re-run with --write to apply changes.');
  }
}

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMainModule) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

export {
  setStringProperty,
  validateGeneratedProjectsSource
};
