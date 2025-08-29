<script setup lang="ts">
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'Our Solutions', url: '/solutions' },
        {
          label: 'Enterprise & Network Security',
          url: '/enterprise-and-security',
        },
        { label: 'Cloud Security', url: '/cloud-security' },
        { label: 'Identity & Access', url: '/identity-and-access' },
        {
          label: 'Data Center & Networking',
          url: '/data-center-and-networking',
        },
        { label: 'Application Security', url: '/application-security' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Our Services', url: '/services' },
        { label: 'Professional Services', url: '/professional-services' },
        { label: 'Security Assessment', url: '/security-assessment' },
        {
          label: 'Managed Security Services',
          url: '/managed-security-services',
        },
        {
          label: 'Manufacturer Authorized Services',
          url: '/manufactured-authorized-services',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Veterans', url: '/veterans' },
        { label: 'Leadership', url: '/leadership' },
        { label: 'Partners', url: '/partners' },
        { label: 'Careers', url: '/careers' },
        { label: 'Branding', url: '/branding' },
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
    padding: 80px 0;
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

    .four-col-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 80px;

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
  }
</style>
