<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const links = [
  // {
  //   label: t("contactUs"),
  //   to: localePath({ name: "contact-us" }),
  // },
  // {
  //   label: t("shipping"),
  //   to: localePath({ name: "st-slug", params: { slug: "shipping" } }),
  // },
  // {
  //   label: t("payment"),
  //   to: localePath({
  //     name: "st-slug",
  //     params: { slug: "payment" },
  //   }),
  // },
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
];
</script>

<template>
  <nav class="flex-1">
    <h3 class="text-white mb-4 ml-2.5">{{ t("needHelp") }}</h3>

    <UVerticalNavigation :links="links" />
  </nav>
</template>
