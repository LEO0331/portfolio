import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_FILE = path.join(process.cwd(), 'src/data/projects.ts');
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'LEO0331';
const WRITE_MODE = process.argv.includes('--write');

const CATEGORY_KEYWORDS = [
  'Web App',
  'Frontend',
  'Mobile App',
  'Developer Tooling',
  'Workflow Tool',
  'Documentation',
  'Utility',
  'Product Concept'
];

function parseArgs() {
  const args = process.argv.slice(2);
  const ownerArg = args.find((arg) => arg.startsWith('--owner='));
  const owner = ownerArg ? ownerArg.split('=')[1] : GITHUB_OWNER;
  if (!/^[A-Za-z0-9-]{1,39}$/.test(owner)) {
    throw new Error('Invalid GitHub owner. Use only letters, numbers, or hyphen (max 39 chars).');
  }
  return {
    owner,
    write: WRITE_MODE
  };
}

function getHeaders() {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'portfolio-project-sync-script'
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function githubJson(url) {
  const response = await fetch(url, { headers: getHeaders() });
  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}) for ${url}`);
  }
  return response.json();
}

function toSentence(value) {
  if (!value) return undefined;
  const clean = value.replace(/\s+/g, ' ').trim();
  if (!clean) return undefined;
  return /[.!?]$/.test(clean) ? clean : `${clean}.`;
}

function sanitizeHttpUrl(value) {
  if (!value) return undefined;
  try {
    const parsed = new URL(value.trim());
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
    return parsed.toString();
  } catch {
    return undefined;
  }
}

function toTsStringLiteral(value) {
  return JSON.stringify(String(value));
}

function extractProjectsArrayContent(source) {
  const marker = 'export const projects';
  const start = source.indexOf(marker);
  if (start === -1) return '';

  const equalsIndex = source.indexOf('=', start);
  if (equalsIndex === -1) return '';

  const arrayStart = source.indexOf('[', equalsIndex);
  if (arrayStart === -1) return '';

  let depth = 0;
  let inString = false;
  let quote = '';
  let escaping = false;

  for (let i = arrayStart; i < source.length; i += 1) {
    const ch = source[i];

    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        escaping = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return {
          start: arrayStart,
          end: i,
          content: source.slice(arrayStart + 1, i)
        };
      }
    }
  }

  return '';
}

function extractObjectBlocks(arrayContent) {
  const blocks = [];
  let depth = 0;
  let start = -1;
  let inString = false;
  let quote = '';
  let escaping = false;

  for (let i = 0; i < arrayContent.length; i += 1) {
    const ch = arrayContent[i];

    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        escaping = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '{') {
      if (depth === 0) start = i;
      depth += 1;
      continue;
    }

    if (ch === '}') {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        blocks.push(arrayContent.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

function parseRepoFromUrl(repoUrl) {
  if (!repoUrl) return null;
  const match = repoUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/?#]+)/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

function repoKey(value) {
  return (value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function extractProjectMeta(block) {
  const id = block.match(/id:\s*"([^"]+)"/)?.[1];
  const repoUrl = block.match(/repoUrl:\s*"([^"]+)"/)?.[1];
  const shortDescription = block.match(/shortDescription:\s*(?:\n\s*)?"([^"]+)"/)?.[1];
  const demoUrl = block.match(/demoUrl:\s*"([^"]+)"/)?.[1];

  if (!id || !repoUrl) return null;

  return {
    id,
    repoUrl,
    shortDescription,
    demoUrl,
    repoRef: parseRepoFromUrl(repoUrl)
  };
}

function setStringProperty(block, property, value) {
  const encodedValue = toTsStringLiteral(value);
  const simplePattern = new RegExp(`(\\s{4}${property}:\\s*)"[^"]*"(,?)`);
  const multilinePattern = new RegExp(`(\\s{4}${property}:\\s*)\\n\\s*"[^"]*"(,?)`);

  if (simplePattern.test(block)) {
    return block.replace(simplePattern, `$1${encodedValue}$2`);
  }

  if (multilinePattern.test(block)) {
    return block.replace(multilinePattern, `$1${encodedValue}$2`);
  }

  if (property === 'demoUrl') {
    const imagePattern = /(\n\s{4}image:\s*"[^"]+",)/;
    if (imagePattern.test(block)) {
      return block.replace(imagePattern, `$1\n    demoUrl: ${encodedValue},`);
    }
  }

  return block;
}

