<script setup>
const story = await useStoryblok(
  "home",
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
  <div>
    <pre>{{ story }}</pre>
    <StoryblokComponent v-if="story" :blok="story.content" />

    <TheSocialSection />

    <TheSubscribe />
  </div>
</template>
