<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const navigationItems = [
      { title: 'Home', link: '/' },
      { title: 'Guide', link: '/' },
      { title: 'Components', link: '/components/button' },
      { title: 'Composables', link: '/' },
    ]
    return {
      navigationItems,
    }
  },
})
</script>

<template>
  <header class="h-16 flex bg-white justify-between border-b w-full">
    <NuxtLink to="/" class="flex items-center pl-5 justify-center">
      <img src="/logo-dark.svg" alt="astel ui logo" class="md:h-10 h-8" />
      <span class="ml-4 text-gray-900 leading-relaxed font-semibold text-lg md:text-xl">
        Astel UI
      </span>
    </NuxtLink>
    <div class="hidden md:flex items-center gap-x-4 text-sm cursor-pointer">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.title"
        class="text-gray-900 leading-relaxed hover:bg-black duration-300 hover:bg-opacity-10 rounded px-3 py-1.5"
        :to="item.link"
      >
        {{ item.title }}
      </NuxtLink>
    </div>

    <div class="flex border-l items-center justify-center flex-row w-14 hover:bg-gray-100">
      <NuxtLink to="https://github.com/astel-org/astel" target="_blank">
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          shape-rendering="geometricPrecision"
          class="w-5 h-auto stroke-gray-500"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </header>
</template>
