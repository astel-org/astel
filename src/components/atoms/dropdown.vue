<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronRight } from '@astel/icons'
import type { PropType } from 'vue'
import type { DrawerItems } from '~~/src/components/molecules/drawer.vue'
export default defineComponent({
  components: { ChevronRight },
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array as PropType<DrawerItems[]>,
    },
  },
  setup() {
    const showMenu = ref(false)

    const toggleShow = () => (showMenu.value = !showMenu.value)

    return {
      toggleShow,
      showMenu,
    }
  },
})
</script>

<template>
  <ul class="py-4 border-b-[1px] border-[color:var(--accents-2)] cursor-pointer">
    <li class="list-none flex flex-row justify-between w-full px-6" @click="toggleShow">
      <span class="font-medium"> {{ title }}</span>
      <ChevronRight
        v-if="$props?.items?.length > 0"
        class="duration-200 transition-all"
        :class="{ 'rotate-90': showMenu }"
      />
    </li>

    <li v-if="showMenu && $props.items?.length > 0" class="list-none">
      <ul
        class="duration-200 px-6 py-4 -mb-4 transition-all mt-4 bg-[color:var(--accents-1)]"
        :class="[showMenu ? 'border-t-[1px] border-[color:var(--accents-2)]' : '']"
      >
        <li
          v-for="child in $props?.items"
          :key="child.title"
          class="py-2 text-[color:var(--accents-5)]"
        >
          <NuxtLink :to="child.link"> {{ child.title }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul li::before {
  display: none;
}

ul li {
  margin-bottom: 0px !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
