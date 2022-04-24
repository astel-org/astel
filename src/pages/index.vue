<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from '#imports'
export default defineComponent({
  setup() {
    const route = useRoute()

    const currentPage = computed(() => route.params.component)

    return {
      currentPage,
    }
  },
})
</script>

<template>
  <section class="h-full w-screen flex flex-col">
    <div class="text-center w-full mt-44">
      <h1 class="text-6xl font-bold">Astel</h1>
      <p class="text-2xl mt-4 text-opacity-60">A Sleek and minimal Vue 3 UI component library</p>
    </div>
    <div class="flex items-center justify-center mt-10">
      <NuxtLink to="/components/button">
        <as-button size="large" type="success" variant="shadow">Get Started</as-button>
      </NuxtLink>
    </div>
    <div class="text-center max-w-2xl min-w-fit mx-auto mt-44 flex-row flex gap-10">
      <as-card v-for="i in [1, 2, 3]" :key="i" hoverable>
        <p>Title</p>
        <p>content</p>
      </as-card>
    </div>
  </section>
</template>
