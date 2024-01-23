<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  const todo = await $fetch(
    "https://7ddd14d5.sibforms.com/serve/MUIFAIdxfjYNyKC2gxAI04_LlZJW3ZN3cIdv3NGUCKYgEBkITT4Rp5wyE146t_Qgn7uBdP3vI52tukwHsd2O20HGstkN01lsufp-YTGXv-ebn4DBeMtnxO56uSsDz0N3pl9BqB3m03cpux0FA3NzmHNG6iE2ZL1kecsOqiOkEBHzw8rpt3_puyen5DCHFvBIu8dJMO0kppEmrmAN",
    {
      method: "POST",
    }
  );
  console.log(
    "https://7ddd14d5.sibforms.com/serve/MUIFAIdxfjYNyKC2gxAI04_LlZJW3ZN3cIdv3NGUCKYgEBkITT4Rp5wyE146t_Qgn7uBdP3vI52tukwHsd2O20HGstkN01lsufp-YTGXv-ebn4DBeMtnxO56uSsDz0N3pl9BqB3m03cpux0FA3NzmHNG6iE2ZL1kecsOqiOkEBHzw8rpt3_puyen5DCHFvBIu8dJMO0kppEmrmAN"
  );
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <div style="padding: 8px 0">
      <div
        class="sib-form-block"
        style="
          font-size: 32px;
          text-align: left;
          font-weight: 700;
          font-family: 'Helvetica', sans-serif;
          color: #3c4858;
          background-color: transparent;
          text-align: left;
        "
      >
        <p>Newsletter</p>
      </div>
    </div>
    <div style="padding: 8px 0">
      <div
        class="sib-form-block"
        style="
          font-size: 16px;
          text-align: left;
          font-family: 'Helvetica', sans-serif;
          color: #3c4858;
          background-color: transparent;
          text-align: left;
        "
      >
        <div class="sib-text-form-block">
          <p>Subscribe to our newsletter and stay updated.</p>
        </div>
      </div>
    </div>
    <div style="padding: 8px 0">
      <div class="sib-input sib-form-block">
        <div class="form__entry entry_block">
          <div class="form__label-row">
            <div class="entry__field">
              <UFormGroup
                label="Enter your email address to subscribe"
                name="email"
              >
                <UInput
                  v-model="state.email"
                  type="text"
                  id="EMAIL"
                  name="EMAIL"
                  autocomplete="off"
                  placeholder="EMAIL"
                  data-required="true"
                  required
                />
              </UFormGroup>
            </div>
          </div>

          <label
            class="entry__error entry__error--primary"
            style="
              font-size: 16px;
              text-align: left;
              font-family: 'Helvetica', sans-serif;
              color: #661d1d;
              background-color: #ffeded;
              border-radius: 3px;
              border-color: #ff4949;
            "
          >
          </label>
          <label
            class="entry__specification"
            style="
              font-size: 12px;
              text-align: left;
              font-family: 'Helvetica', sans-serif;
              color: #8390a4;
              text-align: left;
            "
          >
            Provide your email address to subscribe. For e.g abc@xyz.com
          </label>
        </div>
      </div>
    </div>
    <div style="padding: 8px 0">
      <div class="sib-optin sib-form-block">
        <div class="form__entry entry_mcq">
          <div class="form__label-row">
            <div class="entry__choice" style="">
              <label>
                <input
                  type="checkbox"
                  class="input_replaced"
                  value="1"
                  id="OPT_IN"
                  name="OPT_IN"
                />
                <span
                  class="checkbox checkbox_tick_positive"
                  style="margin-left: "
                ></span
                ><span
                  style="
                    font-size: 14px;
                    text-align: left;
                    font-family: 'Helvetica', sans-serif;
                    color: #3c4858;
                    background-color: transparent;
                  "
                  ><p>
                    I agree to receive your newsletters and accept the data
                    privacy statement.
                  </p></span
                >
              </label>
            </div>
          </div>
          <label
            class="entry__error entry__error--primary"
            style="
              font-size: 16px;
              text-align: left;
              font-family: 'Helvetica', sans-serif;
              color: #661d1d;
              background-color: #ffeded;
              border-radius: 3px;
              border-color: #ff4949;
            "
          >
          </label>
          <label
            class="entry__specification"
            style="
              font-size: 12px;
              text-align: left;
              font-family: 'Helvetica', sans-serif;
              color: #8390a4;
              text-align: left;
            "
          >
            You may unsubscribe at any time using the link in our newsletter.
          </label>
        </div>
      </div>
    </div>
    <div style="padding: 8px 0">
      <div class="sib-form__declaration" style="direction: ltr">
        <div class="declaration-block-icon">
          <svg
            class="icon__SVG"
            width="0"
            height="0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                <path
                  class="path1"
                  d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                  fill="#0092FF"
                ></path>
              </symbol>
            </defs>
          </svg>
          <svg class="svgIcon-sphere" style="width: 63px; height: 63px">
            <use xlink:href="#svgIcon-sphere"></use>
          </svg>
        </div>
        <div
          style="
            font-size: 14px;
            text-align: left;
            font-family: 'Helvetica', sans-serif;
            color: #687484;
            background-color: transparent;
          "
        >
          We use Brevo as our marketing platform. By clicking below to submit
          this form, you acknowledge that the information you provided will be
          transferred to Brevo for processing in accordance with their
          <a
            target="_blank"
            class="clickable_link"
            style="
              font-size: inherit;
              font-family: inherit;
              line-height: normal;
            "
            href="https://www.brevo.com/legal/termsofuse/"
            >terms of use</a
          >
        </div>
      </div>
    </div>
    <div style="padding: 8px 0"></div>
    <div style="padding: 8px 0">
      <div class="sib-form-block" style="text-align: left">
        <UButton form="sib-form" type="submit"> SUBSCRIBE</UButton>
      </div>
    </div>
    <input
      type="text"
      name="email_address_check"
      value=""
      class="input--hidden"
    />
    <input type="hidden" name="locale" value="en" />
    <input type="hidden" name="html_type" value="simple" />

    <!-- END - We recommend to place the below code where you want the form in your website html  -->
    <!-- End Brevo Form -->
  </UForm>
</template>
