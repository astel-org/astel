<script lang="ts">
import { Transition, defineComponent } from 'vue'
import { X } from '@astel/icons'
import { useSidebarStore } from '../../store/sidebar'
import Search from '../atoms/search.vue'
import Dropdown from '../atoms/dropdown.vue'

export interface SidebarItems {
  title: string
  link: string
  category?: string
  children?: SidebarItems[] | null
}

export default defineComponent({
  components: { Search, Transition, X, Dropdown },
  setup() {
    const sidebar = useSidebarStore()

    const sidebarItems: SidebarItems[] = [
      {
        title: 'Home',
        link: '/',
        children: [],
      },
      {
        title: 'Guide',
        link: '/guide',
        children: [
          {
            title: 'Introduction',
            link: '',
          },
          {
            title: 'Installation',
            link: '',
          },
          {
            title: 'Usage',
            link: '',
          },
        ],
      },
      {
        title: 'Components',
        link: '/components',
        children: [
          {
            title: 'Introduction',
            link: '',
          },
          {
            title: 'Installation',
            link: '',
          },
          {
            title: 'Usage',
            link: '',
          },
        ],
      },
    ]

    return {
      sidebar,
      sidebarItems,
    }
  },
})
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <aside
        v-if="sidebar.isVisible"
        class="flex-col z-50 flex w-full sm:border-r sm:w-[320px] h-screen fixed bg-[color:var(--astel-background)]"
      >
        <header class="h-16 flex shrink-0 border-b">
          <div class="flex items-center justify-between flex-1 px-6">
            <span class="font-semibold"> Components </span>
            <button
              type="button"
              title="Show Drawer"
              class="sm:hidden"
              @click="sidebar.toggleSidebar"
            >
              <X />
            </button>
          </div>
        </header>
        <Search />
        <nav class="flex flex-col overflow-y-scroll h-full">
          <div v-for="(item, index) in sidebarItems" :key="index">
            <Dropdown :items="item.children" :title="`${item.title}`"> </Dropdown>
          </div>
        </nav>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
