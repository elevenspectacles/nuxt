<script setup>
import { faker } from "@faker-js/faker";

const name = faker.commerce.productName();
const description = faker.commerce.productDescription();
const price = faker.commerce.price(100, 200, 0, "$");
</script>

<template>
  <div
    class="cursor-pointer group flex flex-col rounded-md relative items-center justify-between overflow-hidden transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200"
  >
    <div
      class="flex justify-center items-center p-6 h-full 3xl:min-h-[330px]"
      title="Ray ban Aviator"
    >
      <header
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
      </header>
    </div>
    <!-- <span
      class="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1"
    >
      15%
    </span> -->
    <div
      class="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center w-full p-6"
      title="Ray ban Aviator"
    >
      <div class="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
        <h2
          class="text-heading font-semibold text-sm md:text-base xl:text-lg mb-1 truncate"
        >
          {{ name }}
        </h2>
        <p
          class="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]"
        >
          {{ description }}
        </p>
      </div>
      <div
        class="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end md:text-end lg:text-start xl:text-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5"
      >
        <div
          class="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 pe-2 md:pe-0 lg:pe-2 2xl:pe-0"
        >
          {{ price }}
        </div>
      </div>
    </div>
  </div>
</template>
