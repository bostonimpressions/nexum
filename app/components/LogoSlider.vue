<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
  import { featuredPartners } from '~/data/partners'

  const trackRef = ref<HTMLElement | null>(null)
  let ro: ResizeObserver | null = null
  const PX_PER_SECOND = 90

  async function waitForImages(container: HTMLElement) {
    const imgs = Array.from(
      container.querySelectorAll('img')
    ) as HTMLImageElement[]
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) return resolve()
            const onDone = () => resolve()
            img.addEventListener('load', onDone, { once: true })
            img.addEventListener('error', onDone, { once: true })
          })
      )
    )
  }

  async function measureAndUpdate() {
    await nextTick()
    const track = trackRef.value
    if (!track) return
    await waitForImages(track)
    const total = track.scrollWidth
    const single = total / 2
    if (!single || !isFinite(single) || single < 1) return
    const durationSeconds = Math.max(5, single / PX_PER_SECOND)
    track.style.setProperty('--scroll-distance', `${single}px`)
    track.style.setProperty('--animation-duration', `${durationSeconds}s`)
  }

  onMounted(() => {
    measureAndUpdate()
    window.addEventListener('resize', measureAndUpdate)
    if ('ResizeObserver' in window && trackRef.value) {
      ro = new ResizeObserver(measureAndUpdate)
      ro.observe(trackRef.value)
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', measureAndUpdate)
    if (ro && trackRef.value) ro.unobserve(trackRef.value)
  })
</script>

<template>
  <div class="bar" role="presentation" aria-hidden="false">
    <div ref="trackRef" class="logos-track">
      <div v-for="(logo, i) in featuredPartners" :key="i" class="logo">
        <img :src="`/logos/logo-${logo.src}`" alt="Partner logo" />
      </div>
      <div
        v-for="(logo, i) in featuredPartners"
        :key="i + '-clone'"
        class="logo"
      >
        <img :src="`/logos/logo-${logo.src}`" alt="Partner logo" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .bar {
    position: relative;
    overflow: hidden;
    height: 98px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    background: var(--white);
    box-shadow: 0 2px 54px rgba(0, 114, 206, 0.08);
  }

  .logos-track {
    display: flex;
    align-items: center;
    gap: 40px;
    animation: scroll var(--animation-duration, 18s) linear infinite;
    will-change: transform;
  }

  .bar:hover .logos-track {
    animation-play-state: paused;
  }

  .logo {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    height: 20px;
  }

  .logo img {
    max-height: 20px;
    height: auto;
    width: auto;
    display: block;
    object-fit: contain;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-1 * var(--scroll-distance, 1000px)));
    }
  }
</style>
