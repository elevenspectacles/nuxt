<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

definePageMeta({
  title: "Under construction",
});
</script>

<template>
  <section class="wrapper">
    <div class="container">
      <h1 class="logo">
        <NuxtImg
          src="/images/logo.svg"
          alt="Eleven Spectacles logo"
          width="200"
          class="block dark:hidden"
        />

        <NuxtImg
          src="/images/logo-white.svg"
          alt="Eleven Spectacles logo"
          width="200"
          class="hidden dark:block"
        />
      </h1>
      <div class="mt-4">
        <p>Coming in 2024</p>
      </div>

      <div class="mt-6">
        <ColorModeButton />
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  min-width: 100vw;
  min-height: 100vh;
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
