<script setup lang="ts">
const localePath = useLocalePath();

definePageMeta({
  layout: "checkout",
});

const cartStore = useCartStore();

const columns = [
  {
    key: "thumbnail",
    label: "Product",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "quantity",
    label: "quantity",
  },
  {
    key: "price",
    label: "Price",
  },
];
</script>

<template>
  <UContainer>
    <VSection>
      <h1>Shopping cart</h1>

      <UTable :columns="columns" :rows="cartStore.items">
        <template #thumbnail-data="{ row }">{{ row }}</template>
        <template #actions-datas="{ row }">{{ row }}</template>
      </UTable>

      <p>Total: {{ cartStore.total }}</p>

      <UButton :to="localePath({ name: 'cart-order-confirmation' })">
        Checkout
      </UButton>
    </VSection>
  </UContainer>
</template>
