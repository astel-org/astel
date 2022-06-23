<script lang="ts" setup>
import { ChevronDown, ChevronRight } from '@astel/icons'

const showCode = ref(false)
</script>

<template>
  <div class="flex flex-col w-full items-center border-[1px] rounded-md">
    <div class="flex-row p-4 flex items-center justify-start space-x-6"><slot /></div>
    <div
      class="bg-[color:var(--accents-1)] cursor-pointer flex items-center space-x-2 flex-row border-t-[1px] border-t-[color:var(--accents-2)] py-2 px-4 w-full"
      @click="showCode = !showCode"
    >
      <ChevronDown v-if="showCode" size="20px" />
      <ChevronRight v-else size="20px" />
      <span>Code</span>
    </div>

    <div v-if="showCode" class="border-t-[1px] border-t-[color:var(--accents-2)] w-full px-4">
      <slot name="code" />
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
