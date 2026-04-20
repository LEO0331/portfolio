import { profile } from "../../data/profile";
import { Section } from "../layout/Section";

export function IntroBlurb(): JSX.Element {
  return (
    <Section>
      <div className="panel p-6 sm:p-8">
        <p className="eyebrow">Professional Summary</p>
        <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {profile.introParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
