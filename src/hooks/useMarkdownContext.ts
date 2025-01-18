import { useContext } from "react";
import { MarkdownContext } from "../context/MarkDownContext";
export default function useMarkdownContext() {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error("Estas usando el contexto mal");
  }
  return context;
}
