import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "news-reactify",
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  plugins: [react()],
});
