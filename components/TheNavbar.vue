<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const links = computed(() => [
  {
    name: "sunglasses",
    label: t("sunglasses"),
  },
  {
    name: "optical",
    label: t("optical"),
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
  <nav class="navbar" role="navigation">
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
  @apply hidden lg:flex justify-center;
}

.navbar__list {
  @apply flex;
}

.navbar__link {
  @apply block py-1 px-5 cursor-pointer uppercase text-c-gray hover:text-c-black no-underline relative transition-all ease-in-out duration-200;
}

.navbar__link.router-link-active {
  @apply text-c-black;
}

.navbar__link:before {
  content: "";
  height: 2px;
  bottom: 6px;
  left: 20px;
  right: 20px;
  @apply absolute block bg-accent w-0 transition-all ease-in-out duration-200 rounded-sm;
}

.navbar__link.router-link-active:before {
  width: calc(100% - 40px);
}
</style>
