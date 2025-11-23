import { defineConfig } from 'vite'
import angular from '@analogjs/vite-plugin-angular'

export default defineConfig({
  base: './',
  plugins: [angular({ tsconfig: 'tsconfig.json' })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'esnext',
    minify: 'esbuild',
    assetsInlineLimit: 0,
    rollupOptions: { input: 'index.html' }
  }
});
