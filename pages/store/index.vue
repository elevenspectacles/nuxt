<script setup>
const story = await useStoryblok(
  "store",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "featuredProducts.products",
  },
  {
    resolveRelations: "featuredProducts.products",
  }
);
</script>

<template>
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
