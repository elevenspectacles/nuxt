<script setup></script>
<template>
  <button class="button"><slot /></button>
</template>

<style lang="postcss">
.button {
  @apply uppercase text-lg px-14 py-5 rounded-sm;
}

.button--primary {
  background-color: #084c61;
  border: 1px solid #084c61;
  color: #fff;
  @apply transition-colors;
}

.button--primary:hover {
  background-color: #fff;
  border: 1px solid #084c61;
  color: #084c61;
}
</style>
