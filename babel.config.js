// server/babel.config.js

module.exports = {
  // Presets are sets of Babel plugins.
  // '@babel/preset-env' allows you to use the latest JavaScript features
  // without worrying about browser or Node.js compatibility, as it transpiles
  // them down to a version that the target environment can understand.
  presets: [
    '@babel/preset-env',
    // If you're using React, you would also add:
    // '@babel/preset-react',
  ],

  // Plugins are specific transformations.
  // You might add plugins here for specific features not covered by presets
  // or for optimizing code. For example:
  // plugins: [
  //   '@babel/plugin-transform-runtime', // Helpful for avoiding polyfill duplication
  // ],
};