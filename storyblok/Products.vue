<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <h1>{{ blok.title }}</h1>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
    <ProductListItem v-for="product in blok.productList" />
  </div>
  <pre>{{ blok }}</pre>
</template>
