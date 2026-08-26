import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "README.zh-TW.md",
  "feature_list.json",
  "progress.md",
  "session-handoff.md",
  "init.sh"
];

function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`Missing required file: ${relativePath}`);
    return "";
  }

  const content = fs.readFileSync(absolutePath, "utf8");
  if (!content.trim()) {
    failures.push(`Required file is empty: ${relativePath}`);
  }
  return content;
}

function requireText(content, relativePath, markers) {
  for (const marker of markers) {
    if (!content.includes(marker)) {
      failures.push(`${relativePath} is missing required marker: ${marker}`);
    }
  }
}

for (const relativePath of requiredFiles) {
  read(relativePath);
}

const agents = read("AGENTS.md");
requireText(agents, "AGENTS.md", [
  "## Startup Workflow",
  "## Definition of Done",
  "## Verification",
  "## End of Session",
  "progress.md",
  "feature_list.json"
]);

const progress = read("progress.md");
requireText(progress, "progress.md", [
  "## Current State",
  "### Verification Evidence",
  "### Blockers",
  "### Next Session Should",
  "## History"
]);

const handoff = read("session-handoff.md");
requireText(handoff, "session-handoff.md", [
  "**Current objective:**",
  "**Current status:**",
  "## Blockers",
  "## Files Relevant to the Next Update",
  "## Recommended Next Step"
]);

let featureState;
try {
  featureState = JSON.parse(read("feature_list.json"));
} catch (error) {
  failures.push(`feature_list.json is invalid JSON: ${error.message}`);
}

if (featureState) {
  const features = featureState.features;
  if (!Array.isArray(features) || features.length === 0) {
    failures.push("feature_list.json must contain a non-empty features array");
  } else {
    const ids = new Set();
    const allowedStatuses = new Set(["pending", "in-progress", "blocked", "complete"]);
    let activeCount = 0;

    for (const feature of features) {
      for (const field of ["id", "name", "description", "status"]) {
        if (typeof feature[field] !== "string" || !feature[field].trim()) {
          failures.push(`Feature ${feature.id ?? "<unknown>"} has an invalid ${field}`);
        }
      }

      if (ids.has(feature.id)) {
        failures.push(`Duplicate feature id: ${feature.id}`);
      }
      ids.add(feature.id);

      if (!allowedStatuses.has(feature.status)) {
        failures.push(`Feature ${feature.id} has unsupported status: ${feature.status}`);
      }
      if (feature.status === "in-progress") {
        activeCount += 1;
      }
      if (!Array.isArray(feature.dependencies)) {
        failures.push(`Feature ${feature.id} must declare a dependencies array`);
      }
      if (!Array.isArray(feature.doneCriteria) || feature.doneCriteria.length === 0) {
        failures.push(`Feature ${feature.id} must declare done criteria`);
      }
      if (feature.status === "complete" && (!Array.isArray(feature.evidence) || feature.evidence.length === 0)) {
        failures.push(`Completed feature ${feature.id} must include evidence`);
      }
    }

    if (activeCount > 1) {
      failures.push(`Only one feature may be in-progress; found ${activeCount}`);
    }

    for (const feature of features) {
      for (const dependency of feature.dependencies ?? []) {
        if (!ids.has(dependency)) {
          failures.push(`Feature ${feature.id} references unknown dependency: ${dependency}`);
        }
      }
    }
  }
}

const readme = read("README.md");
const readmeZh = read("README.zh-TW.md");
requireText(readme, "README.md", ["[繁體中文](./README.zh-TW.md)"]);
requireText(readmeZh, "README.zh-TW.md", ["[English](./README.md)"]);

for (const relativePath of ["README.md", "README.zh-TW.md"]) {
  const content = read(relativePath);
  for (const match of content.matchAll(/\]\((\.\/[^)#]+)\)/g)) {
    const target = path.resolve(root, match[1]);
    if (!fs.existsSync(target)) {
      failures.push(`${relativePath} contains a broken relative link: ${match[1]}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Harness state validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Harness state valid: ${featureState.features.length} features, required lifecycle files present, README links resolved.`);
