import { Link } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { IntroBlurb } from "../components/home/IntroBlurb";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { SkillsOverview } from "../components/home/SkillsOverview";
import { getButtonClassName } from "../components/common/Button";
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

      <Section className="pt-2 sm:pt-4">
        <div className="panel p-6 text-center sm:p-8">
          <p className="eyebrow">Next Step</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Looking for a reliable full stack engineer?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Review project details, evaluate implementation quality, and reach out for interview or collaboration opportunities.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:mt-5 sm:gap-3">
            <Link to="/projects" aria-label="Browse projects" className={getButtonClassName("primary")}>
              Browse Projects
            </Link>
            <Link to="/contact" aria-label="Contact Leo Chen" className={getButtonClassName("secondary")}>
              Contact Me
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
