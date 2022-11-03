import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const switchTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageTheme: any = localStorage.getItem("theme");

      if (!!storageTheme) setTheme(storageTheme);
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
