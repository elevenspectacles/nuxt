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

const test = () => {};
</script>

<template>
  <VSection>
    <UButton @click="test">Add to Cart</UButton>
  </VSection>
</template>
