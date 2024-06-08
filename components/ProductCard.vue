<script setup>
const localePath = useLocalePath();
const frameColor = ref();
const lensColor = ref();
const props = defineProps({
  product: { type: Object },
});

const frameColors = computed(() => [
  ...new Set(props.product.attributes?.variants.map((item) => item.frameColor)),
]);

const lensColors = computed(() => [
  ...new Set(props.product.attributes?.variants.map((item) => item.lensColor)),
]);
</script>

<template>
  <nuxt-link
    :to="
      localePath({
        name: 'spectacles-type-slug',
        params: {
          type: product?.attributes.type,
          slug: product?.attributes.slug,
        },
      })
    "
    class="group cursor-pointer flex flex-col relative items-center justify-between"
  >
    <UCard class="w-full">
      <template #header>
        <h2 class="text-sm md:text-base xl:text-md mb-1">
          {{ product?.attributes.name }}
        </h2>
      </template>

      <div class="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
        <p
          v-if="product?.attributes.description"
          class="text-gray-400 text-xs xl:text-sm truncate max-w-[250px]"
        >
          {{ product.attributes.description }}
        </p>
      </div>
      <div v-if="product.attributes?.variants.length">
        <div>{{ frameColors }}</div>
        <div>{{ lensColors }}</div>
        <div>{{ product.attributes.variants }}</div>
      </div>

      <template #footer>
        <p
          v-if="product?.attributes.price"
          class="mt-2.5 font-semibold text-lg"
        >
          {{ product?.attributes.price }}<span class="text-sm">BGN</span>
        </p>
      </template>
    </UCard>
  </nuxt-link>
</template>
