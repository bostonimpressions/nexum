<script setup lang="ts">
  interface Props {
    cols?: 2 | 3 | 4
    gap?: string
    align?: string
    alignItems?: string
    noCollapse?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    cols: 2,
    gap: '2rem',
    align: 'stretch',
    alignItems: 'normal',
    noCollapse: false,
  })
</script>

<template>
  <div
    class="base-grid"
    :class="{ 'no-collapse': noCollapse }"
    :data-cols="cols"
    :style="{
      '--grid-cols': cols,
      '--grid-gap': gap,
      '--grid-align': align,
      '--grid-align-items': alignItems,
    }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .base-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--grid-gap);
    align-items: var(--grid-align-items);

    > * {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    :deep(.grid-item) {
      img {
        width: 100%;
      }
    }

    :deep(.grid-icon) {
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      align-items: center;

      img,
      svg {
        max-width: 80%;
        max-height: 80%;
        object-fit: contain;
      }
    }

    &[data-cols='2'] {
      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &[data-cols='3'] {
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(var(--grid-cols), 1fr);
    }

    &.no-collapse {
      grid-template-columns: repeat(var(--grid-cols), 1fr) !important;
    }
  }
</style>
