<script setup>
const localePath = useLocalePath();
</script>

<template>
  <footer class="footer">
    <VSection class="flex justify-between px-6 py-12">
      <div class="flex-1">
        <nuxt-link :to="localePath('/')">
          <img src="https://place-hold.it/200x80/666" alt="" />
        </nuxt-link>
        <p class="mt-6 text-gray-300 text-sm max-w-sm">
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
          <div class="mt-4">
            <a href="#" class="flex items-center" target="_blank">
              <Icon name="mdi:instagram" class="text-xl mr-2"></Icon> Instagram
            </a>
          </div>
        </div>
      </div>
    </VSection>
    <section class="px-6 py-4 flex justify-between border-t border-gray-500">
      <p class="text-sm text-gray-500">© 2022 Eleven spectacles - All rights reserved.</p>
      <div>
        <img src="/images/cards.png" alt="" class="footer__cards-img" />
      </div>
    </section>
  </footer>
</template>

<style scoped lang="postcss">
.footer {
  background-color: #14213d;

  @apply border-t  text-white;
}

.footer h3 {
  @apply text-gray-300 font-bold;
}

.footer li + li {
  @apply mt-3;
}
.footer a {
  @apply text-gray-400  no-underline text-base hover:text-white;
}

.footer__cards-img {
  height: 26px;
}
</style>
