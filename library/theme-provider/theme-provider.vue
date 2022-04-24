<script lang="ts">
import { defineComponent } from 'vue'
import { styleToString } from '../utils'
import { commonVars, darkTheme, lightTheme, normalize } from './themes'

type Theme = 'light-theme' | 'dark-theme'
const theme: Theme[] = ['light-theme', 'dark-theme']

export default defineComponent({
  name: 'AsThemeProvider',
  props: {
    theme: {
      type: String,
      default: 'light-theme',
      validator: (value: Theme) => Object.values(theme).includes(value),
    },
  },

  setup() {
    return {
      normalize,
      commonVars: `:root{ ${styleToString(commonVars)} }`,
      lightStyle: `.light-theme{ ${styleToString(lightTheme)} }`,
      darkStyle: `.dark-theme{ ${styleToString(darkTheme)} }`,
    }
  },
})
</script>

<template>
  <main>
    <component :is="'style'">
      {{ normalize }}
      {{ commonVars }}
      {{ lightStyle }}
      {{ darkStyle }}
    </component>

    <slot></slot>
  </main>
</template>
