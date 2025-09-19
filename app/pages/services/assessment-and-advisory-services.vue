<script setup lang="ts">
  import { assessmentServices as servicesData } from '~/data/services'
  import { reactive } from 'vue'

  // create a reactive copy so Vue tracks `expanded`
  const assessmentServices = reactive(
    servicesData.map(service => ({ ...service, expanded: false }))
  )
</script>

<template>
  <HeroSubpage>
    <template #heading> Assessment & Advisory Services </template>
  </HeroSubpage>

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
            <img :src="`/services/images/icon-${service.icon}.png`" alt="" class="service-icon" />
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
            <div class="panel-right" v-if="service.bulletList && service.bulletList.length">
              <ul>
                <li v-for="(bullet, bIndex) in service.bulletList" :key="bIndex">
                  <img src="/icons/icon-check.png" alt="" class="bullet-icon" />
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 50px;

    .assessment-list {
      margin: 50px auto;
      .assessment-item {

        margin-bottom: 60px;

        .collapsible-header {
          cursor: pointer;
          transition: background 0.2s;

          &:hover {
            //background-color: #eee;
          }

          .header {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0 0 15px;
            border-bottom: 15px solid var(--blue);
          }

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

          //.expand-trigger {
          //  color: var(--lightblue);
          //  font-size: 60px;
          //  font-weight: 400;
          //}

          .expand-trigger {
            display: inline-block;
            width: 30px;
            height: 30px;
            position: relative;
            cursor: pointer;
            transition: transform 0.3s ease;

            &::before,
            &::after {
              content: '';
              position: absolute;
              background-color: var(--mediumblue);
              transition: transform 0.3s ease, opacity 0.3s ease;
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
              transform: rotate(90deg);

              &::before {
                transform: translateX(-50%) scaleY(0);
                opacity: 0;
              }
            }
          }



        }

        .collapsible-panel {
          display: flex;
          padding: 30px 0;
          gap: 30px;

          .panel-left {
            flex: 2;

            p {
              color: var(--black);
              margin-bottom: 10px;
              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          .panel-right {
            flex: 1;
            padding: 30px;
            border-radius: 9px;
            background: rgba(124, 198, 242, 0.10);

            ul {
              list-style: none;
              padding: 0;

              li {
                display: flex;
                align-items: baseline;
                margin-bottom: 8px;
                color: var(--mediumblue);
                font-size: 20px;

                .bullet-icon {
                  position: relative;
                  top: 5px;
                  width: 24px;
                  height: 24px;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
  }

  /* Fade animation for collapsible panel */
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
