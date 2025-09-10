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
      top: -50px;
    }
  }

  @media (min-width: 768px) {
    .overview {
      &.container {
        top: -80px;
      }
    }
  }
</style>
