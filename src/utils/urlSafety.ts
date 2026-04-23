export function toSafeExternalHref(url?: string): string | undefined {
  if (!url) return undefined;

  try {
    const parsed = new URL(url.trim());
    const isSafeProtocol = parsed.protocol === "https:" || parsed.protocol === "http:";
    const hasCredentials = Boolean(parsed.username || parsed.password);
    return isSafeProtocol && !hasCredentials ? parsed.toString() : undefined;
  } catch {
    return undefined;
  }
}
