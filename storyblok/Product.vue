<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <VSection>
    <pre>{{ blok }}</pre>
    <h1>{{ blok.name }}</h1>
    <p>{{ blok.price }}</p>
  </VSection>
</template>
