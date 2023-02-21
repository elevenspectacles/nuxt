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
    <!-- <img src="/img.png" :alt="blok.image?.alt" class="jumbotron__image" /> -->
  </section>
</template>

<style lang="postcss" scoped>
.cover {
  @apply relative flex items-center justify-center flex-col h-40 bg-gray-800;
}

.jumbotron__overlay {
  @apply relative max-w-xl text-white px-6 py-10  mx-6 z-20;
}

/* .jumbotron__overlay::before {
  content: "";
  @apply top-0 right-0 bottom-0 left-0 absolute block bg-c-black opacity-60 -z-10 rounded-md;
} */

.jumbotron__image {
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
