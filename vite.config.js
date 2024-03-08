import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    injectHTML(),
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
