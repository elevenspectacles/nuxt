<script setup lang="ts">
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => {
  return renderRichText(blok?.content);
});
</script>

<template>
  <article v-html="articleContent"></article>
</template>
