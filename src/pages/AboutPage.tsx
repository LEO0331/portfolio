import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <h1 className="text-3xl font-bold text-slate-900">About</h1>
          <p className="mt-4 text-slate-700">
            I am a full stack engineer focused on practical implementation, clear interfaces, and maintainable architecture. I build products from idea to working deployment, with attention to both user experience and engineering clarity.
          </p>
          <p className="mt-3 text-slate-700">
            My work combines frontend interface delivery with backend-aware thinking, so features are implemented with realistic data flows, modular structure, and long-term maintainability in mind.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-slate-900">Engineering Focus</h2>
          <p className="mt-2 text-slate-700">
            End-to-end delivery of web and mobile products, including requirements interpretation, UI implementation, feature logic, and deployment readiness.
          </p>
        </article>

        <aside className="space-y-6">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Strengths</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {profile.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Domains of Interest</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {domainsOfInterest.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </article>

          <Link to="/contact" aria-label="Go to contact page" className="block">
            <Button className="w-full">Contact Me</Button>
          </Link>
        </aside>
      </div>
    </Section>
  );
}
