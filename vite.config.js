// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/recipes-/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        doelen: resolve(__dirname, "doelen.html"),
      },
    },
  },
});
