import { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultContextValue: ThemeContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

interface ThemeProviderProps {
  children: ReactNode;
}

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme !== null) return savedTheme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(getInitialTheme());
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark", "bg-bgDark");
      body.classList.remove("bg-secondary");
    } else {
      body.classList.add("bg-secondary");
      body.classList.remove("dark", "bg-bgDark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};