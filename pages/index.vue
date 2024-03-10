<script setup lang="ts">
const { t } = useI18n();
const { find } = useStrapi();

useSeoMeta({
  title: t("seo.home"),
  ogTitle: t("seo.home"),
  description: t("seo.homeDescription"),
  ogDescription: t("seo.homeDescription"),
});

// const { data, pending, error } = await useAsyncData("products", () =>
//   find("products"),
// );
</script>

<template>
  <div>
    <!--    {{ data }}-->
    <!-- <TheAboutUs /> -->

    <!-- <TheSocialSection /> -->

    <TheSubscribe />
  </div>
</template>
