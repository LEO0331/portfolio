import { profile } from "../../data/profile";
import { ExternalLink } from "../common/ExternalLink";
import { PageContainer } from "./PageContainer";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const hasEmail = profile.email !== "YOUR_EMAIL_HERE";
  const hasLinkedIn = profile.linkedinUrl !== "YOUR_LINKEDIN_URL_HERE";

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <PageContainer className="space-y-3">
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <ExternalLink href={profile.githubUrl} label="Open GitHub profile">
              GitHub
            </ExternalLink>
            {hasLinkedIn ? (
              <ExternalLink href={profile.linkedinUrl} label="Open LinkedIn profile">
                LinkedIn
              </ExternalLink>
            ) : (
              <span>LinkedIn: YOUR_LINKEDIN_URL_HERE</span>
            )}
            {hasEmail ? (
              <a href={`mailto:${profile.email}`} className="text-brand-600 hover:underline">
                {profile.email}
              </a>
            ) : (
              <span>Email: YOUR_EMAIL_HERE</span>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500">Built with React, TypeScript, Tailwind CSS, and deployed via GitHub Pages.</p>
      </PageContainer>
    </footer>
  );
}
