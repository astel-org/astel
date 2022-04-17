<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Colors } from '../utils/constants/color'
import { Shapes } from '../utils/constants/shape'
import { Sizes } from '../utils/constants/size'
import { Variants } from '../utils/constants/variant'
import Spinner from '../spinner/spinner.vue'

export default defineComponent({
  name: 'AsButton',
  components: { Spinner },
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    type: {
      type: String,
      default: Colors.PRIMARY,
      validator: (value: Colors) => Object.values(Colors).includes(value),
    },
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    variant: {
      type: String,
      default: null,
      validator: (value: Variants) => Object.values(Variants).includes(value),
    },
    shape: {
      type: String,
      default: null,
      validator: (value: Shapes) => Object.values(Shapes).includes(value),
    },
  },
  setup(props) {
    const rootClasses = computed(() => [
      {
        'as-btn--block': props.block,
        [`as-btn--${props.size}`]: props.size,
        [`as-btn--${props.type}`]: props.type,
        ...(props.variant
          ? {
              [`as-btn--${props.variant}`]: true,
            }
          : {}),
        ...(props.shape
          ? {
              [`as-btn--${props.shape}`]: true,
            }
          : {}),
      },
    ])
    return { rootClasses }
  },
})
</script>

<template>
  <button class="as-btn" :class="rootClasses" :disabled="disabled || loading">
    <span v-if="!!$slots.prefix" class="as-btn--prefix"> <slot name="prefix" /></span>
    <span v-if="loading && !$slots.prefix" class="as-btn--prefix">
      <Spinner></Spinner>
    </span>
    <span v-if="!!$slots.default">
      <slot />
    </span>
    <span v-if="!!$slots.suffix" class="as-btn--suffix"> <slot name="suffix" /></span>
  </button>
</template>

<style lang="less">
@import './style.less';
@import '../spinner/style.less';
</style>
