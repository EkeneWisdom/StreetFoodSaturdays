// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import siteConfig from './src/config/site';
import pagefind from 'astro-pagefind';
import cloudflare from '@astrojs/cloudflare';

const isBuild = process.argv.includes('build');

const sitemapExcludedRoutes = [
  '/admin/',
  '/404',
  '/500',
  '/dashboard',
  '/thank-you',
  '/privacy',
  '/terms',
  '/blog/search',
];

export default defineConfig({
  site: siteConfig.url,
  output: 'static',

  integrations: [
    react(),
    partytown(),
    sitemap({
      filter: (page) => !sitemapExcludedRoutes.some((route) => page.includes(route)),
    }),
    ...(isBuild ? [pagefind()] : []),
  ],

  vite: {
    plugins: [tailwindcss()],

    server: {
      watch: {
        // Fixes fake file change triggers on Windows
        usePolling: true,
        interval: 1000,
        ignored: [
          '**/.astro/**',
          '**/.wrangler/**',
          '**/.mf/**',
          '**/node_modules/**',
          '**/dist/**',
        ],
      },
    },
  },

  // Only attach Cloudflare adapter during production build
  // Disables miniflare runner worker in dev mode
  ...(isBuild ? { adapter: cloudflare() } : {}),
});