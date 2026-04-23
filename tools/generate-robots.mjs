import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { normalizeBasePath, resolveSiteUrl } from "./site-url.mjs";

const ROOT_DIR = process.cwd();
const VITE_CONFIG_PATH = path.join(ROOT_DIR, "vite.config.ts");
const OUTPUT_PATH = path.join(ROOT_DIR, "public", "robots.txt");

async function readViteBasePath() {
  const viteConfigContent = await readFile(VITE_CONFIG_PATH, "utf8");
  const baseMatch = viteConfigContent.match(/base:\s*["'`]([^"'`]+)["'`]/);
  const rawBase = baseMatch?.[1] ?? "/";
  return normalizeBasePath(rawBase);
}

async function main() {
  const basePath = await readViteBasePath();
  const siteUrl = resolveSiteUrl(basePath, "generate-robots");
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

  await writeFile(OUTPUT_PATH, content, "utf8");
  console.log(`[generate-robots] Wrote robots file to ${path.relative(ROOT_DIR, OUTPUT_PATH)}`);
}

main().catch((error) => {
  console.error("[generate-robots] Failed to generate robots.txt:", error);
  process.exitCode = 1;
});
