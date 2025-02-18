import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app-store";
import { ThemeProvider } from "./providers/theme-provider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app-router";
import "@/shared/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
