import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: []
  }),

  getters: {
    count: (cartStore) => cartStore.items.length,
    total: (cartStore) => cartStore.items.reduce((a, c) => a + Number(c.price), 0)
  },

  actions: {
    addItem(product) {
      this.items.push({ ...product })
    }
  }
})