export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

function hasWindow(): boolean {
  return typeof window !== "undefined";
}

export function getSystemTheme(): Theme {
  if (!hasWindow() || typeof window.matchMedia !== "function") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getStoredTheme(): Theme | null {
  if (!hasWindow()) return null;

  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    return null;
  }

  return null;
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function persistTheme(theme: Theme): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors (privacy mode, restricted environments).
  }
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function initializeTheme(): Theme {
  const theme = getInitialTheme();
  applyTheme(theme);
  return theme;
}

