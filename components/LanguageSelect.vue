<script setup>
const { locales, locale, setLocale } = useI18n();
const activeLang = ref({});

function changeLang() {
  setLocale(activeLang.value.code);
}

onMounted(() => {
  activeLang.value = locales.value.filter(
    (item) => item.code === locale.value
  )[0];
});
</script>

<template>
  <select v-model="activeLang" @change="changeLang" name="lang" class="lang">
    <option
      :selected="localeItem.code === activeLang"
      v-for="localeItem in locales"
      :key="localeItem.code"
      :value="localeItem"
    >
      {{ localeItem.code.toUpperCase() }}
    </option>
  </select>
</template>

<style>
.lang {
  background: none;
  font-size: 14px;
  padding: 12px 2px 12px 12px;
  @apply text-gray-400 hover:text-black hover:cursor-pointer;
}
</style>
