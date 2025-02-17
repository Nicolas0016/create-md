import React from "react";
import { Toaster } from "sonner";
import Catalog from "./components/Catalog";
import KeyboardShortcut from "./components/Command";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Themes from "./components/Themes";
import { useChangeTheme } from "./hooks/useChangeTheme";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { useExpandedSections } from "./hooks/useExpandedSections";
import { useMarkdownHistory } from "./hooks/useMarkdownHistory";
import commands from "./mocks/commands.json";
interface Component {
  name: string;
  code: string;
}

interface ComponentsCatalog {
  [key: string]: Component[];
}

const App: React.FC = () => {
  const { markdown, updateMarkdown, undo, redo } = useMarkdownHistory(
    `# Bienvenido a la Aplicación de Markdown
---
Esta aplicación permite visualizar el contenido de un archivo Markdown en tiempo real, utilizando diferentes componentes para formatear el texto y mostrar contenido enriquecido como listas, tablas, citas y código.
`
  );
  const { expandedSections, handleToggleSection } = useExpandedSections();
  const { handleDragStart, handleDrop, handleDragOver } =
    useDragAndDrop(updateMarkdown);

  const componentsCatalog: ComponentsCatalog = commands;

  const handleComponentClick = (code: string) => {
    const newMarkdown = markdown + code;
    updateMarkdown(newMarkdown);
  };
  useChangeTheme();
  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-slate-800">
        <Catalog
          componentsCatalog={componentsCatalog}
          expandedSections={expandedSections}
          handleToggleSection={handleToggleSection}
          handleComponentClick={handleComponentClick}
          handleDragStart={handleDragStart}
        />
        <Editor
          markdown={markdown}
          updateMarkdown={updateMarkdown}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleKeyDown={(e: React.KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "z") {
              e.preventDefault();
              undo();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === "y") {
              e.preventDefault();
              redo();
            }
          }}
        />
        <Preview markdown={markdown} />
      </div>
      <KeyboardShortcut markdown={markdown} />
      <Themes />
      <Toaster richColors />
    </>
  );
};

export default App;
