<script setup>
const story = await useStoryblok(
  "home",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "featuredProducts.productList",
  },
  {
    resolveRelations: "featuredProducts.productList",
  }
);
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />

    <TheSocialSection />

    <TheSubscribe />
  </div>
</template>
