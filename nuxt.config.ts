import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  srcDir: 'src/',
  components: ['~/src/components'],
  server: {
    host: '0.0.0.0',
  },
})
