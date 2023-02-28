const StyleDictionary = require("style-dictionary");
const {toKebabCase} = require("./utils");

// StyleDictionary.registerTransform({
//   name: "name/cti/kebab",
//   type: "name",
//   transformer: (prop, options) =>
//     toKebabCase([options.prefix].concat(prop.path).join(" ")),
// });

const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + "/config.js"
);

StyleDictionaryExtended.buildAllPlatforms();
