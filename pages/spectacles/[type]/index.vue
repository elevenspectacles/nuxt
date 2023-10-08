<script setup>
// const route = useRoute();

const page = ref(1);
const items = ref(Array(55));

</script>

<template>
  <UContainer>
    <UPagination v-model="page" :page-count="5" :total="items.length" />
  </UContainer>
</template>
