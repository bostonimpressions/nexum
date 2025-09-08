<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  const slides = [
    {
      name: 'K-12 Stem',
      img: '/stem.jpg',
      url: '',
    },
    {
      name: `Career & Technical Education`,
      img: '/education.jpg',
      url: '',
    },
    {
      name: 'Industry Training',
      img: '/training.jpg',
      url: '',
    },
    {
      name: 'Corporate Learning',
      img: '/stem.jpg',
      url: '',
    },
    {
      name: 'Adult Upskilling',
      img: '/education.jpg',
      url: '',
    },
  ]
</script>

<template>
  <section class="section-products">
    <div class="slider-wrapper">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="product-swiper"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.name">
          <div class="slide" :style="{ backgroundImage: `url(${slide.img})` }">
            <div class="overlay"></div>
            <div class="content">
              <h4>{{ slide.name }}</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Custom navigation -->
      <div class="custom-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M3.99982 12.4998H19.9998"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.99997 17.5C8.99997 17.5 4.00002 13.8176 4 12.5C3.99999 11.1824 9 7.5 9 7.5"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="custom-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M20.0001 12.5002L4.00014 12.5002"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 7.5C15 7.5 20 11.1824 20 12.5C20 13.8176 15 17.5 15 17.5"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="products-cta">
      <p>Click here to explore all of the products that we offer</p>

      <BaseButton to="skill-map" class="button">Skill Map</BaseButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section-products {
    position: relative;
    padding: 40px;
    background: var(--lightblue);

    .slider-wrapper {
      position: relative;
    }

    .swiper {
      border-radius: 20px;
      overflow: hidden;
    }

    .product-swiper {
      width: 100%;
    }

    .slide {
      position: relative;
      height: 500px;
      border-radius: 20px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }

    .content {
      position: relative;
      z-index: 2;
      padding: 20px;
      color: #fff;

      h4 {
        font-size: 22px;
        font-weight: 700;
      }
    }

    .custom-prev,
    .custom-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;
      user-select: none;
      display: flex;
      width: 51px;
      height: 51px;
      padding: 13px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 25.5px;
      border: 1px solid #198fc4;
      background: #fff;
    }

    .custom-prev {
      left: -26px;
    }
    .custom-next {
      right: -26px;
    }

    .products-cta {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 32px auto 0;
      text-align: center;
      p {
        font-size: 18px;
        color: var(--black);
      }
      .button {
        width: fit-content;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 768px) {
    .section-products {
      padding: 80px;
      .products-cta {
        margin: 74px auto 0;
        p {
          font-size: 32px;
        }
      }
    }
  }
</style>
