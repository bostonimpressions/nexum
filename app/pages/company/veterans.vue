<script setup>
  //hero content
  const hero = await useContentSection('hero', '/company/veterans/hero')
  //overview content
  const overview = await useContentSection(
    'overview',
    '/company/veterans/overview'
  )
  //interview content
  const interview = await useContentSection(
    'interview',
    '/company/veterans/interview'
  )
  //fight-for-security content
  const fightForSecurity = await useContentSection(
    'fight-for-security',
    '/company/veterans/fight-for-security'
  )
  //fit-for-veterans content
  const fitForVeterans = await useContentSection(
    'fit-for-veterans',
    '/company/veterans/fit-for-veterans'
  )
</script>

<template>
  <Hero theme="veterans">
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
    <div :id="interview.meta?.anchor" class="container container-collapse">
      <div class="page-row">
        <div class="interview">
          <h2>
            {{ interview.title }}
            <span>
              <ContentRenderer :value="interview" />
            </span>
          </h2>

          <BaseGrid :cols="2" gap="40px">
            <div
              class="grid-item"
              v-for="(column, colIndex) in interview.meta?.columns"
              :key="colIndex"
            >
              <div class="text-block" v-for="(block, i) in column" :key="i">
                <h4>{{ block.heading }}</h4>
                <p>{{ block.body }}</p>
              </div>
            </div>
          </BaseGrid>
        </div>
      </div>
    </div>

    <div :id="fightForSecurity.meta?.anchor" class="container">
      <div class="page-row">
        <h2>{{ fightForSecurity.title }}</h2>
        <ContentRenderer :value="fightForSecurity" />
      </div>
    </div>
    <div :id="fitForVeterans.meta?.anchor" class="container container-collapse">
      <BaseBanner>
        <h2>{{ fitForVeterans.title }}</h2>
        <ContentRenderer :value="fitForVeterans" />
        <p class="reference">
          <sup>{{ fitForVeterans.meta?.reference[0].number }}</sup
          >{{ fitForVeterans.meta?.reference[0].source }}
        </p>
      </BaseBanner>
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

  .interview {
    padding: 60px 30px;
    background:
      linear-gradient(
        0deg,
        rgba(0, 51, 102, 0.8) 0%,
        rgba(0, 51, 102, 0.8) 100%
      ),
      url('/bg-interview.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--white);
    text-align: left;

    h2 {
      margin-bottom: 40px;
      color: var(--white);
      font-size: clamp(38px, 5vw, 46px);
      line-height: clamp(38px, 5vw, 46px);

      span {
        :deep(p) {
          display: block;
          margin: 10px 0 0;
          font-style: italic;
          font-weight: normal;
          font-size: 0.5em;
          line-height: 1.2em;
        }
      }
    }

    h4,
    p,
    :deep(p) {
      color: var(--white);
    }

    p {
      font-size: 16px;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .interview {
      padding: 60px;
      border-radius: 20px;
    }
  }

  @media (min-width: 1024px) {
    .interview {
      padding: 120px 105px;
    }
  }
</style>
