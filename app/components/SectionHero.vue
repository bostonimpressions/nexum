<template>
  <section class="relative w-full overflow-hidden bg-black">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video-home-loop.webm" type="video/webm" />
      <source src="/video-home-loop.mov" type="video/quicktime" />
    </video>

    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="hero-content">
      <BaseHeader /> 
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero-content {
  position: relative;
  padding: 0 30px;
  margin: 0 auto;
  max-width: 1608px;
  z-index: 10;
}
section {
  min-height: 60vh;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 0 60px;
  }
  section {
    min-height: 80vh;
  }
}
</style>
