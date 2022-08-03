<script lang="ts" setup>
import { ChevronDown, ChevronRight, ClipboardCopy } from '@astel/icons'
import { useCopy } from 'astel'

const showCode = ref(false)
const code = ref(null)

const { copyText } = useCopy()
</script>

<template>
  <div
    class="flex flex-col w-full items-center border-[1px] border-[color:var(--accents-2)] rounded-md"
  >
    <div ref="code" class="flex-row p-4 flex items-center justify-start space-x-6 not-prose">
      <slot />
    </div>
    <div
      class="bg-[color:var(--accents-1)] justify-between text-[color:var(--accents-6)] cursor-pointer flex items-center rounded-b-md space-x-2 flex-row border-t-[1px] border-t-[color:var(--accents-2)] py-3 px-4 w-full"
      @click="showCode = !showCode"
    >
      <div class="flex space-x-2 items-center">
        <ChevronDown v-if="showCode" size="20px" />
        <ChevronRight v-else size="20px" />
        <span class="text-sm">Code Editor</span>
      </div>

      <div v-if="showCode" @click.stop="copyText(code?.textContent)">
        <ClipboardCopy size="20px" />
      </div>
    </div>

    <div v-show="showCode" class="border-t-[1px] border-t-[color:var(--accents-2)] w-full px-4">
      k
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
