import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // You can add other aliases here if needed
    },
  },
  optimizeDeps: {
    include: ['@react-google-maps/api'], // Ensure Vite pre-bundles this library
  },
});
