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

const people = [
  {
    id: 1,
    thumbnail: "Lindsay Walton",
    title: "Front-end Developer",
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    thumbnail: "Courtney Henry",
    title: "Designer",
    quantity: 1,
    price: 120,
  },
  {
    id: 3,
    thumbnail: "Tom Cook",
    title: "Director of Product",
    quantity: 1,
    price: 120,
  },
];
</script>

<template>
  <UContainer>
    <VSection>
      <h1>Shopping cart</h1>

      <UTable :columns="columns" :rows="people">
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
