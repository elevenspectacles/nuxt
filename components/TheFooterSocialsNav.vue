<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const links = [
  // {
  //   label: "Facebook",
  //   to: "https://facebook.com",
  // },
  {
    label: "Instagram",
    to: "https://www.instagram.com/eleven.spectacles/",
    external: true,
  },
];
</script>

<template>
  <nav class="flex-1">
    <h3 class="text-white mb-4 ml-2.5">{{ t("followUs") }}</h3>

    <UVerticalNavigation :links="links" />
  </nav>
</template>
