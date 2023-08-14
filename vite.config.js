import { defineConfig } from 'vite';
import { resolve } from 'path';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import { readFile } from 'fs/promises';
// import react from '@vitejs/plugin-react';

async function getPackageJson() {
  const raw = await readFile('package.json', 'utf-8');
  const obj = JSON.parse(raw);
  return obj;
}

const packageJson = await getPackageJson();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-auth-context',
      fileName: (format) => {
        switch (format) {
          case 'cjs':
            return 'index.js';
          case 'es':
            return 'index.mjs';
          default:
            return 'index.' + format + '.js';
        }
      },
      formats: ['cjs', 'es'],
    },
  },
  define: {
    PACKAGE_NAME: `"${packageJson.name}"`,
    PACKAGE_VERSION: `"${packageJson.version}"`,
  },
  plugins: [externalizeDeps()],
});
