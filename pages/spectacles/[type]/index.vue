<script setup lang="ts">
import type { variants } from "#tailwind-config";

const route = useRoute();
const { locale } = useI18n();
const { find } = useStrapi();
const response = await find("products", {
  filters: {
    type: {
      $eq: route.params.type,
    },
    locale: { $eq: locale?.value || "en" },
  },
  populate: {
    variants: true,
  },
  fields: ["name", "price", "slug"],
});
</script>

<template>
  <UContainer>
    <VSection class="grid grid-cols-3 gap-6">
      <ProductCard
        :product="product"
        v-for="product in response.data"
        :key="product.id"
      />
    </VSection>
  </UContainer>
</template>
