import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['aframe', 'aframe-ar']
  },
  resolve: {
    alias: {
      'aframe': 'aframe/dist/aframe-master.js'
    }
  }
});
