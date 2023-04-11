<script setup>
import { storeToRefs } from "pinia";
const localePath = useLocalePath();

const navStore = useNavStore();
const { isOpen } = storeToRefs(navStore);
const { toggle } = navStore;
</script>

<template>
  <header class="header header--homepage">
    <section class="flex justify-between items-center px-6 py-2 bg-white">
      <LanguageSelect class="-ml-3 block lg:hidden" />

      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="justify-self-center lg:justify-self-start"
      >
        <img src="/images/logo.svg" alt="Eleven Spectacles logo" width="128" />
      </nuxt-link>

      <TheNavbar :isOpen="isOpen" @changeRoute="toggle" />

      <div class="flex items-center">
        <LanguageSelect class="hidden lg:block" />

        <div class="hidden lg:block lg:ml-4 lg:pl-4 lg:border-l">
          <CartButton />
        </div>

        <button
          @click="toggle"
          class="text-gray-500 -ml-4 w-12 h-12 relative focus:outline-none bg-white block lg:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
              :class="{
                'rotate-45': isOpen,
                ' -translate-y-1.5': !isOpen,
              }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-800 ease-in-out"
              :class="{ 'opacity-0': isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
              :class="{
                '-rotate-45': isOpen,
                ' translate-y-1.5': !isOpen,
              }"
            ></span>
          </div>
        </button>
      </div>
    </section>
    <div
      :class="['overlay', { 'overlay--visible': isOpen }]"
      @click="toggle"
    ></div>
  </header>
</template>

<style lang="postcss">
.header {
  height: 74px;
  @apply sticky top-0 bg-white z-40 transition-all duration-500 shadow;
}

/* .header--homepage {
  @apply bg-transparent;
} */

.header--hide {
  @apply -translate-y-full;
}

@media screen and (max-width: 1024px) {
  .overlay {
    @apply hidden fixed h-full top-0 right-0 bottom-0 left-0 w-full  opacity-50 bg-black transition-opacity duration-200 delay-100 cursor-pointer -z-10;
  }

  .overlay--visible {
    @apply block;
  }
}
</style>
