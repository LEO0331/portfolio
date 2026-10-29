import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const hooks = registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && context.parentURL?.includes('/src/')) {
    for (const suffix of ['.ts', '.tsx']) {
      const url = new URL(specifier + suffix, context.parentURL);
      if (existsSync(fileURLToPath(url))) return nextResolve(url.href, context);
    }
  }
  return nextResolve(specifier, context);
} });
const { CASE_DOMAIN, EXPLORER_DOMAINS, getExplorerCases } = await import('../src/data/govtechExplorerGraph.ts');
const { getGovTechExplorerModel } = await import('../src/data/govtechExplorerAdapter.ts');
const { filterExplorerNodes, validateExplorerModel } = await import('../src/components/explorer/model.ts');
const { parseExplorerState, serializeExplorerState } = await import('../src/utils/govtechExplorerState.ts');
const { govtechCases } = await import('../src/data/govtechCases.ts');
const { govtechCasesZh } = await import('../src/data/govtechCases.zh.ts');
const { govtechCopy } = await import('../src/data/govtechCopy.ts');
hooks.deregister();

test('Explorer maps exactly thirteen unique bilingual case identities to six canonical primary domains', () => {
  assert.equal(EXPLORER_DOMAINS.length, 6);
  assert.equal(new Set(EXPLORER_DOMAINS.map(domain => domain.id)).size, 6);
  assert.equal(Object.keys(CASE_DOMAIN).length, 13);
  for (const [locale, records] of [['en', govtechCases], ['zh', govtechCasesZh]]) {
    const cases = getExplorerCases(locale);
    assert.equal(cases.length, 13);
    assert.equal(new Set(cases.map(study => study.id)).size, 13);
    assert.deepEqual(cases.map(study => study.id), records.map(study => study.id));
    for (const study of cases) {
      assert.ok(study.title && study.maturityLabel && study.overview.length === 4);
      assert.ok(study.overview.every(Boolean));
      const canonical = govtechCases.find(item => item.id === study.id);
      const domain = EXPLORER_DOMAINS.find(item => item.id === study.domainId);
      assert.equal(canonical.policyDomain, govtechCopy.en.domains[domain.index].title);
      assert.ok(govtechCopy[locale].domains[domain.index].projectIds.includes(study.projectId));
    }
  }
  assert.deepEqual(EXPLORER_DOMAINS.map(domain => getExplorerCases('en').filter(study => study.domainId === domain.id).length), [3, 3, 2, 1, 3, 1]);
  const shared = getExplorerCases('en').filter(study => study.projectId === 'taipei-feitsui-water-map');
  assert.deepEqual(shared.map(study => [study.id, study.domainId]), [['heavy-rain-preparedness', 'public-safety'], ['river-water-quality', 'environment']]);
});
test('Explorer URL state is bounded, validated, localized-independent and roundtrips safely', () => {
  assert.deepEqual(parseExplorerState('?domain=unknown&case=unknown&view=nope'), { domain: undefined, caseId: undefined, query: '', view: 'scene' });
  const normalized = parseExplorerState('?domain=housing&case=river-water-quality&view=list&q=river+water');
  assert.equal(normalized.domain, 'environment');
  assert.equal(normalized.caseId, 'river-water-quality');
  assert.deepEqual(parseExplorerState(serializeExplorerState(normalized)), normalized);
  assert.equal(parseExplorerState('?q=' + 'x'.repeat(200)).query.length, 160);
  assert.equal(parseExplorerState(serializeExplorerState({ query: 'river ', view: 'scene' })).query, 'river ');
  assert.equal(serializeExplorerState({ query: '', view: 'scene' }), '');
  assert.equal(parseExplorerState('?q=%3Cscript%3E').query, '<script>');
});
test('Explorer search uses existing bilingual metadata, combines words and domain filters without dropping shared cases', () => {
  const en = getGovTechExplorerModel('en', '/portfolio/', path => path).nodes, zh = getGovTechExplorerModel('zh', '/portfolio/', path => '/zh' + path).nodes;
  assert.equal(filterExplorerNodes(en, undefined, '  ').length, 13);
  assert.deepEqual(filterExplorerNodes(en, undefined, '013').map(study => study.id), ['river-water-quality']);
  assert.equal(filterExplorerNodes(en, 'housing', 'water').length, 0);
  assert.equal(filterExplorerNodes(en, undefined, 'zzzz-no-result').length, 0);
  assert.ok(filterExplorerNodes(zh, undefined, '河川').some(study => study.id === 'river-water-quality'));
  assert.ok(filterExplorerNodes(en, undefined, 'river water').some(study => study.id === 'river-water-quality'));
  assert.equal(filterExplorerNodes(en, 'environment', '').length, 3);
  assert.deepEqual(filterExplorerNodes(en, undefined, 'digital inclusion').map(study => study.id), ['wifi-allocation']);
});

test('GovTech adapter preserves source summaries and root/Pages localized navigation without importing full cases', () => {
  for (const locale of ['en', 'zh']) for (const base of ['/', '/portfolio/']) {
    const model = getGovTechExplorerModel(locale, base, path => locale === 'zh' ? '/zh' + path : path);
    assert.deepEqual(validateExplorerModel(model.nodes, model.groups), []);
    assert.equal(model.nodes.length, 13); assert.equal(model.groups.length, 6);
    for (const node of model.nodes) {
      const source = getExplorerCases(locale).find(study => study.id === node.id);
      assert.equal(node.label, source.title); assert.equal(node.description, source.summary);
      assert.equal(node.target.href, base.replace(/\/$/, '') + (locale === 'zh' ? '/zh' : '') + '/govtech/' + source.slug);
    }
  }
});
