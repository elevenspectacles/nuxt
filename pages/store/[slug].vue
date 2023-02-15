<script setup>
const route = useRoute();
const story = await useStoryblok(`store/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
});
</script>

<template>
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
