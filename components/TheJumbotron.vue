<script setup>
const localePath = useLocalePath();
</script>

<template>
  <section class="jumbotron">
    <div class="jumbotron__overlay">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p class="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
        asperiores ipsum laborum corporis qui facere iste aspernatur similique
        alias ab sit cupiditate ratione eius a minus hic illo, beatae voluptate.
      </p>
      <nuxt-link class="button button--primary" :to="localePath('shop')">
        Shop now
      </nuxt-link>
    </div>
    <picture class="jumbotron__image">
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 1200px)"
      >
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 640px)"
      >
      <source
        srcset="
          https://media.ray-ban.com/cms/resource/image/627086/landscape_ratio720x233/2592/839/a9f35372af8b0f39047231506a81a488/0EF6174533483FCFB14FE25E72761070/rb-hp-hero-vday-polar-promo-d.jpg
        "
        media="(min-width: 1px)"
      >
      <NuxtImg
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt=""
        data-pin-nopin="true"
      />
    </picture>
  </section>
</template>

<style lang="postcss">
.jumbotron {
  @apply relative bg-black flex items-center;
  height: calc(100vh - 96px);
}

.jumbotron__overlay {
  @apply relative max-w-xl text-black px-6 py-10  mx-6 z-20;
}

/* .jumbotron__overlay::before {
  content: "";
  @apply top-0 right-0 bottom-0 left-0 absolute block bg-black opacity-60 -z-10 rounded-md;
} */

.jumbotron__image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.jumbotron__image img {
  object-fit: cover;
  height: 100%;
}
</style>
