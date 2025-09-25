<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  //import BaseHeader from '@/components/Base/BaseHeader.vue'

  // All slides in one array
  const slides = [
    {
      background: '/heros/hero-slide-bg-1.jpg',
      logo: 'firstDefense',
      title: `Managed & Monitored Services`,
      content: `Nexum’s first defense  can augment your team’s operations by monitoring for attacks, investigating potential breaches, proactively blocking bad actors, and keeping essential security components up to date.`,
      link: {
        text: `Learn More`,
        url: `/services/first-defense`,
        variant: ``,
      },
    },
    {
      background: '/heros/hero-slide-bg-2.jpg',
      category: `Solutions`,
      title: `Custom Security Solutions`,
      content: `Nexum’s custom security, cloud, and network solutions mitigate risk and protect your IT and information assets, from enterprise and network security to strategy and advisory services. Protect your IT with custom security and cloud solutions.`,
      link: {
        text: `Learn More`,
        url: `/solutions`,
        variant: `orange`,
        solid: true,
      },
      theme: 'dark',
    },
    {
      background: '/heros/hero-slide-bg-3.jpg',
      category: `Services`,
      title: `Security Assessment`,
      content: `Nexum’s risk management services help you identify, evaluate, rate, and remediate security and continuity vulnerabilities. Our experienced engineers can perform a multi-point, holistic health check of your security posture.`,
      link: {
        text: `Learn More`,
        url: `/services`,
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

<template>
  <div
    class="hero"
    :style="{ backgroundImage: `url(${slides[currentSlide].background})` }"
  >
    <div class="container">
      <BaseHeader />
    </div>
    <div class="container hero-container">
      <div class="hero-row">
        <transition name="fade" mode="out-in">
          <div
            class="hero-content"
            :class="slides[currentSlide].theme"
            :key="currentSlide"
          >
            <div v-if="slides[currentSlide].logo" class="logo">
              <BaseLogoFirstDefense
                v-if="slides[currentSlide].logo === 'firstDefense'"
              />
            </div>
            <div v-if="slides[currentSlide].category" class="category">
              {{ slides[currentSlide].category }}
            </div>
            <h1 v-if="slides[currentSlide].title" class="title">
              {{ slides[currentSlide].title }}
            </h1>
            <div
              v-if="slides[currentSlide].content"
              class="content"
              v-html="slides[currentSlide].content"
            ></div>
            <div v-if="slides[currentSlide].link" class="link">
              <BaseButton
                link
                :to="slides[currentSlide].link.url"
                :variant="slides[currentSlide].link.variant"
                :solid="slides[currentSlide].link.solid"
              >
                {{ slides[currentSlide].link.text }}
              </BaseButton>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="container brands">
      <LogoSlider class="logo-slider" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    background-color: var(--blue);
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    padding: 60px 0 0;
  }
  .hero-row {
    display: flex;
    position: relative;
    flex: 1;
    padding: 40px 0;
    //align-items: center;
  }

  .hero-content {
    max-width: 605px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    gap: 27px;
    color: white;
    &.dark {
      color: var(--blue);

      .content {
        color: var(--black);
      }
    }

    .logo {
      width: 283px;
      height: 54.017px;
      aspect-ratio: 241/46;
    }

    .category {
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: 30px;
    }

    .content {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .brands {
    position: relative;
    bottom: -48px;
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
