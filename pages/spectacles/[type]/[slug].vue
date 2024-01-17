<script setup>
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

const test = () => {};
</script>

<template>
  <VSection>
    {{ product }}
    {{ route.params.slug }}
    <UButton @click="test">Add to Cart</UButton>
  </VSection>
</template>
