<script lang="ts">
import { defineComponent } from 'vue'
import Prism from 'vue-prism-component'

export default defineComponent({
  components: {
    Prism,
  },
  setup() {
    return {
      code: 'const a = b',
    }
  },
})
</script>

<template>
  <article>
    <div class="h-64 3xl:h-80 flex flex-col bg-gray-50 border relative">
      <div class="flex-1 flex justify-center items-center p-8 3xl:p-10">
        <prism language="javascript">{{ code }}</prism>
      </div>
      <div class="h-12 flex justify-end items-center shrink-0 bg-white border-t">
        <nav class="flex shrink-0 divide-x border-l">
          <button
            type="button"
            title="Display preview / Enter"
            class="flex w-12 h-12 border-b hover:text-sky-400 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-5 h-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            title="Display code / Cmd Enter"
            class="w-12 h-12 border-b hover:text-sky-400 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-5 h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </button>
          <button type="button" title="Copy code / C" class="w-12 h-12 border-b relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-5 h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </article>
</template>
