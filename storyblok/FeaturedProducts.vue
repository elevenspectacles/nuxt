<script setup>
import { register } from "swiper/element/bundle";
register();

defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <h1 class="mb-6">{{ blok.heading }}</h1>

    <swiper-container
      slides-per-view="5"
      speed="500"
      space="10"
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
      <div slot="container-start"></div>
      <div slot="container-end"></div>
      <swiper-slide v-for="product in blok.productList" :key="product.uuid">
        <ProductCard :product="product" />
      </swiper-slide>
    </swiper-container>
  </VSection>
</template>
