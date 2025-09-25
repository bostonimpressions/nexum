<script setup lang="ts">
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'Our Solutions', url: '/solutions' },
        {
          label: 'Enterprise & Network Security',
          url: '',
        },
        { label: 'Cloud Security', url: '' },
        { label: 'Identity & Access', url: '' },
        {
          label: 'Data Center & Networking',
          url: '',
        },
        { label: 'Application Security', url: '' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Our Services', url: '/services' },
        {
          label: 'Professional Services',
          url: '/services/professional-services',
        },
        {
          label: 'Security Assessment',
          url: '/services/assessment-and-advisory-services',
        },
        {
          label: 'Managed Security Services',
          url: '',
        },
        {
          label: 'Manufacturer Authorized Services',
          url: '',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '/company/about-us' },
        { label: 'Contact Us', url: '/company/contact-us' },
        { label: 'Veterans', url: '/company/veterans' },
        { label: 'Leadership', url: '/company/leadership' },
        { label: 'Partners', url: '/partners' },
        { label: 'Careers', url: '/company/careers' },
        { label: 'Branding', url: '/company/branding' },
      ],
    },
  ]
</script>

<template>
  <footer class="base-footer">
    <div class="container">
      <div class="four-col-grid">
        <div class="brand grid-item">
          <BaseLogo />
          <p>
            Nexum is a VA-verified Service-Disabled Veteran-Owned Small Business
            (SDVOSB)
          </p>
          <div class="social">
            <a
              href="https://www.linkedin.com/company/nexum-inc/"
              alt="LinkedIn"
              target="_blank"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.64369 3.6629C2.42298 3.6629 3.05473 3.03115 3.05473 2.25186C3.05473 1.47256 2.42298 0.84082 1.64369 0.84082C0.864394 0.84082 0.232651 1.47256 0.232651 2.25186C0.232651 3.03115 0.864394 3.6629 1.64369 3.6629Z"
                />
                <path
                  d="M2.81942 4.60449H0.467686C0.337871 4.60449 0.232513 4.70985 0.232513 4.83967V11.8949C0.232513 12.0247 0.337871 12.13 0.467686 12.13H2.81942C2.94923 12.13 3.05459 12.0247 3.05459 11.8949V4.83967C3.05459 4.70985 2.94923 4.60449 2.81942 4.60449Z"
                />
                <path
                  d="M9.8233 4.21174C8.81817 3.86744 7.56093 4.16987 6.80697 4.71218C6.7811 4.61106 6.68891 4.5358 6.57932 4.5358H4.22759C4.09777 4.5358 3.99242 4.64116 3.99242 4.77098V11.8262C3.99242 11.956 4.09777 12.0613 4.22759 12.0613H6.57932C6.70914 12.0613 6.81449 11.956 6.81449 11.8262V6.75584C7.19453 6.42847 7.68416 6.32406 8.0849 6.49432C8.4734 6.65847 8.69588 7.05921 8.69588 7.59305V11.8262C8.69588 11.956 8.80124 12.0613 8.93105 12.0613H11.2828C11.4126 12.0613 11.518 11.956 11.518 11.8262V7.11941C11.4911 5.18676 10.582 4.47137 9.8233 4.21174Z"
                />
              </svg>
            </a>

            <a href="https://x.com/nexuminc" alt="X" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="14"
                height="14"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.4.6h1.8l-4,4.6,4.7,6.3h-3.7l-2.9-3.8-3.3,3.8H.2l4.3-4.9L0,.6h3.8l2.6,3.5,3-3.5ZM8.8,10.3h1L3.2,1.6h-1.1l6.7,8.7Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div v-for="(section, i) in footerLinks" :key="i" class="grid-item">
          <h3>{{ section.title }}</h3>
          <ul>
            <li v-for="(link, j) in section.links" :key="j">
              <a :href="link.url">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        ©2025 Nexum, Inc. All Rights Reserved. Nexum® is a trademark of Nexum,
        Inc
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .base-footer {
    display: flex;
    width: 100%;
    padding: 40px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background: var(--darkgray);
    color: var(--white);

    .copyright {
      margin: 60px auto 0;
    }

    .brand {
      svg {
        width: 70px;
        height: 70px;
        aspect-ratio: 1/1;
      }
      p {
        max-width: 285px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .social {
      display: flex;
      gap: 12px;
      > a {
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 50px;
        padding: 13px;
        text-decoration: none;
        transition: border 150ms ease-in-out;
        &:hover {
          border-color: rgba(255, 255, 255, 1);
        }
      }
      svg {
        fill: white;
        width: 14px;
        height: 14px;
      }
    }

    h3,
    p {
      color: var(--white);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li a {
        color: var(--white);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .four-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    .grid-item {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    img {
      width: 292px;
      height: 176px;
      flex-shrink: 0;
      border-radius: 8px;
    }
    .text {
      color: var(--gray);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.14px;
    }
  }

  @media (min-width: 1024px) {
    .base-footer {
      padding: 80px 0;
    }
    .four-col-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 80px;
    }
    .copyright {
      text-align: left;
    }
  }
</style>
