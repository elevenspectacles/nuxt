<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <VSection v-editable="blok">
    <div>
      <div class="mb-8 sm:flex sm:items-center sm:justify-between">
        <div class="block sm:hidden">
          <button
            class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
          >
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden sm:flex sm:gap-4">
          <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              >
                <span class="text-sm font-medium"> Availability </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div
                class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
              >
                <div class="w-96 rounded border border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> 0 Selected </span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul class="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label for="FilterInStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          In Stock (5+)
                        </span>
                      </label>
                    </li>

                    <li>
                      <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Pre Order (3+)
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterOutOfStock"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Out of Stock (10+)
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              >
                <span class="text-sm font-medium"> Price </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div
                class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
              >
                <div class="w-96 rounded border border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> The highest price is $600 </span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <div class="border-t border-gray-200 p-4">
                    <div class="flex justify-between gap-4">
                      <label for="FilterPriceFrom" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceFrom"
                          placeholder="From"
                          class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>

                      <label for="FilterPriceTo" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceTo"
                          placeholder="To"
                          class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div class="hidden sm:block">
          <label for="SortBy" class="sr-only">SortBy</label>

          <select id="SortBy" class="h-10 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-x-4 gap-y-8">
        <ProductCard
          v-for="product in blok.productList"
          :key="product.uuid"
          :product="product"
        />
      </div>
      <ol class="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            class="inline-flex h-8 w-8 items-center justify-center border border-gray-100"
          >
            <span class="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#" class="block h-8 w-8 border border-gray-100 text-center leading-8">
            1
          </a>
        </li>

        <li class="block h-8 w-8 border-black bg-black text-center leading-8 text-white">
          2
        </li>

        <li>
          <a href="#" class="block h-8 w-8 border border-gray-100 text-center leading-8">
            3
          </a>
        </li>

        <li>
          <a href="#" class="block h-8 w-8 border border-gray-100 text-center leading-8">
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            class="inline-flex h-8 w-8 items-center justify-center border border-gray-100"
          >
            <span class="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  </VSection>
</template>
