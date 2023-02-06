<script setup></script>

<template>
  <button class="button"><slot /></button>
</template>

<style lang="postcss">
.button {
  letter-spacing: 1.2px;
  @apply capitalize text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 text-center border-0 placeholder-white focus-visible:outline-none justify-center focus:outline-none border-transparent rounded-md text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4  flex-shrink-0;
}

.button--primary {
  background-color: #212121;
  @apply hover:text-white hover:bg-gray-600;
}
</style>
