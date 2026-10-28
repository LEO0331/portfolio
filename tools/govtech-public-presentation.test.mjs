import assert from 'node:assert/strict';
import test from 'node:test';
import {auditPublicRecords,isPullRequestHref,workflowPattern} from './govtech-public-audit.mjs';

test('public evidence audit rejects encoded, relative and protocol-equivalent GitHub PR destinations',()=>{
  for(const url of ['https://github.com/owner/repo/pull/12','http://www.github.com/owner/repo/pull/12/files','//github.com/owner/repo/pull/12','/owner/repo/%70ull/%31%32','https://github.com/owner/repo/%2570ull/12'])assert.equal(isPullRequestHref(url),true,url);
  for(const url of ['https://github.com/owner/repo/blob/abcdef/test.ts','https://github.com/owner/repo','https://example.com/pull/12','/govtech/bin-policy'])assert.equal(isPullRequestHref(url),false,url);
});
test('workflow scan is specific enough to preserve research joins and business handoffs',()=>{
  for(const text of ['Git merge abc','v1.0 merge abc','Latest source merge abc','Three merged milestones','The merged module','Merged PR #11','PR #6 is merged','歷史 PR 交接','已合併的來源版本','codex/internal-branch','GitHub metadata confirms PR #9'])assert.equal(workflowPattern.test(text),true,text);
  for(const text of ['project source','field review, not installation approval','merged populations','Pickup handoff codes','合併87筆設施','事故與壅塞不合併計分'])assert.equal(workflowPattern.test(text),false,text);
});

test('public URL scanning does not depend on a field being named url',()=>{
  const fields={title:'project',preview:{href:'//github.com/owner/repo/pull/3'},repoUrl:'https://github.com/owner/repo/%70ull/4',label:'source reference'};
  assert.deepEqual(auditPublicRecords({en:[{id:'sample',...fields}]}).map(f=>f.path),['preview/href','repoUrl']);
});

test('render audit recognizes river and financial research payloads without blocking presentation assets', async()=>{
  const {isResearchPayloadRequest}=await import('./govtech-public-audit.mjs');
  for(const url of ['https://data.taipei/api/frontstage/resource','http://127.0.0.1:4175/portfolio/data/river-water-policy/current.json','https://leo0331.github.io/Gridline/data/dashboard-overview.json','http://127.0.0.1:8787/api/observations?ticker=ORCL','https://raw.githubusercontent.com/owner/repo/main/data.json','https://api.github.com/repos/owner/repo'])assert.equal(isResearchPayloadRequest(url),true,url);
  for(const url of ['http://127.0.0.1:4175/portfolio/assets/govtechRiverWaterQuality-abc.js','http://127.0.0.1:4175/portfolio/images/engineering/gridline-desktop.png','https://fonts.googleapis.com/css2?family=Inter','https://example.com/data-presentation'])assert.equal(isResearchPayloadRequest(url),false,url);
});
