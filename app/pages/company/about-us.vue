<script setup></script>

<template>
  <Hero theme="about">
    <h1>About Us</h1>
    <p>
      We are dedicated to securing digital landscapes and building robust
      network infrastructures. With a team of cybersecurity experts and
      networking specialists, we provide cutting-edge solutions that protect
      businesses from cyber threats, ensure data integrity, and optimize network
      performance.
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>Trusted in Security Since 2002</h2>
        <p>
          Nexum® is a cybersecurity and networking company that builds and
          defends global networks, empowering organizations to conduct
          mission-critical business securely and efficiently. We take a
          holistic, value-based approach to cybersecurity and networking that
          includes best-of-breed products, professional services, certified
          training courses, manufacturer-authorized support, and monitored and
          managed services.
        </p>
        <p>
          Founded in Chicago in 2002 and headquartered in Hammond, Indiana, we
          are a VA-verified Service-Disabled Veteran-Owned Small Business
          (SDVOSB). Most importantly, we approach the business of cybersecurity
          with one simple statement: 
        </p>
      </div>
    </div>
    <div class="container container-collapse">
      <BlueBox />
    </div>
    <div class="container">
      <div class="page-row">
        <h2>Four Pillars One Mission</h2>
        <p>
          At Nexum® we approach the business of cybersecurity with one simple
          statement: Do what’s right for the customer and success will follow.
        </p>
        <MissionSwiper />
      </div>
    </div>
    <div class="container container-collapse">
      <BaseBanner>
        <h2>Cybersecurity That Supports Your Needs</h2>
        <p>
          We are a SOC 2 Type 2-compliant Managed Security Service Provider
          (MSSP) with a range of services to help you defend your network
          efficiently and effectively. Most importantly, Nexum’s
          manufacturer-authorized technical support team is available 24/7 via
          telephone, email, and our web-based portal.
          <br />
          <br />
          In other words, at Nexum, We Mean Security®.
        </p>
        <BaseButton>Managed Security Services</BaseButton>
      </BaseBanner>
    </div>
    <div class="container">
      <div class="image-text-row">
        <img
          src="/logo-asdad-color.png"
          alt="Service Disabled Veteran Owned Small Business"
        />
        <p>
          Nexum is a VA-verified Service-Disabled Veteran-Owned Small Business
          (SDVOSB)
        </p>
        <BaseButton>Learn More</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .page-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 50px;
    text-align: center;
    p {
      color: var(--black);
    }
  }
  .image-text-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
    img {
      width: 200px;
    }
  }
</style>
