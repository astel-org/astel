<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useSidebarStore } from '../../store/sidebar'
import { useRoute } from '#imports'

export default defineComponent({
  setup() {
    const route = useRoute()
    const sidebar = useSidebarStore()

    const currentPage = computed(() => route.params.component)

    return {
      currentPage,
      sidebar,
    }
  },
})
</script>

<template>
  <section class="w-full md:w-[calc(100%-320px)] ml-auto h-[calc(100vh-68px)] flex flex-col">
    <header class="h-14 flex bg-white justify-between border-b shrink-0 w-full">
      <div class="flex items-center pl-5">
        <span class="text-gray-900 leading-relaxed font-medium text-lg">{{ currentPage }}</span>
      </div>
      <div class="flex border-l md:hidden">
        <button
          type="button"
          title="Show collections"
          class="w-14 h-14 relative"
          @click="sidebar.toggleSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="w-6 h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
    <!-- 
    <div
      class="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-6 5xl:grid-cols-8 gap-4 overflow-y-auto p-4"
    > -->
    <!-- <component-card v-for="i in Array.from(Array(100).keys())" :key="i"></component-card> -->
    <av-button variant="ghost" color="secondary">adad</av-button>
    <!-- </div> -->
  </section>
</template>
