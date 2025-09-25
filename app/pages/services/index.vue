<!-- services -->
<script setup lang="ts">
  interface ServiceItem {
    url: string
    title: string
    body: string
  }

  const services: ServiceItem[] = [
    {
      url: '/services/professional-services',
      title: 'Professional Services',
      body: 'Nexum Professional Services help you optimize investments, lower operating costs, and ensure your systems are deployed efficiently and correctly with the support of our top industry experts and resources.',
    },
    {
      url: '/services/assessment-and-advisory-services',
      title: 'Assessment & Advisory',
      body: 'Nexum delivers actionable insights and tailored recommendations that enable you to reduce risk, strengthen defenses, and align your security investments with your business objectives.',
    },
    {
      url: '/services/technical-support-services',
      title: 'Technical Support',
      body: 'Our experienced, vendor-certified support engineers are your first line of defense for various services, including secure ticket access, asset tracking, break/fix troubleshooting, and much more.',
    },
    {
      url: '/services/knowledge-transfer-services',
      title: 'Knowledge Transfer',
      body: 'Our Knowledge Transfer offering bridges the gap between deployment and daily operational excellence by equipping your teams with the practical knowledge and confidence they need to optimize performance, streamline operations, and maximize ROI.',
    },
    {
      url: '/services/security-workshop',
      title: 'Security Workshop',
      body: 'Our Security Workshop is designed to help organizations strengthen their data and network defenses. Through expert-led sessions, we identify risks, share best practices, and provide practical guidance to improve your overall security posture.',
    },
  ]
</script>

<template>
  <Hero>
    <h1>
      Services
      <div class="subheading">
        Achieve Stability Throughout Your Infrastructure
      </div>
    </h1>

    <p>
      Ensure consistent security, reliability, and performance across your
      entire IT infrastructure with robust cybersecurity solutions. Protect your
      systems from threats while maintaining operational stability
    </p>
  </Hero>

  <section class="section-services">
    <div class="container">
      <div class="row-wrapper">
        <BaseGrid>
          <div class="grid-item">
            <h2 class="sr-only">First Defense</h2>
            <BaseLogoFirstDefense />
            <p>
              Nexum is a SOC 2 Type 2-compliant Managed Security Service
              Provider (MSSP) with a range of services to help you defend your
              network efficiently and effectively. Most importantly,  with
              Nexum first*defense®, our manufacturer-authorized technical
              support team is available 24/7 via telephone, email, and web-based
              portal.
            </p>

            <div class="button-row">
              <BaseButton link to="/services/first-defense" outlined arrow
                >Learn More</BaseButton
              >
            </div>
          </div>
          <div class="grid-item">
            <img src="/solutions-transport.png" alt="Solutions transport" />
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
