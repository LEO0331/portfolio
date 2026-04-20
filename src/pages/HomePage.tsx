import { Link } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { IntroBlurb } from "../components/home/IntroBlurb";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { SkillsOverview } from "../components/home/SkillsOverview";
import { Button } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { usePageSeo } from "../utils/seo";

export function HomePage(): JSX.Element {
  usePageSeo(
    "Home",
    "Leo Chen portfolio with featured projects, engineering strengths, and links to live demos and source code."
  );

  return (
    <>
      <Hero />
      <IntroBlurb />
      <FeaturedProjects />
      <SkillsOverview />

      <Section>
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Looking for a reliable full stack engineer?</h2>
          <p className="mt-2 text-slate-600">
            Review project details or reach out directly for collaboration and interview opportunities.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link to="/projects" aria-label="Browse projects">
              <Button>Browse Projects</Button>
            </Link>
            <Link to="/contact" aria-label="Contact Leo Chen">
              <Button variant="secondary">Contact Me</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
