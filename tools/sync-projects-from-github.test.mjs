import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  setStringProperty,
  validateGeneratedProjectsSource
} from "./sync-projects-from-github.mjs";
import { extractObjectBlocks, extractProjectsArrayContent } from "./project-source.mjs";
import { sanitizePublicDemoUrl, toPublicDemoUrl } from "./public-demo-url.mjs";

const projectSource = `import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "alpha",
    slug: "alpha",
    shortDescription:
      "Alpha description.",
    features: ["Nested { brace } content"],
    image: "/src/assets/images/projects/alpha.png",
    repoUrl: "https://github.com/LEO0331/alpha"
  },
  {
    id: "beta",
    slug: "beta",
    shortDescription: "Beta description.",
    image: "/src/assets/images/projects/beta.png",
    repoUrl: "https://github.com/LEO0331/beta"
  }
];
`;

test("extracts the canonical projects array without being confused by braces in strings", () => {
  const arrayContent = extractProjectsArrayContent(projectSource);
  assert.equal(typeof arrayContent, "string");
  const blocks = extractObjectBlocks(arrayContent);
  assert.equal(blocks.length, 2);
  assert.match(blocks[0], /id: "alpha"/);
  assert.equal(extractProjectsArrayContent("export const other = [];"), undefined);
});

test("updates a multiline string property without changing the surrounding object", () => {
  const block = extractObjectBlocks(extractProjectsArrayContent(projectSource))[0];
  const updated = setStringProperty(block, "shortDescription", "Updated description.");
  assert.match(updated, /shortDescription:\s*\n\s*"Updated description\."/);
  assert.match(updated, /repoUrl: "https:\/\/github\.com\/LEO0331\/alpha"/);
});

test("property updates preserve literal replacement tokens in every supported shape", () => {
  const value = "Replacement $& / $` / $' / $$";
  const encoded = JSON.stringify(value);
  for (const [block, property, expected] of [
    ['{\n    demoUrl: "old",\n}', "demoUrl", `{\n    demoUrl: ${encoded},\n}`],
    ['{\n    shortDescription:\n      "old",\n}', "shortDescription", `{\n    shortDescription:\n      ${encoded},\n}`],
    ['{\n    image: "/alpha.png",\n}', "demoUrl", `{\n    image: "/alpha.png",\n    demoUrl: ${encoded},\n}`]
  ]) {
    assert.equal(setStringProperty(block, property, value), expected);
  }
});

test("sync CLI writes approved dollar-bearing URLs without changing curated project text", () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-sync-test-"));
  try {
    const curated = "Curated $& / $` / $' / $$";
    const input = projectSource.replace("Alpha description.", () => curated);
    const demo = "https://example.vercel.app/$&/$'/$$";
    const expectedDemo = sanitizePublicDemoUrl(demo);
    assert.ok(expectedDemo);
    const dataDirectory = path.join(temporary, "src/data");
    fs.mkdirSync(dataDirectory, { recursive: true });
    const projectsPath = path.join(dataDirectory, "projects.ts");
    fs.writeFileSync(projectsPath, input);
    const preload = path.join(temporary, "mock-fetch.mjs");
    const repositories = [{ name: "alpha", homepage: demo }, { name: "beta", homepage: "" }];
    fs.writeFileSync(preload, `globalThis.fetch = async () => ({ ok: true, json: async () => ${JSON.stringify(repositories)} });\n`);
    execFileSync(process.execPath, [
      "--import", pathToFileURL(preload).href,
      fileURLToPath(new URL("./sync-projects-from-github.mjs", import.meta.url)), "--write"
    ], { cwd: temporary, env: { ...process.env, GITHUB_TOKEN: "" }, stdio: "pipe" });
    const expected = input.replace('    image: "/src/assets/images/projects/alpha.png",',
      () => `    image: "/src/assets/images/projects/alpha.png",\n    demoUrl: ${JSON.stringify(expectedDemo)},`);
    assert.equal(fs.readFileSync(projectsPath, "utf8"), expected);
  } finally {
    assert.equal(path.dirname(temporary), path.resolve(os.tmpdir()));
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});

test("rejects unsafe or credential-bearing homepage URLs", () => {
  assert.equal(sanitizePublicDemoUrl("javascript:alert(1)"), undefined);
  assert.equal(sanitizePublicDemoUrl("https://user:secret@example.com"), undefined);
  assert.equal(sanitizePublicDemoUrl(" https://leo0331.github.io/demo "), "https://leo0331.github.io/demo");
  assert.equal(sanitizePublicDemoUrl("http://localhost:3000"), undefined);
  assert.equal(sanitizePublicDemoUrl("http://192.168.1.20"), undefined);
  assert.equal(sanitizePublicDemoUrl("https://unreviewed.example.com"), undefined);
  assert.throws(() => toPublicDemoUrl("https://internal.local"), /not an approved public host/);
});

test("validates project count and identifier uniqueness before writing", () => {
  assert.doesNotThrow(() => validateGeneratedProjectsSource(projectSource, 2));
  assert.throws(() => validateGeneratedProjectsSource(projectSource, 3), /project count unexpectedly/);

  const duplicate = projectSource.replace('id: "beta"', 'id: "alpha"');
  assert.throws(() => validateGeneratedProjectsSource(duplicate, 2), /duplicate project ids or slugs/);
});
