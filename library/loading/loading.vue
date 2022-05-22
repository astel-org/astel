<script lang="ts">
import { defineComponent } from 'vue'
import { Colors } from '../utils'

export default defineComponent({
  name: 'AsLoading',
  props: {
    type: {
      type: String,
      default: Colors.PRIMARY,
      validator: (value: Colors) => Object.values(Colors).includes(value),
    },
    size: {
      type: String || Number,
      default: () => '6px',
    },
  },

  setup(props) {
    const rootClasses = computed(() => [{ [`as-loading--${props.type}`]: props.type }])
    return { rootClasses }
  },
})
</script>

<template>
  <div class="as-loading" :class="rootClasses" :style="`--as-loading-size: ${$props.size}`">
    <div class="as-loading--spacer">
      <slot></slot>
    </div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="less">
@import './style.less';
</style>
