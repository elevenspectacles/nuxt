<script setup>
const localePath = useLocalePath();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <VSection class="flex justify-between px-6 py-12">
      <div class="flex-1">
        <nuxt-link :to="localePath('/')">
          <img src="/images/logo.svg" alt="Eleven Spectacles logo" width="144" />
        </nuxt-link>
        <p class="mt-6 text-sm max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum odio
          dignissimos, amet quod nihil cumque magni aliquid cum quo suscipit non laborum
          sed, provident autem, iste aut itaque impedit.
        </p>
      </div>

      <div class="flex-1 flex justify-between">
        <nav class="flex-1">
          <h3>About us</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </nav>
        <nav class="flex-1 px-6">
          <h3>Need help</h3>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Shipping services</a>
            </li>
            <li>
              <a href="#">Payment options</a>
            </li>
            <li>
              <a href="#">Returns & Exchange</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Unsubscribe</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </nav>
        <div class="flex-1">
          <h3>Follow us on</h3>
          <div>
            <a href="#" class="flex items-center" target="_blank">
              <Icon name="mdi:facebook" class="text-xl mr-2"></Icon> Facebook
            </a>
          </div>
          <div class="mt-1">
            <a href="#" class="flex items-center" target="_blank">
              <Icon name="mdi:instagram" class="text-xl mr-2"></Icon> Instagram
            </a>
          </div>
        </div>
      </div>
    </VSection>
    <section
      class="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto px-6 py-6 border-t"
    >
      <p class="text-xs lg:text-sm leading-6">
        &#169; {{ currentYear }} Eleven spectacles - All rights reserved.
      </p>
      <div>
        <img src="/images/cards.png" alt="" class="footer__cards-img" />
      </div>
    </section>
  </footer>
</template>

<style scoped lang="postcss">
.footer h3 {
  @apply mb-6;
}

.footer ul {
  @apply text-xs lg:text-sm flex flex-col space-y-1;
}
.footer a {
  @apply transition-colors duration-200 text-c-gray hover:text-black;
}

.footer__cards-img {
  height: 26px;
}
</style>
