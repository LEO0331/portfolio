import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { getButtonClassName } from "../common/Button";
import { Section } from "../layout/Section";

export function Hero(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];

  return (
    <Section className="pb-8 pt-14 sm:pt-20">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div className="space-y-4 sm:space-y-5">
          <p className="eyebrow">{text.home.heroEyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>
          <p className="text-lg font-semibold text-brand-700 sm:text-xl">{text.home.heroTitle}</p>
          <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{text.home.heroSummary}</p>
          <div className="flex flex-wrap gap-2.5 pt-1.5 sm:gap-3 sm:pt-2">
            <Link to={toLocalePath("/projects")} aria-label="View projects" className={getButtonClassName("primary")}>
              {text.home.viewProjects}
            </Link>
            <Link to={toLocalePath("/contact")} aria-label="Contact Leo Chen" className={getButtonClassName("secondary")}>
              {text.home.contact}
            </Link>
          </div>
        </div>

        <aside className="panel p-4 sm:p-5">
          <p className="eyebrow">{text.home.valueCardEyebrow}</p>
          <div className="mt-3 space-y-2.5 text-xs leading-6 text-slate-700 sm:text-sm sm:leading-6">
            <p>
              <span className="font-semibold text-slate-900">{text.home.primaryFocus}</span> {text.home.primaryFocusValue}
            </p>
            <p>
              <span className="font-semibold text-slate-900">{text.home.strengthProfile}</span> {text.home.strengthProfileValue}
            </p>
            <p>
              <span className="font-semibold text-slate-900">{text.home.proofPoints}</span> {text.home.proofPointsValue}
            </p>
          </div>
          <div className="mt-4 rule-accent" />
        </aside>
      </div>
    </Section>
  );
}
