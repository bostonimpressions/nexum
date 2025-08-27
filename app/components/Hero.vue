<template>
  <div
    class="hero"
    :style="{ backgroundImage: `url(${slides[currentSlide].background})` }"
  >
    <div class="container">
      <BaseHeader />

      <transition name="fade" mode="out-in">
        <div class="hero-content" :key="currentSlide">
          <div v-if="slides[currentSlide].logo" class="logo">
            {{ slides[currentSlide].logo }}
          </div>
          <div v-if="slides[currentSlide].category" class="category">
            {{ slides[currentSlide].category }}
          </div>
          <div v-if="slides[currentSlide].category" class="category">
            {{ slides[currentSlide].category }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import BaseHeader from '@/components/Base/BaseHeader.vue'

  // All slides in one array
  const slides = [
    {
      background: '/hero-bg-1.jpg',
      logo: '/logos/first-defense.png',
      title: `Managed & Monitored Services`,
      content: `Nexum’s first defense  can augment your team’s operations by monitoring for attacks, investigating potential breaches, proactively blocking bad actors, and keeping essential security components up to date.`,
      link: {
        text: `Learn More`,
        url: ``,
        variant: ``,
      },
    },
    {
      background: '/hero-bg-2.jpg',
      category: `Solutions`,
      title: `Custom Security Solutions`,
      content: `Nexum’s custom security, cloud, and network solutions mitigate risk and protect your IT and information assets, from enterprise and network security to strategy and advisory services. Protect your IT with custom security and cloud solutions.`,
      link: {
        text: `Learn More`,
        url: ``,
        variant: `orange`,
        solid: true,
      },
    },
    {
      background: '/hero-bg-3.jpg',
      category: `Services`,
      title: `Security Assessment`,
      content: `Nexum’s risk management services help you identify, evaluate, rate, and remediate security and continuity vulnerabilities. Our experienced engineers can perform a multi-point, holistic health check of your security posture.`,
      link: {
        text: `Learn More`,
        url: ``,
        variant: ``,
      },
    },
  ]

  const currentSlide = ref(0)
  let intervalId: ReturnType<typeof setInterval>

  onMounted(() => {
    intervalId = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 5000) // 5 seconds per slide
  })

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
</script>

<style scoped lang="scss">
  .hero {
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out;
    padding: 60px 0; // adjust as needed
    height: 800px;
  }

  .hero-content {
    max-width: 605px;
    margin: 30px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 27px;
    color: white;
  }

  /* Fade animation */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
