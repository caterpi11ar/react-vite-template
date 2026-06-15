import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['node_modules', 'dist', '**/*.md'],
  rules: {
    'no-console': 'off',
    'style/multiline-ternary': 'off',
    'prefer-promise-reject-errors': 'off',
    'jsdoc/require-returns-description': 'off',
    'ts/method-signature-style': 'off',
    'ts/no-unsafe-function-type': 'off',
    'no-unreachable-loop': 'off',
    'eqeqeq': 'off',
    'no-cond-assign': 'off',
    'no-sequences': 'off',
    'default-case-last': 'off',
    'style/max-statements-per-line': 'off',
    'ts/no-non-null-asserted-optional-chain': 'off',
    'style/jsx-closing-tag-location': 'off',
  },
})
