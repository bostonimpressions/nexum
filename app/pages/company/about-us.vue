<script setup>
  //hero content
  const hero = await useContentSection('hero', '/company/about-us/hero')
  //overview content
  const overview = await useContentSection(
    'overview',
    '/company/about-us/overview'
  )
  //anniversary content
  const anniversary = await useContentSection(
    'anniversary',
    '/company/about-us/anniversary'
  )
  //four-pillars content
  const fourPillars = await useContentSection(
    'four-pillars',
    '/company/about-us/four-pillars'
  )
  //managed-security content
  const MSSP = await useContentSection(
    'managed-security',
    '/company/about-us/managed-security'
  )
  //SDVOSB content
  const SDVOSB = await useContentSection(
    'veteran-owned',
    '/company/about-us/veteran-owned'
  )
</script>

<template>
  <Hero theme="about">
    <h1>{{ hero.title }}</h1>
    <ContentRenderer :value="hero" />
  </Hero>

  <section :id="overview.meta?.anchor" class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>{{ overview.title }}</h2>
        <ContentRenderer :value="overview" />
      </div>
    </div>
    <div :id="anniversary.meta?.anchor" class="container container-collapse">
      <BlueBox
        :buttonLabel="anniversary.meta?.buttons[0].label"
        :buttonUrl="anniversary.meta?.buttons[0].link"
      >
        <template #title> {{ anniversary.title }} </template>

        <template #body>
          <ContentRenderer :value="anniversary" />
        </template>

        <template #image>
          <img
            :src="anniversary.meta?.imgs[0].url"
            :alt="anniversary.meta?.imgs[0].alt"
          />
        </template>
      </BlueBox>
    </div>
    <div :id="fourPillars.meta?.anchor" class="container">
      <div class="page-row">
        <h2>{{ fourPillars.title }}</h2>
        <ContentRenderer :value="fourPillars" />
        <MissionSwiper :slides="fourPillars.meta?.missionSlides" />
      </div>
    </div>
    <div :id="MSSP.meta?.anchor" class="container container-collapse">
      <BaseBanner>
        <h2>{{ MSSP.title }}</h2>
        <ContentRenderer :value="MSSP" />
        <BaseButton link :to="MSSP.meta?.buttons[0].link">{{
          MSSP.meta?.buttons[0].label
        }}</BaseButton>
      </BaseBanner>
    </div>
    <div :id="SDVOSB.meta?.anchor" class="container">
      <div class="image-text-row">
        <img :src="SDVOSB.meta?.imgs[0].url" :alt="SDVOSB.meta?.imgs[0].alt" />
        <ContentRenderer :value="SDVOSB" />
        <BaseButton link :to="SDVOSB.meta?.buttons[0].link">{{
          SDVOSB.meta?.buttons[0].label
        }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .page-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 50px;
    text-align: center;
    p {
      color: var(--black);
    }
  }
  .image-text-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
    img {
      width: 200px;
    }
  }
</style>
