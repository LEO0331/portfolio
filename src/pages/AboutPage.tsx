import { Link } from "react-router-dom";
import { getButtonClassName } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { copy } from "../i18n/copy";
import { useLocale } from "../i18n/LocaleContext";
import { getLocalizedProfile } from "../utils/profileLocalization";
import { usePageSeo } from "../utils/seo";

export function AboutPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];
  const localizedProfile = getLocalizedProfile(locale);

  usePageSeo(text.seo.aboutTitle, {
    routePath: toLocalePath("/about"),
    description: text.seo.aboutDescription
  });

  return (
    <Section>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        <article className="panel p-6 sm:p-7 lg:col-span-2">
          <p className="eyebrow">{text.about.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{text.about.title}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
            {text.about.p1}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            {text.about.p2}
          </p>

          <div className="mt-6 rule-accent" />

          <h2 className="mt-5 text-xl font-bold text-slate-900 sm:mt-6 sm:text-2xl">{text.about.focusTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            {text.about.focusDescription}
          </p>
        </article>

        <aside className="space-y-3.5 sm:space-y-4">
          <article className="panel-soft p-5">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">{text.about.strengths}</h2>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm text-slate-700 sm:mt-3 sm:space-y-2">
              {localizedProfile.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>

          <article className="panel-soft p-5">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">{text.about.domains}</h2>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm text-slate-700 sm:mt-3 sm:space-y-2">
              {text.about.domainsList.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </article>

          <Link
            to={toLocalePath("/contact")}
            aria-label="Go to contact page"
            className={getButtonClassName("primary", "md", "w-full")}
          >
            {text.about.contactMe}
          </Link>
        </aside>
      </div>
    </Section>
  );
}
