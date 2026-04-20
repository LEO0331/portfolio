import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { Button } from "../common/Button";
import { Section } from "../layout/Section";

export function Hero(): JSX.Element {
  return (
    <Section className="pb-10 pt-14 sm:pt-20">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Available for Full Stack Engineering Roles</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{profile.fullName}</h1>
        <p className="text-xl font-medium text-slate-700">{profile.title}</p>
        <p className="text-base leading-7 text-slate-600">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/projects" aria-label="View projects">
            <Button>View Projects</Button>
          </Link>
          <Link to="/contact" aria-label="Contact Leo Chen">
            <Button variant="secondary">Contact</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
