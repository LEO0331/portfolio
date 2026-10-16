import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { isSafeRoutePath, readViteBasePath, resolveSiteUrl } from "./site-url.mjs";

const root = process.cwd();
const distDir = path.join(root, "dist");
const sourceIndex = path.join(distDir, "index.html");
const routeConfigPath = path.join(root, "src", "routes", "routeConfig.json");
const viteConfigPath = path.join(root, "vite.config.ts");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderRouteEntry(source, siteUrl, route) {
  const canonicalUrl = escapeHtml(route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`);
  let output = source
    .replace(/<meta property="og:url" content="[^"]*" \/>/, () => `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, () => `<link rel="canonical" href="${canonicalUrl}" />`);

  if (route.title) {
    const title = escapeHtml(route.title);
    output = output
      .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
      .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, () => `<meta property="og:title" content="${title}" />`)
      .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, () => `<meta name="twitter:title" content="${title}" />`);
  }

  if (route.description) {
    const description = escapeHtml(route.description);
    output = output
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, () => `<meta name="description" content="${description}" />`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, () => `<meta property="og:description" content="${description}" />`)
      .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, () => `<meta name="twitter:description" content="${description}" />`);
  }

  output = output.replace(/<html lang="[^"]*">/, () => `<html lang="${route.path === "/zh" || route.path.startsWith("/zh/") ? "zh-Hant" : "en"}">`);

  if (!route.indexable) {
    output = output.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, nofollow" />');
  }
  return output;
}

async function writeRouteEntry(source, siteUrl, route) {
  if (route.path === "/") return;
  const relativeRoute = route.path.replace(/^\/+|\/+$/g, "");
  const outputDir = path.join(distDir, ...relativeRoute.split("/"));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), renderRouteEntry(source, siteUrl, route), "utf8");
}

async function main() {
  const routeConfig = JSON.parse(await readFile(routeConfigPath, "utf8"));
  if (routeConfig.routes.some((route) => !isSafeRoutePath(route.path))) {
    throw new Error("routeConfig.json contains an unsafe route path.");
  }

  const basePath = await readViteBasePath(viteConfigPath);
  const siteUrl = resolveSiteUrl(basePath, "generate-route-entrypoints");
  const source = await readFile(sourceIndex, "utf8");

  await Promise.all(routeConfig.routes.map((route) => writeRouteEntry(source, siteUrl, route)));
  const rootRoute = routeConfig.routes.find((route) => route.path === "/");
  const notFoundRoute = routeConfig.routes.find((route) => route.path === "/404");
  if (!rootRoute || !notFoundRoute) {
    throw new Error("routeConfig.json must include / and /404 routes.");
  }
  await writeFile(sourceIndex, renderRouteEntry(source, siteUrl, rootRoute), "utf8");
  await writeFile(path.join(distDir, "404.html"), renderRouteEntry(source, siteUrl, notFoundRoute), "utf8");
  console.log(`[generate-route-entrypoints] Wrote ${routeConfig.routes.length - 1} route entrypoints and dist/404.html`);
}

main().catch((error) => {
  console.error("[generate-route-entrypoints] Failed:", error);
  process.exitCode = 1;
});
