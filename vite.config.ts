import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/agile/", // 👈 Must match your repo name
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          base: '<base href="/agile/" />',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@radix-ui")) return "radix";
            if (
              id.includes("lucide-react") ||
              id.includes("tailwind-merge") ||
              id.includes("class-variance-authority")
            )
              return "ui";
            if (
              id.includes("zod") ||
              id.includes("date-fns") ||
              id.includes("framer-motion")
            )
              return "utils";
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            )
              return "react-vendor";
            return "vendor";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
