<script setup>
const story = await useStoryblok(
  "/sunglasses",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "products.productList",
  },
  {
    resolveRelations: "products.productList",
  }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
