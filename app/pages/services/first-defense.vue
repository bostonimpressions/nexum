<script setup lang="ts">
  interface iconWithText {
    imgSrc: string
    imgAlt: string
    title: string
    text: string
  }

  const serviceFeatures: iconWithText[] = [
    {
      imgSrc: '/icons/icon-fd-speed.png',
      imgAlt: 'Speed',
      title: '1. Speed',
      text: `Rapid collection and processing get alerts to our analysts
      usually within 60 seconds. Notification of important events to
      customers occurs within minutes and emergency changes are
      processed promptly which means faster time to resolution and
      less risk of a breach.`,
    },
    {
      imgSrc: '/icons/icon-fd-data.png',
      imgAlt: 'Data',
      title: '2. Threat Intelligence',
      text: `Data from over 100 sources of threat intelligence are ingested
      in FD solution to identify malicious activity and proactively
      prevent harm to your organization. Access to consolidated threat
      intelligence feeds is available to all FD customer.`,
    },
    {
      imgSrc: '/icons/icon-fd-capabilities.png',
      imgAlt: 'Data',
      title: '3. Security Monitoring and Management',
      text: `Advanced detection and automation capabilities are provided for your systems
      (whether you have your own SIEM or leverage Nexum’s). The solution is
      delivered with accountability in mind and customers can elect to retain some
      or all of the control and activity of the managed platform.`,
    },
    {
      imgSrc: '/icons/icon-fd-procedure.png',
      imgAlt: 'Data',
      title: '4. Flexibility and Transparency',
      text: `Procedures specific to your organization are customized and transparent access
      is provided to all workflow notes, even for false positives and non-critical events.
      Alerts are clear, concise, with a simple outline of cause and a straightforward
      direction to resolution.`,
    },
    {
      imgSrc: '/icons/icon-fd-engineers.png',
      imgAlt: 'Data',
      title: '5. People',
      text: `Analysts at our SNOCC’s are familiar with customer accounts and are
      knowledgeable, extensively trained (including certified on vendor products)
      and able to address customer questions. Experienced Network Security
      Engineers are available to provide additional support and expertise.`,
    },
  ]
</script>

<template>
  <HeroSubpage>
    <template #logo><BaseLogoFirstDefense /></template>
    <template #heading> Managed & Monitored Services </template>
  </HeroSubpage>
  <Overview>
    <BaseGrid :cols="2">
      <div class="grid-item">
        <p>
          Nexum first*defense is a family of managed and monitored services
          designed to be your fist line of defense for security and networking
          challenges. Our team of certified experts located at our redundant
          US-based Security and Network Operation Command Centers (SNOCCs) are
          available around the clock to help augment your own technical staff.
        </p>
      </div>
      <div class="grid-item">
        <p>
          <strong>
            These attributes provide the service level you want and the
            compliance you can rely on from a leading managed service:
          </strong>
        </p>

        <BaseBulletList
          variant="basic"
          :items="[
            '100% US-based support (SNOCC and engineers)',
            'SOC -II Type 2 and PCI compliant',
            'Dedicated Network Security Engineer',
            'Experience in delivering first*defense solution since 2006',
          ]"
        />
      </div>
    </BaseGrid>
  </Overview>

  <SectionDarkCurved>
    <BaseGrid align-items="center" class="two-thirds-grid">
      <div class="grid-item">
        <p class="border-bottom">
          Our first*defense solution focuses on providing exceptional customer
          services and delivery of the security outcomes needed to maintain
          compliance and limit exposure to cybersecurity threats.
        </p>
      </div>
      <div class="grid-item">
        <img src="/solutions-transport-light.png" alt="Solutions transport" />
      </div>
    </BaseGrid>
  </SectionDarkCurved>

  <div class="light-background">
    <section class="section-main">
      <HeaderServiceOverview>
        <div class="overview-title">
          <img src="/logos/first-defense-white.png" alt="first*defense" />
          <h2>Overview</h2>
        </div>
      </HeaderServiceOverview>

      <div class="container">
        <div class="section-lead">
          <p>
            first*defense is centered on providing a robust managed security
            solution while exceeding customer service expectations. An
            organization's security posture is dynamic and often has unique
            requirements. Nexum can assist regardless of customer size or
            vertical leveraging our over two decades of cybersecurity
            experience.
          </p>
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
              <h4>{{ row.title }}</h4>
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
