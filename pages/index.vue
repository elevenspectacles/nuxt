<script setup>
const { locale } = useI18n();

const story = await useStoryblok(
  "home",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "featuredProducts.productList",
    language: locale.value,
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
