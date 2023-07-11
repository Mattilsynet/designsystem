import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess()
}
// const sveltePreprocess = require('svelte-preprocess');
//
// module.exports = {
//   preprocess: sveltePreprocess({})
// };
