<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <div>
    <section class="wrapper">
      <div class="container">
        <h1 class="logo">
          <NuxtImg src="/images/logo.svg" alt="Eleven Spectacles logo" width="200" />
        </h1>
        <div class="mt-4">
          <p>Coming in 2024</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
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
