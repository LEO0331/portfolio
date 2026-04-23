import { profile } from "../../data/profile";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { Section } from "../layout/Section";

export function IntroBlurb(): JSX.Element {
  const { locale, isZh } = useLocale();
  const text = copy[locale];
  const paragraphs = isZh
    ? [
        "我擅長打造實用且以使用者為中心的應用，重視可維護架構、清晰介面與端到端交付能力。",
        "作品涵蓋 React、TypeScript、JavaScript、Flutter 與靜態網站部署，並盡可能提供可直接驗證的線上 Demo。",
        "此網站設計重點是讓招募方能快速理解我做過什麼、使用哪些技術，以及可直接檢視的成果。"
      ]
    : profile.introParagraphs;

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
