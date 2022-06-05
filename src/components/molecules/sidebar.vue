<script lang="ts" setup>
const route = useRoute()
const navigationRoutes = ref()

onMounted(async () => {
  navigationRoutes.value = await getSidebarRoutes()
})

watch(route, async () => {
  navigationRoutes.value = await getSidebarRoutes()
})

const getSidebarRoutes = async () => {
  const r = await queryContent()
    .where({ _path: new RegExp(route.path.split('/')[1], 'i') })
    .only(['_path', 'title', 'pageTitle', 'groupTitle'])
    .sort({ groupTitle: -1 })
    .find()

  const ObjMap = {}

  r.forEach((element) => {
    const makeKey = element.groupTitle
    if (!ObjMap[makeKey]) {
      ObjMap[makeKey] = []
    }

    ObjMap[makeKey].push({
      path: element._path,
      pageTitle: element.pageTitle,
    })
  })
  console.log(ObjMap)
  return ObjMap
}
</script>

<template>
  <aside class="flex-col flex">
    <nav>
      <ol>
        <li
          v-for="(value, key) of navigationRoutes"
          :key="key"
          class="flex flex-col items-start justify-start pt-4"
        >
          <p class="font-medium uppercase text-sm">{{ key }}</p>

          <NuxtLink
            v-for="(item, index) in value"
            :key="index"
            :to="item.path"
            class="font-normal text-base"
          >
            <p>{{ item.pageTitle }}</p>
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </aside>
</template>
