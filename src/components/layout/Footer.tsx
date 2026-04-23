import { profile } from "../../data/profile";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";
import { toSafeExternalHref } from "../../utils/urlSafety";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const { locale } = useLocale();
  const text = copy[locale];
  const safeWebsiteUrl = toSafeExternalHref(profile.websiteUrl);
  const safeGithubUrl = toSafeExternalHref(profile.githubUrl);
  const safeLinkedinUrl = toSafeExternalHref(profile.linkedinUrl);
  const hasWebsite = Boolean(safeWebsiteUrl);
  const hasLinkedIn = Boolean(safeLinkedinUrl);

  return (
    <footer className="border-t border-slate-200/90 bg-white/90 py-10 dark:border-slate-700/80 dark:bg-slate-950/90">
      <PageContainer className="space-y-5">
        <div className="rule-accent" />
        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">{text.footer.lead}</p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">
              © {year} {profile.fullName}. {text.footer.rights}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {safeGithubUrl ? (
              <ExternalLink href={safeGithubUrl} label="Open GitHub profile" className="font-semibold">
                GitHub
              </ExternalLink>
            ) : null}
            {hasLinkedIn ? (
              <ExternalLink href={safeLinkedinUrl} label="Open LinkedIn profile" className="font-semibold">
                LinkedIn
              </ExternalLink>
            ) : (
              <span>{text.footer.linkedinFallback}</span>
            )}
            {hasWebsite ? (
              <ExternalLink href={safeWebsiteUrl} label="Open personal website" className="font-semibold">
                Website
              </ExternalLink>
            ) : (
              <span>{text.footer.websiteFallback}</span>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {text.footer.note}
        </p>
      </PageContainer>
    </footer>
  );
}
