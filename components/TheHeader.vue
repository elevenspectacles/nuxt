<script setup>
const localePath = useLocalePath();
const isOpen = ref(false);
</script>

<template>
  <header class="header header--homepage">
    <section class="flex justify-between items-center px-6 py-2">
      <LanguageSelect class="-ml-3 block lg:hidden" />

      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="justify-self-center lg:justify-self-start"
      >
        <img src="/images/logo.svg" alt="Eleven Spectacles logo" width="128" />
      </nuxt-link>

      <TheNavbar :isOpen="isOpen" />

      <div class="flex items-center">
        <LanguageSelect class="hidden lg:block" />

        <div class="hidden lg:block lg:ml-4 lg:pl-4 lg:border-l">
          <nuxt-link :to="localePath('cart')" class="cart">
            <Icon name="ic:outline-shopping-bag" class="cart__icon"></Icon>
            <span class="cart__count">0</span>
          </nuxt-link>
        </div>

        <button
          @click="isOpen = !isOpen"
          class="text-gray-500 -ml-4 w-12 h-12 relative focus:outline-none bg-white block lg:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-800 ease-in-out"
              :class="{ 'opacity-0': isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
            ></span>
          </div>
        </button>
      </div>
    </section>
  </header>
</template>

<style scoped lang="postcss">
.header {
  position: sticky;
  top: 0;
  height: 74px;
  @apply bg-white z-40 transition-all duration-500 shadow;
}

/* .header--homepage {
  @apply bg-transparent;
} */

.header--hide {
  @apply -translate-y-full;
}

.cart {
  @apply w-10 h-10 flex items-center justify-center relative rounded-full bg-c-black hover:bg-c-gray;
}

.cart:hover .cart__icon {
  @apply text-white;
}
.cart__icon {
  font-size: 20px;
  line-height: 1;
  @apply text-white;
}

.cart__count {
  min-width: 18px;
  min-height: 18px;
  padding: 0px;
  border-radius: 20px;
  font-size: 9px;
  line-height: 1;
  top: 0px;
  right: 0px;
  font-weight: 500;
  border: 1px solid;
  @apply flex items-center justify-center text-accent absolute rounded-full
    bg-white border-c-black;
}
</style>
