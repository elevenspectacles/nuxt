<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <pre>{{ blok.content }}</pre>
  <h1>{{ blok.title }}</h1>
  <div v-html="blok.content"></div>
</template>
