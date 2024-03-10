<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("aboutUs"),
  ogTitle: t("aboutUs"),
  description: t("seo.homeDescription"),
  ogDescription: t("seo.homeDescription"),
});
</script>

<template>
  <div>
    <VSection>About us</VSection>
  </div>
</template>
