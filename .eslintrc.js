module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
  },
};
