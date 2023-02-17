<script setup>
const route = useRoute();
const { locale } = useI18n();
const story = await useStoryblok(`/st/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
  language: locale.value,
});
</script>

<template>
  <VSection class="static-page">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </VSection>
</template>

<style lang="postcss">
.static-page {
  max-width: 768px;
  margin: 0 auto;
}
.static-page h2,
.static-page h3,
.static-page h4,
.static-page h5 {
  @apply mt-6;
}

.static-page li {
  @apply relative pl-5;
}
.static-page li + li {
  @apply mt-4;
}
.static-page ul li::before {
  content: "•";
  @apply absolute left-0 top-2/4 -translate-y-1/2 block;
  left: 0;
  top: 16px;
  color: #084c61;
  font-size: 2rem;
}
.static-page ol li {
  counter-increment: step-counter;
}
.static-page ol li::before {
  content: counter(step-counter) ".";
  @apply absolute left-0 top-2/4 -translate-y-1/2 block;
  left: 2p1;
  top: 16px;
  color: #084c61;
  font-size: 1rem;
  font-weight: bold;
}
</style>
