<script setup lang="ts">
import type { FormError } from '#ui/types'

const { t } = useI18n()
const { create } = useStrapi()

useSeoMeta({
  title: t('contactUs'),
  ogTitle: t('contactUs'),
  description: t('seo.homeDescription'),
  ogDescription: t('seo.homeDescription')
})

const state = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  loading: false
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: t('error.required') })
  if (!state.email) errors.push({ path: 'email', message: t('error.required') })
  if (!state.subject)
    errors.push({ path: 'subject', message: t('error.required') })
  if (!state.message)
    errors.push({ path: 'message', message: t('error.required') })
  return errors
}

async function onSubmit() {
  try {
    state.loading = true
    const { data, pending, error, refresh } = await useAsyncData(
      'mountains',
      () => $fetch('https://api.nuxtjs.dev/mountains')
    )
    await create('contacts', {
      ...state
    }).then(() => {
      state.name = ''
      state.email = ''
      state.subject = ''
      state.message = ''
    })
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
}
</script>

<template>
  <VSection>
    <UContainer>
      <!--      <UAlert-->
      <!--        class="mb-4"-->
      <!--        color="primary"-->
      <!--        variant="solid"-->
      <!--        title="Success"-->
      <!--        :description="'sd'"-->
      <!--      />-->

      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup :label="t('contact.name')" name="name" required>
          <UInput v-model="state.name" :loading="state.loading" />
        </UFormGroup>

        <UFormGroup :label="t('contact.email')" name="email" required>
          <UInput v-model="state.email" :loading="state.loading" />
        </UFormGroup>

        <UFormGroup :label="t('contact.subject')" name="subject" required>
          <UInput v-model="state.subject" :loading="state.loading" />
        </UFormGroup>

        <UFormGroup :label="t('contact.message')" name="message" required>
          <UTextarea v-model="state.message" :loading="state.loading" />
        </UFormGroup>

        <UButton type="submit" :loading="state.loading">
          {{ t('contact.submit') }}
        </UButton>
      </UForm>
    </UContainer>
  </VSection>
</template>
