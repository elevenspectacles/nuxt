<script setup>
const props = defineProps({
  error: Object,
});

const localePath = useLocalePath();
const { t } = useI18n();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <TheHeader />
  <main
    class="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-base font-bold -secondary">404</p>
      <h1>
        {{ t("error.title") }}
      </h1>
      <p class="mt-6">
        {{ t("error.subtitle") }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <VButton class="button--primary" @click="handleError">
          {{ t("error.goBack") }}
        </VButton>

        <nuxt-link
          :to="localePath('contact-us')"
          class="button button--outline"
        >
          {{ t("contactUs") }}
        </nuxt-link>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
