import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface MarkdownContextType {
  markdown: string;
  updateMarkdown: (text: string) => void;
}

// Definimos el contexto con el valor por defecto
export const MarkdownContext = createContext<MarkdownContextType | undefined>(
  undefined
);

export function MarkdownProvider({ children }: Props) {
  const [markdown, setMarkdown] = useState<string>(
    "## ¡Hola Mundo!\n\nEscribe algo aquí..."
  );

  const updateMarkdown = (text: string) => setMarkdown(text);

  return (
    <MarkdownContext.Provider value={{ markdown, updateMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}
