import { skillGroups } from "../../data/skills";
import { Section } from "../layout/Section";

export function SkillsOverview(): JSX.Element {
  return (
    <Section className="border-y border-slate-200 bg-white">
      <h2 className="text-2xl font-semibold text-slate-900">Skills Overview</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Technologies and practices used across portfolio projects and day-to-day engineering work.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={`${group.title}-${item}`} className="rounded-md bg-white px-2.5 py-1 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
