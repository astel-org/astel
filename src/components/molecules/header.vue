<script lang="ts">
import { defineComponent } from 'vue'
import { Github, Moon, Sun } from '@astel/icons'
import { useTheme } from 'astel'
export default defineComponent({
  components: { Github, Moon, Sun },
  setup() {
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
      changeTheme,
    }
  },
})
</script>

<template>
  <header
    class="h-16 fixed flex justify-between bg-[color:var(--astel-background)] border-b-[1px] border-b-[color:var(--accents-2)] w-full px-6"
  >
    <NuxtLink to="/" class="flex items-center justify-center">
      <img v-if="theme === 'light-theme'" src="/logo-dark.svg" alt="astel ui logo" class="h-8" />
      <img v-else src="/logo-light.svg" alt="astel ui logo" class="h-8" />
      <span class="ml-4 leading-relaxed font-semibold text-lg md:text-xl"> Astel UI </span>
    </NuxtLink>
    <div class="hidden md:flex items-center gap-x-4 text-sm cursor-pointer">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.title"
        class="leading-relaxed duration-300 hover:bg-opacity-10 rounded px-3 py-1.5"
        :to="item.link"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
    <div class="flex flex-row justify-center items-center space-x-6">
      <button v-if="theme !== 'dark-theme'" @click="changeTheme">
        <Moon />
      </button>
      <button v-else @click="changeTheme">
        <Sun />
      </button>

      <button>
        <NuxtLink to="https://github.com/astel-org/astel" target="_blank">
          <Github />
        </NuxtLink>
      </button>
    </div>
  </header>
</template>
