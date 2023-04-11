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
        <div class="sticky top-0">
          <splide :options="{ rewind: true }">
            <splide-slide v-for="image in blok.images" :key="image.id">
              <img :src="image.filename" :alt="image.alt" />
            </splide-slide>
          </splide>
        </div>
      </div>
      <div class="pl-6 w-1/2">
        <h1 class="h2 mb-6">{{ blok.name }}</h1>
        <p class="h2 mb-6">{{ blok.price }} BGN</p>

        <nav></nav>
        <p class="mb-6">{{ blok.description }}</p>

        <div>Вариация на продукт:</div>

        <button class="button button--primary button--block mt-6">
          Add to Cart - {{ blok.price }} BGN
        </button>
      </div>
    </section>
  </VSection>
  <VSection class="h-[400px] bg-gray-400">Изображение кавър</VSection>
  <VSection>
    <h4 class="h2 text-center">Сходни продукти</h4>
  </VSection>
</template>
