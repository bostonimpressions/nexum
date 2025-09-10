<!-- solutions -->
<script setup lang="ts"></script>

<template>
  <Hero theme="solutions">
    <h1>Technology Solutions</h1>
    <p>
      We partner with the world’s top technology providers to deliver
      cutting-edge solutions in cloud computing, cybersecurity, AI, networking,
      and IT infrastructure
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <h2>Circle Of Solutions</h2>
      <p>
        We provide top-tier technologies from the industry's leading security
        solution providers. Our experts customize each solution to meet your
        unique needs, ensuring a comprehensive and effective security package
      </p>

      <div class="column">
        <CircleOfSolutions />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .column {
    margin: 0 auto;
    max-width: 900px;
  }
</style>
