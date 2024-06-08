<script setup>
import { marked } from 'marked'

const { findOne } = useStrapi()
const { locale } = useI18n()
const route = useRoute()

const routeSlug = computed(() => route.params.slug)

const {
  data: result,
  pending,
  error
} = await useAsyncData(
  'static-pages',
  () =>
    findOne('static-pages', {
      filters: {
        slug: { $eq: routeSlug.value }
      },
      populate: ['seo'],
      locale: locale.value
    }),
  {
    watch: [routeSlug, locale]
  }
)

useServerSeoMeta({
  ogTitle: () => result.value.data[0].attributes?.seo.metaTitle,
  title: () => result.value.data[0].attributes?.seo.metaTitle,
  description: () => result.value.data[0].attributes?.seo.metaDescription,
  ogDescription: () => result.value.data[0].attributes?.seo.metaDescription
})

const parsedMD = computed(() =>
  marked(
    result.value?.data.length ? result.value.data[0]?.attributes.content : ''
  )
)
</script>

<template>
  <VSection class="static-page">
    <div v-if="error">{{ error }}</div>
    <div v-if="pending">
      <USkeleton v-for="i in 30" :key="i" class="h-2.5 w-full mb-4" />
    </div>
    <article v-else v-html="parsedMD" />
  </VSection>
</template>

<style>
.static-page {
  @apply mx-auto max-w-screen-md text-gray-900;

  h1 {
    @apply mb-4;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply leading-7;
  }

  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  h4 {
    @apply text-xl;
  }

  h5 {
    @apply text-lg;
  }

  p {
    @apply text-base leading-7;
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
    content: '';
    @apply absolute left-1 top-2 bg-gray-900 block w-2 h-2 rounded-full;
  }

  ol li {
    counter-increment: step-counter;
  }

  ol li::before {
    content: counter(step-counter) '.';
    @apply absolute block text-gray-900 font-bold text-base left-0;
  }

  img {
    @apply rounded-md mb-6;
  }
}
</style>
