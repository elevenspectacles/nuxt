<script setup lang="ts">
definePageMeta({
  title: "Contact us",
});

const { locale } = useI18n();

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function submit() {}
</script>

<template>
  <VSection class="max-w-[1024px] mx-auto">
    <h1>Let's connect</h1>
    <FormKit type="form" @submit="submit" :value="formData">
      <div class="flex flex-col space-y-5">
        <div class="flex flex-col md:flex-row space-y-5 md:space-y-0">
          <div class="w-full md:w-1/2 mr-3">
            <FormKit type="text" name="name" validation="required" label="Your Name" />
          </div>
          <div class="w-full md:w-1/2 ml-3">
            <FormKit
              type="email"
              name="email"
              validation="required|email"
              label="Your Email"
            />
          </div>
        </div>
        <FormKit type="text" name="subject" validation="required" label="Subject" />
        <FormKit type="textarea" name="message" validation="required" label="Message" />

        <FormKit type="submit" label="Submit" />
      </div>
    </FormKit>
    <address>
      <p>Contact information</p>
      <a href="mailto:support@elevenspectacles.com">support@elevenspectacles.com</a>
      <a>+359 888 777 666</a>
      <a>Varna, Bulgaria</a>
    </address>
  </VSection>
</template>
