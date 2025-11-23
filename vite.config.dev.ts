import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => {
  const port = 5000;

  return {
    plugins: [
      angular({
        tsconfig: 'tsconfig.json'
      })
    ],
    server: {
      port,
      proxy: {
        '/api': {
          target: 'http://localhost:5001',
          changeOrigin: true
        },
        '/uploads': {
          "target": "http://localhost:5001",
          "secure": false,
          "changeOrigin": true
        }
      }
    }
  }
});
