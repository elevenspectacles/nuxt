<script setup>
const localePath = useLocalePath();
</script>

<template>
  <header class="header header--homepage">
    <section class="flex justify-between items-center px-6 py-2">
      <div>
        <nuxt-link :to="localePath({ name: 'index' })">
          <img
            src="/images/logo.svg"
            alt="Eleven Spectacles logo"
            width="128"
          />
        </nuxt-link>
      </div>
      <div>
        <TheNavbar />
      </div>
      <div class="flex items-center">
        <LanguageSelect />

        <div class="ml-4 pl-4 border-l">
          <nuxt-link :to="localePath('cart')" class="cart">
            <Icon name="ic:outline-shopping-bag" class="cart__icon"></Icon>
            <span class="cart__count">0</span>
          </nuxt-link>
        </div>
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
