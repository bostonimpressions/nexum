<template>
  <section class="section-curved">
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

    <div class="section-content">
      <div class="container">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-curved {
    margin: 80px auto 0;
  }
  .section-content {
    position: relative;
    background: var(--blue);
    padding: 0;

    :deep(h2),
    :deep(p) {
      color: var(--white);
    }

    .container {
      position: relative;
      z-index: 1;
      gap: 52px;
      margin: 0 auto;
      padding: 40px;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 32px;

    + .grid-item {
      align-items: center;
    }

    img {
      width: 100%;
    }
  }

  h2 {
    margin: 0 0 30px;
    text-align: center;
  }

  .curve-top {
    position: relative;
    top: 1px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;
    filter: drop-shadow(0 -4px 0 var(--orange))
      drop-shadow(0 -2px 0 var(--orange));

    path {
      fill: var(--blue);
    }
  }

  @media (min-width: 1024px) {
    .section-content {
      .container {
        padding: 0 20px 0;
      }
    }
    .button-row {
      flex-direction: row;
      gap: 30px;
    }
  }

  @media (min-width: 1240px) {
    .section-content {
      .container {
        padding: 0 0 40px;
      }
    }
  }
</style>
