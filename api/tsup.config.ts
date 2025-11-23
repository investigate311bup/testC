import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/main.ts'],
  outDir: 'dist',
  format: ['cjs'],
  target: 'node20',
  platform: 'node',
  splitting: false,
  minify: true,
  treeshake: true,
  sourcemap: true,
  clean: !options.watch,
  dts: false,
  shims: false,
  external: ['pg-native', 'bufferutil', 'utf-8-validate'],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production')
  }
}));
