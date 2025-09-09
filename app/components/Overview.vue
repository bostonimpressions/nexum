<template>
  <section class="overview">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .overview {
    .container {
      position: relative;
      top: -50px;
      display: flex;
      padding: 11px 27px 18px 27px;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 4px 21px 0 rgba(0, 0, 0, 0.09);
    }
  }

  @media (min-width: 768px) {
    .overview {
      .container {
        top: -80px;
      }
    }
  }
</style>
