import adapter from '@sveltejs/adapter-auto';
import { preprocess } from 'svelte/compiler';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },
};

export default config;
