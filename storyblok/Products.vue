<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <div class="grid grid-cols-4 gap-x-4 gap-y-8">
      <ProductCard
        v-for="product in blok.productList"
        :key="product.uuid"
        :product="product"
      />
    </div>
  </VSection>
</template>
