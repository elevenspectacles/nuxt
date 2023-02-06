<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <VSelect>
    <option>
      <NuxtLink :to="switchLocalePath('bg')">Български</NuxtLink>
    </option>
    <option>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    </option>
  </VSelect>
</template>
