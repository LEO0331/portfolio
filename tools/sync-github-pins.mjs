import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractObjectBlocks, requireProjectsArrayContent } from './project-source.mjs';
import { validateGeneratedProjectsSource } from './sync-projects-from-github.mjs';

export const PINS_FILE = 'src/data/github-pins.json';

export function validatePins(repositories) {
  if (!Array.isArray(repositories) || repositories.length > 6 ||
      repositories.some((repo) => typeof repo !== 'string' || !/^[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+$/.test(repo)) ||
      new Set(repositories.map((repo) => repo.toLowerCase())).size !== repositories.length) {
    throw new Error('Invalid GitHub pinned repository list');
  }
  return repositories;
}

export async function fetchPinnedRepositories(owner, token, request = fetch) {
  if (!/^[A-Za-z0-9-]{1,39}$/.test(owner)) throw new Error('Invalid GitHub owner');
  if (!token) throw new Error('GITHUB_TOKEN is required to sync pins; saved selection was preserved');
  const response = await request('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'portfolio-pin-sync' },
    body: JSON.stringify({
      query: 'query($owner: String!) { user(login: $owner) { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { nameWithOwner isPrivate } } } } }',
      variables: { owner }
    }),
    signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`GitHub pin query failed (${response.status}); saved selection was preserved`);
  const body = await response.json();
  const nodes = body.data?.user?.pinnedItems?.nodes;
  if (body.errors?.length || !Array.isArray(nodes) || nodes.some((node) => !node || typeof node.isPrivate !== 'boolean')) {
    throw new Error('GitHub pin query returned incomplete data; saved selection was preserved');
  }
  // Never publish private repository names into the static site snapshot.
  return validatePins(nodes.filter((node) => !node.isPrivate).map((node) => node.nameWithOwner));
}

export function applyPinnedRepositories(source, repositories, canonicalProjects = {}) {
  validatePins(repositories);
  const blocks = extractObjectBlocks(requireProjectsArrayContent(source, 'Missing projects array'));
  const projects = blocks.map((block) => {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1];
    const url = canonicalProjects[id]?.repoUrl ?? block.match(/repoUrl:\s*"([^"]+)"/)?.[1];
    const repo = url?.match(/^https:\/\/github\.com\/([^/]+\/[^/?#]+)/)?.[1].toLowerCase();
    return { block, id, repo };
  });
  const selectedIds = new Set();
  const unmatched = [];
  const ambiguous = [];
  for (const repository of repositories) {
    const matches = projects.filter((project) => project.repo === repository.toLowerCase());
    if (!matches.length) unmatched.push(repository);
    else if (matches.length > 1) ambiguous.push(repository);
    else selectedIds.add(matches[0].id);
  }
  let nextSource = source;
  for (const { block, id } of projects) {
    if (!id || !/featured:\s*(true|false)/.test(block)) throw new Error('Project is missing an id or featured flag');
    const updated = block.replace(/(featured:\s*)(true|false)/, (_, prefix) => `${prefix}${selectedIds.has(id)}`);
    nextSource = nextSource.replace(block, updated);
  }
  validateGeneratedProjectsSource(nextSource, blocks.length);
  return { source: nextSource, projectIds: [...selectedIds], unmatched, ambiguous };
}

async function main() {
  const owner = process.env.GITHUB_OWNER || 'LEO0331';
  const repositories = await fetchPinnedRepositories(owner, process.env.GITHUB_TOKEN);
  const result = applyPinnedRepositories(fs.readFileSync('src/data/projects.ts', 'utf8'), repositories);
  fs.writeFileSync(PINS_FILE, `${JSON.stringify({ owner, repositories, projectIds: result.projectIds }, null, 2)}\n`);
  fs.writeFileSync('src/data/projects.ts', result.source);
  console.log(`Synced ${repositories.length} public pins; unmatched: ${result.unmatched.join(', ') || 'none'}; ambiguous: ${result.ambiguous.join(', ') || 'none'}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
