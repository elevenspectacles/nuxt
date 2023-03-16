<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const options = {
  perPage: 5,
  focus: "center",
  trimSpace: "move",
  autoplay: true,
  interval: 5000,
  throttle: 200,
  gap: "24px",
  padding: "24px",
  perMove: 1,
  slideFocus: true,
  pagination: true,
  lazyLoad: "nearby",
  omitEnd: true,
  breakpoints: {
    1440: {
      perPage: 3,
    },
    920: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
};

defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok" class="px-0">
    <h1 class="mb-6 px-6 text-center">{{ blok.heading }}</h1>

    <div class="px-12">
      <splide :options="options" id="splide" class="splide">
        <splide-slide
          v-for="product in blok.productList"
          :key="product.uuid"
          class="splide__slide"
        >
          <ProductCard :product="product" />
        </splide-slide>
      </splide>
    </div>
  </VSection>
</template>

<style scoped>
.splide__slide {
  padding-bottom: 48px;
}
</style>
