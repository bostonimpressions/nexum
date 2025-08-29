<script setup lang="ts"></script>

<template>
  <section class="section-connect">
    <div class="container">
      <h2>Connect With Us</h2>

      <div class="solutions-slider">
        <div class="three-col-grid">
          <div class="slide-item">
            <div class="post-card">
              <div class="post-header"></div>
              <div class="post-header"></div>
            </div>
          </div>

          <div class="slide-item">
            <div class="post-card">
              <div class="post-header"></div>
              <div class="post-header"></div>
            </div>
          </div>

          <div class="slide-item">
            <div class="post-card">
              <div class="post-header"></div>
              <div class="post-header"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-connect {
    position: relative;
    background: var(--lightblue);
    padding: 50px 0 120px;
    margin: 100px auto 0;

    &::after {
      content: '';
      border-top-left-radius: 84% 100%;
      border-top-right-radius: 80% 100%;
      position: absolute;
      z-index: -1;
      width: 116%;
      background-color: var(--lightblue);
      height: 35%;
      top: -84px;
      left: -8%;
    }

    .curve-top {
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 150px;
      display: block;
    }
  }

  .container {
    gap: 52px;
  }
  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    .slide-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 563px;
      flex-shrink: 0;
      overflow: hidden;
      background: var(--blue);
      border-radius: 8px;
      box-shadow: 0 4px 17.3px 0 rgba(0, 48, 135, 0.23);

      .post-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
      }

      .post-header {
        background-color: white;
        height: 100px;
      }
    }
  }

  @media (min-width: 768px) {
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .section-connect {
      padding: 50px 0 120px;
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
