<template>
  <section class="overview container">
    <div class="floating-box">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .overview {
    &.container {
      position: relative;
      margin-top: -50px;
    }
  }

  @media (min-width: 768px) {
    .overview {
      &.container {
        margin-top: -60px;
      }
    }
  }
</style>
