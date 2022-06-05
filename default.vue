<script lang="ts" setup>
import { computed } from 'vue'
import Header from '../components/molecules/header.vue'
import { useRoute } from '#imports'
import Drawer from '~~/src/components/molecules/drawer.vue'

const route = useRoute()

const path = computed(() => route.path)

return { path }
</script>

<template>
  <ClientOnly>
    <as-theme-provider>
      <Header />
      <div class="flex flex-col w-screen">
        <aside class="bg-red-500">
          <Drawer />
        </aside>
        <section class="flex flex-row">
          <slot />
        </section>
      </div>
    </as-theme-provider>
  </ClientOnly>
</template>
