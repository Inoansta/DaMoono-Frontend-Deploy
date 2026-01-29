import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    proxy: {
      '/reference': {
        target: 'https://damoono-backend-production.up.railway.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/reference/, '/reference'),
        // If backend uses cookies for auth during local dev, uncomment:
        // cookieDomainRewrite: { "*": "" },
      },
    },
  },
});
