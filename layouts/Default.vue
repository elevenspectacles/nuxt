<script setup>
const pageWrapper = ref(null);
const toggleHeader = ref("");
const { y, directions } = useScroll(pageWrapper);

watch(y, () => {
  if (y.value < 350 || directions.top) {
    toggleHeader.value = "";
  } else {
    toggleHeader.value = "hide";
  }
});
</script>

<template>
  <div class="page-wrapper" ref="pageWrapper">
    <TheHeader
      :class="[
        {
          'header--hide': toggleHeader === 'hide',
        },
      ]"
    />
    <div class="block lg:hidden fixed right-6 bottom-6 z-40">
      <CartButton />
    </div>

    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
body {
  overflow: hidden;
}

.page-wrapper {
  height: 100vh;
  overflow: auto;
}
</style>
