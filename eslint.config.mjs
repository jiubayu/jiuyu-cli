// import globals from 'globals'
// import js from '@eslint/js'
// import tseslint from 'typescript-eslint'

// export default tseslint.config({
//   extends: [js.configs.recommended, ...tseslint.configs.recommended],
//   files: ['**/*.ts'],
//   ignores: ['*.js', 'node_modules'],
//   rules: {
//     "no-console": "warn",
//   },
//   // 针对monorepo项目，需要增加额外的配置
//   languageOptions: {
//     globals: globals.node,
//     parser: tseslint.parser,
//     parserOptions: {
//       // project 有哪些子包是你的项目
//       project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
//       // tsConfigRootDir tsconfig.json所在的根目录
//       tsconfigRootDir: import.meta.dirname
//     }
//   }
// })

import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import importSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx,js}'],
  ignores: ['*.js', '**/*/dist/**/*', 'packages/cli/templates/**/*'],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'warn',
    'no-console': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\w'],
          ['^@\\w'],
          ['^@/'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error'
  },
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...globals.node
    },
    parserOptions: {
      project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname
    }
  },
  plugins: { 'simple-import-sort': importSort }
})
