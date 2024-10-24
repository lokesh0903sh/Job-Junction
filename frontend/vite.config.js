import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // Tells Vite to look for index.html in the 'src' folder
  build: {
    outDir: '../dist',  // Adjust if needed for output folder
  },
});
