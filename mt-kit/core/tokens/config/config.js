module.exports = {
  // source: ["src/index.js", "src/**/*.json"],
  source: ["../src/output.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "../build/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "../build/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root, :host",
          },
        },
      ],
    },
  },
};
