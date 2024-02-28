<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
const { t } = useI18n();

definePageMeta({
  title: "Contact us",
});

const state = reactive({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: t("error.required") });
  if (!state.email)
    errors.push({ path: "email", message: t("error.required") });
  if (!state.subject)
    errors.push({ path: "subject", message: t("error.required") });
  if (!state.message)
    errors.push({ path: "message", message: t("error.required") });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <VSection>
    <UContainer>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup :label="t('contact.name')" name="name" required>
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup :label="t('contact.email')" name="email" required>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup :label="t('contact.subject')" name="subject" required>
          <UInput v-model="state.subject" />
        </UFormGroup>

        <UFormGroup :label="t('contact.message')" name="message" required>
          <UTextarea v-model="state.message" />
        </UFormGroup>

        <UButton type="submit"> {{ t("contact.submit") }} </UButton>
      </UForm>
    </UContainer>
  </VSection>
</template>
