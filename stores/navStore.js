import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', {
  state: () => ({ isOpen: false }),

  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
})