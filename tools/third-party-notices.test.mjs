import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { renderNotices, writeNotices } from './generate-third-party-notices.mjs';

function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), 'portfolio-notices-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, 'public'));
  mkdirSync(path.join(root, 'node_modules', 'fixture'), { recursive: true });
  writeFileSync(path.join(root, 'LICENSE'), 'Project copyright\nPermission retained.\n');
  writeFileSync(path.join(root, 'package-lock.json'), JSON.stringify({ packages: {
    '': {}, 'node_modules/fixture': { version: '1.0.0' },
    'node_modules/build-tool': { version: '2.0.0', dev: true }
  } }));
  writeFileSync(path.join(root, 'node_modules/fixture/package.json'), JSON.stringify({ name: 'fixture', version: '1.0.0', license: 'MIT' }));
  return root;
}

test('distribution notices preserve supplied copyright, terms and supplemental notice', t => {
  const root = fixture(t);
  writeFileSync(path.join(root, 'node_modules/fixture/LICENSE.md'), 'Copyright Fixture Authors\nPermission is hereby granted.\n');
  writeFileSync(path.join(root, 'node_modules/fixture/NOTICE'), 'Supplemental attribution.\n');
  const text = renderNotices(root);
  assert.match(text, /fixture@1\.0\.0/);
  assert.match(text, /Copyright Fixture Authors\nPermission is hereby granted\./);
  assert.match(text, /Supplemental attribution\./);
  assert.match(text, /Project copyright/);
  assert.doesNotMatch(text, /build-tool/);
  assert.equal(renderNotices(root), text);
});

test('missing dependency license cannot replace the last successful notice', t => {
  const root = fixture(t), output = path.join(root, 'public/THIRD_PARTY_NOTICES.txt');
  writeFileSync(output, 'last successful notice');
  assert.throws(() => writeNotices(root), /Missing license text/);
  assert.equal(readFileSync(output, 'utf8'), 'last successful notice');
});

test('notice generation rejects installed packages that differ from the lock', t => {
  const root = fixture(t);
  writeFileSync(path.join(root, 'node_modules/fixture/package.json'), JSON.stringify({ name: 'fixture', version: '9.0.0' }));
  assert.throws(() => renderNotices(root), /differs from lock/);
});

test('an empty supplied license cannot replace the last successful notice', t => {
  const root = fixture(t), output = path.join(root, 'public/THIRD_PARTY_NOTICES.txt');
  writeFileSync(path.join(root, 'node_modules/fixture/LICENSE'), '\n');
  writeFileSync(output, 'last successful notice');
  assert.throws(() => writeNotices(root), /Empty notice text/);
  assert.equal(readFileSync(output, 'utf8'), 'last successful notice');
});
