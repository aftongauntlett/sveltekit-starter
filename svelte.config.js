import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib',
    },
    ssr: false,
  },
};

export default config;
