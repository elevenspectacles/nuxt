<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: "Under construction",
  ogTitle: "Under construction",
  description: t("seo.homeDescription"),
  ogDescription: t("seo.homeDescription"),
});
</script>

<template>
  <section class="wrapper">
    <div class="container">
      <h1 class="logo">
        <NuxtImg
          loading="lazy"
          src="/images/logo.svg"
          alt="Eleven Spectacles logo"
          width="200"
          class="block dark:hidden"
        />

        <NuxtImg
          loading="lazy"
          src="/images/logo-white.svg"
          alt="Eleven Spectacles logo"
          width="200"
          class="hidden dark:block"
        />
      </h1>
      <div class="mt-4">
        <p>Coming in 2024</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  min-width: 100vw;
  min-height: calc(100vh - 76px);
}

h1,
.container,
.wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
</style>
