<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
const options = {
  type: "loop",
  perPage: 4,
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
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch">
      <div class="grid p-6 bg-gray-100 place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2>Featured products</h2>

            <p class="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              rerum quam amet provident nulla error!
            </p>
          </header>

          <VButton class="mt-6"> Shop All </VButton>
        </div>
      </div>

      <div class="lg:col-span-3">
        <splide :options="options" class="c-featured-products">
          <splide-slide
            v-for="product in blok.productList"
            :key="product.uuid"
            class="splide__slide"
          >
            <ProductCard :product="product" />
          </splide-slide>
        </splide>
      </div>
    </div>
  </VSection>
</template>

<style lang="postcss">
.c-featured-products .splide__slide {
  padding-bottom: 24px;
}

.c-featured-products .splide__arrow {
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  @apply transition-colors bg-gray-100 flex items-center justify-center border  hover:bg-black hover:border-black;
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
