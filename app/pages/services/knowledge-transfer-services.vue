<script setup lang="ts"></script>

<template>
  <HeroSubpage>
    <template #heading> Knowledge Transfer Services </template>
  </HeroSubpage>
  <Overview>
    <h2>Unlock the Full Potential of Your Technology Stack</h2>
    <p>
      You’ve already made significant investments in best-in-class networking
      and security solutions—now let Nexum help you get the most out of them.
      Our Knowledge Transfer offering bridges the gap between deployment and
      daily operational excellence by equipping your teams with practical
      knowledge and confidence.
    </p>
  </Overview>
  <section class="section-two container container-collapse">
    <Informative
      heading="What is Knowledge Transfer?"
      body="Nexum’s Knowledge Transfer program is engineer-led, hands-on, and customized to your environment. It's not formal manufacturer training—it’s better."
      :items="[
        'Real-world application of the tools already in your stack',
        'Guided enablement sessions tailored to your team’s use cases',
        'Direct access to Nexum’s top-tier engineers',
        'No generic modules. No fluff. Just practical insight.',
      ]"
    />
  </section>
  <section class="section-two container services">
    <h2>What We Offer</h2>

    <ServiceCard
      heading="In-Environment Enablement Sessions"
      body="Interactive sessions centered around your exact setup and goals—whether it's refining firewall rules, reducing alert noise, or optimizing SD-WAN configurations."
    />
    <ServiceCard
      heading="System Health Checks + Optimization Walkthroughs"
      body="We help you assess and fine-tune existing configurations to close gaps, enhance performance, and align with security frameworks."
    />
    <ServiceCard
      heading="Use-Case Driven Labs"
      body="We run through real scenarios your team faces, showing how to:"
      :items="[
        'Make tools more effective',
        'Automate tedious tasks',
        'Spot misconfigurations before they become incidents',
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 50px;
  }

  .services {
    > h2 {
      text-align: center;
      margin: 0 auto 90px;
    }
  }

  .service-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto 20px;

    svg {
      width: 60px;
      height: 60px;
    }
  }

  .service-definition {
    padding: 30px;
    border-radius: 9px;
    background: rgba(124, 198, 242, 0.1);
  }
</style>
