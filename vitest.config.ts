// eslint-disable-next-line import/extensions
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      { find: /^js100$/, replacement: './src/index.ts' },
      { find: /^js100(.*)$/, replacement: './src/$1.ts' },
    ],
  },
  test: {
    name: 'js100',
    // Keeping globals to true triggers React Testing Library's auto cleanup
    // https://vitest.dev/guide/migration.html
    globals: true,
    environment: 'jsdom',
    dir: 'tests',
    reporters: 'basic',
    coverage: {
      reporter: ['text', 'json', 'html', 'text-summary'],
      reportsDirectory: './coverage/',
    },
  },
})
