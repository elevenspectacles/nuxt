<script setup>
const cartStore = useCartStore();
const route = useRoute();
const { locale } = useI18n();
const { findOne } = useStrapi();

const product = await findOne("products", {
  filters: {
    type: {
      $eq: route.params.type,
    },
    slug: {
      $eq: route.params.slug,
    },
  },
  locale: locale?.value || "en",
});
</script>

<template>
  <VSection>
    <pre>{{ route.params }}</pre>
    <pre>{{ product.data[0] }}</pre>
    <UButton @click="cartStore.add(product.data[0])"> Add to Cart </UButton>
  </VSection>
</template>
