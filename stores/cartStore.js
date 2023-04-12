import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [{ id: 1 }]
  }),

  getters: {
    count: (cartStore) => cartStore.items.length
  },

  actions: {
    addItem(product) {
      this.items.push({ ...product })
    }
  }
})