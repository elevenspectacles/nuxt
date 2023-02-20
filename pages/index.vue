<script setup>
const { locale } = useI18n();

const story = await useStoryblok(
  "home",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: "featuredProducts.productList",
    language: locale.value,
  },
  {
    resolveRelations: "featuredProducts.productList",
  }
);
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />

    <VSection>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat
        id officiis eius ratione cum laudantium ipsum eveniet incidunt sequi
        vero ullam illo, beatae enim dolore, ea eaque? Eos, officiis?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat
        id officiis eius ratione cum laudantium ipsum eveniet incidunt sequi
        vero ullam illo, beatae enim dolore, ea eaque? Eos, officiis?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat
        id officiis eius ratione cum laudantium ipsum eveniet incidunt sequi
        vero ullam illo, beatae enim dolore, ea eaque? Eos, officiis?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat
        id officiis eius ratione cum laudantium ipsum eveniet incidunt sequi
        vero ullam illo, beatae enim dolore, ea eaque? Eos, officiis?
      </p>
    </VSection>
    <TheSocialSection />

    <TheSubscribe />
  </div>
</template>
