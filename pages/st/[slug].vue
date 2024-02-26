<script setup>
const { locale } = useI18n();

const route = useRoute();
const { findOne } = useStrapi();

// TODO add error state
// const { data, pending, error } = await useAsyncData("static-pages", () =>
//   findOne("static-pages", route.params.slug)
// );

const { data, error } = await findOne("static-pages", route.params.slug);

// definePageMeta({
//   ...data.meta,
// });
</script>

<template>
  <VSection class="static-page">
    <!-- <div v-if="pending">
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
    </div> -->
    {{ data }}
    <!-- <article v-html="data.story" v-else></article> -->
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
