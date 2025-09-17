<script setup></script>

<template>
  <Hero theme="careers">
    <h1>Careers</h1>
    <p>Join Our Team</p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <SearchBar />

      <BaseGrid :cols="3">
        <div class="card">
          <div class="card-header">
            <h5 class="title">Account Executive</h5>
            <div class="tags">
              <div class="chip">On Site</div>
              <div class="chip">Full Time</div>
            </div>
          </div>

          <div class="details">
            <div class="detail-item">
              <div class="icon">
                <img src="/icons/icon-briefcase.png" alt="Icon" />
              </div>
              <div class="label">Experience</div>
              <div class="detail-text">5 - 6 Years</div>
            </div>
            <div class="detail-item">
              <div class="icon">
                <img src="/icons/icon-location.png" alt="Icon" />
              </div>
              <div class="label">Location</div>
              <div class="detail-text">Chicago, Illinois</div>
            </div>
          </div>

          <div class="card-footer">
            <div class="link">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path
                  d="M9 3.5L0.999979 3.5"
                  stroke="#0072CE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.50001 0.999982C6.50001 0.999982 8.99999 2.84119 9 3.49999C9 4.15879 6.49999 6 6.49999 6"
                  stroke="#0072CE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </BaseGrid>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .card {
    display: flex;
    width: 397px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #e4e8ee;
    background: #fff;

    .card-header {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 100%;
      padding: 0 0 18px;
      border-bottom: 1px solid #e4e8ee;

      .title {
        color: var(--gray);
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
      }

      .tags {
        display: flex;
        gap: 8px;

        .chip {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          gap: 37px;
          border-radius: 30px;
          background: rgba(0, 114, 206, 0.1);
          color: #0072ce;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }

    .details {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 12px;
      .label {
        color: #4d5b6a;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
      .detail-text {
        color: var(--gray);
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
      }
      .icon {
        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    .card-footer {
      .link {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #0072ce;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
</style>
