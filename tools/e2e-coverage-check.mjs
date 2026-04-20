import fs from "node:fs";

const REPORT_PATH = "test-results/e2e-report.json";
const THRESHOLD = 85;
const EXPECTED_IDS = [
  "COV-01",
  "COV-02",
  "COV-03",
  "COV-04",
  "COV-05",
  "COV-06",
  "COV-07",
  "COV-08",
  "COV-09",
  "COV-10",
  "COV-11"
];

function collectTitles(node, out = []) {
  if (!node || typeof node !== "object") return out;

  if (Array.isArray(node.specs)) {
    for (const spec of node.specs) {
      const title = spec?.title;
      const ok = Array.isArray(spec?.tests) && spec.tests.some((t) => t?.status === "expected");
      if (title && ok) out.push(title);
    }
  }

  if (Array.isArray(node.suites)) {
    for (const suite of node.suites) collectTitles(suite, out);
  }

  return out;
}

if (!fs.existsSync(REPORT_PATH)) {
  console.error(`Coverage report missing: ${REPORT_PATH}`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf-8"));
const titles = collectTitles(report);
const passedIds = new Set();

for (const title of titles) {
  const matches = title.match(/\[(COV-\d{2})\]/g) ?? [];
  for (const match of matches) {
    passedIds.add(match.replace("[", "").replace("]", ""));
  }
}

const covered = EXPECTED_IDS.filter((id) => passedIds.has(id));
const coveragePct = (covered.length / EXPECTED_IDS.length) * 100;

console.log(`E2E functional coverage: ${covered.length}/${EXPECTED_IDS.length} (${coveragePct.toFixed(1)}%)`);

if (coveragePct < THRESHOLD) {
  console.error(`Coverage threshold failed: required >= ${THRESHOLD}%`);
  console.error(`Covered IDs: ${covered.join(", ")}`);
  process.exit(1);
}

console.log(`Coverage threshold met (>= ${THRESHOLD}%).`);
