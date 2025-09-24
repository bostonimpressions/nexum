<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="container">
      <BaseHeader />
    </div>
    <div class="container hero-container">
      <div class="hero-content">
        <div class="logo">
          <slot name="logo" />
        </div>

        <h1 class="title">
          <slot name="heading" />
          <span class="subheading">
            <slot name="subheading" />
          </span>
        </h1>

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%),
      url('/heros/hero-bg-subpage.jpg');
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    padding: 60px 0 80px;
    color: var(--white);
  }
  h1,
  p,
  :deep(p) {
    color: var(--white);
  }

  .hero-content {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    margin-top: auto;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 60px 0 120px;
    }
  }
</style>
