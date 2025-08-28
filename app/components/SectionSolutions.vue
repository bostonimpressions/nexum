<script setup lang="ts"></script>

<template>
  <section class="section-solutions">
    <div class="container">
      <div class="row-one">
        <div class="two-col-grid">
          <div class="grid-item">
            <h2>Our Circle of Solutions</h2>
            <p>
              We specialize in designing, implementing and managing agile,
              secure digital platforms that enable customers to move their
              businesses at a faster pace and innovate in the way they interact
              with their customers, employees and partners.
            </p>
            <p>
              We also provide services to ease procurement globally with a suite
              of flexible financing and consumption options.
            </p>
            <p>
              With deep expertise across data, applications, infrastructure,
              user experience and operations, our services experts are thinkers
              AND doers, focused on accelerating time-to-outcome for our
              customers.
            </p>

            <div class="button-row">
              <BaseButton>Download our Circle of Solutions</BaseButton>
              <BaseButton>Book a Demo</BaseButton>
            </div>
          </div>
          <div class="grid-item">
            <img src="/solutions-circle.jpg" alt="Solutions" />
          </div>
        </div>
      </div>
      <div class="row-two">
        <h2>Our Solutions</h2>
        <p>
          Nexum’s custom security, cloud, and network solutions mitigate risk
          and protect your IT and information assets, from enterprise and
          network security to strategy and advisory services. Protect your IT
          with custom security and cloud solutions.
        </p>

        <div class="solutions-slider">
          <div class="three-col-grid">
            <div class="slide-item">
              <div class="icon">
                <img src="/solution-icon.png" alt="" />
              </div>
              <div class="label">
                <h3>Enterprise & Network Security</h3>
              </div>
            </div>

            <div class="slide-item">
              <div class="icon">
                <img src="/solution-icon.png" alt="" />
              </div>
              <div class="label">
                <h3>Enterprise & Network Security</h3>
              </div>
            </div>

            <div class="slide-item">
              <div class="icon">
                <img src="/solution-icon.png" alt="" />
              </div>
              <div class="label">
                <h3>Enterprise & Network Security</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-solutions {
    display: flex;
    flex-direction: row;
    padding: 160px 0 20px;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 75px;
    align-items: center;

    > .grid-item {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }

  .button-row {
    display: flex;
    gap: 30px;
  }

  .row-two {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px auto;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .slide-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 563px;
      flex-shrink: 0;
      background: var(--lightblue);

      .icon {
        margin: 0 0 22px;
      }
    }
  }
</style>
