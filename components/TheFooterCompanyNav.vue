<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const links = [
  {
    label: t("aboutUs"),
    to: localePath({ name: "about-us" }),
  },
  {
    label: t("legal"),
    to: localePath({ name: "st-slug", params: { slug: "legal" } }),
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
];
</script>

<template>
  <section>
    <h3 class="text-white">{{ t("ourCompany") }}</h3>

    <UVerticalNavigation :links="links" />
  </section>
</template>
