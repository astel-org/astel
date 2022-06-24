<script lang="ts" setup>
import { X } from '@astel/icons'
import { useDrawerStore } from '../../store/drawer'
import Search from '../atoms/search.vue'
import Dropdown from '../atoms/dropdown.vue'

export interface DrawerItems {
  title: string
  link: string
  category?: string
  children?: DrawerItems[] | null
}

const { isVisible, toggleDrawer } = toRefs(useDrawerStore())

const drawerItems: DrawerItems[] = [
  { title: 'Home', link: '/', children: [] },
  {
    title: 'Guide',
    link: '/guide',
    children: [
      { title: 'Introduction', link: '/guide/introduction' },
      { title: 'Installation', link: '/guide/installation' },
      { title: 'Bundle Size', link: '/guide/bundle-size' },
      { title: 'Colors', link: '/guide/colors' },
      { title: 'Theme', link: '/guide/theme' },
    ],
  },
  {
    title: 'Components',
    link: '/components',
    children: [
      { title: 'Introduction', link: '' },
      { title: 'Installation', link: '' },
      { title: 'Usage', link: '' },
    ],
  },
]
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <aside
        v-if="isVisible"
        class="flex-col md:hidden top-0 z-50 flex w-full h-screen fixed bg-[color:var(--astel-background)]"
      >
        <section class="h-16 flex shrink-0 border-b-[1px] border-[color:var(--accents-2)]">
          <div class="flex items-center justify-between flex-1 px-4">
            <span class="font-semibold"> Astel </span>
            <button type="button" title="Show Drawer" class="sm:hidden" @click="toggleDrawer">
              <X />
            </button>
          </div>
        </section>
        <Search />
        <nav class="flex flex-col overflow-y-scroll h-full">
          <div v-for="(item, index) in drawerItems" :key="index">
            <Dropdown :items="item.children" :title="`${item.title}`"> </Dropdown>
            <!-- {{ item }} -->
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
