<script setup lang="ts">
  import { ref } from 'vue'

  const bullets = [
    'Governance',
    'Cloud and Infrastructure',
    'Application',
    'Server and Endpoint',
  ]

  const info = {
    heading: 'What is a Security Posture Workshop',
    body: `Nexum has over 20 years of industry experience to help you identify your strengths
  in these core areas and focus on the best approach to improve your security
  posture, by enhancing existing solutions or potentially investing in new technology.
  Our Security Lifecycle Workshop provides an opportunity to synchronize IT security
  planning with your organization’s overall strategic objectives.

  Work with Nexum’s team of engineering experts to understand how your
  organization is currently positioned to tackle modern-day security threats and
  changing network landscapes:`,
    items: [
      'Measure your organization against each core area of security',
      'Understand potential areas of improvement',
      'Confidential discovery and review designed for IT leadership',
      'Prioritize your security investments and initiatives',
    ],
  }

  const featureItems = [
    {
      format: '2 hours',
      features: 'Initial consultation and survey',
    },
    {
      format: '1-2 hours',
      features: 'Review and recommendations',
    },
  ]

  const isModalOpen = ref(false)

  //topics content
  const topics = await useContentSection(
    'topics',
    '/services/security-workshop/topics'
  )
  const topicItems = computed(() => topics.value?.meta?.items || [])
</script>

<template>
  <HeroSubpage>
    <template #heading> Security Workshop </template>
  </HeroSubpage>

  <Overview>
    <p>
      In this complimentary workshop we’ll conduct a manufacturer-agnostic
      review of your security posture across four core areas:
    </p>
    <BaseBulletList variant="basic" :items="bullets" text-color="var(--blue)" />
    <BaseButton
      solid
      variant="orange"
      class="modal-btn"
      @click="isModalOpen = true"
    >
      <span class="icon">
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
      </span>
      Sign Up for the Workshop
    </BaseButton>
  </Overview>

  <section
    id="informative"
    class="section-two container container-collapse info"
  >
    <Informative
      :heading="info.heading"
      :body="info.body"
      :items="info.items"
    />
  </section>

  <section id="features" class="section-two">
    <div class="container">
      <h2>Estimated Time</h2>
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
  .icon {
    svg {
      width: auto;
      height: 30px;
    }
  }
</style>
