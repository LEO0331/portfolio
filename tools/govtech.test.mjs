import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const run = promisify(execFile);
const root = process.cwd();
const routeConfig = JSON.parse(await readFile(path.join(root, "src/routes/routeConfig.json"), "utf8"));
const pages = [
  ["/govtech", "GovTech & Civic Decision Systems"],
  ["/zh/govtech", "市政資料治理與決策支援系統"],
  ["/govtech/bin-policy", "Public Bin Allocation Decision Support"],
  ["/zh/govtech/bin-policy", "臺北市清潔箱配置決策支援"],
  ["/govtech/civic-1999", "Taipei 1999 Citizen Service Decision Support"],
  ["/zh/govtech/civic-1999", "臺北市 1999 民生通報與環境治理決策支援"],
  ["/govtech/heavy-rain-preparedness", "Heavy-Rain Preparedness & Infrastructure Review"],
  ["/zh/govtech/heavy-rain-preparedness", "豪雨防汛整備與設施查核決策支援"],
  ["/govtech/urban-renewal", "Aging Buildings & Urban Renewal Evidence Decision Support"],
  ["/zh/govtech/urban-renewal", "臺北市老舊建築與都市更新決策支援"]
];

for (const base of ["/", "/portfolio/"]) {
  test(`GovTech crawler artifacts include bilingual static metadata at base ${base}`, async () => {
    const fixture = await mkdtemp(path.join(os.tmpdir(), "portfolio-govtech-"));
    try {
      await Promise.all(["dist", "public", "src/routes"].map((dir) => mkdir(path.join(fixture, dir), { recursive: true })));
      await Promise.all([
        writeFile(path.join(fixture, "src/routes/routeConfig.json"), await readFile(path.join(root, "src/routes/routeConfig.json"))),
        writeFile(path.join(fixture, "vite.config.ts"), `export default { base: "${base}" };`),
        writeFile(path.join(fixture, "dist/index.html"), await readFile(path.join(root, "index.html")))
      ]);
      const env = { ...process.env };
      delete env.SITE_URL;
      for (const script of ["generate-sitemap.mjs", "generate-route-entrypoints.mjs"]) {
        await run(process.execPath, [path.join(root, "tools", script)], { cwd: fixture, env });
      }
      const sitemap = await readFile(path.join(fixture, "public/sitemap.xml"), "utf8");
      const site = `https://leo0331.github.io${base === "/" ? "" : "/portfolio"}`;
      for (const [route, title] of pages) {
        const canonical = `${site}${route}`;
        assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${route} missing from sitemap`);
        const html = await readFile(path.join(fixture, "dist", route.slice(1), "index.html"), "utf8");
        const escapedTitle = title.replaceAll("&", "&amp;");
        assert.ok(html.includes(`<title>${escapedTitle} | Leo Chen</title>`), `${route} missing static title`);
        assert.ok(html.includes(`<meta property="og:title" content="${escapedTitle} | Leo Chen" />`));
        assert.ok(html.includes(`<link rel="canonical" href="${canonical}" />`));
        assert.ok(html.includes(`<meta property="og:url" content="${canonical}" />`));
        const description = routeConfig.routes.find((item) => item.path === route)?.description;
        assert.ok(description, `${route} needs a curated static description`);
        const escapedDescription = description.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'", "&#39;");
        assert.ok(html.includes(`<meta name="description" content="${escapedDescription}" />`));
        assert.ok(html.includes(`<meta property="og:description" content="${escapedDescription}" />`));
        assert.ok(html.includes(`<meta name="twitter:description" content="${escapedDescription}" />`));
        assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
        assert.equal((html.match(/<title>/g) ?? []).length, 1);
        assert.ok(html.includes(`<html lang="${route.startsWith("/zh/") ? "zh-Hant" : "en"}">`));
      }
    } finally {
      await rm(fixture, { recursive: true, force: true });
    }
  });
}
