import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { escapeXml, normalizeBasePath, resolveSiteUrl } from "./site-url.mjs";

const ROOT_DIR = process.cwd();
const ROUTE_CONFIG_PATH = path.join(ROOT_DIR, "src", "routes", "routeConfig.json");
const VITE_CONFIG_PATH = path.join(ROOT_DIR, "vite.config.ts");
const OUTPUT_PATH = path.join(ROOT_DIR, "public", "sitemap.xml");

async function readViteBasePath() {
  const viteConfigContent = await readFile(VITE_CONFIG_PATH, "utf8");
  const baseMatch = viteConfigContent.match(/base:\s*["'`]([^"'`]+)["'`]/);
  const rawBase = baseMatch?.[1] ?? "/";
  return normalizeBasePath(rawBase);
}

function hashRoutePath(routePath) {
  if (routePath === "/") return "#/";
  return `#${routePath}`;
}

function isValidRoutePath(routePath) {
  return typeof routePath === "string" && /^\/[a-z0-9/-]*$/i.test(routePath);
}

function buildXmlEntry(siteUrl, route) {
  const loc = `${siteUrl}/${hashRoutePath(route.path)}`;
  const changefreq = route.changefreq ?? "monthly";
  const priority = typeof route.priority === "number" ? route.priority.toFixed(1) : "0.5";

  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

async function main() {
  const routeConfigContent = await readFile(ROUTE_CONFIG_PATH, "utf8");
  const routeConfig = JSON.parse(routeConfigContent);
  const sitemapRoutes = routeConfig.routes.filter((route) => route.indexable);
  const hasInvalidPath = sitemapRoutes.some((route) => !isValidRoutePath(route.path));
  if (hasInvalidPath) {
    throw new Error("routeConfig.json contains invalid sitemap path values.");
  }

  const basePath = await readViteBasePath();
  const siteUrl = resolveSiteUrl(basePath, "generate-sitemap");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapRoutes.map((route) => buildXmlEntry(siteUrl, route)),
    "</urlset>",
    ""
  ].join("\n");

  await writeFile(OUTPUT_PATH, xml, "utf8");
  console.log(`[generate-sitemap] Wrote ${sitemapRoutes.length} routes to ${path.relative(ROOT_DIR, OUTPUT_PATH)}`);
}

main().catch((error) => {
  console.error("[generate-sitemap] Failed to generate sitemap:", error);
  process.exitCode = 1;
});
