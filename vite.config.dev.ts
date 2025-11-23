import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => {
  return {
    plugins: [
      angular({
        tsconfig: 'tsconfig.json'
      })
    ],
  }
});
