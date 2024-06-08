<script setup lang="ts">
import { marked } from "marked";

const { findOne } = useStrapi();
const { locale } = useI18n();
const route = useRoute();

const routeSlug = computed(() => route.params.slug);

const {
  data: result,
  pending,
  error,
} = await useAsyncData(
  "static-pages",
  () =>
    findOne("static-pages", {
      filters: {
        slug: { $eq: routeSlug.value },
      },
      populate: ["seo"],
      locale: locale.value,
    }),
  {
    watch: [routeSlug, locale],
  },
);

watch(
  result,
  (newVal) => {
    if (newVal?.length > 0) {
      useSeoMeta({
        title: newVal.data[0].attributes?.seo.metaTitle,
        ogTitle: newVal.data[0].attributes?.seo.metaTitle,
        description: newVal.data[0].attributes?.seo.metaDescription,
        ogDescription: newVal.data[0].attributes?.seo.metaDescription,
      });
    }
  },
  { immediate: true },
);

const parsedMD = computed(() =>
  marked(
    result.value?.data.length ? result.value.data[0]?.attributes.content : "",
  ),
);
</script>

<template>
  <VSection class="static-page">
    <div v-if="error">{{ error }}</div>
    <div v-if="pending">
      <USkeleton v-for="i in 30" :key="i" class="h-2.5 w-full mb-4" />
    </div>
    <article v-else v-html="parsedMD"/>
  </VSection>
</template>

<style>
.static-page {
  @apply mx-auto max-w-screen-md;

  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold leading-7;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-3xl;
  }

  h4 {
    @apply text-2xl;
  }

  h5 {
    @apply text-xl;
  }

  p {
    @apply text-lg leading-7;
  }

  p + *,
  pre + *,
  li + li,
  ol + *,
  ul + * {
    @apply mt-4;
  }

  h2,
  h3,
  h4,
  h5 {
    @apply mt-12 mb-4;
  }

  a {
    @apply text-lg leading-7 underline;
  }

  li {
    @apply relative pl-5;
  }

  ul li::before {
    content: "";
    @apply absolute left-1 top-2 bg-primary-600 block w-2 h-2 rounded-full;
  }

  ol li {
    counter-increment: step-counter;
  }

  ol li::before {
    content: counter(step-counter) ".";
    @apply absolute block text-primary-600 font-bold text-base left-0;
  }

  img {
    @apply rounded-md mb-6;
  }
}
</style>
