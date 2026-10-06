import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import test from 'node:test';

const run = promisify(execFile);

test('flat selectors cannot exhaust the parser CPU beyond a bounded subprocess budget', async () => {
  // GHSA-rj75-hqrm-r3gf: nesting guards do not cover repeated flat classes.
  // Isolate parsing so an affected dependency cannot hang the test runner.
  const script = `
    const parser = require('postcss-selector-parser');
    const input = '.a'.repeat(200000);
    const output = parser().astSync(input).toString();
    if (output !== input) throw new Error('Selector serialization changed');
    process.stdout.write('parsed');
  `;
  const { stdout } = await run(process.execPath, ['-e', script], { timeout: 12000 });
  assert.equal(stdout, 'parsed');
});
