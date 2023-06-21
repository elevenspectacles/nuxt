<script setup>
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => {
  return renderRichText(blok.content);
});
</script>

<template>
  <div v-html="articleContent"></div>
</template>
