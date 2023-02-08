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
  @apply flex justify-center;
}

.navbar__list {
  @apply flex;
}

.navbar__link {
  @apply block py-1 px-5 cursor-pointer uppercase text-c-gray hover:text-c-black no-underline relative transition-all ease-in-out duration-200;
}

.navbar__link:before {
  content: "";
  height: 3px;
  bottom: -1px;
  @apply absolute left-0 right-0 block bg-accent rounded-sm  w-0;
}

.navbar__link:hover::before {
  @apply w-full;
}
</style>
