module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
eleventyConfig.addCollection("stories", function (collection) {
  return collection.getFilteredByGlob("content/stories/*.md");
});
