<script setup>
defineProps({
  blok: Object,
});
</script>

<template>
  <section class="jumbotron" v-editable="blok">
    <!-- <div class="jumbotron__overlay">
      <h1>{{ blok.heading }}</h1>
      <p class="mb-6">
        {{ blok.subheading }}
      </p>
      <nuxt-link class="button button--primary" :to="localePath('shop')">
        Shop now
      </nuxt-link>
    </div> -->
    <!-- <NuxtImg src="/img.png" :alt="blok.image?.alt" class="jumbotron__image" /> -->
    <!-- <NuxtImg
      :src="blok.image?.filename"
      :alt="blok.image?.alt"
      class="jumbotron__image"
    /> -->
    <!-- <picture class="jumbotron__image">
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 1200px)"
      />
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 640px)"
      />
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 1px)"
      />
      <NuxtImg
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt=""
        data-pin-nopin="true"
      />
    </picture> -->
  </section>
</template>

<style lang="postcss">
.jumbotron {
  @apply relative  flex items-center;
  background: #0c0c0c;
  height: 100vh;
  margin-top: -74px;
}

.jumbotron__overlay {
  @apply relative max-w-xl text-white px-6 py-10  mx-6 z-20;
}

.jumbotron__image {
  position: absolute;
  left: 0%;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
