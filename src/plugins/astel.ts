import { Button, Card, ThemeProvider } from '../../library'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button).use(Card).use(ThemeProvider)
})
