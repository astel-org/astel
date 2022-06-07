export interface RouteItem {
  path: string
  pageTitle: string
}

export interface GroupedRoutes {
  [key: string]: RouteItem[]
}

export const useNavigation = () => {
  const route = useRoute()
  const groupedRoutes = ref<GroupedRoutes>()

  onMounted(async () => {
    groupedRoutes.value = await getSidebarRoutes()
  })

  watch(route, async () => {
    groupedRoutes.value = await getSidebarRoutes()
  })

  const getSidebarRoutes = async () => {
    const groupedRoutes = {} as GroupedRoutes

    const queriedRoutes = await queryContent()
      .where({ _path: new RegExp(route.path.split('/')[1], 'i') })
      .only(['_path', 'title', 'pageTitle', 'groupTitle'])
      .find()

    queriedRoutes.forEach((route) => {
      const grouptitleKey = route.groupTitle
      if (!groupedRoutes[grouptitleKey]) {
        groupedRoutes[grouptitleKey] = []
      }

      groupedRoutes[grouptitleKey].push({
        path: route._path,
        pageTitle: route.pageTitle,
      })
    })
    return groupedRoutes
  }

  return { groupedRoutes }
}
