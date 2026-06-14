import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Use BASE_PATH=/Portfolio/ for GitHub Pages project site; omit for Vercel/Netlify root */
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/**/*.{js,jsx}"],
      exclude: ["src/test/**", "src/main.jsx"],
    },
  },
});
