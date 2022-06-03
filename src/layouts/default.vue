<script lang="ts" setup>
import { computed } from 'vue'
import Header from '../components/molecules/header.vue'
import { useRoute } from '#imports'
import Drawer from '~~/src/components/molecules/drawer.vue'

const route = useRoute()

const isHome = computed(() => route.path !== '/')
</script>

<template>
  <ClientOnly>
    <as-theme-provider>
      <Header />
      <section class="max-w-screen-lg mx-auto">
        <Drawer v-if="isHome" />
        <slot />
      </section>
    </as-theme-provider>
  </ClientOnly>
</template>
