import { useCallback, useState } from "react";
import { applyTheme, getInitialTheme, persistTheme, type Theme } from "../utils/theme";

export interface UseThemeResult {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      const nextTheme: Theme = previousTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      persistTheme(nextTheme);
      return nextTheme;
    });
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme
  };
}

