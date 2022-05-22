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
  <ClientOnly>
    <as-theme-provider>
      <div class="flex flex-col w-screen">
        <Header />
        <section class="flex flex-row">
          <Sidebar />
          <slot />
        </section>
      </div>
    </as-theme-provider>
  </ClientOnly>
</template>
