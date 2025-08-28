<script setup lang="ts">
  import { computed } from 'vue'
  import { NuxtLink } from '#components'

  interface Props {
    link?: boolean
    to?: string
    solid?: boolean
    variant?: 'light' | 'orange' | 'white'
  }

  const props = defineProps<Props>()

  const buttonClass = computed(() => {
    const color = props.variant || 'light'
    return props.solid ? `solid-${color}` : `outlined-${color}`
  })
</script>

<template>
  <component
    :is="props.link ? NuxtLink : 'button'"
    :to="props.link ? props.to : undefined"
    class="base-button"
    :class="buttonClass"
  >
    <div class="link-text">
      <slot />
    </div>
  </component>
</template>

<style scoped lang="scss">
  .base-button {
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;

    &.outlined-light {
      border: 1.5px solid var(--lightorange);
      background-color: transparent;
      color: var(--lightorange);
    }
    &.outlined-orange {
      border: 1.5px solid var(--orange);
      background-color: transparent;
      color: var(--orange);
    }
    &.outlined-white {
      border: 1.5px solid var(--white);
      background-color: transparent;
      color: var(--white);
    }

    &.solid-light {
      background-color: var(--lightorange);
      border: none;
      color: var(--white);
    }
    &.solid-orange {
      background-color: var(--orange);
      border: none;
      color: var(--white);
    }
    &.solid-white {
      background-color: var(--white);
      border: none;
      color: var(--orange);
    }

    &:hover {
      opacity: 0.9;
    }
  }

  .link-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition:
      transform 0.2s,
      color 0.2s;
  }
</style>
