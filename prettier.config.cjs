// prettier.config.cjs
module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'always',
  plugins: [require('prettier-plugin-astro')],
  pluginSearchDirs: false,
};
