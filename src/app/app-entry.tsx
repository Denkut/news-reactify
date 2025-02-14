import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import BaseLayout from "./layouts/base-layout";
import { store } from "./app-store";
import { ThemeProvider } from "./providers/theme-provider";
import "@/shared/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
