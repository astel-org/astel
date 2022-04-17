<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Sizes } from '../utils/constants/size'

export default defineComponent({
  name: 'AsError',
  props: {
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    label: {
      type: String || Boolean,
      default: 'Error:',
    },
  },
  setup(props) {
    const rootClasses = computed(() => ({
      [`as-error--${props.size}`]: props.size,
    }))

    return { rootClasses }
  },
})
</script>

<template>
  <div class="as-error" :class="rootClasses">
    <div aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
        style="color: var(--astel-error); vertical-align: text-bottom"
      >
        <circle cx="12" cy="12" r="10" fill="var(--geist-fill)"></circle>
        <path d="M12 8v4" stroke="var(--geist-stroke)"></path>
        <path d="M12 16h.01" stroke="var(--geist-stroke)"></path>
      </svg>
    </div>
    <div class="as-error--text">
      <b v-if="$props.label">{{ $props.label }}</b>
      <span
        v-if="$props.label"
        aria-hidden="true"
        class="as-error--spacer"
        style="margin-left: 5px"
      ></span>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
@import './style.less';
</style>
