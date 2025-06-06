module.exports = {
  extends: ['../../.eslintrc.global.cjs', '../../.eslintrc.react.cjs'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['packages/sentrax-emails/tsconfig.*.json'],
      },
      rules: {
        '@nx/dependency-checks': 'error',
      },
    },
  ],
};
