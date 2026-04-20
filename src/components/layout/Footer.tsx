import { profile } from "../../data/profile";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const hasEmail = profile.email !== "YOUR_EMAIL_HERE";
  const hasLinkedIn = profile.linkedinUrl !== "YOUR_LINKEDIN_URL_HERE";

  return (
    <footer className="border-t border-slate-200/90 bg-white/90 py-10">
      <PageContainer className="space-y-5">
        <div className="rule-accent" />
        <div className="flex flex-col gap-4 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Built For Recruiter Review</p>
            <p className="mt-1 font-semibold text-slate-800">© {year} {profile.fullName}. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <ExternalLink href={profile.githubUrl} label="Open GitHub profile" className="font-semibold">
              GitHub
            </ExternalLink>
            {hasLinkedIn ? (
              <ExternalLink href={profile.linkedinUrl} label="Open LinkedIn profile" className="font-semibold">
                LinkedIn
              </ExternalLink>
            ) : (
              <span>LinkedIn: YOUR_LINKEDIN_URL_HERE</span>
            )}
            {hasEmail ? (
              <a href={`mailto:${profile.email}`} className="font-semibold text-brand-700 hover:underline">
                {profile.email}
              </a>
            ) : (
              <span>Email: YOUR_EMAIL_HERE</span>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Engineered with React, TypeScript, Tailwind CSS, and GitHub Pages deployment.
        </p>
      </PageContainer>
    </footer>
  );
}
