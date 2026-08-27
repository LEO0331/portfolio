import assert from "node:assert/strict";
import test from "node:test";
import { escapeXml, isSafeRoutePath, normalizeBasePath } from "./site-url.mjs";

test("normalizes Vite base paths consistently", () => {
  assert.equal(normalizeBasePath("/"), "");
  assert.equal(normalizeBasePath("portfolio/"), "/portfolio");
  assert.equal(normalizeBasePath("/portfolio///"), "/portfolio");
});

test("accepts configured app routes and rejects traversal or URL syntax", () => {
  assert.equal(isSafeRoutePath("/"), true);
  assert.equal(isSafeRoutePath("/zh/projects"), true);
  assert.equal(isSafeRoutePath("/../secrets"), false);
  assert.equal(isSafeRoutePath("/projects?draft=true"), false);
  assert.equal(isSafeRoutePath("/projects\\draft"), false);
});

test("escapes generated sitemap values", () => {
  assert.equal(escapeXml(`https://example.com/?a=1&b="two"`), "https://example.com/?a=1&amp;b=&quot;two&quot;");
});
