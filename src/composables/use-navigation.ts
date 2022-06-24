const routes: NavigationRoutes[] = [
  {
    title: 'Guide',
    children: [
      {
        title: 'Getting Started',
        children: [
          {
            title: 'Introduction',
            link: '/guide/introduction',
          },
          {
            title: 'Installation',
            link: '/guide/installation',
          },
        ],
      },
      {
        title: 'Customization',
        children: [
          {
            title: 'Colors',
            link: '/guide/colors',
          },
          {
            title: 'Themes',
            link: '/guide/theme',
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Atoms',
        children: [
          {
            title: 'Button',
            link: '/components/button',
          },
        ],
      },
    ],
  },
  {
    title: 'Composables',
    children: [
      {
        title: 'Common',
        children: [
          {
            title: 'useTheme',
            link: '/composables/introduction',
          },
        ],
      },
      {
        title: 'Utilities',
        children: [
          {
            title: 'useCopy',
            link: '/composables/colors',
          },
        ],
      },
    ],
  },
]

export interface NavigationRoutes {
  title: string
  link?: string
  children?: NavigationRoutes[]
}

export const useNavigation = () => {
  const route = useRoute()
  const currentRoutes = ref<NavigationRoutes>()

  onMounted(async () => {
    currentRoutes.value = getCurrentRoutes()
  })

  watch(route, async () => {
    currentRoutes.value = getCurrentRoutes()
  })

  const getCurrentRoutes = () =>
    routes.find((r) => r.title.toLowerCase() === route.path.split('/')[1])

  return { currentRoutes, fullRoutes: routes }
}
