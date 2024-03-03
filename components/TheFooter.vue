<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const companyLinks = computed(() => [
  {
    label: t("aboutUs"),
    to: localePath({ name: "about-us" }),
  },
  {
    label: t("termsOfUse"),
    to: localePath({ name: "st-slug", params: { slug: "terms-of-use" } }),
  },
  {
    label: t("privacy"),
    to: localePath({
      name: "st-slug",
      params: { slug: "privacy-policy" },
    }),
  },
  {
    label: t("cookies"),
    to: localePath({ name: "st-slug", params: { slug: "cookies" } }),
  },
]);

const helpLinks = computed(() => [
  {
    label: t("contactUs"),
    to: localePath({ name: "contact-us" }),
  },
  // {
  //   label: t("shipping"),
  //   to: localePath({ name: "st-slug", params: { slug: "shipping" } }),
  // },
  {
    label: t("payment"),
    to: localePath({
      name: "st-slug",
      params: { slug: "payments" },
    }),
  },
  // {
  //   label: t("returnAndExchange"),
  //   to: localePath({ name: "st-slug", params: { slug: "returnAndExchange" } }),
  // },
  // {
  //   label: t("faq"),
  //   to: localePath({ name: "st-slug", params: { slug: "faq" } }),
  // },
  {
    label: t("sitemap"),
    to: "/sitemap.xml",
    external: true,
  },
]);
const socialLinks = computed(() => [
  // {
  //   label: "Facebook",
  //   to: "https://facebook.com",
  // },
  {
    label: "Instagram",
    to: "https://www.instagram.com/eleven.spectacles/",
    external: true,
  },
]);
</script>

<template>
  <footer>
    <UDivider />

    <UContainer class="py-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-12">
        <div class="mb-8 xl:mb-0">
          <nuxt-link :to="localePath({ name: 'index' })">
            <NuxtImg
              loading="lazy"
              src="/images/logo.svg"
              alt="Eleven Spectacles logo"
              width="168"
              class="block dark:hidden"
            />

            <NuxtImg
              loading="lazy"
              src="/images/logo-white.svg"
              alt="Eleven Spectacles logo"
              width="168"
              class="hidden dark:block"
            />
          </nuxt-link>
        </div>
        <div
          class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-6 xl:col-span-2"
        >
          <div>
            <h3 class="mb-4">
              {{ t("ourCompany") }}
            </h3>
            <UVerticalNavigation
              class="-mx-2"
              :links="companyLinks"
              :ui="{
                active: 'before:bg-transparent dark:before:bg-transparent',
                inactive:
                  ' hover:before:bg-transparent dark:hover:before:bg-transparent',
              }"
            />
          </div>
          <div>
            <h3 class="mb-4">
              {{ t("needHelp") }}
            </h3>
            <UVerticalNavigation
              class="-mx-2"
              :links="helpLinks"
              :ui="{
                active: 'before:bg-transparent dark:before:bg-transparent',
                inactive:
                  ' hover:before:bg-transparent dark:hover:before:bg-transparent',
              }"
            />
          </div>
          <div>
            <h3 class="mb-4">
              {{ t("followUs") }}
            </h3>
            <UVerticalNavigation
              class="-mx-2"
              :links="socialLinks"
              :ui="{
                active: 'before:bg-transparent dark:before:bg-transparent',
                inactive:
                  ' hover:before:bg-transparent dark:hover:before:bg-transparent',
              }"
            />
          </div>
        </div>
      </div>
    </UContainer>

    <UDivider />

    <UContainer
      class="flex flex-col-reverse items-center md:flex-row md:justify-between py-4"
    >
      <p class="text-sm">
        &#169; {{ new Date().getFullYear() }} Eleven Spectacles
      </p>

      <ColorModeButton />
    </UContainer>
  </footer>
</template>
