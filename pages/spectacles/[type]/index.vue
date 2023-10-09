<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
const { find } = useStrapi();
const response = await find("products", {
  filters: {
    type: {
      $eq: route.params.type,
    },
  },
  locale: locale?.value || "en",
});
</script>

<template>
  <UContainer>
    <VSection>
      <div v-for="product in response.data" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </VSection>
  </UContainer>
</template>
