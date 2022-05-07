<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Feather, Github, Zap } from '@astel/icons'
import { useRoute } from '#imports'
export default defineComponent({
  components: { Feather, Github, Zap },
  setup() {
    const route = useRoute()

    const currentPage = computed(() => route.params.component)

    const features = ref([
      {
        title: 'Light Weight',
        description: 'Light weight UI components, each components is <2kb Brotli',
        icon: Feather,
        link: '',
      },
      {
        title: 'Clean',
        description: 'Astel UI provides clean and minimal ui components',
        icon: Zap,
        link: '',
      },
      {
        title: 'OSS',
        description: 'Astel is Open-source and available freely under MIT license',
        icon: Github,
        link: 'https://github.com/astel-org/astel',
      },
    ])

    return {
      features,
      currentPage,
      Feather,
      Github,
      Zap,
    }
  },
})
</script>

<template>
  <section class="flex flex-col md:h-screen w-screen justify-center mx-auto">
    <div class="flex-row mt-44 md:mt-0 mb-12">
      <div class="text-center w-full">
        <h1 class="text-6xl font-bold">Astel</h1>
        <p class="text-2xl mt-4 text-[color:var(--accents-5)] font-medium">
          A sleek and minimal Vue 3 UI component library
        </p>
      </div>
      <div class="flex items-center justify-center mt-10">
        <NuxtLink to="/components/button">
          <as-button size="large" type="success" variant="shadow">Get Started</as-button>
        </NuxtLink>
      </div>

      <div
        class="text-center mt-32 px-6 lg:px-0 flex flex-col md:flex-row md:max-w-5xl mx-auto w-full gap-8"
      >
        <NuxtLink
          v-for="(feature, index) in features"
          :key="index"
          :to="feature.link"
          class="flex-1"
        >
          <as-card hoverable shadow>
            <div class="flex flex-row items-center p-2">
              <span class="border-[1px] border-[color:var(--accents-2)] rounded-full px-2 py-3">
                <component :is="feature.icon" class="mx-1" />
              </span>
              <p class="text-xl font-semibold mx-3">{{ feature.title }}</p>
            </div>
            <p class="text-left p-2 text-[color:var(--accents-6)]">
              {{ feature.description }}
            </p>
          </as-card>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
