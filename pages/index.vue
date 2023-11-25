<script setup>
// import { useAsyncStoryblok } from "storyblok";
const { locale } = useI18n();

// const story = await useAsyncStoryblok(
//   "home",
//   {
//     version: useRoute().query._storyblok ? "draft" : "published",
//     resolve_relations: "featuredProducts.productList",
//     language: locale.value,
//   },
//   {
//     resolveRelations: "featuredProducts.productList",
//   }
// );
</script>

<template>
  <div>
    <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->

    <!-- <TheAboutUs /> -->

    <!-- <TheSocialSection /> -->

    <TheSubscribe />
  </div>
</template>
