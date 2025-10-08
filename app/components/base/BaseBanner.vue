<script setup lang="ts">
  const props = defineProps<{
    align?: 'left' | 'center'
  }>()

  // Default alignment is center
  const textAlign = computed(() => props.align ?? 'center')
</script>

<template>
  <div class="base-banner" :class="textAlign">
    <slot name="heading" />
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
    gap: 32px;
    background-color: var(--blue);
    background-image: url('/bg-darkblue.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    color: var(--white);
    text-align: center;

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

    :deep(h2) {
      display: flex;
      align-items: center;
      gap: 20px;
      svg {
        width: auto;
        height: 50px;
      }
    }

    &.left {
      text-align: left;
      align-items: flex-start;
    }

    &.center {
      text-align: center;
      align-items: center;
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
