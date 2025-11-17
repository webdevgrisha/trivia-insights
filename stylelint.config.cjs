module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/dist/**'],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'keyframes-name-pattern': null,

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],

    'no-empty-source': null,
  },
};
