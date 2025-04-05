import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          base: process.env.NODE_ENV === 'production' 
            ? '<base href="/agile/" />' 
            : '<base href="/" />'
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  publicDir: "public",
  base: process.env.NODE_ENV === 'production' ? "/agile/" : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500, // Increased for large UI libraries
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'radix';
            if (id.includes('lucide-react') || 
                id.includes('tailwind-merge') || 
                id.includes('class-variance-authority')) return 'ui';
            if (id.includes('zod') || 
                id.includes('date-fns') || 
                id.includes('framer-motion')) return 'utils';
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react-router-dom')) return 'react-vendor';
            return 'vendor';
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  }
});
