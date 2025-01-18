import React, { useRef } from "react";

interface EditorProps {
  markdown: string;
  updateMarkdown: (text: string) => void;
  handleDrop: (e: React.DragEvent<HTMLTextAreaElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const Editor: React.FC<EditorProps> = ({
  markdown,
  updateMarkdown,
  handleDrop,
  handleDragOver,
  handleKeyDown,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="w-1/3 h-full p-4 relative flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Editor de Markdown
      </h2>
      <textarea
        ref={textareaRef}
        className="w-full h-full p-2 border resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
        value={markdown}
        onChange={(e) => updateMarkdown(e.target.value)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onKeyDown={handleKeyDown}
        placeholder="Arrastra componentes aquí o escribe Markdown..."
      />
    </div>
  );
};

export default Editor;
