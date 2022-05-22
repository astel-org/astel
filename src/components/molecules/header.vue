<script lang="ts">
import { defineComponent } from 'vue'
import { Github, Menu, Moon, Sun } from '@astel/icons'
import { useTheme } from 'astel'
import { useSidebarStore } from '../../store/sidebar'
export default defineComponent({
  components: { Github, Moon, Sun, Menu },
  setup() {
    const sidebar = useSidebarStore()
    const { theme, changeTheme } = useTheme()

    const navigationItems = [
      { title: 'Home', link: '/' },
      { title: 'Guide', link: '/' },
      { title: 'Components', link: '/components/button' },
      { title: 'Composables', link: '/' },
    ]

    return {
      navigationItems,
      theme,
      sidebar,
      changeTheme,
    }
  },
})
</script>

<template>
  <header
    class="h-16 z-30 fixed flex justify-between bg-[color:var(--astel-background)] border-b-[1px] border-b-[color:var(--accents-2)] w-full px-6"
  >
    <!-- App title -->
    <NuxtLink to="/" class="flex items-center justify-center">
      <img v-if="theme === 'light-theme'" src="/logo-dark.svg" alt="astel ui logo" class="h-8" />
      <img v-else src="/logo-light.svg" alt="astel ui logo" class="h-8" />
      <span class="ml-4 leading-relaxed hidden md:inline-flex font-semibold text-lg md:text-xl">
        Astel UI
      </span>
    </NuxtLink>

    <!-- Navigation items  -->
    <div class="hidden md:flex items-center gap-x-4 text-sm cursor-pointer">
      <p
        v-for="item in navigationItems"
        :key="item.title"
        class="leading-relaxed duration-200 rounded px-3 py-1.5 hover:bg-[color:var(--accents-2)]"
      >
        <NuxtLink :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </p>
    </div>

    <!-- Icons  -->
    <div class="flex flex-row justify-center items-center space-x-4 md:space-x-6">
      <button v-if="theme !== 'dark-theme'" @click="changeTheme">
        <Moon />
      </button>
      <button v-else @click="changeTheme">
        <Sun />
      </button>

      <button class="hidden md:inline-block">
        <NuxtLink to="https://github.com/astel-org/astel" target="_blank">
          <Github />
        </NuxtLink>
      </button>
      <button
        v-if="!sidebar.isVisible"
        class="md:hidden"
        type="button"
        title="Show collections"
        @click="sidebar.toggleSidebar"
      >
        <Menu />
      </button>
    </div>
  </header>
</template>
