<script setup>
const story = await useStoryblok(
  "store",
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
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
