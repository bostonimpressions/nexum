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
    <div class="row-three">
      <div class="container">
        <div class="two-col-grid">
          <div class="grid-item">
            <h2 class="sr-only">First Defense</h2>
            <BaseLogoFirstDefense />
            <p>
              Nexum is a SOC 2 Type 2-compliant Managed Security Service
              Provider (MSSP) with a range of services to help you defend your
              network efficiently and effectively. Most importantly,  with
              Nexum first*defense®, our manufacturer-authorized technical
              support team is available 24/7 via telephone, email, and web-based
              portal.
            </p>

            <div class="button-row">
              <BaseButton solid>Book a Demo</BaseButton>
            </div>
          </div>
          <div class="grid-item">
            <img src="/solutions-transport.png" alt="Solutions transport" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-solutions {
    display: flex;
    flex-direction: column;
    padding: 120px 0 20px;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 75px;
    align-items: center;

    > .grid-item {
      display: flex;
      flex-direction: column;
      gap: 32px;

      + .grid-item {
        align-items: center;
      }
    }
  }

  .button-row {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .grid-item {
    img {
      width: 100%;
    }
  }

  .row-two {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px auto;
  }
  .row-three {
    background-color: var(--lightblue); /* fallback color */
    background-image: url('/bg-lightblue.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px 0;
    margin: 30px 0;

    .two-col-grid {
      img {
        max-width: 500px;
      }
    }
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    .slide-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
      height: 563px;
      flex-shrink: 0;
      background: var(--lightblue);

      .icon {
        margin: 0 0 22px;
      }
    }
  }

  @media (min-width: 1024px) {
    .section-solutions {
      padding: 160px 0 20px;
    }
    .button-row {
      flex-direction: row;
      gap: 30px;
    }
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
