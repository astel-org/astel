import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => {
    return {
      isVisible: true,
    }
  },
  actions: {
    toggleDrawer() {
      this.isVisible = !this.isVisible
    },
  },
})
