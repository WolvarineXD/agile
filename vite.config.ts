import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [react()],
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
    chunkSizeWarningLimit: 2000, // Increased for Radix UI + shadcn
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group Radix packages together
            if (id.includes('@radix-ui')) {
              return 'radix';
            }
            // Group UI libraries
            if (id.includes('tailwind-merge') || 
                id.includes('class-variance-authority') || 
                id.includes('lucide-react')) {
              return 'ui';
            }
            // Group utility libraries
            if (id.includes('zod') || 
                id.includes('date-fns') || 
                id.includes('framer-motion')) {
              return 'utils';
            }
            // Group React dependencies
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  base: "/", // Changed from "./" to "/" for Vercel compatibility
});