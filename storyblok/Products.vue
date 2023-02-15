<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <div v-editable="blok">
    <h1>{{ blok.title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <ProductCard
        v-for="product in blok.productList"
        :key="product.uuid"
        :product="product"
      />
    </div>
  </div>
</template>
