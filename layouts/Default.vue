<script setup lang="ts">
import useNav from "@/composables/nav.js";
const { locale } = useI18n();
const { isOpen } = useNav();
const pageWrapper = ref(null);
const toggleHeader = ref("");
const isLocked = useScrollLock(pageWrapper);
const { y, directions } = useScroll(pageWrapper);

watch(y, () => {
  if (y.value < 350 || directions.top) {
    toggleHeader.value = "";
  } else {
    toggleHeader.value = "hide";
  }
});

watch(isOpen, (newVal) => {
  isLocked.value = newVal;
});

useResizeObserver(pageWrapper, (entries) => {
  const { width } = entries[0].contentRect;
  if (width > 1024 && isLocked.value) {
    isLocked.value = false;
  }
});

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>

<template>
  <div class="page-wrapper" ref="pageWrapper">
    <!-- <TheHeader
      :class="[
        {
          'header--hide': toggleHeader === 'hide',
        },
      ]"
    />
    <div class="block lg:hidden fixed right-6 bottom-6 z-40" v-if="!isOpen">
      <CartButton />
    </div> -->

    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
/* body {
  overflow: hidden;
}

.page-wrapper {
  height: 100vh;
  overflow: auto;
}*/
</style>
