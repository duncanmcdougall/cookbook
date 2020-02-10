const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  // Passthrough
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy({ "src/static": "/" });

  config.setUseGitIgnore(false);

  config.addCollection("feed", collection => {
    return [...collection.getFilteredByGlob("./src/recipes/**/*.md")];
  });

  // Plugins
  config.addPlugin(rssPlugin);

  return {
    dir: {
      input: "src",
    },
    passthroughFileCopy: true,
  };
};
