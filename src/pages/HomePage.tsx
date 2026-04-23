import { Link } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { IntroBlurb } from "../components/home/IntroBlurb";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { SkillsOverview } from "../components/home/SkillsOverview";
import { getButtonClassName } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { copy } from "../i18n/copy";
import { useLocale } from "../i18n/LocaleContext";
import { usePageSeo } from "../utils/seo";

export function HomePage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];

  usePageSeo(text.seo.homeTitle, {
    routePath: toLocalePath("/"),
    description: text.seo.homeDescription
  });

  return (
    <>
      <Hero />
      <IntroBlurb />
      <FeaturedProjects />
      <SkillsOverview />

      <Section className="pt-2 sm:pt-4">
        <div className="panel p-6 text-center sm:p-8">
          <p className="eyebrow">{text.home.nextStep}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{text.home.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            {text.home.ctaDescription}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:mt-5 sm:gap-3">
            <Link to={toLocalePath("/projects")} aria-label="Browse projects" className={getButtonClassName("primary")}>
              {text.home.browseProjects}
            </Link>
            <Link to={toLocalePath("/contact")} aria-label="Contact Leo Chen" className={getButtonClassName("secondary")}>
              {text.home.contactMe}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
