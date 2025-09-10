<!-- services -->
<script setup lang="ts"></script>

<template>
  <HeroSubpage>
    <template #logo><BaseLogoFirstDefense /></template>
    <template #heading> Managed & Monitored services </template>
  </HeroSubpage>
  <Overview>
    <BaseGrid :cols="2" align-items="center">
      <div class="grid-item">
        <h2>Overview</h2>
        <p>
          Nexum first*defense is a family of managed and monitored services
          designed to be your fist line of defense for security and networking
          challenges. Our team of certified experts located at our redundant
          US-based Security and Network Operation Command Centers (SNOCCs) are
          available around the clock to help augment your own technical staff.
        </p>
        <p>
          <strong>
            These attributes provide the service level you want and the
            compliance you can rely on from a leading managed service:
          </strong>
        </p>

        <ul>
          <li>100% US-based support (SNOCC and engineers)</li>
          <li>SOC -II Type 2 and PCI compliant</li>
          <li>Dedicated Network Security Engineer</li>
          <li>Experience in delivering first*defense solution since 2006</li>
        </ul>
      </div>
      <div class="grid-item">
        <img src="/solutions-transport.png" alt="Solutions transport" />
      </div>
    </BaseGrid>
  </Overview>
  <section class="section-two container">
    <div class="floating-box">
      <BaseLogoFirstDefense />
      <h2>TRIPLE STRENGTHS</h2>

      <BaseGrid :cols="3">
        <div class="grid-item">
          <div class="grid-icon">
            <img src="/icons/icon-globe.png" alt="Icon" />
          </div>
          <h3>TRIPLE STRENGTHS</h3>
        </div>
        <div class="grid-item">
          <div class="grid-icon">
            <img src="/icons/icon-agents.png" alt="Icon" />
          </div>
          <h3>TRIPLE STRENGTHS</h3>
        </div>
        <div class="grid-item">
          <div class="grid-icon">
            <img src="/icons/icon-gear.png" alt="Icon" />
          </div>
          <h3>TRIPLE STRENGTHS</h3>
        </div>
      </BaseGrid>
      <BaseGrid :cols="2" align-items="center">
        <div class="grid-item">
          <p>
            Nexum first*defense is a family of managed and monitored services
            designed to be your fist line of defense for security and networking
            challenges. Our team of certified experts located at our redundant
            US-based Security and Network Operation Command Centers (SNOCCs) are
            available around the clock to help augment your own technical staff.
          </p>
          <p>
            <strong>
              These attributes provide the service level you want and the
              compliance you can rely on from a leading managed service:
            </strong>
          </p>

          <ul>
            <li>100% US-based support (SNOCC and engineers)</li>
            <li>SOC -II Type 2 and PCI compliant</li>
            <li>Dedicated Network Security Engineer</li>
            <li>Experience in delivering first*defense solution since 2006</li>
          </ul>
        </div>
        <div class="grid-item">
          <img src="/solutions-transport.png" alt="Solutions transport" />
        </div>
      </BaseGrid>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding-left: 0;
    color: var(--blue);

    li {
      position: relative;
      padding-left: 1.2rem;

      &::marker {
        color: var(--orange);
      }

      // fallback if ::marker not supported
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-weight: bold;
      }
    }
  }

  .grid-item {
    > img {
      max-width: 480px;
      margin: 0 auto;
    }
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
    margin: 0 auto 50px;
  }
</style>
