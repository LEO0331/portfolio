import { ExternalLink } from "../components/common/ExternalLink";
import { Section } from "../components/layout/Section";
import { profile } from "../data/profile";
import { usePageSeo } from "../utils/seo";

export function ContactPage(): JSX.Element {
  usePageSeo(
    "Contact",
    "Contact Leo Chen via personal website, GitHub, LinkedIn, and resume links."
  );

  const hasWebsite = profile.websiteUrl !== "YOUR_WEBSITE_URL_HERE";
  const hasLinkedIn = profile.linkedinUrl !== "YOUR_LINKEDIN_URL_HERE";

  return (
    <Section>
      <div className="mx-auto max-w-3xl panel p-6 sm:p-10">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Let’s Connect</h1>
        <p className="mt-2.5 text-sm text-slate-600 sm:mt-3 sm:text-base">
          Open to full stack engineering opportunities and technical collaboration.
        </p>

        <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 sm:text-base">
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">Website: </span>
            {hasWebsite ? (
              <ExternalLink href={profile.websiteUrl} label="Open personal website">
                {profile.websiteUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">YOUR_WEBSITE_URL_HERE</span>
            )}
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">GitHub: </span>
            <ExternalLink href={profile.githubUrl} label="Open GitHub profile">
              {profile.githubUrl}
            </ExternalLink>
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">LinkedIn: </span>
            {hasLinkedIn ? (
              <ExternalLink href={profile.linkedinUrl} label="Open LinkedIn profile">
                {profile.linkedinUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">YOUR_LINKEDIN_URL_HERE</span>
            )}
          </li>
          <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="font-semibold text-slate-900">Resume: </span>
            <ExternalLink href={profile.resumeUrl} label="Open resume PDF">
              View Resume
            </ExternalLink>
          </li>
        </ul>
      </div>
    </Section>
  );
}
