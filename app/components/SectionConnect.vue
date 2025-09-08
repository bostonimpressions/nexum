<template>
  <section class="section-wrapper">
    <svg
      class="curve-top"
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
    <div class="section-connect">
      <div class="container">
        <h2>Connect With Us</h2>

        <!-- Elfsight LinkedIn Feed | Untitled LinkedIn Feed -->
        <div
          class="elfsight-app-117def64-9e13-4c5b-88ea-0fc9161883ab"
          data-elfsight-app-lazy
        ></div>

        <!-- <div class="three-col-grid">
          <div class="slide-item">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7366485495662497792?collapsed=1"
              height="770"
              width="504"
              frameborder="0"
              allowfullscreen
              title="Embedded post"
            ></iframe>
          </div>

          <div class="slide-item">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7366485495662497792?collapsed=1"
              height="770"
              width="504"
              frameborder="0"
              allowfullscreen
              title="Embedded post"
            ></iframe>
          </div>

          <div class="slide-item">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7366485495662497792?collapsed=1"
              height="770"
              width="504"
              frameborder="0"
              allowfullscreen
              title="Embedded post"
            ></iframe>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-wrapper {
    margin: 50px auto 0;
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

    h2 {
      margin: 0 0 30px;
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
      text-align: center;
      height: 563px;
      background: var(--blue);
      border-radius: 8px;
      box-shadow: 0 4px 17.3px rgba(0, 48, 135, 0.23);
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .curve-top {
    position: relative;
    top: 2px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;
    path {
      fill: var(--lightblue);
    }
  }
  @media (min-width: 768px) {
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
