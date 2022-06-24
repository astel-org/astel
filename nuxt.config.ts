import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Astel UI',
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Sleek and minimal vue 3 UI component library',
        },
        { hid: 'og:title', name: 'og:title', content: 'Astel UI' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900',
        },
      ],
    },
  },
  alias: {
    astel: fileURLToPath(new URL('./library', import.meta.url)),
  },
  content: {
    navigation: {
      fields: ['pageTitle', 'groupTitle'],
    },
    highlight: {
      theme: 'github-light',
    },
  },
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  srcDir: 'src/',
  components: ['~/src/components'],
  server: {
    host: '0.0.0.0',
  },
})
