import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { escapeXml, isSafeRoutePath, readViteBasePath, resolveSiteUrl } from "./site-url.mjs";

const ROOT_DIR = process.cwd();
const ROUTE_CONFIG_PATH = path.join(ROOT_DIR, "src", "routes", "routeConfig.json");
const VITE_CONFIG_PATH = path.join(ROOT_DIR, "vite.config.ts");
const OUTPUT_PATH = path.join(ROOT_DIR, "public", "sitemap.xml");

function buildXmlEntry(siteUrl, route) {
  const loc = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
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
  if (sitemapRoutes.some((route) => !isSafeRoutePath(route.path))) {
    throw new Error("routeConfig.json contains invalid sitemap path values.");
  }

  const basePath = await readViteBasePath(VITE_CONFIG_PATH);
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
