import { useEffect } from "react";

const TITLE_SUFFIX = "Leo Chen";
const DEFAULT_OG_IMAGE = "/og-image.png";
const DEFAULT_SITE_TITLE = "Leo Chen Portfolio";
const DEFAULT_DESCRIPTION =
  "Leo Chen portfolio: full stack engineering projects, technologies used, roles, live demos, and source code.";

type JsonLdNode = Record<string, unknown>;

interface SeoOptions {
  description?: string;
  routePath?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: JsonLdNode[];
}

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(scriptId: string, payload: JsonLdNode): void {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${scriptId}`);
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

function removeJsonLd(scriptId: string): void {
  const node = document.head.querySelector(`script#${scriptId}`);
  node?.remove();
}

function normalizeRoutePath(routePath: string | undefined): string {
  if (!routePath || routePath === "/") return "/";
  return routePath.startsWith("/") ? routePath : `/${routePath}`;
}

function getSiteOriginAndBase(): string {
  if (typeof window === "undefined") return "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME";
  return new URL(import.meta.env.BASE_URL, window.location.origin).toString().replace(/\/$/, "");
}

function buildCanonicalUrl(routePath?: string): string {
  const base = getSiteOriginAndBase();
  const normalized = normalizeRoutePath(routePath);
  if (normalized === "/") return `${base}/#/`;
  return `${base}/#${normalized}`;
}

function buildGlobalJsonLd(): JsonLdNode[] {
  const siteUrl = `${getSiteOriginAndBase()}/#/`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Leo Chen",
      jobTitle: "Full Stack Engineer",
      url: siteUrl,
      sameAs: [
        "https://leolicheng.wordpress.com/",
        "https://github.com/LEO0331",
        "https://linkedin.com/in/li-cheng-chen"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: DEFAULT_SITE_TITLE,
      url: siteUrl
    }
  ];
}

export function usePageSeo(pageTitle: string, optionsOrDescription?: SeoOptions | string): void {
  const options: SeoOptions =
    typeof optionsOrDescription === "string" ? { description: optionsOrDescription } : optionsOrDescription ?? {};
  const description = options.description ?? DEFAULT_DESCRIPTION;
  const routePath = options.routePath;
  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE;
  const noIndex = options.noIndex ?? false;
  const jsonLd = options.jsonLd;

  useEffect(() => {
    const canonicalUrl = buildCanonicalUrl(routePath);
    const ogImageUrl = new URL(ogImage, getSiteOriginAndBase()).toString();
    const finalTitle = `${pageTitle} | ${TITLE_SUFFIX}`;
    const robotsValue = noIndex ? "noindex, nofollow" : "index, follow";
    const pageSchema: JsonLdNode = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: finalTitle,
      url: canonicalUrl,
      description
    };

    document.title = finalTitle;
    upsertCanonical(canonicalUrl);
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", robotsValue);
    upsertMeta('meta[property="og:title"]', "property", "og:title", finalTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", finalTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);

    upsertJsonLd("seo-jsonld-site", {
      "@context": "https://schema.org",
      "@graph": buildGlobalJsonLd()
    });
    upsertJsonLd("seo-jsonld-page", pageSchema);

    if (jsonLd && jsonLd.length > 0) {
      upsertJsonLd("seo-jsonld-extra", {
        "@context": "https://schema.org",
        "@graph": jsonLd
      });
      return;
    }

    removeJsonLd("seo-jsonld-extra");
  }, [description, jsonLd, noIndex, ogImage, pageTitle, routePath]);
}
