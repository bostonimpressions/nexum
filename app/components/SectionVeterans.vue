<script setup lang="ts"></script>

<template>
  <section class="section-veterans">
    <div class="container">
      <BaseBanner>
        <div class="icon">
          <img src="/logo-asdad.png" alt="ASDAD" />
        </div>
        <h2>11% of Nexum employees are veterans or first responders</h2>
        <p>
          Nexum, Inc. is a Service-Disabled Veteran-Owned Small Business
          (SDVOSB), verified by the U.S. Department of Veterans Affairs (VA). To
          qualify as an SDVOSB, a business must be owned or controlled by a
          Service-Disabled Veteran.
          <br />
          We take great pride in this designation, contribute to veteran
          organizations, and support our current veteran team members. In fact,
          11% of Nexum employees are veterans or first responders.1
        </p>
        <BaseButton>Read More</BaseButton>
      </BaseBanner>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-veterans {
    position: relative;
    padding: 90px 0;
    margin: 0 auto;
  }

  .container {
    gap: 52px;
  }

  .icon {
    width: 110px;
    height: 110px;
    aspect-ratio: 1/1;
  }
</style>
