import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';

test('installed build closure excludes unpatched braces and obsolete selector-parser', () => {
  const lock=JSON.parse(readFileSync(new URL('../package-lock.json',import.meta.url)));
  const forbidden=Object.keys(lock.packages).filter(p=>/(?:^|\/)node_modules\/(?:braces|postcss-selector-parser)$/.test(p));
  assert.deepEqual(forbidden,[], 'Reintroduced former vulnerable build chain; review the advisory and regression before accepting it');
});
