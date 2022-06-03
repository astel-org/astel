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

const { isVisible, toggleDrawer } = useDrawerStore()

const drawerItems: DrawerItems[] = [
  { title: 'Home', link: '/', children: [] },
  {
    title: 'Guide',
    link: '/guide',
    children: [
      { title: 'Introduction', link: '' },
      { title: 'Installation', link: '' },
      { title: 'Usage', link: '' },
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
  <ClientOnly>
    <!-- <Teleport to="body"> -->
    <Transition name="slide-fade">
      <div
        v-if="isVisible"
        class="flex-col md:hidden top-0 z-50 flex w-full md:w-[300px] border-r md:border-none h-screen fixed md:static bg-[color:var(--astel-background)]"
      >
        <section class="h-16 flex shrink-0 border-b-[1px] border-[color:var(--accents-2)]">
          <div class="flex items-center justify-between flex-1 px-6">
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
          </div>
        </nav>
      </div>
    </Transition>
    <!-- </Teleport> -->
  </ClientOnly>
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
