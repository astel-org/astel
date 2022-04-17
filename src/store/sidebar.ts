import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      isVisible: true,
    }
  },
  actions: {
    toggleSidebar() {
      this.isVisible = !this.isVisible
    },
  },
})
