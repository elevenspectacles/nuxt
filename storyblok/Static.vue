<script setup lang="ts">
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => {
  return renderRichText(blok?.content);
});
</script>

<template>
  <div v-html="articleContent" class="st"></div>
</template>

<style>
.st {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.5;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
  p + p {
    margin-top: 12px;
  }
}
</style>
