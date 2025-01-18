import { useEffect } from "react";
import useThemeContext from "./useThemeContext";

export function useChangeTheme() {
  const { theme } = useThemeContext();

  useEffect(() => {
    const html = document.getElementById("html");

    if (html) {
      html.classList.remove("light", "dark");
      html.classList.add(theme);
    }
  }, [theme]);
}
