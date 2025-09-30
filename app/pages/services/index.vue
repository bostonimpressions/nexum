<!-- services -->
<script setup lang="ts">
  import { computed } from 'vue'
  import { allServices } from '~/data/services'

  //hero content
  const hero = await useContentSection('hero', '/services/all-services/hero')
  //first defense content
  const sectionFirstDefense = await useContentSection(
    'sectionFirstDefense',
    '/services/all-services/services-first-defense'
  )
  const sectionFirstDefenseButtons = computed(
    () => sectionFirstDefense.value?.meta?.buttons || []
  )
  const sectionFirstDefenseImage = computed(
    () => sectionFirstDefense.value?.meta?.imgs?.[0] || {}
  )

  interface ServiceItem {
    url: string
    title: string
    body: string
  }

  const services: ServiceItem[] = allServices
</script>

<template>
  <Hero>
    <h1>
      {{ hero.title }}
      <div class="subheading">
        {{ hero?.meta.subtitle }}
      </div>
    </h1>

    <ContentRenderer :value="hero" />
  </Hero>

  <section class="section-services">
    <div class="container">
      <div class="row-wrapper">
        <BaseGrid>
          <div class="grid-item">
            <h2 class="sr-only">{{ sectionFirstDefense.title }}</h2>
            <BaseLogoFirstDefense />
            <ContentRenderer :value="sectionFirstDefense" />

            <div class="button-row">
              <BaseButton
                v-for="btn in sectionFirstDefenseButtons"
                link
                :key="btn.label"
                :to="btn.link"
              >
                {{ btn.label }}
              </BaseButton>
            </div>
          </div>
          <div class="grid-item">
            <img
              :src="sectionFirstDefenseImage.url"
              :alt="sectionFirstDefenseImage.alt"
            />
          </div>
        </BaseGrid>
      </div>
    </div>

    <div class="container">
      <BaseGrid>
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :url="service.url"
        >
          <template #title> {{ service.title }} </template>
          <template #body>
            <p>{{ service.body }}</p>
          </template>
        </ServiceCard>
      </BaseGrid>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-services {
    margin: 80px auto;
  }

  .row-wrapper {
    padding: 0 0 80px;
    border-bottom: 7px solid var(--lightorange);
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 32px;

    + .grid-item {
      align-items: center;
    }

    img {
      width: 100%;
      max-width: 500px;
    }
  }
</style>
