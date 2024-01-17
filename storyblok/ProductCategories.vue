<script setup>
const localePath = useLocalePath();

defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <div class="grid gap-6 grid-cols-2">
      <nuxt-link :to="localePath('sunglasses')" class="group relative block">
        <div class="relative h-[350px] sm:h-[450px] overflow-hidden">
          <NuxtImg
            :src="blok.leftPrimaryImg[0].filename"
            :alt="blok.leftPrimaryImg[0].alt"
            class="absolute inset-0 h-full w-full object-cover opacity-100 duration-500 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 h-full w-full object-cover opacity-30 bg-black"
          ></div>
        </div>

        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h2 class="text-white">{{ blok.leftTitle }}</h2>

          <p class="my-1.5 max-w-[40ch] text-white">
            {{ blok.leftDescription }}
          </p>

          <VButton> {{ blok.leftButton }} </VButton>
        </div>
      </nuxt-link>

      <nuxt-link :to="localePath('optical')" class="group relative block">
        <div class="relative h-[350px] sm:h-[450px] overflow-hidden">
          <NuxtImg
            :src="blok.rightPrimaryImg[0].filename"
            :alt="blok.rightPrimaryImg[0].alt"
            class="absolute inset-0 h-full w-full object-cover opacity-100 duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 h-full w-full object-cover opacity-30 bg-black"
          ></div>
        </div>

        <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h2 class="text-white">{{ blok.rigthTitle }}</h2>

          <p class="my-1.5 max-w-[40ch] text-white">
            {{ blok.rightDescription }}
          </p>

          <VButton> {{ blok.rightButton }} </VButton>
        </div>
      </nuxt-link>
    </div>
  </VSection>
</template>
