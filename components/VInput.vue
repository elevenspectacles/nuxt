<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label :for="$.uid"><slot name="label" /></label>
    <input
      :id="$.uid"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none lg:px-7 lg:h-14 text-center sm:text-start rounded-md"
    />
  </div>
</template>
