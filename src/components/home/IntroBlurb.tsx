import { profile } from "../../data/profile";
import { Section } from "../layout/Section";

export function IntroBlurb(): JSX.Element {
  return (
    <Section className="border-y border-slate-200 bg-white">
      <div className="max-w-4xl space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Professional Summary</h2>
        {profile.introParagraphs.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
