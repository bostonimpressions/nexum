<script setup lang="ts">
  defineProps<{
    width?: string
    padding?: string
    hoverable?: boolean
  }>()
</script>

<template>
  <div
    class="base-card"
    :class="{ hoverable }"
    :style="{
      width: width || '397px',
      padding: padding || '20px',
    }"
  >
    <header v-if="$slots['card-header']" class="base-card-header">
      <slot name="card-header" />
    </header>

    <div class="base-card-body">
      <slot />
    </div>

    <footer v-if="$slots['card-footer']" class="base-card-footer">
      <slot name="card-footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .base-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--lightgray);
    background: var(--white);
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;

    &.hoverable {
      cursor: pointer;
      &:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }
    }

    .base-card-header {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 100%;
      padding: 0 0 18px;
      border-bottom: 1px solid var(--lightgray);
      padding-bottom: 12px;
    }

    .base-card-body {
      flex: 1;
    }
  }
</style>
