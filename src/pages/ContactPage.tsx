import { ExternalLink } from "../components/common/ExternalLink";
import { Section } from "../components/layout/Section";
import { profile } from "../data/profile";
import { usePageSeo } from "../utils/seo";

export function ContactPage(): JSX.Element {
  usePageSeo(
    "Contact",
    "Contact Leo Chen via email, GitHub, LinkedIn, and resume links."
  );

  const hasEmail = profile.email !== "YOUR_EMAIL_HERE";
  const hasLinkedIn = profile.linkedinUrl !== "YOUR_LINKEDIN_URL_HERE";

  return (
    <Section>
      <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-600">
          Open to full stack engineering opportunities and technical collaboration.
        </p>

        <ul className="mt-6 space-y-4 text-sm sm:text-base">
          <li>
            <span className="font-semibold text-slate-900">Email: </span>
            {hasEmail ? (
              <a href={`mailto:${profile.email}`} className="text-brand-600 hover:underline">
                {profile.email}
              </a>
            ) : (
              <span className="text-slate-600">YOUR_EMAIL_HERE</span>
            )}
          </li>
          <li>
            <span className="font-semibold text-slate-900">GitHub: </span>
            <ExternalLink href={profile.githubUrl} label="Open GitHub profile">
              {profile.githubUrl}
            </ExternalLink>
          </li>
          <li>
            <span className="font-semibold text-slate-900">LinkedIn: </span>
            {hasLinkedIn ? (
              <ExternalLink href={profile.linkedinUrl} label="Open LinkedIn profile">
                {profile.linkedinUrl}
              </ExternalLink>
            ) : (
              <span className="text-slate-600">YOUR_LINKEDIN_URL_HERE</span>
            )}
          </li>
          <li>
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
