<script setup>
  const assets = [
    {
      image: '',
      title: `Primary Logo`,
      links: [
        {
          title: 'JPG',
          url: ``,
        },
        {
          title: 'EPS',
          url: ``,
        },
        {
          title: 'PNG',
          url: ``,
        },
      ],
    },
  ]
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
        <h2>Interested In Connecting With NEXUM?</h2>

        <div class="grid">
          <div class="grid-item card">
            <div class="image"></div>
            <h5 class="title"></h5>
            <div class="links">
              <div class="link"></div>
            </div>
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
    text-align: center;

    p {
      color: var(--black);
    }
  }
  .card {
    display: flex;
    padding: 26px 17px;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    border-radius: 6px;
    background: rgba(77, 77, 77, 0.06);

    .image {
      width: auto;
      max-height: 140px;
    }
    .title {
      color: var(--blue);
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 57px;
      text-transform: uppercase;
    }
    .links {
      .link {
        color: var(--orange);
        text-align: center;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        border-right: 1px solid var(--gray);
        &:last-child {
          border: 0;
        }
      }
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
      gap: 64px;
    }
  }
</style>
