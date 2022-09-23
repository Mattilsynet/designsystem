module.exports = {
  bail: false,
  verbose: true,
  globals: {
  },
  roots: [
    "<rootDir>/src/"
  ],
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": ["ts-jest", {diagnostics: false}]
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  extensionsToTreatAsEsm: [".svelte"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "<rootDir>/jest-setup.js"]
};
