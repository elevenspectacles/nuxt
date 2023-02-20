<script setup>
const localePath = useLocalePath();
defineProps({
  product: Object,
});
</script>

<template>
  <nuxt-link
    :to="localePath({ name: 'store-slug', params: { slug: product.slug } })"
    class="group cursor-pointer group flex flex-col rounded-md relative items-center justify-between overflow-hidden transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200"
  >
    <div
      class="flex justify-center items-center p-6 h-full 3xl:min-h-[330px] rounded-md bg-gray-50 group-hover:rounded-none transition-all ease-in-out duration-100"
      title="Ray ban Aviator"
    >
      <header>
        <picture>
          <source
            media="(min-width:650px)"
            :srcset="product.content.images[0].filename"
          />
          <source
            media="(min-width:465px)"
            :srcset="product.content.images[0].filename"
          />
          <img
            :src="product.content.images[0].filename"
            :alt="product.content.images[0].alt"
          />
        </picture>
      </header>
      <!-- <header
        style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px none;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
      >
        <div>
          <img
            style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px none;
              margin: 0px;
              padding: 0px;
            "
            alt=""
            aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
          />
        </div>
        <img
          alt="Ray ban Aviator"
          src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&amp;w=640&amp;q=75"
          decoding="async"
          data-nimg="intrinsic"
          class="transition duration-500 ease-in-out transform group-hover:scale-110"
          style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: medium none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            object-fit: contain;
          "
          srcset="
            https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&w=640&q=75 1x,
            https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&w=640&q=75 2x
          "
        /><noscript></noscript>
      </header> -->
    </div>
    <!-- <span
      class="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-heading text-white text-10px md:text-sm leading-5 -md-md inline-block px-2 xl:px-3 pt-0.5 pb-1"
    >
      15%
    </span> -->
    <div class="w-full py-6 px-4">
      <div class="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
        <h2 class="text-sm md:text-base xl:text-md mb-1">
          {{ product.name }}
        </h2>
        <p
          class="text-c-gray text-xs xl:text-sm truncate max-w-[250px]"
          v-if="product.description"
        >
          {{ product.description }}
        </p>
      </div>

      <p class="mt-2.5 font-semibold text-lg">
        {{ product.price }}
      </p>
    </div>
  </nuxt-link>
</template>
