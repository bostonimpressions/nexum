<script setup lang="ts">
  //hero content
  const hero = await useContentSection('hero', '/services/first-defense/hero')
  //overview content
  const overview = await useContentSection(
    'overview',
    '/services/first-defense/overview'
  )
  //overview two content
  const overviewTwo = await useContentSection(
    'overviewTwo',
    '/services/first-defense/overview-two'
  )
  const overviewTwoImage = computed(
    () => overviewTwo.value?.meta?.imgs?.[0] || {}
  )
  //overview three content
  const overviewThree = await useContentSection(
    'overviewThree',
    '/services/first-defense/overview-three'
  )
  interface IconWithText {
    imgSrc: string
    imgAlt: string
    title: string
    text: string
  }
  const serviceFeatures = computed<IconWithText[]>(() => {
    return (overviewThree.value?.meta?.serviceFeatures as IconWithText[]) || []
  })
</script>

<template>
  <HeroSubpage>
    <template #logo><BaseLogoFirstDefense /></template>
    <template #heading> {{ hero.title }} </template>
  </HeroSubpage>
  <Overview :id="overview.meta?.anchor">
    <BaseGrid :cols="2">
      <div class="grid-item">
        <ContentRenderer :value="overview" />
      </div>

      <div class="grid-item">
        <p>
          <strong>{{ overview.meta?.bulletDesc }}</strong>
        </p>
        <BaseBulletList
          :items="overview.meta?.bullets"
          variant="basic"
          text-color="var(--blue)"
        />
      </div>
    </BaseGrid>
  </Overview>

  <SectionDarkCurved :id="overviewTwo.meta?.anchor">
    <BaseGrid align-items="center" class="two-thirds-grid">
      <div class="grid-item">
        <div class="border-bottom">
          <ContentRenderer :value="overviewTwo" />
        </div>
      </div>
      <div class="grid-item">
        <img :src="overviewTwoImage.url" :alt="overviewTwoImage.alt" />
      </div>
    </BaseGrid>
  </SectionDarkCurved>

  <div :id="overviewThree.meta?.anchor" class="light-background">
    <section class="section-main">
      <HeaderServiceOverview>
        <div class="overview-title">
          <img src="/logos/first-defense-white.png" alt="first*defense" />
          <h2>Overview</h2>
        </div>
      </HeaderServiceOverview>

      <div class="container">
        <div class="section-lead">
          <ContentRenderer :value="overviewThree" />
        </div>

        <div class="icon-text-grid">
          <div
            v-for="(row, index) in serviceFeatures"
            :key="index"
            class="row"
            :class="{ reverse: index % 2 === 1 }"
          >
            <div class="grid-item">
              <img
                :src="row.imgSrc"
                :alt="row.imgAlt"
                width="150"
                height="150"
              />
            </div>
            <div class="grid-item">
              <h4>{{ index + 1 }}. {{ row.title }}</h4>
              <p>{{ row.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .light-background {
    background-color: var(--lightblue);
    background-image: url('/bg-light.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .border-bottom {
    padding: 0 0 30px;
  }

  .overview-title {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    img {
      margin: 0 auto;
      width: 100%;
      max-width: 500px;
    }
    h2 {
      font-size: clamp(28px, 5vw, 54px);
      font-weight: 200;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .section-main {
    .container {
      max-width: 1024px;
      padding: 60px 20px;
      margin-bottom: 0;
    }
    .grid-item {
      img {
        width: 100%;
        max-width: 150px;
      }
    }
  }

  .section-lead {
    text-align: center;
    max-width: 1024px;
    margin: 0 auto 120px;
    :deep(p),
    p {
      font-size: clamp(18px, 5vw, 22px);
      font-weight: 600;
    }
  }

  .two-thirds-grid {
    .grid-item {
      > img {
        width: 100%;
        max-width: 700px;
        margin-top: -40px;
        align-self: flex-end;
      }
    }
  }

  .grid-item {
    h3 {
      color: var(--orange);
      text-align: center;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .section-two {
    margin: 80px auto;
  }

  .icon-text-grid {
    display: flex;
    flex-direction: column;
    gap: 80px;

    .row {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .grid-item {
        flex: 1 0 100%;
        max-width: 100%;

        img {
          width: 100%;
          display: block;
          margin: 0 auto;
        }

        h4 {
          margin: 0;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        p {
          margin: 0;
          color: var(--black);
          font-size: clamp(16px, 5vw, 18px);
        }
      }
    }

    @media (min-width: 768px) {
      .row {
        flex-direction: row;
        align-items: center;
        gap: 60px;

        &.reverse {
          flex-direction: row-reverse;
        }

        .grid-item {
          &:first-child {
            flex: 1 0 30%;
            max-width: 200px;
          }
          &:last-child {
            flex: 3 0 60%;
          }
        }
      }
    }

    @media (min-width: 1200px) {
      .row {
        .grid-item {
          &:first-child {
            flex: 1 0 25%;
          }
          &:last-child {
            flex: 3 0 75%;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .border-bottom {
      font-size: 21px;
      padding: 0 0 30px;
      border-bottom: 4px solid var(--lightorange);
    }
  }

  @media (min-width: 1200px) {
    .section-main {
      .container {
        padding: 60px 0 120px;
      }
    }
  }
</style>
