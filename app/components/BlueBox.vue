<template>
  <div class="blue-box">
    <div class="blue-box-grid">
      <div class="blue-box-text">
        <h3>Celebrating 20 Years of Security</h3>
        <p>
          The year 2022 marks a massive milestone for Nexum. Founded in April
          2002, we are proud to celebrate our 20th anniversary.
        </p>
        <p>
          “I started Nexum 20 years ago with two employees and the bold idea to
          do what’s right for the customer and let success follow,” says David
          J. Lesser, Founder and CEO of Nexum. “That remains our vision to this
          day. Nexum has grown to nearly 100 employees and made a name for
          itself in the industry.
        </p>

        <BaseButton variant="blue"> Read More </BaseButton>
      </div>
      <div class="blue-box-image">
        <img src="/nexum-20-years.png" alt="Example" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .blue-box {
    border-radius: 24px;
    background-image: url('/blue-box-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 50px;
  }

  .blue-box-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: left;
    align-items: center;
  }

  .blue-box-text {
    display: flex;
    flex-direction: column;
    gap: 32px;
    h3 {
      font-size: 46px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      color: var(--gray);
    }
  }

  .blue-box-image {
    img {
      max-width: 80%;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    .blue-box {
      padding: 90px 60px 90px 90px;
    }
    .blue-box-grid {
      grid-template-columns: 1.2fr 1fr;
      gap: 90px;
    }
    .blue-box-image {
      img {
        max-width: 100%;
      }
    }
  }
</style>
