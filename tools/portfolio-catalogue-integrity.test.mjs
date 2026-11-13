import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { extractObjectBlocks, requireProjectsArrayContent } from "./project-source.mjs";

const projectSource = fs.readFileSync("src/data/projects.ts", "utf8");
const zhSource = fs.readFileSync("src/data/projects.zh.ts", "utf8");

test("every curated project has a Traditional Chinese description", () => {
  const projects = extractObjectBlocks(requireProjectsArrayContent(projectSource, "Missing projects array"));
  const ids = projects.map((block) => block.match(/\bid:\s*"([^"]+)"/)?.[1]);
  assert.ok(ids.every(Boolean), "Project IDs must be readable");

  // Object keys may be quoted (e.g. "warmmemo") or unquoted (e.g. boxmatch).
  const translatedIds = [...zhSource.matchAll(/^  (?:"([^"]+)"|([a-zA-Z_$][\w$-]*)):\s*\{/gm)]
    .map((match) => match[1] ?? match[2]);
  assert.equal(new Set(translatedIds).size, translatedIds.length, "Duplicate translations");
  assert.deepEqual(ids.filter((id) => !translatedIds.includes(id)), [], "Missing zh-TW entries");
  assert.deepEqual(translatedIds.filter((id) => !ids.includes(id)), [], "Orphaned zh-TW entries");
});

test("WanderStamp uses its canonical repository URL", () => {
  const projects = extractObjectBlocks(requireProjectsArrayContent(projectSource, "Missing projects array"));
  const wanderStamp = projects.find((block) => /\bid:\s*"warmthfromafar"/.test(block));
  assert.ok(wanderStamp);
  assert.match(wanderStamp, /repoUrl:\s*"https:\/\/github\.com\/LEO0331\/WanderStamp"/);
});
