// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//   },
//   parserOptions: {
//     "ecmaVersion": 2018,
//   },
//   extends: [
//     "eslint:recommended",
//     "google",
//   ],
//   rules: {
//     "no-restricted-globals": ["error", "name", "length"],
//     "prefer-arrow-callback": "error",
//     "quotes": ["error", "double", {"allowTemplateLiterals": true}],
//   },
//   overrides: [
//     {
//       files: ["**/*.spec.*"],
//       env: {
//         mocha: true,
//       },
//       rules: {},
//     },
//   ],
//   globals: {},
// };

module.exports = {
  env: {
      es6: true,
      node: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
  ],
  parserOptions: {
      project: ['tsconfig.json', 'tsconfig.dev.json'],
      sourceType: 'module',
  },
  ignorePatterns: [
      '/lib/**/*', // Ignore built files.
  ],
  rules: {},
};