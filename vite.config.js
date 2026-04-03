import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Use BASE_PATH=/Portfolio/ for GitHub Pages project site; omit for Vercel/Netlify root */
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/",
});
