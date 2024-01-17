<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
</script>

<template>
  <footer class="bg-black">
    <UContainer>
      <VSection class="block xl:flex xl:justify-between px-6 py-12">
        <div class="flex-1 flex flex-col items-center md:block">
          <nuxt-link :to="localePath({ name: 'index' })">
            <NuxtImg
              src="/images/logo-white.svg"
              alt="Eleven Spectacles logo"
              width="168"
            />
          </nuxt-link>
          <p class="mt-6 max-w-sm text-center md:text-left text-white">
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

          <TheFooterSocialsNav class="flex-1" />
        </div>
      </VSection>

      <UDivider />

      <section
        class="flex flex-col-reverse items-center md:flex-row md:justify-between mx-6 py-6"
      >
        <p class="mt-4 md:mt-0 text-white">
          &#169; {{ new Date().getFullYear() }} Eleven spectacles - All rights
          reserved.
        </p>
        <NuxtImg src="/images/cards.png" alt="" class="footer__cards-img h-7" />
      </section>
    </UContainer>
  </footer>
</template>
