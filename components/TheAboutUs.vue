<script setup>
import { faker } from "@faker-js/faker";
const localePath = useLocalePath();
const { t } = useI18n();
</script>

<template>
  <VSection class="pt-0">
    <div class="px-4 py-6 md:px-8 md:py-12 bg-gray-50 rounded flex">
      <div class="pr-8 w-1/2">
        <h2>{{ t("aboutUs") }}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat id
          officiis eius ratione cum laudantium ipsum eveniet incidunt sequi vero ullam
          illo, beatae enim dolore, ea eaque? Eos, officiis?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat id
          officiis eius ratione cum laudantium ipsum eveniet incidunt sequi vero ullam
          illo, beatae enim dolore, ea eaque? Eos, officiis?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat id
          officiis eius ratione cum laudantium ipsum eveniet incidunt sequi vero ullam
          illo, beatae enim dolore, ea eaque? Eos, officiis?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat id
          officiis eius ratione cum laudantium ipsum eveniet incidunt sequi vero ullam
          illo, beatae enim dolore, ea eaque? Eos, officiis?
        </p>
        <nuxt-link to="/" class="button button--primary mt-6"
          >{{ t("aboutUs") }}
        </nuxt-link>
      </div>
      <div class="pl-8 w-1/2 rounded">
        <img
          :src="faker.image.city(600, 480, true)"
          alt=""
          class="rounded h-full object-cover"
        />
      </div>
    </div>
  </VSection>
</template>
