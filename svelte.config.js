const preprocess = require("svelte-preprocess");
module.exports = {
  preprocess: preprocess({
    scss: true,
    typescript: false, // for typescript, use the typescript examples!
  }),
};
