<script setup>
  import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

  const isOpen = ref(false)
  const openDropdown = ref(null)

  function toggleDropdown(name) {
    openDropdown.value = openDropdown.value === name ? null : name

    // After DOM updates, check if it overflows
    nextTick(() => {
      if (openDropdown.value) {
        adjustDropdown(openDropdown.value)
      }
    })
  }

  function adjustDropdown(name) {
    const parent = document.querySelector(
      `.dropdown-parent.dropdown-open .dropdown-menu`
    )
    if (!parent) return

    // reset styles before measuring
    parent.style.left = ''
    parent.style.right = ''

    const rect = parent.getBoundingClientRect()
    const overflow = rect.right - window.innerWidth

    if (overflow > 0) {
      parent.style.left = `${parent.offsetLeft - overflow}px`
    }
  }

  function closeAll() {
    isOpen.value = false
    openDropdown.value = null
    document.body.style.overflow = ''
  }

  // Close dropdown/drawer when clicking outside
  function handleClickOutside(e) {
    if (!e.target.closest('.navigation') && !e.target.closest('.hamburger')) {
      closeAll()
    }
  }

  // Close on ESC
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      closeAll()
    }
  }

  function handleResize() {
    if (openDropdown.value) {
      adjustDropdown(openDropdown.value)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('resize', handleResize)
  })

  watch(isOpen, (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
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

    <!-- overlay -->
    <div v-if="isOpen" class="nav-overlay"></div>

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
          <NuxtLink to="/company/contact-us">
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
          </NuxtLink>
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
        <ul @click="closeAll">
          <li
            class="dropdown-parent"
            :class="{ 'dropdown-open': openDropdown === 'services' }"
          >
            <div class="text dropdown" @click.stop="toggleDropdown('services')">
              <span>Services</span>
              <span class="icon-caret">
                <img src="/icons/icon-caret.svg" alt="" />
              </span>
            </div>

            <transition name="slide">
              <ul v-if="openDropdown === 'services'" class="dropdown-menu">
                <li class="all-link">
                  <NuxtLink to="/services">All Services</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/first-defense"
                    >First Defense</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/services/professional-services"
                    >Professional Services</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/services/assessment-and-advisory-services"
                    >Assessment & Advisory</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/services/technical-support-services"
                    >Technical Support</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/services/knowledge-transfer-services"
                    >Knowledge Transfer</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/services/security-workshop"
                    >Security Workshop</NuxtLink
                  >
                </li>
              </ul>
            </transition>
          </li>

          <li>
            <NuxtLink to="/solutions" class="text dropdown flex items-center">
              <span>Solutions</span>
              <!-- <span class="icon-caret">
                <img src="/icons/icon-caret.svg" alt="" />
              </span> -->
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/partners" class="text dropdown flex items-center">
              <span>Partners</span>
              <!-- <span class="icon-caret">
                <img src="/icons/icon-caret.svg" alt="" />
              </span> -->
            </NuxtLink>
          </li>

          <li
            class="dropdown-parent"
            :class="{ 'dropdown-open': openDropdown === 'insights' }"
          >
            <div class="text dropdown" @click.stop="toggleDropdown('insights')">
              <span>Insights</span>
              <span class="icon-caret">
                <img src="/icons/icon-caret.svg" alt="" />
              </span>
            </div>

            <transition name="slide">
              <ul v-if="openDropdown === 'insights'" class="dropdown-menu">
                <li>
                  <NuxtLink to="/insights/blog">Blog</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/insights/events">Events</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/insights/news">News</NuxtLink>
                </li>
              </ul>
            </transition>
          </li>

          <li
            class="dropdown-parent"
            :class="{ 'dropdown-open': openDropdown === 'company' }"
          >
            <div class="text dropdown" @click.stop="toggleDropdown('company')">
              <span>Company</span>
              <span class="icon-caret">
                <img src="/icons/icon-caret.svg" alt="" />
              </span>
            </div>

            <transition name="slide">
              <ul v-if="openDropdown === 'company'" class="dropdown-menu">
                <li>
                  <NuxtLink to="/company/about-us">About Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/company/contact-us">Contact Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/company/careers">Careers</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/company/veterans">Veterans</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/company/leadership">Leadership</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/company/branding">Branding</NuxtLink>
                </li>
              </ul>
            </transition>
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
    z-index: 1001;

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
    padding: 32px 0;
    font-size: 18px;
    ul {
      gap: 0;
      li {
        padding: 12px 18px 20px;
        &:last-child {
          padding-right: 10px;
        }
      }
    }
    .text {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .icon-caret {
      margin: 0 0 0 8px;
      transition: transform 0.15s ease;
    }
    .dropdown-open {
      //background: var(--gray);
      border-radius: 5px;
      .icon-caret {
        transform: rotate(180deg);
      }
    }
  }
  li.all-link {
    a {
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 2px 10px;
      margin: 0 0 0 -5px;
      border-radius: 5px;
      &:hover {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .dropdown-parent {
    position: relative;

    .dropdown-menu {
      position: absolute;
      top: 50px;
      left: 0;
      background: var(--gray);
      padding: 10px 0;
      display: flex;
      gap: 0;
      flex-direction: column;
      min-width: 200px;
      width: max-content;
      border-radius: 4px;
      border-bottom: 2px solid var(--lightorange);
      z-index: 1002;

      li {
        padding: 10px 20px;
        a {
          color: var(--white);
          text-decoration: none;
          &:hover {
            color: var(--lightorange);
          }
        }
      }

      &::before {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        top: -10px;
        left: 25px;
        margin-left: -10px;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent var(--gray) transparent;
      }
    }
  }

  @media (max-width: 768px) {
    .nav-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(6px);
      z-index: 999;
    }
    .navigation {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      background: #111;
      flex-direction: column;
      align-items: flex-start;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      padding: 15px;
      z-index: 1000;
      overflow-y: auto;

      &.open {
        transform: translateX(0);
      }

      nav {
        ul {
          flex-direction: column;
          gap: 5px;
          width: 100%;
          > li {
            padding: 10px 15px;
          }
        }
      }
    }
    .hamburger {
      display: flex;
    }

    .nav-top,
    .nav-bottom {
      padding: 20px 0;
    }
    .nav-bottom {
      width: 100%;
    }

    .dropdown-parent {
      width: 100%;
      flex-direction: column;

      &.dropdown-open {
        background-color: #282828;
        border-radius: 5px;
        border-bottom: 2px solid var(--lightorange);
      }

      .dropdown-menu {
        position: relative;
        top: auto;
        left: auto;
        width: 100%;
        background: none;
        padding: 10px 0 0;
        border-radius: 0;
        border: 0;
        overflow: hidden;
        li {
          padding: 10px;
        }
      }
    }

    .slide-enter-active,
    .slide-leave-active {
      transition:
        max-height 0.3s ease,
        opacity 0.05s ease;
    }
    .slide-enter-from,
    .slide-leave-to {
      max-height: 0;
      opacity: 0;
    }
    .slide-enter-to,
    .slide-leave-from {
      max-height: 500px;
      opacity: 1;
    }
  }
</style>
