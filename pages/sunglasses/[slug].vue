<script setup>
const route = useRoute();
const story = await useStoryblok(`/sunglasses/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
});
</script>

<template>
  <VSection>
    <pre>{{ story.content }}</pre>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
