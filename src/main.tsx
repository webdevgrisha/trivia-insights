import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import { BrowserRouter } from "react-router";
import App from "./App";
import { SWRConfig } from "swr";
import { swrConfig } from "./config/swrConfig";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SWRConfig value={swrConfig}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </StrictMode>
);
