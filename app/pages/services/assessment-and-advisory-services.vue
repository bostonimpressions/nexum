<script setup lang="ts">
  import { assessmentServices as servicesData } from '~/data/services'
  import { reactive } from 'vue'

  // create a reactive copy so Vue tracks `expanded`
  const assessmentServices = reactive(
    servicesData.map((service) => ({ ...service, expanded: false }))
  )
</script>

<template>
  <HeroSubpage>
    <template #heading> Assessment & Advisory Services </template>
    <p>
      At Nexum, we believe a strong cybersecurity program starts with a clear
      understanding of your current environment. Our Assessment & Advisory
      services help you identify, evaluate, and prioritize risks across your
      applications, networks, systems, and business processes.
    </p>
  </HeroSubpage>

  <Overview>
    <!-- <p>
      Backed by seasoned engineers and industry best practices, we conduct
      multi-point, holistic reviews that go beyond surface-level scans—providing
      a realistic picture of your security posture, stability, availability, and
      overall resilience.
    </p> -->
    <p>
      From uncovering vulnerabilities to validating configurations, Nexum
      delivers actionable insights and tailored recommendations that enable you
      to reduce risk, strengthen defenses, and align your security investments
      with your business objectives.
    </p>
  </Overview>

  <section class="section-two container">
    <div class="assessment-list">
      <div
        v-for="(service, index) in assessmentServices"
        :key="index"
        class="assessment-item"
      >
        <!-- Collapsible header -->
        <div
          class="collapsible-header"
          @click="service.expanded = !service.expanded"
        >
          <div class="header">
            <img
              :src="`/services/images/icon-${service.icon}.png`"
              alt=""
              class="service-icon"
            />
            <span class="service-title">{{ service.title }}</span>
            <span
              class="expand-trigger"
              :class="{ expanded: service.expanded }"
            ></span>
          </div>
        </div>

        <!-- Collapsible panel -->
        <transition name="fade">
          <div v-if="service.expanded" class="collapsible-panel">
            <div class="panel-left">
              <p v-for="(paragraph, pIndex) in service.text" :key="pIndex">
                {{ paragraph }}
              </p>
            </div>
            <div
              class="panel-right"
              v-if="service.bulletList && service.bulletList.length"
            >
              <BaseBulletList
                :items="service.bulletList"
                variant="checkboxes"
                iconColor="var(--mediumblue)"
                textColor="var(--mediumblue)"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 80px auto;

    .assessment-list {
      margin: 50px auto;
      .assessment-item {
        margin-bottom: 60px;

        .collapsible-header {
          cursor: pointer;
          transition: background 0.2s;

          .header {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0 0 15px;
            border-bottom: 15px solid var(--blue);
          }
        }
      }
    }
  }

  .service-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    object-fit: contain;
  }

  .service-title {
    flex: 1;
    font-size: clamp(18px, 4vw, 32px);
    font-weight: 600;
    color: var(--blue);
  }

  .expand-trigger {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: scale(0.5);

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--mediumblue);
      transition:
        transform 0.3s ease,
        opacity 0.3s ease;
    }

    &::before {
      top: 50%;
      left: 0;
      width: 100%;
      height: 4px;
      transform: translateY(-50%);
    }

    &::after {
      left: 50%;
      top: 0;
      width: 4px;
      height: 100%;
      transform: translateX(-50%) scaleY(1);
    }

    &.expanded {
      transform: rotate(90deg) scale(0.5);

      &::before {
        transform: translateX(-50%) scaleY(0);
        opacity: 0;
      }
    }
  }

  .collapsible-panel {
    display: block;
    padding: 30px 0;
    gap: 30px;

    .panel-left {
      flex: 2;

      p {
        color: var(--black);
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    .panel-right {
      flex: 1;
      padding: 20px;
      border-radius: 9px;
      background: rgba(124, 198, 242, 0.1);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  @media (min-width: 768px) {
    .service-icon {
      width: 80px;
      height: 80px;
      margin-right: 30px;
      object-fit: contain;
    }

    .service-title {
      flex: 1;
      font-size: clamp(28px, 4vw, 32px);
      font-weight: 600;
      color: var(--blue);
    }
    .expand-trigger {
      transform: scale(1);
      &.expanded {
        transform: rotate(90deg) scale(1);
      }
    }

    .collapsible-panel {
      display: flex;
      padding: 30px 0;
      gap: 30px;

      .panel-left {
        flex: 2;

        p {
          margin-bottom: 10px;
          font-size: 18px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .panel-right {
        padding: 30px;

        ul {
          li {
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
