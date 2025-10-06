<template>
  <div class="blue-box">
    <div class="blue-box-grid">
      <div class="blue-box-text">
        <!-- Title -->
        <h2><slot name="title" /></h2>

        <!-- Body -->
        <div class="blue-box-body">
          <slot name="body" />
        </div>

        <!-- Button (slot override supported) -->
        <slot name="button">
          <BaseButton
            v-if="buttonLabel && buttonUrl"
            :href="buttonUrl"
            variant="blue"
          >
            {{ buttonLabel }}
          </BaseButton>
        </slot>
      </div>

      <!-- Image -->
      <div class="blue-box-image">
        <slot name="image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    buttonLabel: {
      type: String,
      default: '',
    },
    buttonUrl: {
      type: String,
      default: '',
    },
  })
</script>

<style scoped lang="scss">
  .blue-box {
    background-image: url('/blue-box-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 60px 30px;
  }

  .blue-box-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: left;
    align-items: center;
  }

  .blue-box-text {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h2 {
      font-size: clamp(36px, 5vw, 46px);
      font-weight: 700;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      color: var(--gray);
    }
  }

  .blue-box-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .blue-box-image img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  @media (min-width: 400px) {
    .blue-box-image img {
      max-width: 70%;
    }
  }

  @media (min-width: 768px) {
    .blue-box {
      padding: 90px 60px 90px 90px;
      border-radius: 25px;
    }

    .blue-box-grid {
      grid-template-columns: 1.2fr 1fr;
      gap: 90px;
    }

    .blue-box-image img {
      max-width: 100%;
    }
  }
</style>
