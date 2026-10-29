import { test, expect } from "@playwright/test";
import { resolve } from "node:path";
import { build, preview, type PreviewServer } from "vite";
import react from "@vitejs/plugin-react";

let server: PreviewServer;
test.beforeAll(async () => {
  const root = resolve("tests/fixtures/explorer-host");
  const outDir = resolve(".cache/portfolio-v3/generic-fixture");
  await build({ configFile: false, root, base: "/", plugins: [react()], logLevel: "silent", build: { outDir, emptyOutDir: true } });
  server = await preview({ configFile: false, root, base: "/", logLevel: "silent", build: { outDir }, preview: { host: "127.0.0.1", port: 4189, strictPort: true } });
});
test.afterAll(async () => { if (server) await new Promise<void>((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve())); });

test("generic Explorer runs in a plain React host with ordered groups, search and callbacks", async ({ page }) => {
  await page.goto("http://127.0.0.1:4189");
  await expect(page.locator(".civic-island")).toHaveCount(2);
  await page.locator('[data-node="tools"] .civic-island-label').click();
  await expect(page.locator(".civic-island")).toHaveCount(4);
  expect(await page.locator(".civic-island").evaluateAll(elements => elements.map(element => element.getAttribute("data-node")))).toEqual(["run-log", "inspect", "extract", "alerts"]);
  await page.locator('[data-node="inspect"] .civic-island-label').click();
  await expect(page.locator(".civic-detail h2")).toBeFocused();
  await page.getByRole("button", { name: "List", exact: true }).click();
  await expect(page.locator(".civic-list")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator('[data-explorer-node="inspect"]')).toBeFocused();
  expect(await page.locator(".civic-list li").evaluateAll(elements => elements.map(element => element.getAttribute("data-case")))).toEqual(["run-log", "inspect", "extract", "alerts"]);
  await page.getByRole("searchbox", { name: "Find resources", exact: true }).fill("warnings");
  await expect(page.locator(".civic-list li")).toHaveCount(1);
  await page.getByRole("link", { name: "Open resource: Review alerts", exact: true }).click();
  await expect(page.getByRole("status", { name: "Navigation callback" })).toHaveText("alerts");
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(page.locator(".civic-list li")).toHaveCount(5);
});

test("generic host has no civic runtime chunks, unique accessible IDs and optional detail/navigation", async ({ page }) => {
  const scripts: string[] = [];
  page.on("request", request => { if (request.url().endsWith(".js")) scripts.push(request.url()); });
  await page.goto("http://127.0.0.1:4189/?second&native&no-detail");
  const host = page.getByRole("region", { name: "Primary host", exact: true });
  await host.getByRole("button", { name: "List", exact: true }).click();
  await host.locator('[data-explorer-node="inspect"]').click();
  await expect(host.locator(".civic-detail")).toHaveCount(0);
  await host.getByRole("link", { name: "Open resource: Inspect inputs", exact: true }).click();
  await expect(page).toHaveURL(/#inspect$/);
  expect(await page.locator("[id]").evaluateAll(elements => { const ids = elements.map(element => element.id); return ids.filter((id, index) => ids.indexOf(id) !== index); })).toEqual([]);
  expect(scripts.some(url => /govtech|gridline|LocaleContext/.test(url))).toBe(false);
  expect(await host.locator(".civic-list h2").evaluate(element => element.getBoundingClientRect().width)).toBeLessThanOrEqual(1);
});

test("generic four-node scene stays usable on a small touch viewport without global CSS", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("http://127.0.0.1:4189");
  await page.locator('[data-node="tools"] .civic-island-label').click();
  for (const label of await page.locator(".civic-island-label").all()) {
    await label.scrollIntoViewIfNeeded();
    expect(await label.evaluate(element => { const rect = element.getBoundingClientRect(); return document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest("button") === element.closest("button"); })).toBe(true);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  expect(await page.locator(".civic-scene").evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
});

test("generic desktop detail layout honors the row budget for twelve nodes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:4189/?many");
  await page.locator('[data-node="tools"] .civic-island-label').click();
  await page.locator('[data-node="inspect"] .civic-island-label').click();
  await expect(page.locator(".civic-detail h2")).toBeFocused();
  await expect(page.locator(".civic-island")).toHaveCount(12);
  expect((await page.locator(".civic-islands").boundingBox())!.height).toBeGreaterThanOrEqual(960);
  expect(await page.locator(".civic-scene").evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
  for (const label of await page.locator(".civic-island-label").all()) {
    await label.scrollIntoViewIfNeeded();
    expect(await label.evaluate(element => { const rect = element.getBoundingClientRect(); return document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest("button") === element.closest("button"); })).toBe(true);
  }
});

test("generic automatic overview keeps twelve groups reachable without overlapping labels", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:4189/?many-groups&no-detail");
  await expect(page.locator(".civic-island")).toHaveCount(12);
  for (const target of await page.locator(".civic-island-label,.civic-island-caption").all()) {
    await target.scrollIntoViewIfNeeded();
    expect(await target.evaluate(element => {
      const box = element.getBoundingClientRect();
      return document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2)?.closest("button") === element.closest("button");
    })).toBe(true);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
