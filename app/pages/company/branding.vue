<script setup>
  import { nexumLogos, firstDefenseLogos, nexumColors } from '~/data/branding'
</script>

<template>
  <Hero theme="branding">
    <h1>Branding</h1>
    <p>Use these resources to keep our brand consistent and secure.</p>
    <a href="#">Download official assets and review usage standards.</a>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>Nexum Logo</h2>

        <div class="grid">
          <div v-for="item in nexumLogos" class="grid-item card">
            <div class="preview">
              <img :src="item.preview" alt="Asset preview" />
            </div>
            <h5 class="title">{{ item.title }}</h5>
            <div class="links">
              <div v-for="l in item.links" class="link">{{ l.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-row">
        <h2>Nexum first<span>*</span>defense<sup>®</sup> Logo</h2>

        <div class="grid">
          <div v-for="item in firstDefenseLogos" class="grid-item card">
            <div class="preview">
              <img :src="item.preview" alt="Asset preview" />
            </div>
            <h5 class="title">{{ item.title }}</h5>
            <div class="links">
              <div v-for="l in item.links" class="link">{{ l.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-row">
        <h2>Nexum Colors</h2>

        <div class="grid">
          <div
            v-for="color in nexumColors"
            :key="color.hex"
            class="grid-item color-card"
            :style="{ backgroundColor: color.hex }"
          >
            <h5 class="title">{{ color.name }}</h5>
            <p>HEX {{ color.hex }}</p>
            <p>RGB {{ color.rgb }}</p>
            <p>CMYK {{ color.cmyk }}</p>
            <p v-if="color.pantone">Pantone {{ color.pantone }}</p>
          </div>
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
    margin: 0 0 50px;
    text-align: left;

    p {
      color: var(--black);
    }
  }
  h2 {
    span {
      position: relative;
      top: 0.25em;
      vertical-align: middle;
      font-weight: 200;
      font-size: 1.3em;
    }
    sup {
      top: -1em;
      font-size: 0.4em;
      font-weight: 400;
    }
  }
  .card {
    display: flex;
    padding: 26px 17px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: rgba(77, 77, 77, 0.06);

    .preview {
      padding: 0 0 20px;
      img {
        width: auto;
        max-height: 140px;
      }
    }
    .title {
      color: var(--blue);
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
    }
    .links {
      display: flex;
      justify-content: center;
      gap: 40px;
      width: 100%;
      margin: 0 auto;

      .link {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: var(--orange);
        text-align: center;
        font-size: 25px;
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        cursor: pointer;

        &::after {
          content: '';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 1em;
          background: var(--gray);
        }

        &:last-child::after {
          display: none;
        }
      }
    }
  }
  .color-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    min-height: 185px;
    border-radius: 6px;
    h5,
    p {
      color: var(--white);
    }

    &:nth-child(6) {
      h5,
      p {
        color: var(--black);
      }
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      margin: 2px 0;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      //gap: 64px;
    }
  }
</style>
