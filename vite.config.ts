import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onlinebooking: resolve(__dirname, 'onlinebooking/index.html'),
        shoptraffic: resolve(__dirname, 'shoptraffic/index.html'),
        foodorder: resolve(__dirname, 'foodorder/index.html'),
        docsapp: resolve(__dirname, 'docsapp/index.html'),
        custom: resolve(__dirname, 'custom/index.html'),
      },
    },
  },
});
