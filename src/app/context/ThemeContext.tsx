"use client";

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

function ThemeProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const getInitialTheme = (): string => {
      if (typeof window !== "undefined" && window.localStorage) {
        const colorPrefers = window.localStorage.getItem("color-theme");
        if (typeof colorPrefers === "string") return colorPrefers;
      }
      return "light";
    };

    setTheme(getInitialTheme());
  }, []);

  const rawSetTheme = (themeChose: string) => {
    const root = window.document.documentElement;
    const isDark = themeChose === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(themeChose);

    localStorage.setItem("color-theme", themeChose);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      toggleTheme: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
      theme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

// --- easy use this context --- //
export const useThemeCOntext = () => useContext(ThemeContext);
