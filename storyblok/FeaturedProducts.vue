<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <h1 class="mb-6">{{ blok.heading }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <ProductCard v-for="product in blok.productList" :product="product" />
    </div>
  </VSection>
</template>
