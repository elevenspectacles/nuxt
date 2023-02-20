<script setup>
const localePath = useLocalePath();
defineProps({
  product: Object,
});
</script>

<template>
  <nuxt-link
    :to="localePath({ name: 'store-slug', params: { slug: product.slug } })"
    class="group cursor-pointer flex flex-col rounded-md relative items-center justify-between overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200"
  >
    <header class="w-full h-80 relative">
      <img
        class="opacity-100 group-hover:opacity-0 absolute top-0 right-0 bottom-0 left-0 object-contain w-full h-full"
        :src="product.content.images[1].filename"
        :alt="product.content.images[1].alt"
      />
      <img
        class="opacity-0 group-hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 object-contain w-full h-full"
        :src="product.content.images[0].filename"
        :alt="product.content.images[0].alt"
      />
    </header>
    <!-- <span
      class="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-heading text-white text-10px md:text-sm leading-5 -md-md inline-block px-2 xl:px-3 pt-0.5 pb-1"
    >
      15%
    </span> -->
    <main class="w-full py-6 px-4">
      <div class="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
        <h2 class="text-sm md:text-base xl:text-md mb-1">
          {{ product.content.name }}
        </h2>
        <p
          class="text-c-gray text-xs xl:text-sm truncate max-w-[250px]"
          v-if="product.content.description"
        >
          {{ product.content.description }}
        </p>
      </div>

      <p class="mt-2.5 font-semibold text-lg">
        {{ product.content.price }}<span class="text-sm">BGN</span>
      </p>

      <!-- <button class="button button--primary button--block">Add to cart</button> -->
    </main>
  </nuxt-link>
</template>
