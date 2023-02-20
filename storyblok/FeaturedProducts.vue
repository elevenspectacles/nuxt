<script setup>
import { register } from "swiper/element/bundle";
register();

defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok" class="px-0">
    <h1 class="mb-6 px-6">{{ blok.heading }}</h1>

    <swiper-container
      speed="500"
      class="px-4"
      :breakpoints="{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }"
    >
      <swiper-slide v-for="product in blok.productList" :key="product.uuid">
        <div class="px-2 py-12">
          <ProductCard :product="product" />
        </div>
      </swiper-slide>
    </swiper-container>
  </VSection>
</template>
