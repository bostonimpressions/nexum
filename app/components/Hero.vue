<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    theme?:
      | 'solutions'
      | 'events'
      | 'news'
      | 'partners'
      | 'about'
      | 'contact'
      | 'careers'
      | 'veterans'
      | 'leadership'
  }>()

  const theme = props.theme || 'default'

  // Compute the full background (gradient + image)
  const backgroundStyle = computed(() => {
    let imageUrl = ''
    switch (theme) {
      case 'solutions':
        imageUrl = '/heros/hero-bg-solutions.jpg'
        break
      case 'events':
        imageUrl = '/heros/hero-bg-events.jpg'
        break
      case 'news':
        imageUrl = '/heros/hero-bg-news.jpg'
        break
      case 'partners':
        imageUrl = '/heros/hero-bg-partners.jpg'
        break
      case 'about':
        imageUrl = '/heros/hero-bg-about.jpg'
        break
      case 'contact':
        imageUrl = '/heros/hero-bg-contact.jpg'
        break
      case 'careers':
        imageUrl = '/heros/hero-bg-careers.jpg'
        break
      case 'veterans':
        imageUrl = '/heros/hero-bg-veterans.jpg'
        break
      case 'leadership':
        imageUrl = '/heros/hero-bg-leadership.jpg'
        break
      default:
        imageUrl = '/heros/hero-bg-default.jpg'
    }
    return `linear-gradient(0deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%), url('${imageUrl}')`
  })

  // Optional: theme class for text styles
  const themeClass = computed(() => `hero-${theme}`)
</script>

<template>
  <div
    class="hero"
    :class="themeClass"
    :style="{ backgroundImage: backgroundStyle }"
  >
    <div class="container">
      <BaseHeader />
    </div>
    <div class="container hero-container">
      <div class="hero-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    background-color: var(--blue);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    color: var(--white);
  }

  :deep(h1),
  :deep(p) {
    color: var(--white);
  }

  .hero-content {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
  }

  .hero-container {
    display: flex;
    flex-direction: column;

    margin-top: 60px;
  }

  @media (min-width: 768px) {
    .hero {
      min-height: 45vh;
    }
    .hero-container {
      flex: 1;
      justify-content: flex-end;
      margin-top: auto;
    }
  }

  .hero-default {
    background-image:
      linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%),
      url('/heros/hero-bg-default.jpg') !important;
  }
  .hero-about {
    background-image:
      linear-gradient(
        180deg,
        rgba(0, 48, 135, 0.57) 0%,
        rgba(0, 48, 135, 0) 48.08%
      ),
      linear-gradient(
        254deg,
        rgba(221, 242, 255, 0) 0.69%,
        rgba(221, 242, 255, 0.77) 77.02%
      ),
      url('/heros/hero-bg-about.jpg') !important;

    :deep(h1),
    :deep(p) {
      color: var(--blue);
    }
  }
  .hero-contact {
    .hero-content {
      max-width: 400px;
    }
    .hero-container {
      justify-content: flex-start;
    }
    background-position: 50% 100%;
    background-image:
      linear-gradient(
        180deg,
        rgba(0, 48, 135, 0.6) 0%,
        rgba(0, 48, 135, 0) 100%
      ),
      url('/heros/hero-bg-contact.jpg') !important;
  }
  .hero-careers {
    background-image:
      linear-gradient(
        148deg,
        rgba(0, 0, 0, 0.8) 19.14%,
        rgba(0, 0, 0, 0) 123.59%
      ),
      url('/heros/hero-bg-careers.jpg') !important;
  }
  .hero-veterans {
    background-image:
      linear-gradient(180deg, rgba(0, 48, 135, 0) 52%, #003087 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 165%),
      url('/heros/hero-bg-veterans.jpg') !important;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply, normal, normal;
  }
</style>
