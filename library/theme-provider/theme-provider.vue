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
    colors: {
      type: Object,
      default: commonVars,
    },
  },

  setup(props) {
    const mergedCommonVars = Object.assign(commonVars, props.colors)

    return {
      normalize,
      commonVars: `:root{ ${styleToString(mergedCommonVars)} }`,
      lightStyle: `:root,.light-theme{ ${styleToString(lightTheme)} }`,
      darkStyle: `.dark-theme{ ${styleToString(darkTheme)} }`,
    }
  },
})
</script>

<template>
  <main>
    <teleport to="head">
      <component :is="'style'" type="text/css">
        {{ normalize }}
        {{ commonVars }}
        {{ lightStyle }}
        {{ darkStyle }}
      </component>
    </teleport>

    <slot></slot>
  </main>
</template>
