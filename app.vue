<script setup lang="ts">
import posthog from "posthog-js";
const config = useRuntimeConfig();

onMounted(() => {
  if (process.env.NODE_ENV === "production") {
    posthog.init(config.public.posthogKey, {
      api_host: config.public.posthogURL,
    });
  }
});
</script>

<template>
  <client-only>
    <NuxtLoadingIndicator color="rgba(0,0,0,0.63)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </client-only>
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
