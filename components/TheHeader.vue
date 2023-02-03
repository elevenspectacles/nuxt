<script setup>
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <section class="flex justify-between items-center px-6 py-2">
      <div>
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
        <NuxtLink :to="switchLocalePath('bg')">Български</NuxtLink>
      </div>
      <div>
        <nuxt-link :to="localePath('/')">
          <img src="https://place-hold.it/200x80/666" alt="" />
        </nuxt-link>
      </div>
      <div>
        <!-- <Icon name="ic:round-search"></Icon> -->
        <nuxt-link :to="localePath('cart')" class="cart-icon">
          <Icon name="ic:outline-shopping-bag"></Icon>
        </nuxt-link>
      </div>
    </section>

    <TheNavbar />
  </header>
</template>

<style scoped lang="postcss">
.header {
  position: sticky;
  top: 0;
  @apply bg-white z-40 transition-all duration-500;
}

.header--hide {
  @apply -translate-y-full;
}
.cart-icon {
  @apply p-4 text-2xl text-gray-500 hover:text-gray-800;
}
</style>
