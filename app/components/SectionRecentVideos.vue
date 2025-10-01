<script setup lang="ts">
  //video content
  const videos = await useContentSection('videos', '/home/recent-videos')
</script>

<template>
  <section :id="videos.meta?.anchor" class="section-recent">
    <div class="container">
      <h2>{{ videos.title }}</h2>
      <ContentRenderer :value="videos" />
      <BaseGrid :cols="4">
        <div class="grid-item">
          <img src="/post-image-placeholder.png" alt="Video image" />
          <h5>The Role of Encryption in Data Protection</h5>
          <div class="text">December 12, 2024</div>
        </div>
        <div class="grid-item">
          <img src="/post-image-placeholder.png" alt="Video image" />
          <h5>The Role of Encryption in Data Protection</h5>
          <div class="text">December 12, 2024</div>
        </div>
        <div class="grid-item">
          <img src="/post-image-placeholder.png" alt="Video image" />
          <h5>The Role of Encryption in Data Protection</h5>
          <div class="text">December 12, 2024</div>
        </div>
        <div class="grid-item">
          <img src="/post-image-placeholder.png" alt="Video image" />
          <h5>The Role of Encryption in Data Protection</h5>
          <div class="text">December 12, 2024</div>
        </div>
      </BaseGrid>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-recent {
    display: flex;
    flex-direction: column;
    padding: 40px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 32px;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: left;
  }

  img {
    flex-shrink: 0;
    border-radius: 8px;
  }

  .text {
    color: var(--gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
  }

  @media (min-width: 1024px) {
    .section-recent {
      padding: 40px 0 90px;
    }
  }
</style>
