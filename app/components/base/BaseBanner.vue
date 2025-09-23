<script setup lang="ts"></script>

<template>
  <div class="base-banner">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .base-banner {
    display: flex;
    width: 100%;
    padding: 60px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    background-color: var(--blue);
    background-color: var(--blue);
    background-image: url('/bg-darkblue.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    color: var(--white);

    :deep(h2),
    :deep(p) {
      color: var(--white);
    }

    :deep(h2) {
      font-size: clamp(28px, 5vw, 46px);
      font-style: normal;
      font-weight: 700;
      text-transform: capitalize;
    }
  }

  @media (min-width: 500px) {
    .base-banner {
      padding: 40px;
    }
  }

  @media (min-width: 768px) {
    .base-banner {
      padding: 120px;
      border-radius: 25px;
    }
  }
</style>
