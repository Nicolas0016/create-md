import { useState } from "react";

export const useMarkdownHistory = (initialMarkdown: string) => {
  const [markdown, setMarkdown] = useState<string>(initialMarkdown);
  const [history, setHistory] = useState<string[]>([initialMarkdown]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const updateMarkdown = (newMarkdown: string) => {
    setMarkdown(newMarkdown);
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newMarkdown]);
    setHistoryIndex((prev) => prev + 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      setMarkdown(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      setMarkdown(history[historyIndex + 1]);
    }
  };

  return {
    markdown,
    updateMarkdown,
    undo,
    redo,
  };
};
