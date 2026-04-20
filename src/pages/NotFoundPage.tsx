import { Link } from "react-router-dom";
import { getButtonClassName } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { usePageSeo } from "../utils/seo";

export function NotFoundPage(): JSX.Element {
  usePageSeo("Not Found", "The requested portfolio page could not be found.");

  return (
    <Section>
      <div className="mx-auto max-w-lg panel p-6 text-center sm:p-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Page not found</h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">The page you requested does not exist.</p>
        <Link
          to="/"
          aria-label="Return to home page"
          className={getButtonClassName("primary", "md", "mt-5 inline-flex")}
        >
          Return Home
        </Link>
      </div>
    </Section>
  );
}
