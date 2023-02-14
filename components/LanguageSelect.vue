<script setup>
const { locale, availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <a
    v-for="locale in availableLocales.filter((item) => item !== locale)"
    :key="locale"
    href="#"
    @click.prevent.stop="$i18n.setLocale(locale)"
  >
    {{ locale }}
  </a>
</template>
