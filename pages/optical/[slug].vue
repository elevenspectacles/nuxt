<script setup>
const route = useRoute();
const { locale } = useI18n();
const story = await useAsyncStoryblok(`optical/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
  language: locale.value,
});
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
