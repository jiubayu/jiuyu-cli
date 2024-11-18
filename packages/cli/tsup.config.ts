import { defineConfig } from 'tsup';
export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs'], // 运行在node环境
  outDir: 'dist',
})