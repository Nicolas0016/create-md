import useThemeContext from "../hooks/useThemeContext";
import { Moon, Sun } from "./Icons";
export default function Themes() {
  const { theme, updateTheme } = useThemeContext();
  const handleChangeTheme = () => {
    updateTheme();
  };
  return (
    <div className="absolute top-5 right-5  font-bold  dark:text-white/80">
      <button onClick={handleChangeTheme}>
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
