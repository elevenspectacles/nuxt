<script setup lang="ts">
import useNav from "@/composables/nav.js";
const localePath = useLocalePath();
const { t } = useI18n();
const { isOpen } = useNav();

const links = computed(() => [
  // {
  //   value: { name: "spectacles-type", params: { type: "sunglasses" } },
  //   label: t("sunglasses"),
  // },
  // {
  //   value: { name: "spectacles-type", params: { type: "optical" } },
  //   label: t("optical"),
  // },
  // {
  //   value: { name: "about-us" },
  //   label: t("aboutUs"),
  // },
  // {
  //   value: { name: "contact-us" },
  //   label: t("contactUs"),
  // },
]);
</script>

<template>
  <nav :class="['navbar', { 'navbar--visible': isOpen }]" role="navigation">
    <ul class="navbar__list">
      <li v-for="link in links" :key="link.label" class="navbar__item">
        <nuxt-link
          class="navbar__link"
          :to="localePath(link.value)"
          @click="$emit('changeRoute')"
        >
          <span>{{ link.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
.navbar {
  @apply lg:flex justify-center;
}

.navbar__list {
  @apply flex;
}

.navbar__link {
  @apply block py-1 px-5 cursor-pointer uppercase text-gray-400 hover:text-black no-underline relative transition-all ease-in-out duration-200;
}

.navbar__link.router-link-active {
  @apply text-black;
}

.navbar__link span {
  @apply relative;
}

.navbar__link span:before {
  content: "";
  height: 2px;
  bottom: -4px;
  @apply absolute left-0 right-0 block w-0 transition-all ease-in-out duration-200;
}

.navbar__link.router-link-active span:before {
  @apply w-full;
}

@media screen and (max-width: 1024px) {
  .navbar {
    @apply absolute right-0 left-0 w-full bg-white text-center shadow-lg py-3 duration-300 -translate-y-full -z-10;
    top: 74px;
  }

  .navbar--visible {
    @apply opacity-100 pointer-events-auto translate-y-0;
  }

  .navbar__list {
    @apply flex-col h-full justify-around;
  }

  .navbar__link {
    @apply py-4;
  }
}
</style>
