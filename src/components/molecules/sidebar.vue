<script lang="ts">
import { Transition, defineComponent } from 'vue'
import { useSidebarStore } from '../../store/sidebar'
import Search from '../atoms/search.vue'

export default defineComponent({
  components: { Search, Transition },

  setup() {
    const sidebar = useSidebarStore()
    return {
      sidebar,
    }
  },
})
</script>

<template>
  <Transition name="slide-fade">
    <aside
      :class="`flex-col ${
        sidebar.isVisible ? 'flex absolute' : 'hidden'
      }  bg-white w-full sm:border-r sm:w-[320px] shrink-0 h-[calc(100vh-68px)]`"
    >
      <header class="h-14 flex shrink-0 border-b">
        <div class="flex items-center justify-between flex-1 pl-5">
          <span class="text-gray-800 font-semibold"> Components </span>

          <button
            type="button"
            title="Show collections"
            class="w-14 h-14 relative sm:hidden border-l"
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
      <Search />
      <nav class="flex flex-col overflow-y-scroll h-full">
        <section v-for="(value, key, index) in [1, 2, 3, 4]" :key="index">
          <NuxtLink
            v-for="(link, idx) in value"
            :key="idx"
            :to="`/components/${link}`"
            class="cursor-pointer hover:bg-gray-50 h-14 justify-between text-left border-b items-center flex px-5"
            @click="sidebar.toggleSidebar"
          >
            <span class="text-gray-800">{{ link }}</span>
            <span
              class="inline-block text-xs text-gray-400 bg-gray-50 border border-gray-300 rounded pointer-events-none px-2 py-1"
            >
              {{ key }}
            </span>
          </NuxtLink>
        </section>
      </nav>
    </aside>
  </Transition>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
