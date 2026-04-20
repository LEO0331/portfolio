import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Section } from "../components/layout/Section";
import { usePageSeo } from "../utils/seo";

export function NotFoundPage(): JSX.Element {
  usePageSeo("Not Found", "The requested portfolio page could not be found.");

  return (
    <Section>
      <div className="mx-auto max-w-lg rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you requested does not exist.</p>
        <Link to="/" aria-label="Return to home page" className="mt-5 inline-block">
          <Button>Return Home</Button>
        </Link>
      </div>
    </Section>
  );
}
