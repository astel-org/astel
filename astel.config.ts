import { defineAstelConfig } from '@astel/cli'

export default defineAstelConfig({
  ignoreDirs: ['.DS_Store'],
  prefix: 'as',
  build: {
    entry: 'library/index.ts',
    emptyOutDir: true,
    library: [
      { format: 'esm', outputDir: 'dist/es', summary: true, minify: ['whitespace'] },
      { format: 'umd', outputDir: 'dist/lib', summary: true, minify: ['whitespace'] },
    ],
  },
})
