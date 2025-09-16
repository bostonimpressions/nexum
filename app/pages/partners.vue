<script setup>
  import { partners } from '@/data/partners' // adjust path as needed

  const featuredPartners = [
    { src: 'abnormal.png', url: '/services/first-defense' },
    { src: 'infoblox.jpg', url: '/services/second-defense' },
    { src: 'cyeralogo.png', url: '/services/third-defense' },
    { src: 'zscaler.png', url: '/services/fourth-defense' },
    { src: 'palo-alto-networks.png', url: 'https://external.com' },
  ]
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
      <div class="logo-grid">
        <component
          v-for="(logo, i) in featuredPartners"
          :key="i"
          :is="logo.url.startsWith('http') ? 'a' : 'NuxtLink'"
          :to="!logo.url.startsWith('http') ? logo.url : null"
          :href="logo.url.startsWith('http') ? logo.url : null"
          class="logo-card"
          target="_blank"
          rel="noopener"
        >
          <img :src="`/logos/${logo.src}`" :alt="`Logo ${i + 1}`" />
        </component>
      </div>

      <!-- All partners -->
      <div class="page-row">
        <h2>All Technology Partners</h2>
        <p>
          We collaborate with industry-leading technology providers to bring you
          the most advanced and reliable solutions. Our partnerships ensure
          seamless integration, enhanced security, and optimized performance,
          empowering businesses with cutting-edge innovations
        </p>
        <div class="partners-grid">
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
        </div>
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

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 23px;
    margin: 0 0 50px;
  }

  @media (min-width: 1024px) {
    .logo-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .logo-card {
    background: #fff;
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
  }

  .logo-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }

  .logo-card img {
    min-height: 28px;
    max-height: 28px;
    width: auto;
    object-fit: contain;
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    text-align: center;
    margin: 40px 0 0;
  }

  @media (min-width: 768px) {
    .partners-grid {
      grid-template-columns: repeat(2, 1fr);
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    .partners-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .partner-name {
    font-size: 24px;
    font-weight: 500;
    color: var(--black);
    text-decoration: none;
  }

  // .partner-name:hover {
  //   text-decoration: underline;
  // }
</style>
