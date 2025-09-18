<script setup></script>

<template>
  <Hero theme="contact">
    <h1>Reach Out to Us, We’re here for you</h1>
    <p>
      Have questions or need assistance? We're here to help! Reach out to us for
      inquiries or support, and our team will get back to you as soon as
      possible
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>Interested In Connecting With NEXUM?</h2>
        <p>Please fill out the form below or contact us on social media.</p>
        <div class="floating-box">
          <div class="grid">
            <div class="grid-col">
              <div class="grid-header">
                <h3>Our Offices</h3>
                <p>
                  You can reach out to us in our offices from different regions
                </p>
              </div>
              <div class="address">
                <h4>Indiana Office</h4>
                <p>
                  2901 Carlson Drive Suite 204 Hammond, IN 46323 <br />
                  (866) 726-6901
                </p>
              </div>
              <div class="address">
                <h4>Chicago Metro Office</h4>
                <p>
                  190 S. LaSalle Street Suite 1450 Chicago, IL 60603 <br />
                  (866) 726-6901
                </p>
              </div>
              <div class="address">
                <h4>New England Regional Office</h4>
                <p>
                  2901 Carlson Drive Suite 204 Hammond, IN 46323 <br />
                  (866) 726-6901
                </p>
              </div>
              <div class="address">
                <h4>Security & Network Operations Command Centers</h4>
                <p>
                  725 6th Street NW, Suite C Albuquerque, NM 87102 <br />
                  (800) 301-3894
                </p>
              </div>
            </div>

            <div class="grid-col">
              <div class="contact-form">
                <h4>Write us a message</h4>
                <form>
                  <!-- Row 1 -->
                  <div class="form-row two-col">
                    <div class="form-field">
                      <label for="fullName">Full Name</label>
                      <input type="text" id="fullName" name="fullName" />
                    </div>
                    <div class="form-field">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" />
                    </div>
                  </div>

                  <!-- Row 2 -->
                  <div class="form-row two-col">
                    <div class="form-field">
                      <label for="interest">Area of Interest</label>
                      <select id="interest" name="interest">
                        <option value="">Select one</option>
                        <option value="services">Services</option>
                        <option value="partnership">Partnership</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                    <div class="form-field">
                      <label for="state">State</label>
                      <select id="state" name="state">
                        <option value="">Select your state</option>
                        <option value="il">Illinois</option>
                        <option value="in">Indiana</option>
                        <option value="ma">Massachusetts</option>
                        <option value="nm">New Mexico</option>
                      </select>
                    </div>
                  </div>

                  <!-- Row 3 -->
                  <div class="form-row">
                    <div class="form-field">
                      <label for="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                  </div>

                  <!-- Row 4 -->
                  <div class="form-row two-col space-between">
                    <div class="form-field recaptcha">
                      <!-- recaptcha placeholder -->
                      <div class="recaptcha-box">[ Recaptcha here ]</div>
                    </div>
                    <div class="form-field submit">
                      <BaseButton type="submit" solid> Submit </BaseButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .page-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 50px;
    text-align: center;

    p {
      color: var(--black);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: left;
    padding: 20px;
  }

  .grid-col:first-child {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .grid-col h4 {
    color: var(--blue);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  .grid-col p {
    font-size: 16px;
  }

  .grid-header {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      color: var(--black);
      font-size: 32px;
      font-weight: 700;
    }
  }

  .contact-form {
    padding: 25px;
    background-color: var(--lightgray);
    border-radius: 12px;

    h4 {
      color: var(--black);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      margin: 0 0 30px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &.two-col {
      flex-direction: row;
      gap: 16px;

      .form-field {
        flex: 1;

        &.submit {
          flex: none;
        }
      }
    }

    &.space-between {
      justify-content: space-between;
      align-items: center;
    }
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      color: var(--black);
    }

    input,
    select,
    textarea {
      padding: 10px 12px;
      background-color: var(--white);
      border: 1px solid var(--lightgray);
      border-radius: 6px;
      font-size: 15px;
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }
  }

  .recaptcha-box {
    width: 200px;
    height: 78px;
    background: #dcdcdc;
    border: 1px solid #aaa;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #555;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
