<script setup lang="ts">
import posthog from 'posthog-js'

const config = useRuntimeConfig()

onMounted(() => {
  posthog.init(config.public.posthogKey, {
    api_host: config.public.posthogURL
  })
})
</script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtLoadingIndicator color="rgba(0,0,0,0.63)" />
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>

<style>
body {
  font-family: Montserrat, sans-serif;
}
</style>
