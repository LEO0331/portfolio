import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function renderNotices(root) {
  const lock = JSON.parse(readFileSync(path.join(root, 'package-lock.json'), 'utf8'));
  const packages = Object.entries(lock.packages).filter(([location, entry]) => location && !entry.dev)
    .sort(([a], [b]) => a.localeCompare(b));
  const sections = [
    'Portfolio — third-party notices',
    'This file includes the project license and the exact license/notice texts supplied by the installed locked runtime dependency closure. Build-only dependencies are excluded. Inclusion does not assert that every package is present in every route bundle.',
    `Project license\n\n${readFileSync(path.join(root, 'LICENSE'), 'utf8')}`
  ];
  for (const [location, locked] of packages) {
    const folder = path.join(root, location);
    const installed = JSON.parse(readFileSync(path.join(folder, 'package.json'), 'utf8'));
    if (installed.version !== locked.version) throw new Error(`Installed version differs from lock: ${location}`);
    const files = readdirSync(folder).filter(name => /^(?:licen[sc]e|copying|notice)(?:[._-]|$)/i.test(name)).sort();
    if (!files.some(name => /^(?:licen[sc]e|copying)(?:[._-]|$)/i.test(name))) {
      throw new Error(`Missing license text: ${installed.name}@${locked.version}`);
    }
    const texts = files.map(name => {
      const text = readFileSync(path.join(folder, name), 'utf8');
      if (!text.trim()) throw new Error(`Empty notice text: ${location}/${name}`);
      return `${name}\n\n${text}`;
    });
    sections.push(`${installed.name}@${locked.version}\nLocation: ${location}\nDeclared license: ${typeof installed.license === 'string' ? installed.license : 'See included license text'}\n\n${texts.join('\n\n')}`);
  }
  return '\uFEFF' + sections.join('\n\n' + '='.repeat(72) + '\n\n') + '\n';
}

export function writeNotices(root) {
  // Collect and validate everything before replacing the last successful notice.
  const text = renderNotices(root);
  writeFileSync(path.join(root, 'public', 'THIRD_PARTY_NOTICES.txt'), text);
  return text;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const text = writeNotices(root);
  console.log(`Third-party notices generated (${Buffer.byteLength(text)} bytes).`);
}
