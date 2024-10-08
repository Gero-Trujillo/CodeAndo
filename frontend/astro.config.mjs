// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { authMiddleware } from './src/middlewares/auth';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    // @ts-ignore
    middleware: [authMiddleware]
  }
});