module.exports = {
  bail: false,
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
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
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  extensionsToTreatAsEsm: [".svelte"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "<rootDir>/jest-setup.js"]
};
