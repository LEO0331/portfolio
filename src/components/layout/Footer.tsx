import { profile } from "../../data/profile";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";
import { toSafeExternalHref } from "../../utils/urlSafety";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const safeWebsiteUrl = toSafeExternalHref(profile.websiteUrl);
  const safeGithubUrl = toSafeExternalHref(profile.githubUrl);
  const safeLinkedinUrl = toSafeExternalHref(profile.linkedinUrl);
  const hasWebsite = Boolean(safeWebsiteUrl);
  const hasLinkedIn = Boolean(safeLinkedinUrl);

  return (
    <footer className="border-t border-slate-200/90 bg-white/90 py-10">
      <PageContainer className="space-y-5">
        <div className="rule-accent" />
        <div className="flex flex-col gap-4 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Intelligently designed, passionately built, and seamlessly delivered to the world.</p>
            <p className="mt-1 font-semibold text-slate-800">© {year} {profile.fullName}. All rights reserved.</p>
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
              <span>LinkedIn: YOUR_LINKEDIN_URL_HERE</span>
            )}
            {hasWebsite ? (
              <ExternalLink href={safeWebsiteUrl} label="Open personal website" className="font-semibold">
                Website
              </ExternalLink>
            ) : (
              <span>Website: YOUR_WEBSITE_URL_HERE</span>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Fueling innovation through dedicated craftsmanship and intelligent design.
        </p>
      </PageContainer>
    </footer>
  );
}
