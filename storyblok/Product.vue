<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";

const productStore = useCartStore();

defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <splide :options="{ rewind: true }">
          <splide-slide v-for="image in blok.images" :key="image.id">
            <img :src="image.filename" :alt="image.alt" />
          </splide-slide>
        </splide>
      </div>
      <div class="sticky top-[120px]">
        <strong
          class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong>

        <div class="mt-8">
          <div class="max-w-[35ch] space-y-2">
            <h1 class="text-xl font-bold sm:text-2xl">
              {{ blok.name }}
            </h1>

            <p class="text-lg font-bold">{{ blok.price }} BGN</p>
          </div>

          <div class="mt-4">
            <div class="prose max-w-none">
              <p>
                {{ blok.description }}
              </p>
            </div>

            <button class="mt-2 text-sm font-medium underline">Read More</button>
          </div>

          <div class="mt-8 flex gap-4">
            <div>
              <label for="quantity" class="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min="1"
                value="1"
                class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <VButton type="submit"> Add to Cart </VButton>
          </div>
        </div>
      </div>
    </div>
  </VSection>
  <VSection class="h-[400px] bg-gray-400">Изображение кавър</VSection>
  <VSection>
    <h4 class="h2 text-center">Сходни продукти</h4>
  </VSection>
</template>
