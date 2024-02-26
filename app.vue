<script setup lang="ts">
import posthog from "posthog-js";
const config = useRuntimeConfig();

onMounted(() => {
  posthog.init(config.public.posthogKey, {
    api_host: config.public.posthogURL,
  });
});
</script>

<template>
  <NuxtLoadingIndicator color="rgba(0,0,0,0.63)" />

  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
