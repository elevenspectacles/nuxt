<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <ULandingHero
      title="Turn Your Vision into Reality"
      description="Watch your dreams materialize before your eyes with us."
    />
    <UContainer>
      <VSection class="block xl:flex xl:justify-between px-6 py-12">
        <div class="flex-1 flex flex-col items-center md:block">
          <nuxt-link :to="localePath({ name: 'index' })">
            <img
              src="/images/logo-white.svg"
              alt="Eleven Spectacles logo"
              width="168"
            />
          </nuxt-link>
          <p class="mt-6 text-sm max-w-sm text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum
            odio dignissimos, amet quod nihil cumque magni aliquid cum quo
            suscipit non laborum sed, provident autem, iste aut itaque impedit.
          </p>
        </div>

        <div
          class="mt-12 xl:mt-0 flex-1 block text-center md:text-left md:flex md:justify-between"
        >
          <TheFooterCompanyNav class="flex-1" />

          <TheFooterHelpNav class="flex-1 px-0 my-12 md:px-12 md:my-0" />

          <div class="flex-1">
            <h3>{{ t("followUs") }}</h3>
            <div>
              <a
                href="#"
                class="flex items-center justify-center md:justify-start"
                target="_blank"
              >
                <Icon name="mdi:facebook" class="text-xl mr-2"></Icon> Facebook
              </a>
            </div>
            <div class="mt-1">
              <a
                href="#"
                class="flex items-center justify-center md:justify-start"
                target="_blank"
              >
                <Icon name="mdi:instagram" class="text-xl mr-2"></Icon>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </VSection>
      <UDivider />
      <section
        class="flex flex-col-reverse items-center md:flex-row md:justify-between mx-6 py-6"
      >
        <p class="text-sm leading-6 mt-4 md:mt-0">
          &#169; {{ new Date().getFullYear() }} Eleven spectacles - All rights
          reserved.
        </p>
        <div>
          <img src="/images/cards.png" alt="" class="footer__cards-img" />
        </div>
      </section>
    </UContainer>
  </footer>
</template>

<style>
.footer__cards-img {
  height: 26px;
}
</style>
