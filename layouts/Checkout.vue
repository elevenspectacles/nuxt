<script setup></script>

<template>
  <div>
    <header class="flex justify-center items-center px-6 py-2 bg-white border-b">
      <NuxtImg src="/images/logo.svg" alt="Eleven Spectacles logo" width="128" />
    </header>
    <main><slot /></main>
    <TheFooter />
  </div>
</template>
