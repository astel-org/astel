<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Colors } from '../utils/constants/color'
import { Sizes } from '../utils/constants/size'
import { Variants } from '../utils/constants/variant'

export default defineComponent({
  name: 'AsBadge',
  props: {
    type: {
      type: String,
      default: Colors.PRIMARY,
      validator: (value: Colors) => Object.values(Colors).includes(value),
    },
    variant: {
      type: String,
      default: null,
      validator: (value: Variants) => Object.values(Variants).includes(value),
    },
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },

    outline: { type: Boolean, default: false },
  },
  setup(props) {
    const rootClasses = computed(() => ({
      [`as-badge--${props.size}`]: props.size,
      [`as-badge--${props.type}`]: props.type,
      [`as-badge--outline`]: props.outline,
      ...(props.variant
        ? {
            [`as-btn--${props.variant}`]: true,
          }
        : {}),
    }))

    return { rootClasses }
  },
})
</script>

<template>
  <span class="as-badge" :class="rootClasses">
    <slot />
  </span>
</template>

<style lang="less">
@import './style.less';
</style>
