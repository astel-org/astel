<script lang="ts" setup>
import { Equal, Github, Moon, Sun } from '@astel/icons'
import { useTheme } from 'astel'
import { useDrawerStore } from '~~/src/store/drawer'

const { toggleDrawer } = useDrawerStore()
const { theme, changeTheme } = useTheme()

const currentRoute = useRoute()
</script>

<template>
  <header class="w-full border-b-[1px] h-16 border-b-[color:var(--accents-2)]">
    <div
      class="flex flex-row xl:px-0 px-6 h-full items-center z-40 max-w-screen-lg mx-auto justify-between w-full bg-[color:var(--astel-background)]"
    >
      <!-- App title -->
      <div>
        <NuxtLink to="/" class="flex items-center justify-center">
          <img
            v-if="theme === 'light-theme'"
            src="/logo-dark.svg"
            alt="astel ui logo"
            class="h-8"
          />
          <img v-else src="/logo-light.svg" alt="astel ui logo" class="h-8" />
          <span class="ml-4 leading-relaxed hidden md:inline-flex font-medium text-lg md:text-xl">
            Astel UI
          </span>
        </NuxtLink>
      </div>

      <!-- Navigation items  -->
      <div class="hidden md:flex items-center gap-x-4 text-sm cursor-pointer">
        <NuxtLink
          to="/"
          :class="[currentRoute.path === '/' ? 'font-semibold' : 'font-normal']"
          class="leading-relaxed duration-200 rounded px-3 py-1.5 hover:bg-[color:var(--accents-2)]"
        >
          Home
        </NuxtLink>

        <ContentNavigation v-slot="{ navigation }">
          <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="`${link?.children?.length > 0 ? link.children[0]._path as string : link._path as string}`"
            :class="[currentRoute.path.includes(link._path) ? 'font-semibold' : 'font-normal']"
            class="leading-relaxed duration-200 rounded px-3 py-1.5 hover:bg-[color:var(--accents-2)]"
          >
            {{ link.title }}
          </NuxtLink>
        </ContentNavigation>
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
        <button class="md:hidden" type="button" title="Show collections" @click="toggleDrawer">
          <Equal />
        </button>
      </div>
    </div>
  </header>
</template>
