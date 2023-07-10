<script setup>
const route = useRoute();
const { locale } = useI18n();
const story = await useAsyncStoryblok(
  `${route.params.type}/${route.params.slug}`,
  {
    version: route.query._storyblok ? "draft" : "published",
    language: locale.value,
  }
);
</script>

<template>
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
