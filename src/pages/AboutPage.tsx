import { Link } from "react-router-dom";
import { getButtonClassName } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { profile } from "../data/profile";
import { usePageSeo } from "../utils/seo";

const domainsOfInterest = [
  "Developer tools and productivity workflows",
  "Data-oriented user interfaces",
  "Business process and utility applications",
  "Applied product concepts with social impact"
];

export function AboutPage(): JSX.Element {
  usePageSeo(
    "About",
    "Professional background, engineering strengths, and domain interests of Leo Chen, full stack engineer."
  );

  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        <article className="panel p-6 sm:p-7 lg:col-span-2">
          <p className="eyebrow">Profile</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">About</h1>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
            I am a full stack engineer focused on practical implementation, clear interfaces, and maintainable architecture. I build products from idea to working deployment, with attention to both user experience and engineering clarity.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            My work combines frontend interface delivery with backend-aware thinking, so features are implemented with realistic data flows, modular structure, and long-term maintainability in mind.
          </p>

          <div className="mt-6 rule-accent" />

          <h2 className="mt-5 text-xl font-bold text-slate-900 sm:mt-6 sm:text-2xl">Engineering Focus</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            End-to-end delivery of web and mobile products, including requirements interpretation, UI implementation, feature logic, and deployment readiness.
          </p>
        </article>

        <aside className="space-y-3.5 sm:space-y-4">
          <article className="panel-soft p-5">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">Strengths</h2>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm text-slate-700 sm:mt-3 sm:space-y-2">
              {profile.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>

          <article className="panel-soft p-5">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">Domains of Interest</h2>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm text-slate-700 sm:mt-3 sm:space-y-2">
              {domainsOfInterest.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </article>

          <Link
            to="/contact"
            aria-label="Go to contact page"
            className={getButtonClassName("primary", "md", "w-full")}
          >
            Contact Me
          </Link>
        </aside>
      </div>
    </Section>
  );
}
