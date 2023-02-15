<script setup>
const story = await useStoryblok("store", {
  version: "draft",
});
</script>

<template>
  <VSection>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>
