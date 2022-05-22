import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      isVisible: false,
    }
  },
  actions: {
    toggleSidebar() {
      this.isVisible = !this.isVisible
    },
  },
})
