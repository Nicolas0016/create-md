import { toast } from "sonner";

// Convierte la lógica a una función regular
export async function copyMarkdown(markdown: string) {
  try {
    await navigator.clipboard.writeText(markdown);
    toast.success("Se copió el Markdown");
  } catch {
    toast.error("Ocurrió un error al copiarlo, inténtalo más tarde");
  }
}
