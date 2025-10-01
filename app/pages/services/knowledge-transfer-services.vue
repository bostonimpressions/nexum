<script setup lang="ts">
  //hero content
  const hero = await useContentSection(
    'hero',
    '/services/knowledge-transfer/hero'
  )
  //overview content
  const overview = await useContentSection(
    'overview',
    '/services/knowledge-transfer/overview'
  )
  //info content
  const info = await useContentSection(
    'info',
    '/services/knowledge-transfer/info'
  )
  const infoItems = computed(() => info.value?.meta?.items || [])
  //services content
  const services = await useContentSection(
    'services',
    '/services/knowledge-transfer/services'
  )
  const serviceItems = computed(() => services.value?.meta?.services || [])
  //why-choose content
  const why = await useContentSection(
    'why',
    '/services/knowledge-transfer/why-choose-nexum'
  )
  const reasons = computed(() => why.value?.meta?.items || [])
  //example-engagements content
  const example = await useContentSection(
    'example',
    '/services/knowledge-transfer/example-engagements'
  )
  const exampleItems = computed(() => example.value?.meta?.examples || [])
  const gainsItems = computed(() => example.value?.meta?.gains || [])
  //features content
  const features = await useContentSection(
    'features',
    '/services/knowledge-transfer/features'
  )
  const featureItems = computed(() => features.value?.meta?.items || [])

  const infoGridItems = [
    {
      format: 'Onsite or Remote Sessions',
      features:
        'Hands-on and collaborative with direct access to Nexum engineers',
    },
    {
      format: 'Fully Customizable',
      features:
        'We tailor the scope to your environment, roles, and business objectives',
    },
  ]

  const teamGains = [
    'Review of your current relevant technology environment',
    'Customize an agenda that fits your training/knowledge transfer needs according to your environment, organized by modules you are using in your environment and or modules you are interested in implementing.',
    'General high-level review of vendor/technology concepts',
    'Deep reviews of relevant parts of environment',
    'Go over existing configurations and features you are using',
    'During knowledge transfer, provide practical, spoken guidance around optimization, performance, and security, delivered within the context of your setup',
    'Go over how to troubleshoot your applications and tools available based on modules that are being used in your environment',
    'All knowledge transfer sessions are interactive with flexible scheduling sessions',
  ]
</script>

<template>
  <HeroSubpage>
    <template #heading>{{ hero.title }}</template>
    <template #subheading>
      {{ hero.meta?.subtitle }}
    </template>
  </HeroSubpage>
  <Overview :id="overview.meta?.anchor">
    <h2>{{ overview.title }}</h2>
    <ContentRenderer :value="overview" />
  </Overview>
  <section
    :id="info.meta?.anchor"
    class="section-two container container-collapse info"
  >
    <Informative :heading="info.title" :body="info.body" :items="infoItems" />
  </section>
  <section :id="services.meta?.anchor" class="section-two container services">
    <h2>{{ services.title }}</h2>
    <ServiceItem
      v-for="(service, i) in serviceItems"
      :key="i"
      :heading="service.heading"
      :body="service.body"
      :items="service.items"
    />
  </section>

  <section :id="why.meta?.anchor" class="section-two container why">
    <h2>{{ why.title }}</h2>
    <div
      v-for="(reason, index) in reasons"
      :key="index"
      class="reason-card"
      :class="{ even: (index + 1) % 2 === 0 }"
    >
      <template v-if="(index + 1) % 2 === 0">
        <!-- even: text first, icon second -->
        <div class="body-text">
          <h4>{{ reason.heading }}</h4>
          <p>{{ reason.body }}</p>
        </div>
        <img
          :src="`/icons/icon-service-${reason.icon}.svg`"
          :alt="`${reason.icon} icon`"
          class="icon"
        />
      </template>
      <template v-else>
        <!-- odd: icon first, text second -->
        <img
          :src="`/icons/icon-service-${reason.icon}.svg`"
          :alt="`${reason.icon} icon`"
          class="icon"
        />
        <div class="body-text">
          <h4>{{ reason.heading }}</h4>
          <p>{{ reason.body }}</p>
        </div>
      </template>
    </div>
  </section>

  <section
    :id="example.meta?.anchor"
    class="section-two container container-collapse example-engagements"
  >
    <BaseBanner>
      <h2>{{ example.title }}</h2>
      <div class="border-box">
        <BaseGrid>
          <div
            v-for="(example, i) in exampleItems"
            :key="i"
            class="example-item"
          >
            <h4>{{ example.heading }}</h4>
            <p>{{ example.body }}</p>
          </div>
        </BaseGrid>
      </div>

      <div class="list">
        <h3>{{ example.meta?.gainsHeading }}</h3>

        <BaseBulletList
          :items="gainsItems"
          iconColor="var(--lightorange)"
          textColor="var(--white)"
        />
      </div>
    </BaseBanner>
  </section>

  <section class="section-two features">
    <div :id="features.meta?.anchor" class="container">
      <h2>{{ features.title }}</h2>
      <FeatureTable :items="featureItems" />
    </div>

    <div class="container container-collapse">
      <div class="explainer">
        <h3>What a sample knowledge transfer engagement might include:</h3>
        <BaseBulletList
          :items="teamGains"
          variant="basic"
          textColor="var(--blue)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 80px;
    &.info {
      margin-top: 120px;
    }
  }

  .services {
    > h2 {
      margin: 0 auto 90px;
      text-align: center;
    }
  }

  .why {
    margin: 140px auto;
    > h2 {
      text-align: center;
      color: var(--orange);
      padding-bottom: 30px;
      margin: 0 auto 40px;
      border-bottom: 7px solid var(--lightorange);
    }
  }

  .reason-card {
    display: grid;
    gap: 60px;
    padding: 30px 0;
    text-align: center;
    border-bottom: 7px solid var(--lightorange);

    .icon {
      height: auto;
      min-height: 160px;
      max-width: 420px;
      margin: 0 auto;
      order: 2;
    }
    .body-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      order: 1;

      h4,
      p {
        color: var(--blue);
      }
    }
  }

  .example-engagements {
    .list {
      margin: 0;
      padding: 30px 0 0 10px;
      align-self: normal;
    }
    h3 {
      color: var(--white);
      text-align: left;
    }
  }

  .border-box {
    padding: 40px 25px;
    margin: 0 -10px;
    border: 1px solid var(--lightorange);
    border-radius: 15px;
  }

  .explainer {
    background: var(--lightblue);
    padding: 30px;
    h3 {
      margin: 0 0 20px;
    }
  }
  @media (min-width: 768px) {
    .border-box {
      padding: 50px 40px;
      margin: auto;
    }
    .why {
      > h2 {
        padding-bottom: 30px;
        margin: 0 auto;
      }
    }

    .reason-card {
      display: grid;
      gap: 60px;
      text-align: left;
      min-height: 270px;
      align-content: center;
      grid-template-columns: 1fr 3fr;
      &.even {
        grid-template-columns: 3fr 1fr;
      }

      .icon {
        order: initial;
      }
      .body-text {
        order: initial;
        justify-content: center;
      }
    }
    .example-engagements {
      .list {
        padding: 30px 0 0 40px;
      }
    }

    .explainer {
      border-radius: 20px;
      padding: 60px;
    }
  }
</style>
