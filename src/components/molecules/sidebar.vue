<script lang="ts" setup>
const { currentRoutes } = useNavigation()
</script>

<template>
  <aside v-if="currentRoutes" class="flex-col md:flex hidden">
    <nav>
      <ol>
        <li v-for="(route, index) of currentRoutes.children" :key="index" class="mb-8">
          <p class="font-medium text-[color:var(--accents-3)] tracking-wider uppercase text-xs">
            {{ route.title }}
          </p>

          <NuxtLink
            v-for="(item, index) in route.children"
            :key="index"
            :to="item.link"
            active-class="text-[color:var(--astel-success)] font-semibold"
            class="capitalize my-3 tracking-wide text-base block"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </aside>
</template>
