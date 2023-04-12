<script setup>
const cartStore = useCartStore();
</script>

<template>
  <VSection>
    <h1>Shopping Cart</h1>
    {{ cartStore.total }}
  </VSection>
</template>
