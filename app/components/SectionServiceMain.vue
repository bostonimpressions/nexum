<template>
  <section class="section-wrapper">
    <div class="section-connect">
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
              <BaseButton link to="/services/first-defense" outlined arrow
                >Learn More</BaseButton
              >
            </div>
          </div>
          <div class="grid-item">
            <img src="/solutions-transport.png" alt="Solutions transport" />
          </div>
        </div>
      </div>
    </div>
    <svg
      class="curve-bottom"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1449 86.59"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          class="cls-1"
          d="M1449,77.68C909.22-24.77,592.25-27.01,0,77.68v8.92h1449v-8.92Z"
        />
      </g>
    </svg>
  </section>
</template>

<style scoped lang="scss">
  .section-wrapper {
    margin: 0 auto 50px;
  }
  .section-connect {
    position: relative;
    background: var(--lightblue);
    padding: 70px 0 120px;

    .container {
      position: relative;
      z-index: 1;
      gap: 52px;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 75px;
    //align-items: center;

    > .grid-item {
      display: flex;
      flex-direction: column;
      gap: 32px;

      + .grid-item {
        align-items: center;
      }
    }
  }

  .grid-item {
    img {
      width: 100%;
    }
  }

  h2 {
    margin: 0 0 30px;
    text-align: center;
  }

  .curve-bottom {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;
    transform: rotate(180deg);

    path {
      fill: var(--lightblue);
    }
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    .button-row {
      flex-direction: row;
      gap: 30px;
    }
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
