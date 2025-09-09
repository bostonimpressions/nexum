<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="container">
      <BaseHeader />
    </div>
    <div class="container hero-container">
      <div class="hero-row">
        <div class="hero-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%),
      url('/hero-bg-4.jpg');
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    padding: 60px 0 0;
    color: var(--white);
  }
  :deep(h1),
  :deep(p) {
    color: var(--white);
  }
  .hero-row {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    flex: 1;
    padding: 40px 0;
    //align-items: center;
  }

  .hero-content {
    max-width: 1040px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    gap: 27px;
    color: white;

    .content {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
