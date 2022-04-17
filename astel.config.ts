import { defineAstelConfig } from '@astel/cli'

export default defineAstelConfig({
  ignoreDirs: ['.DS_Store'],
  build: {
    entry: 'library/index.ts',
    prefix: 'as',
    emptyOutDir: true,
    declaration: true,
    library: [
      { name: 'astel', format: 'esm', outputDir: 'dist/es', bundle: false, summary: true },
      { name: 'astel', format: 'umd', outputDir: 'dist/lib', bundle: true, summary: true },
    ],
  },
})
