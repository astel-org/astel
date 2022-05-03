import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  alias: {
    astel: fileURLToPath(new URL('./library', import.meta.url)),
  },
  buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  srcDir: 'src/',
  components: ['~/src/components'],
  server: {
    host: '0.0.0.0',
  },
})
