import { readFile } from "node:fs/promises";
import process from "node:process";

export function normalizeBasePath(basePath) {
  if (!basePath || basePath === "/") return "";
  const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function sanitizeSiteUrl(rawUrl) {
  const parsed = new URL(rawUrl);
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("SITE_URL must use http or https protocol.");
  }

  // Avoid embedding credentials/query/hash in generated crawler files.
  parsed.username = "";
  parsed.password = "";
  parsed.search = "";
  parsed.hash = "";

  return parsed.toString().replace(/\/+$/, "");
}

export function resolveSiteUrl(basePath, context) {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) {
    return sanitizeSiteUrl(fromEnv);
  }

  const fallbackOrigin = "https://leo0331.github.io";
  const normalizedBase = normalizeBasePath(basePath);
  const fallbackUrl = `${fallbackOrigin}${normalizedBase}`.replace(/\/+$/, "");
  console.warn(`[${context}] SITE_URL is not set. Using fallback: ${fallbackUrl}`);
  return fallbackUrl;
}

export function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function readViteBasePath(viteConfigPath) {
  const viteConfigContent = await readFile(viteConfigPath, "utf8");
  const baseMatch = viteConfigContent.match(/base:\s*["'`]([^"'`]+)["'`]/);
  const rawBase = baseMatch?.[1] ?? "/";
  return normalizeBasePath(rawBase);
}

export function isSafeRoutePath(routePath) {
  return typeof routePath === "string" && /^\/[a-z0-9/-]*$/i.test(routePath);
}
