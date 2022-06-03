<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<template>
  <div>
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <template #not-found>
        <h1 class="text-2xl">Page not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>
