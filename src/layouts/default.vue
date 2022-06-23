<script lang="ts" setup>
import { computed } from 'vue'
import Header from '../components/molecules/header.vue'
import { useRoute } from '#imports'
import Sidebar from '~~/src/components/molecules/sidebar.vue'
import Drawer from '~~/src/components/molecules/drawer.vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')
</script>

<template>
  <ClientOnly>
    <as-theme-provider>
      <Header />
      <Drawer />
      <div class="w-full px-6 pt-16">
        <div class="mt-8 flex flex-row max-w-screen-lg mx-auto">
          <Sidebar v-if="!isHome" class="w-[250px]" />
          <slot />
        </div>
      </div>
    </as-theme-provider>
  </ClientOnly>
</template>
