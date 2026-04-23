import { skillGroups } from "../../data/skills";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { Section } from "../layout/Section";

export function SkillsOverview(): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];

  return (
    <Section>
      <div className="panel p-6 sm:p-8">
        <p className="eyebrow">{text.home.skillsEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{text.home.skillsOverview}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          {text.home.skillsDescription}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-7 sm:gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel-soft p-4">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{group.title}</h3>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item}`} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
