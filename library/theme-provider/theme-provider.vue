<script lang="ts">
import { defineComponent } from 'vue'

type Theme = 'light-theme' | 'dark-theme'
const theme: Theme[] = ['light-theme', 'dark-theme']

export default defineComponent({
  name: 'AvThemeProvider',
  props: {
    theme: {
      type: String,
      default: 'light-theme',
      validator: (value: Theme) => Object.values(theme).includes(value),
    },
  },
})
</script>

<template>
  <main :class="['common', $props.theme]"><slot></slot></main>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
