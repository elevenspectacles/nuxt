<script setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>

<template>
  <main><slot /></main>
  <TheFooter />
</template>
