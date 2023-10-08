import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    order: useStorage('eleven-order', [])
  }),

  getters: {
  },

  actions: {
  }
})