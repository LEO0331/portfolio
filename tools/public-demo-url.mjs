const PUBLIC_HOST_SUFFIXES = [
  ".github.io",
  ".vercel.app",
  ".onrender.com",
  ".netlify.app",
  ".pages.dev",
  ".wordpress.com"
];

const PUBLIC_HOSTS = new Set(["github.com"]);

function isAllowedPublicHost(hostname) {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return PUBLIC_HOSTS.has(normalized) || PUBLIC_HOST_SUFFIXES.some((suffix) => normalized.endsWith(suffix));
}

export function toPublicDemoUrl(value) {
  const parsed = new URL(value);
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`Unsupported demoUrl protocol: ${parsed.protocol}`);
  }
  if (parsed.username || parsed.password) {
    throw new Error("demoUrl must not contain credentials");
  }
  if (!isAllowedPublicHost(parsed.hostname)) {
    throw new Error(`demoUrl host is not an approved public host: ${parsed.hostname}`);
  }
  return parsed.toString();
}

export function sanitizePublicDemoUrl(value) {
  if (!value) return undefined;
  try {
    return toPublicDemoUrl(value.trim());
  } catch {
    return undefined;
  }
}
