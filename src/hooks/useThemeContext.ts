import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Estas usando el contexto mal");
  }
  return context;
}
