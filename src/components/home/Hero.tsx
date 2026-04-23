import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { getButtonClassName } from "../common/Button";
import { Section } from "../layout/Section";

export function Hero(): JSX.Element {
  return (
    <Section className="pb-8 pt-14 sm:pt-20">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div className="space-y-4 sm:space-y-5">
          <p className="eyebrow">Full Stack Engineer </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>
          <p className="text-lg font-semibold text-brand-700 sm:text-xl">{profile.title}</p>
          <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{profile.summary}</p>
          <div className="flex flex-wrap gap-2.5 pt-1.5 sm:gap-3 sm:pt-2">
            <Link to="/projects" aria-label="View projects" className={getButtonClassName("primary")}>
              View Projects
            </Link>
            <Link to="/contact" aria-label="Contact Leo Chen" className={getButtonClassName("secondary")}>
              Contact
            </Link>
          </div>
        </div>

        <aside className="panel p-4 sm:p-5">
          <p className="eyebrow">Empowering the future with intelligent design and pure passion</p>
          <div className="mt-3 space-y-2.5 text-xs leading-6 text-slate-700 sm:text-sm sm:leading-6">
            <p>
              <span className="font-semibold text-slate-900">Primary focus:</span> shipping maintainable web apps end-to-end.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Strength profile:</span> product-minded implementation with practical architecture.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Proof points:</span> live demos and source links across portfolio projects.
            </p>
          </div>
          <div className="mt-4 rule-accent" />
        </aside>
      </div>
    </Section>
  );
}
