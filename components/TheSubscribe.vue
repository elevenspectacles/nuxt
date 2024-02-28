<script></script>

<template>
  <VSection>
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          class="grid space-y-4 validate"
          action="https://elevenspectacles.us21.list-manage.com/subscribe/post?u=41e28ddf826df39751b6cc77a&amp;id=a033abc061&amp;v_id=251&amp;f_id=000df1e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <UInput
                type="email"
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                :required="true"
                value=""
              />
            </div>
            <div
              id="mergeRow-gdpr"
              class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div class="content__gdpr">
                <label>Marketing Permissions</label>
                <p>
                  Please select all the ways you would like to hear from us:
                </p>
                <fieldset
                  class="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label class="checkbox subfield" for="gdpr97770"></label>
                  <UCheckbox
                    id="gdpr_97770"
                    name="gdpr[97770]"
                    class="gdpr"
                    value="Y"
                    label="Email"
                    :required="true"
                  />
                </fieldset>
                <p>
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please visit our
                  <NuxtLink>privacy policy</NuxtLink>.
                </p>
              </div>
              <div class="content__gdprLegal">
                <NuxtImg
                  loading="lazy"
                  src="https://cdn-images.mailchimp.com/icons/mailchimp-gdpr.svg"
                  alt="Eleven Spectacles logo"
                  width="64"
                />
                <p>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.
                  <NuxtLink to="https://mailchimp.com/legal/terms" external
                    >Learn more</NuxtLink
                  >
                  about Mailchimp's privacy practices.
                </p>
              </div>
            </div>
            <div aria-hidden="true" style="position: absolute; left: -5000px">
              /* real people should not fill this in and expect good things - do
              not remove this or risk form bot signups */
              <input
                type="text"
                name="b_41e28ddf826df39751b6cc77a_a033abc061"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="optionalParent">
              <div class="clear foot">
                <UButton
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  color="primary"
                  variant="solid"
                  size="lg"
                >
                  Subscribe
                </UButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </VSection>
</template>
