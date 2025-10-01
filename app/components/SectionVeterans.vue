<script setup lang="ts">
  //veterans content
  const veterans = await useContentSection('veterans', '/home/veterans')
  const veteransImage = computed(() => veterans.value?.meta?.imgs?.[0] || {})
  const veteransButtons = computed(() => veterans.value?.meta?.buttons || [])
</script>

<template>
  <section :id="veterans.meta?.anchor" class="section-veterans">
    <div class="container container-collapse">
      <BaseBanner>
        <div class="icon">
          <img :src="veteransImage.url" :alt="veteransImage.alt" />
        </div>
        <h2>{{ veterans.title }}</h2>
        <ContentRenderer :value="veterans" />

        <BaseButton
          v-for="btn in veteransButtons"
          link
          :key="btn.label"
          :to="btn.link"
        >
          {{ btn.label }}
        </BaseButton>
      </BaseBanner>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-veterans {
    position: relative;
    padding: 90px 0;
    margin: 0 auto;
  }

  .container {
    gap: 52px;
  }

  .icon {
    width: 110px;
    height: 110px;
    aspect-ratio: 1/1;
  }
</style>
