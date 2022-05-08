<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronRight } from '@astel/icons'
import type { PropType } from 'vue'
import type { SidebarItems } from '../molecules/sidebar.vue'
export default defineComponent({
  components: { ChevronRight },
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array as PropType<SidebarItems[]>,
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
  <ul class="rounded-md py-2">
    <li class="list-none flex flex-row justify-between w-full px-6" @click="toggleShow">
      <span class="font-medium"> {{ title }}</span>
      <ChevronRight
        v-if="$props?.items?.length > 0"
        class="duration-200 transition-all"
        :class="{ 'rotate-90': showMenu }"
      />
    </li>

    <li class="list-none">
      <Transition>
        <ul
          v-if="showMenu"
          class="duration-200 px-6 py-4 transition-all mt-2 bg-[color:var(--accents-1)]"
          :class="[showMenu ? 'border-t' : '']"
        >
          <li v-for="child in $props?.items" :key="child.title" class="py-1">
            {{ child.title }}
          </li>
        </ul></Transition
      >
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
