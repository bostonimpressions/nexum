<script setup lang="ts">
  import { NuxtLink } from '#components'

  interface Props {
    url: string
  }

  defineProps<Props>()
</script>

<template>
  <NuxtLink :to="url" class="service-card">
    <div class="content">
      <h4 class="title">
        <slot name="title"></slot>
      </h4>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>

    <div class="learn-more">Learn More <span class="arrow">→</span></div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  $lightorange: #fff5e6;
  $lightblue: #ddf2ff;
  $lightgray: #f0f2f5;
  $lightcolor: $lightorange;

  .service-card {
    position: relative;
    border-radius: 15px;
    background-color: $lightgray;
    background-image: url('/bg-abstract-squares.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 30px;
    text-decoration: none;
    color: var(--blue);
    transition: all 0.3s ease;
    min-height: 280px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: $lightgray;
      opacity: 0.35; // image opacity
      z-index: 0;
    }

    &:hover {
      background-color: $lightcolor;
      transform: translateY(-6px);

      &::before {
        background: $lightcolor;
      }

      .arrow {
        transform: translateX(4px);
      }
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      z-index: 1;

      .title {
        color: var(--blue);
      }
      .body {
        :deep(p) {
          color: var(--black);
        }
      }
    }

    .learn-more {
      position: relative;
      z-index: 1;
      align-self: flex-start;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: auto;

      .arrow {
        display: inline-block;
        transition: transform 0.3s ease;
      }
    }
  }
</style>
