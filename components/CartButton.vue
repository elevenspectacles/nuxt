<script setup>
const cartStore = useCartStore();
const localePath = useLocalePath();
</script>

<template>
  <nuxt-link :to="localePath('cart')" class="cart-button">
    <Icon name="ic:outline-shopping-bag" class="cart-button__icon"/>
    <span class="cart-button__count">{{ cartStore.count }}</span>
  </nuxt-link>
</template>

<style lang="postcss">
.cart-button {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  @apply w-14 h-14 lg:w-10 lg:h-10 flex items-center justify-center relative rounded-full bg-black hover:bg-gray-400;
}

.cart-button:hover .cart-button__icon {
  @apply text-white;
}
.cart-button__icon {
  @apply text-white text-2xl lg:text-xl leading-none;
}

.cart-button__count {
  min-width: 18px;
  min-height: 18px;
  padding: 0px;
  border-radius: 20px;
  font-size: 9px;
  line-height: 1;
  top: 0px;
  right: 0px;
  font-weight: 500;
  border: 1px solid;
  @apply flex items-center justify-center  absolute rounded-full
    bg-white;
}
</style>
