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
      <p class="text-2xl mt-4 text-black text-opacity-60">
        A Sleek and minimal Vue 3 UI component library
      </p>
    </div>
    <div class="flex items-center justify-center mt-10">
      <NuxtLink to="/components/button">
        <av-button size="large" type="success" variant="shadow">Get Started</av-button>
      </NuxtLink>
    </div>
    <div class="text-center max-w-2xl min-w-fit mx-auto mt-44 flex-row flex gap-10">
      <!-- <av-card v-for="i in [1, 2, 3]" :key="i" shadow class="h-32 w-full">
        <p>Title</p>
        <p>content</p>
      </av-card> -->
    </div>
  </section>
</template>
