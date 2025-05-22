// server/jest.config.js

module.exports = {
  // Tells Jest to use babel-jest for transforming .js files
  // This is crucial for Jest to understand modern JavaScript syntax (ES6+, JSX, etc.)
  // via your Babel configuration.
  transform: {
    "^.+\\.js$": "babel-jest",
  },

  // Specifies the test environment. "node" is appropriate for backend tests.
  testEnvironment: "node",

  // Optional: If your tests or source files use ESM `import` statements,
  // and you are running into issues with them after removing "type": "module",
  // you might need to explicitly tell Jest to handle them.
  // However, `babel-jest` usually takes care of this by transpiling imports/exports.
  // If you later need to handle `.mjs` files specifically, you could add:
  // moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
};
