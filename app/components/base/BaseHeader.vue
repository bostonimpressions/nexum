<script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
</script>

<template>
  <header class="base-header">
    <div class="branding">
      <NuxtLink to="/">
        <BaseLogo />
      </NuxtLink>
    </div>

    <button
      class="hamburger"
      @click="isOpen = !isOpen"
      aria-label="Toggle Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- nav -->
    <div class="navigation" :class="{ open: isOpen }">
      <nav class="nav-top">
        <ul>
          <li>
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3L9.33744 3.23384C6.75867 4.144 5.46928 4.59908 4.73464 5.63742C4 6.67576 4 8.0431 4 10.7778V13.2222C4 15.9569 4 17.3242 4.73464 18.3626C5.46928 19.4009 6.75867 19.856 9.33744 20.7662L10 21"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10 12H20M10 12C10 11.2998 11.9943 9.99153 12.5 9.5M10 12C10 12.7002 11.9943 14.0085 12.5 14.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="text">Command Center</div>
          </li>
          <li>
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.15826 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.16381 3.69101C7.91708 3.40694 7.59547 3.19794 7.23568 3.08785C6.94859 3 6.62446 3 5.97621 3C5.02791 3 4.55376 3 4.15573 3.18229C3.68687 3.39702 3.26344 3.86328 3.09473 4.3506C2.95151 4.76429 2.99254 5.18943 3.07458 6.0397C3.94791 15.0902 8.90982 20.0521 17.9603 20.9254C18.8106 21.0075 19.2358 21.0485 19.6494 20.9053C20.1368 20.7366 20.603 20.3131 20.8178 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0824 15.6393 19.7862 15.5077 19.1938 15.2444L18.2878 14.8417C17.6463 14.5566 17.3255 14.4141 16.9996 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5064 14.8544 14.967 15.3038C14.4302 15.7512 14.1618 15.9749 13.8338 16.0947C13.543 16.2009 13.1586 16.2403 12.8524 16.1951C12.5069 16.1442 12.2424 16.0029 11.7133 15.7201C10.0673 14.8405 9.15953 13.9328 8.27987 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64662 7.3124 9.61695 7.00048C9.58594 6.67452 9.44338 6.35376 9.15826 5.71223Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="text">Contact Us</div>
          </li>
          <li class="special">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
                  stroke="#FFA827"
                  stroke-width="1.5"
                />
                <path
                  d="M11.9919 16H12.0009"
                  stroke="#FFA827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13V8.99997"
                  stroke="#FFA827"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="text">Emergency Breach</div>
          </li>
        </ul>
      </nav>
      <nav class="nav-bottom">
        <ul>
          <li>
            <NuxtLink to="/services" class="text dropdown flex items-center">
              <span>Services</span>
              <span class="icon-caret">
                <img src="/icon-caret.svg" alt="" />
              </span>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/solutions" class="text dropdown flex items-center">
              <span>Solutions</span>
              <span class="icon-caret">
                <img src="/icon-caret.svg" alt="" />
              </span>
            </NuxtLink>
          </li>

          <li>
            <div class="text dropdown">
              <span>Partners</span>
              <span class="icon-caret"
                ><img src="/icon-caret.svg" alt=""
              /></span>
            </div>
          </li>

          <li>
            <NuxtLink to="/insights" class="text dropdown flex items-center">
              <div class="text">
                <span>Insights</span>
              </div>
            </NuxtLink>
          </li>

          <li>
            <div class="text dropdown">
              <span>Company</span>
              <span class="icon-caret"
                ><img src="/icon-caret.svg" alt=""
              /></span>
            </div>
          </li>

          <li class="search">
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="sr-only">Search</div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .base-header {
    display: flex;
    justify-content: space-between;
    color: var(--white);
  }
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001; // keeps button above menu

    span {
      display: block;
      height: 3px;
      width: 100%;
      background: var(--white);
      border-radius: 2px;
      transition: 0.3s ease;
    }
  }
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: end;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      background: #111;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      padding: 2rem;
      z-index: 1000;

      &.open {
        transform: translateX(0);
      }

      nav {
        ul {
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 26px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      cursor: pointer;
    }
    a {
      cursor: pointer;
    }
  }
  .nav-top {
    display: flex;
    justify-self: flex-end;
    font-size: 16px;

    .icon {
      margin: 0 10px 0 0;
    }
    .special {
      color: var(--lightorange);
    }
  }
  .nav-bottom {
    display: flex;
    justify-self: flex-end;
    padding: 50px 0;
    font-size: 18px;
    ul {
      gap: 32px;
    }
    .text {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .icon-caret {
      margin: 0 0 0 8px;
    }
  }
  @media (max-width: 768px) {
    .navigation {
      align-items: flex-start;
    }
    .hamburger {
      display: flex;
    }

    .nav-top,
    .nav-bottom {
      padding: 20px 0;
    }
  }
</style>
