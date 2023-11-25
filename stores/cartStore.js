import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: useStorage("eleven-cart", new Map()),
  }),

  getters: {
    items: (cartStore) => [...cartStore.cart],
    count: (cartStore) => cartStore.cart.size,
    total: (cartStore) =>
      cartStore.items.reduce((a, c) => a + Number(c.price), 0),
  },

  actions: {
    add(product) {
      if (this.cart.has(product.id)) {
        this.cart.get(product.id).quantity++;
      } else {
        this.cart.set(product.id, { ...product, quantity: 1 });
      }
    },
    remove(product) {
      if (this.cart.get(product.id).quantity > 1) {
        this.cart.get(product.id).quantity--;
      } else {
        this.delete(product);
      }
    },
    delete(product) {
      if (this.cart.get(product.id)) {
        this.cart.delete(product.id);
      }
    },
  },
});
