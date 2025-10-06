<script setup>
  import { nexumLogos, firstDefenseLogos, nexumColors } from '~/data/branding'
  //hero content
  const hero = await useContentSection('hero', '/company/branding')
</script>

<template>
  <Hero theme="branding">
    <h1>{{ hero.title }}</h1>
    <ContentRenderer :value="hero" />

    <a href="/branding/Nexum Branding Guide 2024.pdf" target="_blank"
      >Download official assets and review usage standards.</a
    >
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>Nexum Logo</h2>

        <BaseGrid :cols="4">
          <div
            v-for="item in nexumLogos"
            :key="item.title"
            class="grid-item card"
          >
            <div class="preview">
              <img :src="item.preview" alt="Asset preview" />
            </div>
            <h5 class="title">{{ item.title }}</h5>
            <div class="links">
              <a
                v-for="l in item.links"
                :key="l.title"
                class="link"
                :href="l.url"
                target="_blank"
                rel="noopener"
                download
              >
                {{ l.title }}
              </a>
            </div>
          </div>
        </BaseGrid>
      </div>
      <div class="page-row">
        <h2>Nexum first<span>*</span>defense<sup>®</sup> Logo</h2>

        <BaseGrid :cols="4">
          <div
            v-for="item in firstDefenseLogos"
            :key="item.title"
            class="grid-item card"
          >
            <div class="preview">
              <img :src="item.preview" alt="Asset preview" />
            </div>
            <h5 class="title">{{ item.title }}</h5>
            <div class="links">
              <a
                v-for="l in item.links"
                :key="l.title"
                class="link"
                :href="l.url"
                target="_blank"
                rel="noopener"
                download
              >
                {{ l.title }}
              </a>
            </div>
          </div>
        </BaseGrid>
      </div>

      <div class="page-row">
        <h2>Nexum Colors</h2>

        <BaseGrid :cols="4">
          <div
            v-for="color in nexumColors"
            :key="color.hex"
            class="grid-item color-card"
            :style="{ backgroundColor: color.hex }"
          >
            <div class="wrap">
              <div class="card-title">
                <h5 class="title">{{ color.name }}</h5>
              </div>
              <div class="card-body">
                <p><span>HEX</span> {{ color.hex }}</p>
                <p><span>RGB</span> {{ color.rgb }}</p>
                <p><span>CMYK</span> {{ color.cmyk }}</p>
                <p v-if="color.pantone">
                  <span>Pantone</span> {{ color.pantone }}
                </p>
              </div>
            </div>
          </div>
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
  .base-grid {
    gap: 2px !important;
  }
  .card {
    display: flex;
    padding: 26px 17px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    //border-radius: 6px;
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
        font-size: 18px;
        font-weight: 400;
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px;
    min-height: 280px;
    h5,
    p {
      color: var(--white);
    }
    .title {
      color: rgba(255, 255, 255, 0.75);
    }

    &:nth-child(6) {
      h5,
      p {
        color: var(--black);
      }
      .title {
        color: rgba(0, 0, 0, 0.75);
      }
    }

    .card-title {
      position: absolute;
      bottom: 0;
      transform: rotate(-90deg);
      transform-origin: left top;
    }

    .card-body {
      padding-left: 55px;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0;
      white-space: nowrap;
      display: inline-block;
    }

    p {
      margin: 10px 0;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.75px;
      &:first-child {
        margin-top: 0;
      }

      span {
        display: block;
        font-size: 0.55em;
        font-weight: 600;
        line-height: 1;
      }
    }
  }
</style>
