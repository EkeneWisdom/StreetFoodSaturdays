import branding from "@/config/branding";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = `${branding.shortName.toLowerCase()}-theme`;
const DEFAULT_THEME = branding.DEFAULT_THEME as Theme;

const ThemeContext = createContext<ThemeContextType | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return DEFAULT_THEME === "dark" ? "dark" : "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return (localStorage.getItem(STORAGE_KEY) as Theme) || DEFAULT_THEME;
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
    () => {
      if (typeof window === "undefined") {
        return DEFAULT_THEME === "dark" ? "dark" : "light";
      }
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const resolved = theme === "system" ? getSystemTheme() : theme;
      setResolvedTheme(resolved);

      document.documentElement.classList.toggle("dark", resolved === "dark");
    };

    apply();

    media.addEventListener("change", apply);

    return () => media.removeEventListener("change", apply);
  }, [theme]);

  const setTheme = (value: Theme) => {
    localStorage.setItem(STORAGE_KEY, value);
    setThemeState(value);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

/* import branding from "@/config/branding";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";



export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = `${branding.shortName.toLowerCase()}-theme`;

const ThemeContext = createContext<ThemeContextType | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}


export function ThemeProvider({ children }: { children: ReactNode }) {
  // Lazy state initialization prevents hydration flash
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }); 

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const resolved = theme === "system" ? getSystemTheme() : theme;
      setResolvedTheme(resolved);

      document.documentElement.classList.toggle(
        "dark",
        resolved === "dark",
      );
    };

    apply();

    media.addEventListener("change", apply);

    return () => media.removeEventListener("change", apply);
  }, [theme]);

  const setTheme = (value: Theme) => {
    localStorage.setItem(STORAGE_KEY, value);
    setThemeState(value);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used inside ThemeProvider");

  return context;
}

*/