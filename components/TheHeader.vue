<script setup>
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <section class="flex justify-between items-center px-6 py-1">
      <div>
        <nuxt-link :to="localePath('/')">
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
        <!-- <Icon name="ic:round-search"></Icon> -->
        <nuxt-link :to="localePath('cart')" class="cart ml-4">
          <Icon name="ic:outline-shopping-bag" class="cart__icon"></Icon>
          <span class="cart__count">0</span>
        </nuxt-link>
      </div>
    </section>
  </header>
</template>

<style scoped lang="postcss">
.header {
  position: sticky;
  top: 0;
  @apply bg-white z-40 transition-all duration-500 shadow;
}

.header--hide {
  @apply -translate-y-full;
}

.cart {
  background: #905035;
  @apply w-11 h-11 flex items-center justify-center relative rounded-full bg-gray-100 hover:bg-gray-200;
}

.cart:hover .cart__icon {
  @apply text-c-black;
}
.cart__icon {
  font-size: 24px;
  line-height: 1;
  @apply text-c-gray;
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
  @apply flex items-center justify-center text-white absolute rounded-full
    bg-accent;
}
</style>
