<script setup>
const localePath = useLocalePath();

const links = [
  {
    name: "index",
    label: "Home",
  },
  {
    name: "shop",
    label: "Store",
  },
  {
    name: "about-us",
    label: "About us",
  },
  {
    name: "blog",
    label: "Blog",
  },
  {
    name: "contact-us",
    label: "Contact us",
  },
];
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
  @apply flex justify-center border-t border-b;
}

.navbar__list {
  @apply flex;
}

.navbar__link {
  @apply block py-3 px-4 cursor-pointer uppercase text-gray-500 no-underline relative;
}

.navbar__link:hover {
  @apply no-underline text-gray-900;
}

.navbar__link:before {
  content: "";
  height: 1px;
  bottom: -1px;
  @apply absolute left-0 right-0 block bg-gray-900 opacity-0;
  @apply transition-opacity;
}

.navbar__link:hover::before {
  @apply opacity-100;
}
</style>
