<template>
  <button
    class="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black"
    @click="$emit('click')"
  >
    <span
      class="absolute inset-0 translate-x-0 translate-y-0 bg-black transition-transform group-hover:translate-y-1 group-hover:translate-x-1"
      aria-hidden="true"
    />
    <span
      class="relative block border border-current bg-white px-8 h-[50px] uppercase leading-[50px]"
    >
      <slot />
    </span>
  </button>
</template>

<style lang="postcss"></style>
