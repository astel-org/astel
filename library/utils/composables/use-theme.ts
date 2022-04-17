import { onMounted, watch } from 'vue'
import { useState } from './use-state'

export type Theme = 'light-theme' | 'dark-theme'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>()

  const changeTheme = () => {
    if (typeof window === 'undefined' || !window.localStorage) return
    setTheme((pre) => (pre === 'light-theme' ? 'dark-theme' : 'light-theme'))
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.localStorage) return

    const isDarkMode =
      matchMedia('(prefers-color-scheme)').media !== 'not all' &&
      matchMedia('(prefers-color-scheme: dark)').matches

    const theme =
      (localStorage.getItem('theme') as Theme) || (isDarkMode ? 'dark-theme' : 'light-theme')
    setTheme(theme)
  })

  watch(theme, (pre) => {
    if (typeof window === 'undefined' || !window.localStorage) return
    localStorage.setItem('theme', pre)
    const root = document.querySelector('body') as HTMLElement
    root.setAttribute('class', theme.value)
  })

  return {
    changeTheme,
    theme,
  }
}
