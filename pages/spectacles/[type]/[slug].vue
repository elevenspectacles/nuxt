<script setup>
const route = useRoute();
const { locale } = useI18n();
// const story = await useAsyncStoryblok(
//   `${route.params.type}/${route.params.slug}`,
//   {
//     version: route.query._storyblok ? "draft" : "published",
//     language: locale.value,
//   }
// );

const { findOne } = useStrapi();

const response = await findOne("products", {
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
    {{ route.params.slug }}
    <UButton @click="test">Add to Cart</UButton>
  </VSection>
</template>
