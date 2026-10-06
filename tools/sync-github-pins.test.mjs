import assert from 'node:assert/strict';
import test from 'node:test';
import { applyPinnedRepositories, fetchPinnedRepositories, validatePins } from './sync-github-pins.mjs';

const source = `export const projects = [
  { id: "old-id", slug: "stable", repoUrl: "https://github.com/LEO0331/OldName", name: "Curated", featured: false },
  { id: "beta", slug: "beta", repoUrl: "https://github.com/LEO0331/beta", featured: true }
];`;

test('pin mapping preserves order, stable IDs, renamed aliases, and curated content', () => {
  const result = applyPinnedRepositories(source, ['leo0331/beta', 'LEO0331/NewName', 'LEO0331/unlisted'], {
    'old-id': { repoUrl: 'https://github.com/LEO0331/NewName' }
  });
  assert.deepEqual(result.projectIds, ['beta', 'old-id']);
  assert.deepEqual(result.unmatched, ['LEO0331/unlisted']);
  assert.deepEqual(result.ambiguous, []);
  assert.match(result.source, /name: "Curated", featured: true/);
  assert.match(result.source, /slug: "stable"/);
  assert.doesNotMatch(result.source, /id: "unlisted"/);
  assert.equal(applyPinnedRepositories(result.source, ['LEO0331/beta']).source.includes('name: "Curated", featured: false'), true);
});

test('empty pins clear previous flags and repeated mapping is idempotent', () => {
  const result = applyPinnedRepositories(source, []);
  assert.deepEqual(result.projectIds, []);
  assert.doesNotMatch(result.source, /featured: true/);
  assert.equal(applyPinnedRepositories(result.source, []).source, result.source);
});

test('ambiguous monorepo pins are review-only', () => {
  const nested = source.replace('LEO0331/beta', 'LEO0331/OldName/tree/main/tools/beta');
  const result = applyPinnedRepositories(nested, ['LEO0331/OldName']);
  assert.deepEqual(result.ambiguous, ['LEO0331/OldName']);
  assert.deepEqual(result.projectIds, []);
});

test('GraphQL query uses variables and excludes private repositories from the saved snapshot', async () => {
  const repos = await fetchPinnedRepositories('LEO0331', 'test-token', async (url, options) => {
    assert.equal(url, 'https://api.github.com/graphql');
    const body = JSON.parse(options.body);
    assert.equal(body.variables.owner, 'LEO0331');
    assert.match(body.query, /pinnedItems\(first: 6, types: REPOSITORY\)/);
    return { ok: true, json: async () => ({ data: { user: { pinnedItems: { nodes: [
      { nameWithOwner: 'LEO0331/beta', isPrivate: false },
      { nameWithOwner: 'LEO0331/private', isPrivate: true }
    ] } } } }) };
  });
  assert.deepEqual(repos, ['LEO0331/beta']);
});

test('authentication, GraphQL errors, null users, and invalid lists fail instead of clearing the cache', async () => {
  await assert.rejects(fetchPinnedRepositories('LEO0331', ''), /GITHUB_TOKEN is required/);
  await assert.rejects(fetchPinnedRepositories('LEO0331', 'test', async () => ({ ok: false, status: 403 })), /403/);
  for (const body of [{ errors: [{ message: 'rate limit' }] }, { data: { user: null } }, { data: { user: { pinnedItems: { nodes: [null] } } } }]) {
    await assert.rejects(fetchPinnedRepositories('LEO0331', 'test', async () => ({ ok: true, json: async () => body })), /incomplete data/);
  }
  for (const repos of [['bad'], ['A/b', 'a/B'], Array(7).fill('A/b')]) assert.throws(() => validatePins(repos), /Invalid/);
});
