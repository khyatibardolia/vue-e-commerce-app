module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [ 'import', 'vue' ],
  // add your custom rules here
  rules: {
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'eol-last': [ 'error', 'always' ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/newline-after-import': [ 2, { count: 1 } ],
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-depth': [ 'error', 2 ],
    'max-len': [ 'error', {
      code: 100,
      comments: 100,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    } ],
    'newline-after-var': [ 'error', 'always' ],
    'newline-before-return': [ 'error' ],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-multiple-empty-lines': [ 'error', { max: 1 } ],
    camelcase: [ 'error' ],
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/component-name-in-template-casing': [ 'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [ 'component', 'transition', 'router-link' ],
      } ],
    'vue/html-closing-bracket-newline': [ 'error', { singleline: 'never', multiline: 'always' } ],
    'vue/padding-line-between-blocks': [ 'error', 'always' ],
  },
}
