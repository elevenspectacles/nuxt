<script setup>
const props = defineProps(["items"]);
const select = ref("");
</script>

<template>
  <div>
    <label for=""><slot name="label" /></label>
    <select
      class="border border-gray-300 w-full py-2 px-2 text-start bg-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75cursor-pointer"
      v-model="select"
    >
      <slot />
    </select>
  </div>
</template>
