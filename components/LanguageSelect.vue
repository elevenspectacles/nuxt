<script setup>
const switchLocalePath = useSwitchLocalePath();

// console.log($i18n.locales.filter((i) => i.code !== this.$i18n.locale));
</script>

<template>
  <!-- <nuxt-link
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >
    {{ locale.name }}
  </nuxt-link> -->
</template>
