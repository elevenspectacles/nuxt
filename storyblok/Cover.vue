<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <section class="cover" v-editable="blok">
    <h1 class="mb-3 text-white">{{ blok.heading }}</h1>
    <p class="text-white">
      {{ blok.subheading }}
    </p>
    <!-- <NuxtImg
      src="/"
      :alt="blok.image?.alt"
      class="cover__image"
    /> -->
  </section>
</template>

<style lang="postcss" scoped>
.cover {
  @apply relative flex items-center justify-center flex-col h-52 bg-gray-800;
}

.cover__image {
  position: absolute;
  left: 0%;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
