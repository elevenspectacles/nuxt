<script setup></script>

<template>
  <button class="button"><slot /></button>
</template>

<style lang="postcss">
.button {
  @apply uppercase text-sm leading-none inline-flex items-center cursor-pointer transition ease-in-out duration-300 text-center border-0 placeholder-white focus-visible:outline-none justify-center focus:outline-none border-transparent rounded text-white px-5 md:px-6 lg:px-8 py-4 flex-shrink-0 h-[50px];
}

.button--primary {
  @apply bg-accent hover:bg-accent-secondary focus:bg-accent-secondary focus:outline-1 focus:outline-accent hover:text-white;
}

.button--block {
  @apply w-full;
}
</style>
