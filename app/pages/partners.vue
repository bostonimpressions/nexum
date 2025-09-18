<script setup>
  import { featuredPartners, partners } from '@/data/partners'
</script>

<template>
  <Hero theme="partners">
    <h1>Partners</h1>
    <p>
      Join us as a partner and unlock new opportunities for growth, innovation,
      and collaboration. Together, we can deliver cutting-edge solutions and
      drive mutual success
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>Featured Partners</h2>
        <p>
          We provide top-tier technologies from the industry's leading security
          solution providers. Our experts customize each solution to meet your
          unique needs, ensuring a comprehensive and effective security package
        </p>
      </div>

      <!-- Featured logos -->
      <BaseGrid :cols="4">
        <component
          v-for="(logo, i) in featuredPartners"
          :key="i"
          :is="
            logo.url ? (logo.url.startsWith('http') ? 'a' : 'NuxtLink') : 'div'
          "
          :to="logo.url && !logo.url.startsWith('http') ? logo.url : null"
          :href="logo.url && logo.url.startsWith('http') ? logo.url : null"
          class="logo-card"
          target="_blank"
          rel="noopener"
        >
          <img :src="`/logos/logo-${logo.src}`" :alt="`Logo ${i + 1}`" />
        </component>
      </BaseGrid>

      <!-- All partners -->
      <div class="page-row">
        <h2>All Technology Partners</h2>
        <p>
          We collaborate with industry-leading technology providers to bring you
          the most advanced and reliable solutions. Our partnerships ensure
          seamless integration, enhanced security, and optimized performance,
          empowering businesses with cutting-edge innovations
        </p>
        <BaseGrid :cols="4">
          <component
            v-for="(partner, i) in partners"
            :key="i"
            :is="partner.url.startsWith('http') ? 'a' : 'NuxtLink'"
            :to="!partner.url.startsWith('http') ? partner.url : null"
            :href="partner.url.startsWith('http') ? partner.url : null"
            class="partner-name"
            target="_blank"
            rel="noopener"
          >
            {{ partner.name }}
          </component>
        </BaseGrid>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .page-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    p {
      color: var(--black);
    }
  }

  .logo-card {
    background: var(--white);
    border: 1px solid #ccc;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 190px;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    text-decoration: none;
    img {
      min-height: 28px;
      max-height: 28px;
      width: auto;
      object-fit: contain;
    }
  }

  // .logo-card:hover {
  //   transform: translateY(-3px);
  //   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  // }

  .partner-name {
    font-size: 24px;
    font-weight: 500;
    color: var(--black);
    text-decoration: none;
    text-align: center;
  }

  @media (min-width: 768px) {
    .partner-name {
      text-align: left;
    }
  }

  // .partner-name:hover {
  //   text-decoration: underline;
  // }
</style>
