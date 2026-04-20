import { useEffect } from "react";

const titlePrefix = "Leo Chen";

export function usePageSeo(pageTitle: string, description?: string): void {
  useEffect(() => {
    document.title = `${pageTitle} | ${titlePrefix}`;

    if (!description) {
      return;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }
  }, [pageTitle, description]);
}
