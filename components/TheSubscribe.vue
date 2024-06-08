<script></script>

<template>
  <VSection class="sib-form">
    <div id="sib-form-container" class="sib-form-container">
      <div
        id="sib-container"
        class="sib-container--large sib-container--vertical"
      >
        <form
          id="sib-form"
          method="POST"
          action="https://7ddd14d5.sibforms.com/serve/MUIFAKoSBjEaRO6AncVpFgD99Gfk23Sl4lgs4_KoYwyk8so-UIQkaH1XGXIn8IeICWGZUb5RopR1kiEnxB2HC9Pxwh0146pirPeBNdrt3zgKb2T20aB1YApYILJhYjG3h0xiofF5_6be8Wyb2YN2ZT6yumRS7Gb3qdGifVHsObLRqOblWuuA1V2Al4qMMUrDq_3OGoavbyc2AC1m"
          class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
          <div class="max-w-xl lg:max-w-lg">
            <h3 class="text-2xl font-bold text-black leading-8">
              Искате да получавате новини и информация за нашите продукти?
              Абонирайте се за нашия бюлетин.
            </h3>
          </div>
          <div>
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row">
                  <div class="flex gap-2">
                    <UInput
                      id="EMAIL"
                      size="lg"
                      class="input grow"
                      type="text"
                      name="EMAIL"
                      autocomplete="off"
                      placeholder="E-mail"
                      data-required="true"
                      required
                    />
                    <UButton form="sib-form" type="submit" size="lg">
                      Абонирам се
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm mt-2">
              Използваме Brevo като нашата маркетингова платформа. С изпращането
              на тази форма вие се съгласяте, че личните данни, които сте
              предоставили, ще бъдат прехвърлени към Brevo за обработка в
              съответствие с
              <ULink
                to="https://www.brevo.com/en/legal/privacypolicy/"
                active-class="text-primary"
                inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Политика за поверителност</ULink
              >.
            </p>
          </div>
          <input
            type="text"
            name="email_address_check"
            value=""
            class="invisible w-0 h-0"
          >
          <input type="hidden" name="locale" value="bg" >
          <input type="hidden" name="html_type" value="simple" >
        </form>
      </div>
    </div>
  </VSection>
</template>
