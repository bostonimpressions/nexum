<script setup lang="ts">
  import { ref } from 'vue'

  const isModalOpen = ref(false)

  //hero content
  const hero = await useContentSection(
    'hero',
    '/services/security-workshop/hero'
  )
  //overview content
  const overview = await useContentSection(
    'overview',
    '/services/security-workshop/overview'
  )

  //info content
  const info = await useContentSection(
    'info',
    '/services/security-workshop/info'
  )
  const infoItems = computed(() => info.value?.meta?.items || [])

  //topics content
  const topics = await useContentSection(
    'topics',
    '/services/security-workshop/topics'
  )
  const topicItems = computed(() => topics.value?.meta?.items || [])

  //features content
  const features = await useContentSection(
    'features',
    '/services/security-workshop/features'
  )
  const featureItems = computed(() => features.value?.meta?.items || [])

  //report content
  const report = await useContentSection(
    'report',
    '/services/security-workshop/report'
  )
  const reportItems = computed(() => report.value?.meta?.items || [])
</script>

<template>
  <HeroSubpage>
    <template #heading> {{ hero.title }} </template>
  </HeroSubpage>

  <Overview :id="overview.meta?.anchor">
    <h2>{{ overview.title }}</h2>
    <ContentRenderer :value="overview" />
    <BaseBulletList
      :items="overview.meta?.bullets"
      variant="basic"
      text-color="var(--blue)"
    />
    <BaseButton
      solid
      variant="orange"
      class="modal-btn"
      @click="isModalOpen = true"
    >
      <template #icon>
        <svg
          width="43"
          height="51"
          viewBox="0 0 43 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_558_2138)">
            <path
              d="M9.22006 17.2752C8.76879 17.2752 8.4043 17.6417 8.4043 18.0912V19.4551C8.4043 19.9046 8.77071 20.2711 9.22006 20.2711H25.8438C26.2932 20.2711 26.6596 19.9046 26.6596 19.4551V18.0912C26.6596 17.6417 26.2932 17.2752 25.8438 17.2752H9.22006Z"
              fill="white"
            />
            <path
              d="M9.22006 24.8817H25.8438C26.2932 24.8817 26.6596 25.2463 26.6596 25.6977V27.0616C26.6596 27.5111 26.2951 27.8776 25.8438 27.8776H9.22006C8.76879 27.8776 8.4043 27.5111 8.4043 27.0616V25.6977C8.4043 25.2463 8.77071 24.8817 9.22006 24.8817Z"
              fill="white"
            />
            <path
              d="M8.40625 33.3062V34.6681C8.40625 35.1215 8.77267 35.488 9.22587 35.488H21.5008V33.1441C21.5008 32.9165 21.5259 32.7024 21.551 32.4882H9.22587C8.77267 32.4882 8.40625 32.8548 8.40625 33.3081V33.3062Z"
              fill="white"
            />
            <path
              d="M2.97376 41.2368V10.7664H6.13652V7.80328H2.83491C1.25932 7.80328 0 9.0765 0 10.6275V41.3757C0 42.9267 1.25932 44.1999 2.83491 44.1999H22.7352C22.282 43.2797 21.9407 42.2958 21.7266 41.2368H2.97376Z"
              fill="white"
            />
            <path
              d="M31.9977 24.8972C32.4259 24.6946 32.9041 24.5943 33.4094 24.5943C33.9648 24.5943 34.4932 24.7197 34.9599 24.9473V10.6275C34.9599 9.0765 33.7006 7.80328 32.125 7.80328H28.646V10.7664H31.9977V24.8991V24.8972Z"
              fill="white"
            />
            <path
              d="M9.47657 11.7869H25.3058C25.9229 11.7869 26.4147 11.295 26.4147 10.6776V6.17703C26.4147 5.57128 25.9229 5.06778 25.3058 5.06778H22.6849C22.5461 2.24356 20.2396 0 17.3912 0C14.5428 0 12.2363 2.24356 12.0974 5.06778H9.47657C8.87102 5.06778 8.36768 5.57128 8.36768 6.17703V10.6776C8.36768 11.295 8.87102 11.7869 9.47657 11.7869ZM17.3912 3.29107C18.5136 3.29107 19.42 4.19968 19.42 5.3205C19.42 6.44131 18.5136 7.33835 17.3912 7.33835C16.2688 7.33835 15.3624 6.42974 15.3624 5.3205C15.3624 4.21126 16.2688 3.29107 17.3912 3.29107Z"
              fill="white"
            />
            <path
              d="M41.6982 31.705C36.3755 31.161 34.798 28.1805 34.7209 28.0243C34.4817 27.5285 33.9803 27.2198 33.4307 27.2121C32.8811 27.2121 32.3604 27.5246 32.1116 28.0204C32.0479 28.1477 30.4839 31.1552 25.1323 31.7031C24.3937 31.7783 23.8306 32.4014 23.8306 33.1461V38.9527C23.8306 46.1734 32.3893 50.6528 32.7538 50.8399C32.9621 50.946 33.1896 51 33.4153 51C33.6409 51 33.8685 50.946 34.0767 50.8399C34.4412 50.6528 43 46.1734 43 38.9527V33.1461C43 32.4033 42.4368 31.7802 41.6982 31.7031V31.705ZM38.2751 37.8994L33.2378 42.9382C32.9563 43.2218 32.5841 43.3626 32.2138 43.3626C31.8435 43.3626 31.4713 43.2218 31.1898 42.9382L28.5554 40.3031C27.9884 39.7378 27.9884 38.8196 28.5554 38.2524C29.1224 37.6853 30.0384 37.6853 30.6054 38.2524L32.2138 39.8613L36.227 35.8487C36.794 35.2816 37.7101 35.2816 38.277 35.8487C38.844 36.414 38.844 37.3322 38.277 37.8994H38.2751Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_558_2138">
              <rect width="43" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </template>

      {{ overview.meta?.buttonLabel }}
    </BaseButton>
  </Overview>

  <section
    :id="info.meta?.anchor"
    class="section-two container container-collapse info"
  >
    <Informative :heading="info.title" :body="info.body" :items="infoItems" />
  </section>

  <section :id="features.meta?.anchor" class="section-two">
    <div class="container">
      <h2>{{ features.title }}</h2>
      <FeatureTable :items="featureItems" formatHeading="" featuresHeading="" />
    </div>
  </section>

  <section :id="topics.meta?.anchor" class="section-two container services">
    <h2>{{ topics.title }}</h2>
    <ServiceItem
      v-for="(topic, i) in topicItems"
      :key="i"
      :heading="topic.heading"
      :body="topic.body"
      :items="topic.items"
    />
  </section>

  <section :id="report.meta?.anchor" class="section-two">
    <div class="container container-collapse">
      <BaseBanner align="left">
        <template #heading>
          <h2>
            <span>
              <svg
                width="93"
                height="102"
                viewBox="0 0 93 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M81.5279 69.7795C81.5279 70.9034 80.9265 71.9529 79.9588 72.5153L47.6448 91.2941C46.6782 91.8565 45.4763 91.8565 44.5076 91.2941L12.1947 72.5153C11.227 71.9529 10.6255 70.9034 10.6255 69.7795V32.2231C10.6255 31.0982 11.227 30.0487 12.1947 29.4863L44.5076 10.7075C44.9914 10.4258 45.5336 10.2854 46.0767 10.2854C46.6199 10.2854 47.162 10.4258 47.6459 10.7075L61.0314 18.4865L69.2038 11.3559L52.757 1.79733C48.6365 -0.59911 43.517 -0.59911 39.3965 1.79733L7.08456 20.5761C2.96403 22.9694 0.404297 27.4334 0.404297 32.2231V69.7795C0.404297 74.5682 2.96403 79.0312 7.08456 81.4255L39.3975 100.204C41.4578 101.402 43.7678 102.001 46.0778 102.001C48.3878 102.001 50.6967 101.402 52.757 100.204L85.0699 81.4255C89.1905 79.0312 91.7502 74.5693 91.7502 69.7795V37.0526L81.5279 49.7869V69.7795Z"
                  fill="white"
                />
                <path
                  d="M36.0099 45.8485C33.6843 43.5757 29.9592 43.4144 27.4629 45.5909C24.8272 47.8888 24.5411 51.9035 26.824 54.5566L38.1201 67.6846C38.2846 67.8731 38.4864 68.0837 38.6748 68.2575C41.4353 70.7912 45.713 70.5932 48.2311 67.8145L48.2904 67.7495L91.2439 20.3434C93.0804 18.3083 93.0544 15.1483 91.1211 13.1562C89.1139 11.0886 85.8206 11.0509 83.7666 13.0724L43.2323 52.952L36.0099 45.8496V45.8485Z"
                  fill="#FFA827"
                />
              </svg>
            </span>
            {{ report.title }}
          </h2>
        </template>

        <BaseBulletList
          variant="checkboxes"
          text-color="white"
          icon-color="white"
          :items="reportItems"
        />
      </BaseBanner>
    </div>
  </section>

  <BaseModal v-model="isModalOpen">
    <FormSecurityWorkshop />
  </BaseModal>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 80px;
    &.info {
      margin-top: 120px;
    }
  }
  .modal-btn {
    width: auto;
  }
</style>
