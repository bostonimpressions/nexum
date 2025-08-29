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
    padding: 120px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    border-radius: 18px;
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
      max-width: 575px;
    }

    :deep(h2) {
      font-size: 46px;
      font-style: normal;
      font-weight: 700;
      line-height: 50px;
      text-transform: capitalize;
    }
  }
</style>
