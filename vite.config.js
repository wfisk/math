// vite.config.js
// const svelte = require("@sveltejs/vite-plugin-svelte");
// const { defineConfig } = require("vite");
import svelte from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// module.exports = {
//   // plugins: [svite()],
//   optimizeDeps: {
//     include: ["lodash.tonumber"],
//   },
// };

module.exports = defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      svelte({
        /* inline options here */
      }),
    ],
    build: {
      minify: isProduction,
    },
  };
});
