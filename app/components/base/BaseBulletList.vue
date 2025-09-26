<script setup lang="ts">
  const { items, iconColor, textColor, variant } = withDefaults(
    defineProps<{
      items: string[]
      iconColor?: string
      textColor?: string
      variant?: 'default' | 'checkboxes' | 'basic'
    }>(),
    { variant: 'default' }
  )
</script>

<template>
  <ul class="bullet-list" :class="variant">
    <li
      v-for="(item, index) in items"
      :key="index"
      :style="{ color: textColor || 'var(--blue)' }"
    >
      <template v-if="variant === 'checkboxes'">
        <img src="/icons/icon-check.png" alt="" class="bullet-icon" />
      </template>
      <template v-if="variant === 'default'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="52"
          viewBox="0 0 47 52"
          fill="none"
        >
          <path
            d="M41.3573 35.5741C41.3573 36.147 41.0507 36.682 40.5574 36.9688L24.0835 46.5423C23.5907 46.829 22.978 46.829 22.4841 46.5423L6.0108 36.9688C5.51746 36.682 5.21085 36.147 5.21085 35.5741V16.4275C5.21085 15.8541 5.51746 15.319 6.0108 15.0323L22.4841 5.45876C22.7308 5.31512 23.0072 5.24357 23.2841 5.24357C23.561 5.24357 23.8374 5.31512 24.0841 5.45876L30.9081 9.42455L35.0744 5.78929L26.6897 0.91629C24.5891 -0.30543 21.9791 -0.30543 19.8785 0.91629L3.40564 10.4898C1.30497 11.7099 0 13.9857 0 16.4275V35.5741C0 38.0154 1.30497 40.2906 3.40564 41.5112L19.879 51.0848C20.9293 51.6956 22.107 52.0005 23.2846 52.0005C24.4623 52.0005 25.6394 51.6956 26.6897 51.0848L43.1631 41.5112C45.2638 40.2906 46.5687 38.0159 46.5687 35.5741V18.8897L41.3573 25.3817V35.5741Z"
            :fill="iconColor || 'var(--blue)'"
          />
          <path
            d="M18.1519 23.3738C16.9663 22.2151 15.0672 22.1329 13.7946 23.2425C12.4509 24.414 12.305 26.4607 13.4689 27.8132L19.2277 34.506C19.3115 34.6021 19.4144 34.7095 19.5105 34.7981C20.9178 36.0898 23.0986 35.9888 24.3823 34.5722L24.4126 34.5391L46.3105 10.3712C47.2468 9.33366 47.2336 7.72268 46.2479 6.70707C45.2247 5.65302 43.5457 5.63379 42.4985 6.66435L21.8339 26.9952L18.1519 23.3744V23.3738Z"
            :fill="iconColor || 'var(--blue)'"
          />
        </svg>
      </template>

      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">

  .bullet-list {
    list-style: none;
    padding: 0;

    li {
      color: var(--blue);
    }

    &.default {
      list-style: none;
      margin: 30px 0 0;
      padding: 0;

      li {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        margin: 0 0 20px;
        font-size: 20px;
        text-align: left;

        svg {
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          margin-top: 2px;
        }
      }
    }

    &.checkboxes {
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: baseline;
        gap: 15px;
        margin: 0 0 10px;
        font-size: 18px;
        text-align: left;

        .bullet-icon {
          position: relative;
          top: 7px;
          width: 22px;
          height: 22px;
        }
      }
    }

    &.basic {
      list-style: none;
      padding-left: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 1.2rem;
        font-size: 18px;

        &::marker {
          color: var(--orange);
        }

        // fallback if ::marker not supported
        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--orange);
          font-weight: bold;
        }
      }
    }
  }


</style>
