import { defineConfig } from 'astro/config';

import compress from "astro-compress"
import compressor from "astro-compressor"

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folder = path.resolve(__dirname, 'src')
// https://astro.build/config
// console.log(path.resolve(__dirname, 'src'));
export default defineConfig({
  format: 'directory',
  server: {
    host: '0.0.0.0',
  },
  vite: {
    server: {
      cors: true,
      origin: 'http://astro-test.vm',
    },
    resolve: {
      alias: {
        '@styles/': `${folder}/styles/`,
        '@scripts/': `${folder}/scripts/`,
        '@components/': `${folder}/components/`,
        '@layouts/': `${folder}/layouts/`,
        '@libs/': `${folder}/libs/`,
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@styles/config.scss";`
        }
      }
    },
    build: {
      cssCodeSplit: false
    }
  },
  integrations: [compress(), compressor({ gzip: true, brotli: false })],
  build: {
    assets: 'assets',
  }
});
