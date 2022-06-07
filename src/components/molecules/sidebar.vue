<script lang="ts" setup>
const { groupedRoutes } = useNavigation()
</script>

<template>
  <aside class="flex-col flex">
    <nav>
      <ol>
        <li v-for="(value, key) of groupedRoutes" :key="key" class="mb-8">
          <p class="font-medium text-[color:var(--accents-3)] tracking-wider uppercase text-xs">
            {{ key }}
          </p>

          <NuxtLink
            v-for="(item, index) in value"
            :key="index"
            :to="item.path"
            active-class="text-[color:var(--astel-success)] font-semibold"
            class="capitalize my-3 tracking-wide text-base block"
          >
            {{ item.pageTitle }}
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </aside>
</template>
