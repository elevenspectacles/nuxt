<script setup>
import { faker } from "@faker-js/faker";

const items = 6;
</script>

<template>
  <VSection class="grid grid-cols-3 md:grid-cols-6 gap-2 border-t">
    <a
      v-for="item in items"
      :key="item"
      class="group flex justify-center text-center relative h-52 rounded overflow-hidden"
      href="/#"
      target="_blank"
    >
      <img
        alt=""
        :src="faker.image.city(600, 480, true)"
        decoding="async"
        data-nimg="intrinsic"
        class="bg-gray-300 object-cover h-full w-full"
      />
      <div
        class="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"
      ></div>
      <div class="absolute top left h-full w-full flex items-center justify-center">
        <Icon
          name="mdi:instagram"
          class="text-white text-6xl transform opacity-0 scale-150 transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:scale-100"
        />
      </div>
    </a>
  </VSection>
</template>
