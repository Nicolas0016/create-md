import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
type theme = "light" | "dark";
interface MarkdownContextType {
  theme: theme;
  updateTheme: () => void;
}

// Definimos el contexto con el valor por defecto
export const ThemeContext = createContext<MarkdownContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: Props) {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState<theme>(prefersDarkMode ? "dark" : "light");

  const updateTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
