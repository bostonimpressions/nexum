<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  const slides = [
    {
      name: 'Best of Breed Products',
      icon: '/icon-network-security.png',
    },
    {
      name: 'Managed and Monitored Services',
      icon: '/icon-cloud-security.png',
    },
    {
      name: 'Manufacturer-Authorized Support',
      icon: '/icon-identity-access.png',
    },
  ]
</script>

<template>
  <div class="mission-slider-wrapper">
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
      :breakpoints="{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }"
      :observer="true"
      :observeParents="true"
      class="mission-slider"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i" class="slide-item">
        <div class="label">
          <h3>{{ slide.name }}</h3>
        </div>
      </SwiperSlide>
    </Swiper>

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
</template>

<style scoped lang="scss">
  .mission-slider-wrapper {
    position: relative;
    margin: 0 20px;
    max-width: 1240px;

    .mission-slider {
      width: 100%;

      .slide-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        height: 563px;
        background: var(--lightblue);
        box-sizing: border-box;

        .icon {
          width: 120px;
          height: 120px;
          margin-bottom: 20px;
        }
      }
      h3 {
        color: var(--lightorange);
      }
    }

    .custom-prev,
    .custom-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 51px;
      height: 51px;
      padding: 13px;
      border-radius: 25.5px;
      border: 1px solid var(--blue);
      background: #fff;
      user-select: none;
    }

    .custom-prev {
      left: -26px;
    }
    .custom-next {
      right: -26px;
    }
  }

  @media (min-width: 1300px) {
    .mission-slider-wrapper {
      margin: 0 auto;
    }
  }
</style>
