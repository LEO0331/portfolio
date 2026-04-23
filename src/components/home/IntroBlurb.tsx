import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { getLocalizedProfile } from "../../utils/profileLocalization";
import { Section } from "../layout/Section";

export function IntroBlurb(): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];
  const localizedProfile = getLocalizedProfile(locale);
  const paragraphs = localizedProfile.introParagraphs;

  return (
    <Section>
      <div className="panel p-6 sm:p-8">
        <p className="eyebrow">{text.home.summaryEyebrow}</p>
        <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
