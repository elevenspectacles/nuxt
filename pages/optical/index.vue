<script setup>
const { locale } = useI18n();
const story = await useAsyncStoryblok(
  "optical",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "products.productList",
    language: locale.value,
  },
  {
    resolveRelations: "products.productList",
  }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
