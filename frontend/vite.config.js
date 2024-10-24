// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default; explicitly stating it is optional
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Define '@' to point to 'src' directory
    },
  },
});
