import { useEffect } from "react";
import { copyMarkdown } from "../hooks/useCommand";
interface Props {
  markdown: string;
}
export default function KeyboardShortcut({ markdown }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        copyMarkdown(markdown); // Pasa el markdown al copiar
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [markdown]); // Escucha cambios en markdown para actualizar el atajo

  return (
    <div className="absolute bottom-7 right-9 flex justify-center items-center gap-3 font-bold bg-gray-200 dark:bg-gray-700 dark:text-white/80 rounded-full px-4 py-2">
      <kbd>Ctrl</kbd>
      <span>+</span>
      <kbd>K</kbd>
    </div>
  );
}
