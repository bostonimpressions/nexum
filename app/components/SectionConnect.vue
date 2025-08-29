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
    padding: 100px 0 120px;
    margin: 200px auto 0;
    //overflow: hidden; // prevents horizontal scroll

    &::before {
      content: '';
      position: absolute;
      top: -100px; // move up to create the curve
      left: 0;
      width: 100%;
      height: 160px; // height of the bulge
      background-color: var(--lightblue);
      border-top-left-radius: 50% 100%;
      border-top-right-radius: 50% 100%;
      z-index: -1;
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
