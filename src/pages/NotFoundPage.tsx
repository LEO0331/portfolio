import { Link } from "react-router-dom";
import { getButtonClassName } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { copy } from "../i18n/copy";
import { useLocale } from "../i18n/LocaleContext";
import { usePageSeo } from "../utils/seo";

export function NotFoundPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];

  usePageSeo(text.seo.notFoundTitle, {
    routePath: "/404",
    description: text.seo.notFoundDescription,
    noIndex: true
  });

  return (
    <Section>
      <div className="mx-auto max-w-lg panel p-6 text-center sm:p-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{text.notFound.title}</h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">{text.notFound.description}</p>
        <Link
          to={toLocalePath("/")}
          aria-label="Return to home page"
          className={getButtonClassName("primary", "md", "mt-5 inline-flex")}
        >
          {text.notFound.returnHome}
        </Link>
      </div>
    </Section>
  );
}
