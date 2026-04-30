import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: false,
    outDir: "dist/lib",
    lib: {
      entry: {
        index: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        tokens: fileURLToPath(new URL("./src/tokens.ts", import.meta.url)),
        styles: fileURLToPath(new URL("./src/styles.ts", import.meta.url)),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => id === "vue" || id.startsWith("vue/"),
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: ({ name }) =>
          name?.endsWith(".css") ? "styles.css" : "assets/[name]-[hash][extname]",
      },
    },
  },
});
