import { ExternalLink } from "../components/common/ExternalLink";
import { Section } from "../components/layout/Section";
import { profile } from "../data/profile";
import { copy } from "../i18n/copy";
import { useLocale } from "../i18n/LocaleContext";
import { usePageSeo } from "../utils/seo";
import { toSafeExternalHref } from "../utils/urlSafety";

export function ContactPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];

  usePageSeo(text.seo.contactTitle, {
    routePath: toLocalePath("/contact"),
    description: text.seo.contactDescription
  });

  const safeWebsiteUrl = toSafeExternalHref(profile.websiteUrl);
  const safeGithubUrl = toSafeExternalHref(profile.githubUrl);
  const safeLinkedInUrl = toSafeExternalHref(profile.linkedinUrl);
  const hasWebsite = Boolean(safeWebsiteUrl);
  const hasLinkedIn = Boolean(safeLinkedInUrl);

  return (
    <Section>
      <div className="mx-auto max-w-3xl panel p-6 sm:p-10">
        <p className="eyebrow">{text.contact.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{text.contact.title}</h1>
        <p className="mt-2.5 text-sm text-slate-600 sm:mt-3 sm:text-base">
          {text.contact.intro}
        </p>

        <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 sm:text-base">
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">{text.contact.website} </span>
            {hasWebsite ? (
              <ExternalLink href={safeWebsiteUrl} label="Open personal website">
                {safeWebsiteUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">{text.contact.websiteFallback}</span>
            )}
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">{text.contact.github} </span>
            {safeGithubUrl ? (
              <ExternalLink href={safeGithubUrl} label="Open GitHub profile">
                {safeGithubUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">{text.contact.githubFallback}</span>
            )}
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">{text.contact.linkedin} </span>
            {hasLinkedIn ? (
              <ExternalLink href={safeLinkedInUrl} label="Open LinkedIn profile">
                {safeLinkedInUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">{text.contact.linkedinFallback}</span>
            )}
          </li>
        </ul>
      </div>
    </Section>
  );
}
