import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Locale = "en" | "zh";

interface LocaleContextValue {
  locale: Locale;
  isZh: boolean;
  toLocalePath: (path: string) => string;
  switchLocale: (nextLocale: Locale) => void;
}

const LOCALE_STORAGE_KEY = "portfolio-locale";
const LOCALE_PREFIX = "/zh";
const NON_LOCALIZED_PATHS = new Set(["/404"]);

function stripLocalePrefix(pathname: string): string {
  if (pathname === LOCALE_PREFIX) return "/";
  if (pathname.startsWith(`${LOCALE_PREFIX}/`)) return pathname.slice(LOCALE_PREFIX.length);
  return pathname;
}

function buildLocalizedPath(pathname: string, locale: Locale): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const stripped = stripLocalePrefix(normalized);
  if (locale === "zh") {
    return stripped === "/" ? LOCALE_PREFIX : `${LOCALE_PREFIX}${stripped}`;
  }
  return stripped;
}

function getLocaleFromPath(pathname: string): Locale {
  return pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`) ? "zh" : "en";
}

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return value === "zh" || value === "en" ? value : null;
  } catch {
    return null;
  }
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

interface LocaleProviderProps {
  children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPath(location.pathname);

  useEffect(() => {
    const storedLocale = getStoredLocale();
    if (!storedLocale) return;
    if (storedLocale === locale) return;
    if (location.pathname.startsWith(LOCALE_PREFIX)) return;
    if (NON_LOCALIZED_PATHS.has(location.pathname)) return;

    const nextPath = buildLocalizedPath(location.pathname, storedLocale);
    navigate(`${nextPath}${location.search}`, { replace: true });
  }, [locale, location.pathname, location.search, navigate]);

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage failures in restricted/private contexts.
    }
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      isZh: locale === "zh",
      toLocalePath: (path: string) => buildLocalizedPath(path, locale),
      switchLocale: (nextLocale: Locale) => {
        if (nextLocale === locale) return;
        const nextPath = buildLocalizedPath(location.pathname, nextLocale);
        navigate(`${nextPath}${location.search}`);
      }
    }),
    [locale, location.pathname, location.search, navigate]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
