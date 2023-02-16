<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const links = computed(() => [
  {
    name: "index",
    label: t("home"),
  },
  {
    name: "store",
    label: t("store"),
  },
  {
    name: "about-us",
    label: t("aboutUs"),
  },
  {
    name: "contact-us",
    label: t("contactUs"),
  },
]);
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="link in links" :key="link.label" class="navbar__item">
        <nuxt-link class="navbar__link" :to="localePath(link.name)">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
.navbar {
  @apply flex justify-center;
}

.navbar__list {
  @apply flex;
}

.navbar__link {
  @apply block py-1 px-5 cursor-pointer uppercase text-c-gray hover:text-c-black no-underline relative transition-all ease-in-out duration-200;
}
/* 
.navbar__link.router-link-active {
  @apply text-c-black;
} */

.navbar__link:before,
.navbar__link:after {
  content: "";
  height: 2px;
  bottom: -1px;
  @apply absolute block bg-accent w-0 transition-all ease-in-out duration-200;
}

.navbar__link:before {
  right: calc(50% - 1px);
  @apply rounded-l-sm;
}

.navbar__link:after {
  left: calc(50% - 1px);
  @apply rounded-r-sm;
}

.navbar__link:hover::before,
.navbar__link:hover::after {
  @apply w-1/2;
}
</style>
