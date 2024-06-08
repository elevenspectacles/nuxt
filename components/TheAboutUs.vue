<template>
  <VSection>
    <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            class="inline-block mb-5"
          >
            <div
              class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"
            >
              <svg
                class="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 class="mb-4 text-4xl font-extrabold leading-none">
            The quick, brown fox<br class="hidden md:block" >
            jumps over
            <span class="inline-block text-deep-purple-accent-400"
              >a lazy dog</span
            >
          </h5>
          <p class="mb-6 text-gray-400-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr class="mb-5 border-gray-300" >

          <VButton>Read more</VButton>
        </div>
        <div>
          <NuxtImg
            class="object-cover w-full h-56 shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  </VSection>
</template>
