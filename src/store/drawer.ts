import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => {
    return {
      isVisible: false,
    }
  },
  actions: {
    toggleDrawer() {
      this.isVisible = !this.isVisible
    },
  },
})
