import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProjectDataProvider } from "./storage/PortfolioProjectApi.tsx";
import { PagesConfigProvider } from "./storage/PagesConfig.tsx";
import { SocketProviderContext } from "./storage/SocketApi.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectDataProvider>
      <SocketProviderContext>
        <PagesConfigProvider>
          <App />
        </PagesConfigProvider>
      </SocketProviderContext>
    </ProjectDataProvider>
  </StrictMode>,
);
