import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import { scanProjects, renderReport } from './scan-project-changes.mjs';

const source = `export const projects = [
  {
    id: "alpha",
    slug: "alpha",
    name: "Curated title",
    image: "/alpha.png",
    demoUrl: "https://leo0331.github.io/old/",
    repoUrl: "https://github.com/LEO0331/alpha"
  }
];`;
const repo = {
  name: 'renamed', full_name: 'LEO0331/renamed', html_url: 'https://github.com/LEO0331/renamed',
  pushed_at: '2026-10-01', description: 'Current description', homepage: 'https://leo0331.github.io/new/',
  default_branch: 'main', archived: false
};
const request = async (endpoint) => endpoint.includes('/readme') ? { sha: 'readme-one' } :
  endpoint.includes('/users/') ? [repo] : repo;

test('scan resolves renames, proposes approved demo links and preserves curated content', async () => {
  const result = await scanProjects(source, undefined, request);
  assert.equal(result.state.projects.alpha.repoUrl, repo.html_url);
  assert.deepEqual(result.state.candidates, []);
  assert.match(result.source, /demoUrl: "https:\/\/leo0331.github.io\/new\/"/);
  assert.match(result.source, /name: "Curated title"/);
  assert.match(result.source, /repoUrl: "https:\/\/github.com\/LEO0331\/alpha"/);
  const repeat = await scanProjects(result.source, result.state, request);
  assert.deepEqual(repeat.changes, []);
  assert.deepEqual(repeat.state, result.state);
});

test('scan detects README and pushed code changes without trusting unsafe homepages', async () => {
  const baseline = await scanProjects(source, undefined, request);
  const changed = async (endpoint) => endpoint.includes('/readme') ? { sha: 'readme-two' } :
    endpoint.includes('/users/') ? [repo] : { ...repo, pushed_at: '2026-10-06', homepage: 'http://localhost:3000' };
  const result = await scanProjects(baseline.source, baseline.state, changed);
  assert.match(result.changes.join('\n'), /pushedAt, homepage, readmeSha changed/);
  assert.match(result.changes.join('\n'), /public-host review/);
  assert.equal(result.source, baseline.source);
});

test('scan paginates candidates and does not insert new projects', async () => {
  const pages = [];
  const paginated = async (endpoint) => {
    if (!endpoint.includes('/users/')) return request(endpoint);
    pages.push(endpoint);
    if (endpoint.includes('page=1&')) return Array.from({ length: 100 }, (_, index) => ({ name: `candidate-${index}`, full_name: `LEO0331/candidate-${index}` }));
    return [{ name: 'last', full_name: 'LEO0331/last' }, { name: 'fork', full_name: 'LEO0331/fork', fork: true }];
  };
  const result = await scanProjects(source, undefined, paginated);
  assert.equal(pages.length, 2);
  assert.equal(result.state.candidates.length, 101);
  assert.match(result.source, /id: "alpha"/);
  assert.doesNotMatch(result.source, /candidate-/);
});

test('missing repositories are recorded; API failures abort instead of accepting partial results', async () => {
  const missing = async (endpoint) => endpoint.includes('/users/') ? [] : null;
  const result = await scanProjects(source, undefined, missing);
  assert.equal(result.state.projects.alpha.missing, true);
  assert.match(result.changes[0], /unavailable/);
  const repeat = await scanProjects(source, result.state, missing);
  assert.deepEqual(repeat.changes, []);
  await assert.rejects(scanProjects(source, undefined, async () => { throw new Error('API 403'); }), /API 403/);
});

test('report escapes untrusted repository names', async () => {
  const malicious = async (endpoint) => endpoint.includes('/users/') ? [{ name: 'candidate', full_name: '<script>@owner</script>' }] : request(endpoint);
  const result = await scanProjects(source, undefined, malicious);
  const report = renderReport(result.changes);
  assert.doesNotMatch(report, /<script>/);
  assert.match(report, /&#60;script&#62;/);
});

test('monorepo subprojects are scanned without replacing their demo with the parent homepage', async () => {
  const nested = source.replace('github.com/LEO0331/alpha', 'github.com/LEO0331/alpha/tree/main/tools/alpha');
  const result = await scanProjects(nested, undefined, request);
  assert.equal(result.source, nested);
  assert.equal(result.state.projects.alpha.readmeSha, 'readme-one');
});

test('the entire current catalogue can establish a baseline and repeat without changes', async () => {
  const catalogue = fs.readFileSync('src/data/projects.ts', 'utf8');
  const repos = [...catalogue.matchAll(/repoUrl:\s*"https:\/\/github\.com\/([^/]+)\/([^/"\s]+)[^"]*"/g)]
    .map((match) => ({ ...repo, name: match[2], full_name: `${match[1]}/${match[2]}`, html_url: `https://github.com/${match[1]}/${match[2]}`, homepage: '' }));
  const catalogueRequest = async (endpoint) => {
    if (endpoint.startsWith('/users/')) return repos;
    if (endpoint.endsWith('/readme')) return { sha: 'fixture-readme' };
    throw new Error(`Unexpected request: ${endpoint}`);
  };
  const first = await scanProjects(catalogue, undefined, catalogueRequest);
  assert.equal(Object.keys(first.state.projects).length, 38);
  assert.equal(first.source, catalogue);
  assert.deepEqual(first.state.candidates, []);
  const repeat = await scanProjects(catalogue, first.state, catalogueRequest);
  assert.deepEqual(repeat.changes, []);
});
