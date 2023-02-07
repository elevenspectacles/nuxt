<script>
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
</script>

<template>
  <VSection>
    <h2>Get in touch</h2>
    <FormKit type="form" @submit="submit" :value="formData">
      <FormKit type="text" name="name" validation="required" label="Your Name"></FormKit>
      <FormKit
        type="email"
        name="email"
        validation="required|email"
        label="Your Email"
      ></FormKit>
      <FormKit type="text" name="subject" validation="required" label="Subject"></FormKit>
      <FormKit
        type="textarea"
        name="message"
        validation="required"
        label="Message"
      ></FormKit>
    </FormKit>
  </VSection>
</template>
