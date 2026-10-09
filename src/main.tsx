import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { OurWorkProvider } from "./storage/OurWorkApi.tsx";
import { PagesConfigProvider } from "./storage/PagesConfig.tsx";
import { SocketProviderContext } from "./storage/SocketApi.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OurWorkProvider>
      <SocketProviderContext>
        <PagesConfigProvider>
          <App />
        </PagesConfigProvider>
      </SocketProviderContext>
    </OurWorkProvider>
  </StrictMode>,
);
