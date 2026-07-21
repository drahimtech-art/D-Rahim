import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { OurWorkProvider } from "./storage/OurWorkApi.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OurWorkProvider>
      <App />
    </OurWorkProvider>
  </StrictMode>,
);
