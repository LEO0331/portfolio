import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { filterExplorerNodes, orderedGroupNodes, validateExplorerModel } from '../src/components/explorer/model.ts';

const nodes = [
  { id: 'alpha', groupId: 'tools', label: 'Alpha', description: 'Retained records', searchText: 'source lineage', target: { href: '#alpha' } },
  { id: 'beta', groupId: 'tools', label: 'Beta', category: 'warnings', target: { href: '#beta' } },
  { id: 'gamma', groupId: 'ops', label: 'Gamma', target: { href: '#gamma' } }
];
const groups = [
  { id: 'tools', label: 'Tools', nodeIds: ['beta', 'alpha'], visual: { color: '#39756b', position: [25, 50] } },
  { id: 'ops', label: 'Operations', nodeIds: ['gamma'], visual: { color: '#426e96' } }
];
test('generic model validates identity, group ownership, ordered membership and finite positions', () => {
  assert.deepEqual(validateExplorerModel(nodes, groups), []);
  assert.ok(validateExplorerModel([...nodes, nodes[0]], groups).includes('Duplicate node IDs'));
  assert.ok(validateExplorerModel(nodes, [...groups, groups[0]]).includes('Duplicate group IDs'));
  assert.ok(validateExplorerModel(nodes, [{ ...groups[0], nodeIds: ['alpha', 'alpha', 'gamma'] }, groups[1]]).some(error => error.startsWith('Invalid membership')));
  assert.ok(validateExplorerModel(nodes, [{ ...groups[0], visual: { color: '#000', position: [NaN, 101] } }, groups[1]]).includes('Invalid position: tools'));
  assert.ok(validateExplorerModel(nodes, []).every(error => error.startsWith('Unassigned node')));
});
test('generic search combines literal metadata terms and supports a host-supplied matcher', () => {
  assert.deepEqual(filterExplorerNodes(nodes, undefined, 'source records').map(node => node.id), ['alpha']);
  assert.deepEqual(filterExplorerNodes(nodes, 'ops', 'source'), []);
  assert.deepEqual(filterExplorerNodes(nodes, undefined, '<script>'), []);
  assert.deepEqual(filterExplorerNodes(nodes, undefined, 'warnings').map(node => node.id), ['beta']);
  assert.deepEqual(filterExplorerNodes(nodes, undefined, 'host query', node => node.id === 'gamma').map(node => node.id), ['gamma']);
});
test('ordered group subsets reuse original node objects and do not mutate caller data', () => {
  const ordered = orderedGroupNodes(nodes, groups[0]);
  assert.deepEqual(ordered.map(node => node.id), ['beta', 'alpha']);
  assert.equal(ordered[0], nodes[1]);
  assert.deepEqual(orderedGroupNodes([nodes[0]], groups[0]), [nodes[0]]);
  assert.deepEqual(nodes.map(node => node.id), ['alpha', 'beta', 'gamma']);
});
test('generic component imports stay inside their boundary except for React', () => {
  const root = resolve('src/components/explorer');
  for (const filename of readdirSync(root).filter(name => /\.tsx?$/.test(name))) {
    const text = readFileSync(resolve(root, filename), 'utf8');
    const specifiers = [...text.matchAll(/(?:import|export)\s[^;]*?from\s*["']([^"']+)["']|import\s*["']([^"']+)["']/g)].map(match => match[1] ?? match[2]);
    for (const specifier of specifiers) {
      if (specifier.startsWith('.')) assert.ok(resolve(dirname(resolve(root, filename)), specifier).startsWith(root + '\\') || resolve(dirname(resolve(root, filename)), specifier).startsWith(root + '/'), `${filename}: ${specifier}`);
      else assert.equal(specifier, 'react', `${filename}: host-specific runtime import`);
    }
  }
});

test('runtime adapter coordinates require a complete finite pair on either layout', () => {
  for (const field of ['position', 'mobilePosition']) {
    for (const value of [[], [50], [50, 50, 50], Array(2), [50, undefined], null, '50,50']) {
      const invalid = [{ ...groups[0], visual: { color: '#39756b', [field]: value } }, groups[1]];
      assert.ok(validateExplorerModel(nodes, invalid).includes('Invalid position: tools'), `${field}: ${JSON.stringify(value)}`);
    }
    assert.deepEqual(validateExplorerModel(nodes, [{ ...groups[0], visual: { color: '#39756b', [field]: [0, 100] } }, groups[1]]), []);
  }
});
