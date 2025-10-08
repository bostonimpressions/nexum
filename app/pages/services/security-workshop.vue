<script setup lang="ts">
  import { ref } from 'vue'

  const bullets = [
    'Governance',
    'Cloud and Infrastructure',
    'Application',
    'Server and Endpoint',
  ]

  const isModalOpen = ref(false)
</script>

<template>
  <HeroSubpage>
    <template #heading> Security Workshop </template>
  </HeroSubpage>

  <Overview>
    <p>
      In this complimentary workshop we’ll conduct a manufacturer-agnostic
      review of your security posture across four core areas:
    </p>
    <BaseBulletList variant="basic" :items="bullets" text-color="var(--blue)" />
    <button class="open-modal-btn" @click="isModalOpen = true">
      <span class="icon">🛡️</span>
      Sign Up for the Workshop
    </button>
  </Overview>

  <BaseModal v-model="isModalOpen">
    <FormSecurityWorkshop />
  </BaseModal>
</template>

<style lang="scss" scoped>
  $color: #003087;

  .open-modal-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: $color;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    margin-top: 1rem;
    transition: background 0.2s;

    .icon {
      font-size: 1.25rem;
    }

    &:hover {
      background: darken($color, 10%);
    }
  }
</style>
