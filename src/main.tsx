import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import "./styles/animations.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
);

// El HTML prerenderizado en build se hidrata; en dev el contenedor está vacío.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
