<script setup>
defineProps({
  product: Object,
});
</script>

<template>
  <VSection>
    <pre>{{ product }}</pre>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price }}</p>
  </VSection>
</template>
