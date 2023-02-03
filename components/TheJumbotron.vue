<template>
  <section class="jumbotron">
    <picture class="jumbotron__image">
      <source
        srcset="
          https://www.longines.com/uploads/img/1600/90/home/ecommerce/1-1/hydro-1600x640.jpg
        "
        media="(min-width: 1200px)"
      />
      <source
        srcset="
          https://www.longines.com/uploads/home/ecommerce/1-1/tablet/hydro-1600x640.jpg
        "
        media="(min-width: 640px)"
      />
      <source
        srcset="
          https://www.longines.com/uploads/home/ecommerce/1-1/mobile/hydro-650x650.jpg
        "
        media="(min-width: 1px)"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt=""
        data-pin-nopin="true"
      />
    </picture>
  </section>
</template>

<style scoped>
.jumbotron {
  @apply relative;
  height: calc(100vh - 146px);
}

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
