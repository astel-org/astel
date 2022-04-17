<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AsCard',
  props: {
    hoverable: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
  },
  setup(props) {
    const rootClasses = computed(() => ({
      [`as-card--hoverable`]: props.hoverable,
      [`as-card--shadow`]: props.shadow,
    }))

    return { rootClasses }
  },
})
</script>

<template>
  <div class="as-card" :class="rootClasses">
    <div class="as-card--content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
@import './style.less';
</style>
