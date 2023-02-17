<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <VSection class="flex justify-between px-6 py-12">
      <div class="flex-1">
        <nuxt-link :to="localePath({ name: 'index' })">
          <img
            src="/images/logo-white.svg"
            alt="Eleven Spectacles logo"
            width="168"
          />
        </nuxt-link>
        <p class="mt-6 text-sm max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum
          odio dignissimos, amet quod nihil cumque magni aliquid cum quo
          suscipit non laborum sed, provident autem, iste aut itaque impedit.
        </p>
      </div>

      <div class="flex-1 flex justify-between">
        <nav class="flex-1">
          <h3>{{ t("ourCompany") }}</h3>
          <ul>
            <li>
              <nuxt-link :to="localePath({ name: 'about-us' })">
                {{ t("aboutUs") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'st-slug', params: { slug: 'legal' } })"
              >
                {{ t("legal") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="
                  localePath({
                    name: 'st-slug',
                    params: { slug: 'privacy-policy' },
                  })
                "
                >{{ t("privacy") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="
                  localePath({ name: 'st-slug', params: { slug: 'cookies' } })
                "
              >
                {{ t("cookies") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nav class="flex-1 px-12">
          <h3>{{ t("needHelp") }}</h3>
          <ul>
            <li>
              <nuxt-link :to="localePath({ name: 'contact-us' })">
                {{ t("contactUs") }}
              </nuxt-link>
            </li>
            <li>
              <a href="#">{{ t("shipping") }}</a>
            </li>
            <li>
              <a href="#">{{ t("payment") }}</a>
            </li>
            <li>
              <a href="#">{{ t("returnAndExchange") }}</a>
            </li>
            <li>
              <a href="#">{{ t("faq") }}</a>
            </li>
            <li>
              <a href="#">{{ t("sitemap") }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex-1">
          <h3>{{ t("followUs") }}</h3>
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
      class="flex flex-col-reverse md:flex-row text-center md:justify-between mx-6 py-6 border-t border-gray-400"
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
.footer {
  @apply bg-black;
}

.footer p,
.footer h3 {
  @apply text-gray-200;
}
.footer h3 {
  @apply mb-6;
}

.footer ul {
  @apply text-xs lg:text-sm flex flex-col space-y-1;
}
.footer a {
  @apply transition-colors duration-200 text-gray-400 hover:text-gray-200 hover:underline underline-offset-4;
}

.footer__cards-img {
  height: 26px;
}
</style>
