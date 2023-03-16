<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";
defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    {{ blok }}
    <section class="flex items-start">
      <div class="pr-6 w-1/2">
        <splide :options="{ rewind: true }">
          <splide-slide>
            <img :src="blok.images[0].filename" alt="" />
          </splide-slide>
          <splide-slide>
            <img :src="blok.images[0].filename" alt="" />
          </splide-slide>
          <splide-slide>
            <img :src="blok.images[0].filename" alt="" />
          </splide-slide>
        </splide>
      </div>
      <div class="pl-6 w-1/2">
        <h1 class="h2 mb-6">{{ blok.name }}</h1>
        <p class="h2 mb-6">{{ blok.price }} BGN</p>
        <button class="button button--primary button--block">Add to Cart</button>
      </div>
    </section>
  </VSection>
  <VSection class="h-[400px] bg-gray-400">Изображение кавър</VSection>
  <VSection>
    <h4 class="h2 text-center">Сходни продукти</h4>
  </VSection>
</template>
