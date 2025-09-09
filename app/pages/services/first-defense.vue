<!-- services -->
<script setup lang="ts"></script>

<template>
  <HeroSubpage>
    <template #logo><BaseLogoFirstDefense /></template>
    <template #heading> Managed & Monitored services </template>
  </HeroSubpage>
  <Overview>
    <div class="two-col-grid">
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
    </div>
  </Overview>
</template>

<style lang="scss" scoped>
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
    }
  }

  .grid-item {
    img {
      width: 100%;
    }
  }

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

  @media (min-width: 1024px) {
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
