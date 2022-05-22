<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AsToast',
  props: {},
  setup() {
    return {}
  },
})
</script>

<template>
  <slot></slot>

  <Teleport to="body">
    <div class="toast-container">
      <div class="toast">
        <div class="toast-inner">
          <div class="toast-text">ok</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="less">
@import './style.less';
</style>
