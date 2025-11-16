import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      return (localStorage.getItem("theme") as Theme) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    try {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
