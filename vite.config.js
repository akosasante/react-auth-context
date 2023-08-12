import { defineConfig } from 'vite';
import { resolve } from 'path'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-auth-context',
      fileName: (format) => `react-auth-context.${format}.js`,
    }
  },
  plugins: [react()],
});
