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
      <USkeleton class="h-2.5 w-full mb-4" v-for="i in 30" :key="i" />
    </div>
    <article v-else v-html="parsedMD"></article>
  </VSection>
</template>

<style>
.static-page {
  max-width: 820px;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.5;
  }

  h2,
  h3,
  h4,
  h5 {
    @apply mt-6 mb-4;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  p + p {
    margin-top: 12px;
  }

  a {
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-decoration: underline;
  }

  li {
    @apply relative pl-5;
  }

  li + li,
  ul + p,
  p + ol,
  ol + p {
    @apply mt-4;
  }

  ul li::before {
    content: "";
    @apply absolute;
    left: 5px;
    top: 9px;
    background-color: #084c61;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
  }

  ol li {
    counter-increment: step-counter;
  }

  ol li::before {
    content: counter(step-counter) ".";
    @apply absolute block;
    color: #084c61;
    font-size: 1rem;
    font-weight: bold;
    left: 4px;
  }
}
</style>
