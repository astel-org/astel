<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronRight } from '@astel/icons'
import type { PropType } from 'vue'
import type { NavigationRoutes } from '../../composables/use-navigation'
import { useDrawerStore } from '~~/src/store/drawer'

export default defineComponent({
  components: { ChevronRight },
  props: {
    item: {
      type: Object as PropType<NavigationRoutes>,
    },
  },
  setup() {
    const showMenu = ref(false)

    const { toggleDrawer } = useDrawerStore()

    const toggleShow = () => (showMenu.value = !showMenu.value)

    return {
      toggleShow,
      toggleDrawer,
      showMenu,
    }
  },
})
</script>

<template>
  <ul class="border-b-[1px] border-[color:var(--accents-2)] cursor-pointer">
    <li class="list-none py-4 flex flex-row justify-between w-full px-4" @click="toggleShow">
      <span class="font-medium"> {{ item.title }}</span>
      <ChevronRight
        v-if="$props?.item?.children.length > 0"
        class="duration-200 transition-all"
        :class="{ 'rotate-90': showMenu }"
      />
    </li>

    <li v-show="showMenu && $props.item.children?.length > 0" class="list-none">
      <ul
        class="duration-200 space-y-4 px-6 py-6 transition-all h-full bg-[color:var(--accents-1)]"
        :class="[showMenu ? 'border-t-[1px] border-[color:var(--accents-2)]' : '']"
      >
        <li v-for="(route, index) of item.children" :key="index" class="space-y-2">
          <span class="font-medium text-[color:var(--accents-3)] tracking-wider uppercase text-xs">
            {{ route.title }}
          </span>
          <div class="ml-2 border-l space-y-2 text-sm">
            <NuxtLink
              v-for="(item, index) in route.children"
              :key="index"
              :to="item.link"
              active-class="text-[color:var(--astel-success)] font-semibold"
              class="ml-4 capitalize tracking-wide text-base block"
              @click="toggleDrawer"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
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
