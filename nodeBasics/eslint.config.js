import globals from 'globals';
import pluginJs from '@eslint/js';
import pkg from 'eslint-plugin-react';
const {rules} = pkg;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{*js}']},
  {languageOptions: { globals: globals.browser }},
  // pluginJs.configs.recommended,
  
  {rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'], // Enforce single quotes for strings
    indent: ['error', 2], // Enforce 2-space indentation for better readability
    'comma-dangle': ['error', 'always-multiline'],
    'no-use-before-define': ['error', { variables: true, functions: false }], // Disallow use of variables before declaration
    'prefer-template': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }], // Disallow multiple empty lines
    'object-curly-spacing': ['error', 'always'], // Require spaces inside braces
    'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside brackets
    
  }},
];