<script lang="ts" setup>
import { computed } from 'vue'
import Header from '../components/molecules/header.vue'
import { useRoute } from '#imports'
import Sidebar from '~~/src/components/molecules/sidebar.vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')
</script>

<template>
  <ClientOnly>
    <as-theme-provider>
      <Header />
      <main class="max-w-screen-lg mx-auto mt-8">
        <Drawer />
        <section class="flex flex-row justify-between">
          <Sidebar v-if="!isHome" class="w-[300px]" />
          <div class="w-full"><slot /></div>
        </section>
      </main>
    </as-theme-provider>
  </ClientOnly>
</template>
