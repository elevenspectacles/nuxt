<script setup>
const { locale } = useI18n();

const story = await useAsyncStoryblok(
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
      <div class="grid gap-6 grid-cols-2">
        <a href="#" class="group relative block">
          <div class="relative h-[350px] sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt=""
              class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-white">Skinny Jeans Blue</h3>

            <p class="my-1.5 max-w-[40ch] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
              dicta impedit aperiam ipsum!
            </p>

            <span class="button button--primary"> Shop Now </span>
          </div>
        </a>
        <a href="#" class="group relative block">
          <div class="relative h-[350px] sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt=""
              class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 class="text-white">Skinny Jeans Blue</h3>

            <p class="my-1.5 max-w-[40ch] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
              dicta impedit aperiam ipsum!
            </p>

            <span class="button button--primary"> Shop Now </span>
          </div>
        </a>
      </div>
    </VSection>
    <TheAboutUs />

    <TheSocialSection />

    <TheSubscribe />
  </div>
</template>
