<script setup lang="ts">
  import { computed } from 'vue'

  const sectionOne = await useContentSection(
    'sectionOne',
    '/home/circle-of-solutions'
  )
  const sectionTwo = await useContentSection(
    'sectionTwo',
    '/home/our-solutions'
  )
  const sectionThree = await useContentSection(
    'sectionThree',
    '/home/solution-first-defense'
  )

  const sectionOneButtons = computed(
    () => sectionOne.value?.meta?.buttons || []
  )
  const sectionThreeButtons = computed(
    () => sectionThree.value?.meta?.buttons || []
  )
  const sectionThreeImage = computed(
    () => sectionThree.value?.meta?.imgs?.[0] || {}
  )
</script>

<template>
  <section :id="sectionOne.meta?.anchor" class="section-solutions">
    <div class="container">
      <div class="row-one">
        <div class="two-col-grid">
          <div class="grid-item">
            <h2>{{ sectionOne.title }}</h2>
            <ContentRenderer :value="sectionOne" />

            <div class="button-row">
              <BaseButton
                v-for="btn in sectionOneButtons"
                :key="btn.label"
                :to="btn.link"
              >
                {{ btn.label }}
              </BaseButton>
            </div>
          </div>
          <div class="grid-item">
            <CircleOfSolutions />
          </div>
        </div>
      </div>
      <div :id="sectionTwo.meta?.anchor" class="row-two">
        <h2>{{ sectionTwo.title }}</h2>
        <ContentRenderer :value="sectionTwo" />
        <SolutionsSwiper />
      </div>
    </div>
    <div :id="sectionThree.meta?.anchor" class="row-three">
      <div class="container">
        <BaseGrid>
          <div class="grid-item">
            <h2 class="sr-only">{{ sectionThree.title }}</h2>
            <BaseLogoFirstDefense />
            <ContentRenderer :value="sectionThree" />

            <div class="button-row">
              <BaseButton
                v-for="btn in sectionThreeButtons"
                :key="btn.label"
                :to="btn.link"
              >
                {{ btn.label }}
              </BaseButton>
            </div>
          </div>
          <div class="grid-item">
            <img :src="sectionThreeImage.url" :alt="sectionThreeImage.alt" />
          </div>
        </BaseGrid>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-solutions {
    display: flex;
    flex-direction: column;
    padding: 120px 0 20px;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 75px;
    align-items: center;

    > .grid-item {
      display: flex;
      flex-direction: column;
      gap: 32px;

      + .grid-item {
        align-items: center;
      }

      > [data-content-id] {
        display: contents;
      }
    }
  }

  .button-row {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .grid-item {
    img {
      width: 100%;
    }
  }

  .row-two {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px auto;
  }
  .row-three {
    background-color: var(--lightblue); /* fallback color */
    background-image: url('/bg-lightblue.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px 0;
    margin: 30px 0;

    .two-col-grid {
      img {
        max-width: 500px;
      }
    }
  }

  // .three-col-grid {
  //   display: grid;
  //   grid-template-columns: 1fr;
  //   gap: 24px;

  // }

  @media (min-width: 1024px) {
    .section-solutions {
      padding: 160px 0 20px;
    }
    .button-row {
      flex-direction: row;
      gap: 30px;
    }
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
