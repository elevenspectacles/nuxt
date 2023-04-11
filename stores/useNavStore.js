import { defineStore } from 'pinia'

export const useNavStore = defineStore('useNavStore', {
  state: () => ({ isOpen: false }),
  getters: {
    // isOpen: (state) => state.isOpen,
  },
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
})