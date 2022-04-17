<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'AvCard',
  props: {
    hoverable: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
  },
  setup(props) {
    const rootClasses = computed(() => ({
      [`av-card--hoverable`]: props.hoverable,
      [`av-card--shadow`]: props.shadow,
    }))

    return { rootClasses }
  },
})
</script>

<template>
  <div class="av-card" :class="rootClasses">
    <div class="av-card--content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
@import './style.less';
</style>
