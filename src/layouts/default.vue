<script lang="ts">
import { computed, defineComponent } from 'vue'
import Header from '../components/molecules/header.vue'
import Sidebar from '../components/molecules/sidebar.vue'
import { useRoute } from '#imports'

export default defineComponent({
  components: { Header, Sidebar },
  async setup() {
    const route = useRoute()

    const path = computed(() => route.path)

    return { path }
  },
})
</script>

<template>
  <as-theme-provider theme="light-theme">
    <div class="flex flex-col select-none w-screen">
      <Header />
      <main class="flex flex-row">
        <Sidebar v-if="path !== '/'" />

        <slot />
      </main>
    </div>
  </as-theme-provider>
</template>
