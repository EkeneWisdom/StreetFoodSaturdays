import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        // Automatically converts stroke-width -> strokeWidth, etc.
        replaceAttrValues: {},
        prettier: false,
        svgo: true,
      },
    }),
  ],
});