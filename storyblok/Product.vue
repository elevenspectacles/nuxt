<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <div v-editable="blok">
    <h1>{{ blok.name }}</h1>
    <p>{{ blok.price }}</p>
  </div>
</template>
