import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MarkdownProvider } from "./context/MarkDownContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <MarkdownProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </MarkdownProvider>
);
