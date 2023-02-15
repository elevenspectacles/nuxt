<script setup>
const route = useRoute();
const story = await useStoryblok(`st/${route.params.slug}`, {
  version: "draft",
});
</script>

<template>
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
