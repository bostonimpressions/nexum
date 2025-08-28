<script setup lang="ts"></script>

<template>
  <section class="section-solutions">
    <div class="container">
      <div class="two-col-grid">
        <div class="grid-item">
          <h2>Our Circle of Solutions</h2>
          <p>
            We specialize in designing, implementing and managing agile, secure
            digital platforms that enable customers to move their businesses at
            a faster pace and innovate in the way they interact with their
            customers, employees and partners.
          </p>
          <p>
            We also provide services to ease procurement globally with a suite
            of flexible financing and consumption options.
          </p>
          <p>
            With deep expertise across data, applications, infrastructure, user
            experience and operations, our services experts are thinkers AND
            doers, focused on accelerating time-to-outcome for our customers.
          </p>

          <div class="button-row">
            <BaseButton>Download our Circle of Solutions</BaseButton>
            <BaseButton>Book a Demo</BaseButton>
          </div>
        </div>
        <div class="grid-item">
          <img src="/solutions-circle.jpg" alt="Solutions" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-solutions {
    display: flex;
    flex-direction: row;
    padding: 160px 0 20px;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 75px;
    align-items: center;

    > .grid-item {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }

  .button-row {
    display: flex;
    gap: 30px;
  }
</style>
