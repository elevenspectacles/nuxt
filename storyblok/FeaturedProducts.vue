<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
const options = {
  type: "loop",
  perPage: 5,
  focus: "left",
  autoplay: true,
  interval: 5000,
  gap: "48px",
  padding: "48px",
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
    <splide :options="options" class="c-featured-products">
      <splide-slide
        v-for="product in blok.productList"
        :key="product.uuid"
        class="splide__slide"
      >
        <ProductCard :product="product" />
      </splide-slide>
    </splide>
  </VSection>
</template>

<style lang="postcss">
.c-featured-products .splide__slide {
  padding-bottom: 48px;
}

.c-featured-products .splide__arrow {
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  @apply transition-colors bg-gray-100 flex items-center justify-center border border-r-0 hover:bg-c-black hover:border-c-black;
}

.c-featured-products .splide__arrow svg {
  width: 1rem;
}

.c-featured-products .splide__arrow:hover svg {
  fill: #fff;
}

.c-featured-products .splide__arrow--prev {
  left: 0;
  transform: rotate(180deg);
}

.c-featured-products .splide__arrow--next {
  right: 0;
}
</style>