function kebab(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function inferTechStack(repo) {
  const language = repo.language;
  const stack = [];

  if (language) stack.push(language);
  if (/flutter|dart/i.test(`${repo.name} ${repo.description || ''}`)) {
    if (!stack.includes('Flutter')) stack.push('Flutter');
    if (!stack.includes('Dart')) stack.push('Dart');
  }
  if (/react/i.test(`${repo.name} ${repo.description || ''}`) && !stack.includes('React')) {
    stack.push('React');
  }

  return stack.length ? stack : ['JavaScript'];
}

function inferCategories(repo) {
  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
  const picks = [];

  if (/mobile|flutter|dart|android|ios/.test(haystack)) picks.push('Mobile App');
  if (/tool|cli|workflow|generator|script/.test(haystack)) picks.push('Developer Tooling');
  if (/doc|markdown|md|wiki/.test(haystack)) picks.push('Documentation');
  if (/utility|helper/.test(haystack)) picks.push('Utility');
  if (/frontend|ui|react|web/.test(haystack)) picks.push('Frontend');
  if (!picks.length) picks.push('Web App');

  const filtered = picks.filter((category, idx) => picks.indexOf(category) === idx && CATEGORY_KEYWORDS.includes(category));
  return filtered.slice(0, 3);
}

function buildNewProjectEntry(repo) {
  const slug = kebab(repo.name);
  const short = toSentence(repo.description) || `${repo.name} repository from ${repo.owner.login}.`;
  const categories = inferCategories(repo);
  const techStack = inferTechStack(repo);

  return {
    id: slug,
    slug,
    name: repo.name,
    tagline: `Repository project from ${repo.owner.login}`,
    shortDescription: short,
    fullDescription: `${short} This entry was added automatically from GitHub metadata and should be refined manually for portfolio context.`,
    role: 'Project Developer',
    teamType: 'solo',
    techStack,
    categories,
    features: ['Source repository available', 'Metadata synced from GitHub'],
    image: `/src/assets/images/projects/${slug}.png`,
    demoUrl: sanitizeHttpUrl(repo.homepage),
    repoUrl: repo.html_url,
    status: 'live',
    featured: false
  };
}

function formatProjectObject(project) {
  const lines = [
    '  {',
    `    id: ${toTsStringLiteral(project.id)},`,
    `    slug: ${toTsStringLiteral(project.slug)},`,
    `    name: ${toTsStringLiteral(project.name)},`,
    `    tagline: ${toTsStringLiteral(project.tagline)},`,
    `    shortDescription: ${toTsStringLiteral(project.shortDescription)},`,
    `    fullDescription: ${toTsStringLiteral(project.fullDescription)},`,
    `    role: ${toTsStringLiteral(project.role)},`,
    `    teamType: ${toTsStringLiteral(project.teamType)},`,
    `    techStack: [${project.techStack.map((item) => toTsStringLiteral(item)).join(', ')}],`,
    `    categories: [${project.categories.map((item) => toTsStringLiteral(item)).join(', ')}],`,
    `    features: [${project.features.map((item) => toTsStringLiteral(item)).join(', ')}],`,
    `    image: ${toTsStringLiteral(project.image)},`
  ];

  if (project.demoUrl) {
    lines.push(`    demoUrl: ${toTsStringLiteral(project.demoUrl)},`);
  }

  lines.push(
    `    repoUrl: ${toTsStringLiteral(project.repoUrl)},`,
    `    status: ${toTsStringLiteral(project.status)},`,
    `    featured: ${project.featured ? 'true' : 'false'}`,
    '  }'
  );

  return lines.join('\n');
}

function shouldIncludeAsNewProject(repo, existingRepoNames) {
  if (repo.fork || repo.archived || repo.disabled) return false;
  const normalizedName = repoKey(repo.name);
  if (existingRepoNames.has(normalizedName)) return false;
  if (normalizedName === 'portfolio') return false;

  const hasSignal = Boolean(repo.homepage) || Boolean(repo.description);
  if (!hasSignal) return false;

  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
  const keywordSignal = /app|web|tool|portfolio|react|flutter|md|design|project|utility|reader|tracker|workflow/.test(haystack);
  return keywordSignal;
}

async function main() {
  const { owner, write } = parseArgs();

  const source = fs.readFileSync(PROJECTS_FILE, 'utf8');
  const arrayInfo = extractProjectsArrayContent(source);
  if (!arrayInfo || typeof arrayInfo !== 'object') {
    throw new Error('Unable to locate projects array in src/data/projects.ts');
  }

  const blocks = extractObjectBlocks(arrayInfo.content);
  const parsedProjects = blocks.map((block) => ({ block, meta: extractProjectMeta(block) })).filter((row) => row.meta);

  const updates = [];
  const updatedBlocks = new Map();

  for (const row of parsedProjects) {
    const { block, meta } = row;
    if (!meta.repoRef) continue;

    try {
      const repo = await githubJson(`https://api.github.com/repos/${meta.repoRef.owner}/${meta.repoRef.repo}`);
      let nextBlock = block;
      const projectChanges = [];

      const nextDescription = toSentence(repo.description);
      if (nextDescription && nextDescription !== meta.shortDescription) {
        nextBlock = setStringProperty(nextBlock, 'shortDescription', nextDescription);
        projectChanges.push(`shortDescription -> ${nextDescription}`);
      }

      const nextDemo = repo.homepage?.trim();
      const safeDemo = sanitizeHttpUrl(nextDemo);
      if (safeDemo && safeDemo !== meta.demoUrl) {
        nextBlock = setStringProperty(nextBlock, 'demoUrl', safeDemo);
        projectChanges.push(`demoUrl -> ${safeDemo}`);
      }

      if (projectChanges.length > 0 && nextBlock !== block) {
        updatedBlocks.set(block, nextBlock);
        updates.push({ id: meta.id, changes: projectChanges });
      }
    } catch (error) {
      console.warn(`Skipped metadata update for ${meta.id}: ${String(error)}`);
    }
  }

  const existingRepoNames = new Set(
    parsedProjects
      .map((row) => repoKey(row.meta.repoRef?.repo))
      .filter(Boolean)
  );

  const repos = await githubJson(`https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`);
  const newRepoCandidates = repos.filter((repo) => shouldIncludeAsNewProject(repo, existingRepoNames));

  const newEntries = newRepoCandidates.map((repo) => buildNewProjectEntry(repo));

  let nextSource = source;
  for (const [oldBlock, newBlock] of updatedBlocks.entries()) {
    nextSource = nextSource.replace(oldBlock, newBlock);
  }

  if (newEntries.length > 0) {
    const addition = newEntries.map(formatProjectObject).join(',\n');
    nextSource = nextSource.replace(/\n\];\s*$/, `,\n${addition}\n];\n`);
  }

  console.log(`Existing project updates: ${updates.length}`);
  for (const update of updates) {
    console.log(`- ${update.id}`);
    for (const change of update.changes) {
      console.log(`  - ${change}`);
    }
  }

  console.log(`New projects detected: ${newEntries.length}`);
  for (const entry of newEntries) {
    console.log(`- ${entry.id} (${entry.repoUrl})`);
  }

  if (write) {
    fs.writeFileSync(PROJECTS_FILE, nextSource, 'utf8');
    console.log('Applied updates to src/data/projects.ts');
  } else {
    console.log('Dry run only. Re-run with --write to apply changes.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
