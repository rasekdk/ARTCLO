// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'astro-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.astro'],
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: ['@typescript-eslint', 'astro', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended', // reglas Astro
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // integra Prettier
    'prettier', // desactiva reglas que choquen
  ],
  overrides: [
    {
      files: ['*.astro'],
      rules: {
        // aquí puedes desactivar o ajustar reglas solo para .astro
      },
    },
  ],
  rules: {
    // fuerza estilo Prettier como error
    'prettier/prettier': ['error'],
    // tus ajustes extra…
  },
};
