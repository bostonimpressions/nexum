<script setup lang="ts"></script>

<template>
  <HeroSubpage>
    <template #heading> Knowledge Transfer Services </template>
    <template #subheading>
      Make the Most of Your Existing Security & Networking Investments
    </template>
  </HeroSubpage>
  <Overview>
    <h2>Unlock the Full Potential of Your Technology Stack</h2>
    <p>
      You’ve already made significant investments in best-in-class networking
      and security solutions—now let Nexum help you get the most out of them.
      Our <strong>Knowledge Transfer</strong> offering bridges the gap between
      deployment and daily operational excellence by equipping your teams with
      the <em>practical knowledge and confidence</em> they need to optimize
      performance, streamline operations, and maximize ROI.
    </p>
  </Overview>
  <section class="section-two container container-collapse info">
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

    <ServiceItem
      heading="In-Environment Enablement Sessions"
      body="Interactive sessions centered around your exact setup and goals—whether it's refining firewall rules, reducing alert noise, or optimizing SD-WAN configurations."
    />
    <ServiceItem
      heading="System Health Checks + Optimization Walkthroughs"
      body="We help you assess and fine-tune existing configurations to close gaps, enhance performance, and align with security frameworks."
    />
    <ServiceItem
      heading="Use-Case Driven Labs"
      body="We run through real scenarios your team faces, showing how to:"
      :items="[
        'Make tools more effective',
        'Automate tedious tasks',
        'Spot misconfigurations before they become incidents',
      ]"
    />
  </section>
  <section class="section-two container why">
    <h2>Why Choose Nexum?</h2>

    <div class="reason-card">
      <img
        src="/icons/icon-service-stack.svg"
        alt="Tech stack icon"
        class="icon"
      />
      <div class="body-text">
        <h4>We Know the Tech</h4>
        <p>
          Our engineers support and manage these same solutions for some of the
          most complex environments across industries. From firewalls and
          endpoint security to SD-WAN and SASE—this isn’t theory, it’s our
          day-to-day.
        </p>
      </div>
    </div>
    <div class="reason-card even">
      <div class="body-text">
        <h4>We Work in Your Environment</h4>
        <p>
          No lab simulations or broad hypotheticals. We teach within your
          infrastructure and on your policies, so every minute counts.
        </p>
      </div>
      <img
        src="/icons/icon-service-environment.svg"
        alt="Environment icon"
        class="icon"
      />
    </div>

    <div class="reason-card">
      <img src="/icons/icon-service-value.svg" alt="Value icon" class="icon" />
      <div class="body-text">
        <h4>You Gain Lasting Value</h4>
        <p>
          Our sessions aren’t just about knowledge—they’re about capability.
          We’ll leave your team better equipped to maintain, scale, and evolve
          your solutions with less vendor dependency and greater control.
        </p>
      </div>
    </div>
    <div class="reason-card even">
      <div class="body-text">
        <h4>It’s Vendor-Neutral</h4>
        <p>
          Our approach goes beyond manufacturer guidance, helping you unify
          tools across vendors, align with internal policy, and create long-term
          operational wins.
        </p>
      </div>
      <img src="/icons/icon-service-puzzle.svg" alt="Unity icon" class="icon" />
    </div>
  </section>

  <section class="section-two container container-collapse example-engagements">
    <BaseBanner>
      <h2>Example Engagements</h2>
      <div class="border-box">
        <BaseGrid>
          <div class="example-item">
            <h4>Firewall Policy Review & Refinement</h4>
            <p>
              No lab simulations or broad hypotheticals. We teach within your
              infrastructure and on your policies, so every minute counts.
            </p>
          </div>
          <div class="example-item">
            <h4>SASE or SD-WAN Strategy Enablement</h4>
            <p>
              Deep dive into traffic steering, redundancy, cloud integration,
              and visibility.
            </p>
          </div>
          <div class="example-item">
            <h4>SIEM & Visibility Enhancement</h4>
            <p>
              Hands-on guidance in tuning logs, rules, and dashboards to reduce
              alert fatigue and speed up investigation.
            </p>
          </div>
          <div class="example-item">
            <h4>User & Identity Management</h4>
            <p>
              Guidance on tying in MFA, LDAP/AD, and access control across your
              ecosystem.
            </p>
          </div>
        </BaseGrid>
      </div>

      <div class="list">
        <h3>Your Team Gains:</h3>

        <BaseBulletList
          :items="[
            'Enhanced performance from the tools already purchased',
            'Less time spent troubleshooting or escalating issues',
            'Greater independence from vendor support',
            'Practical know-how to evolve and scale securely',
          ]"
          iconColor="var(--lightorange)"
          textColor="var(--white)"
        />
      </div>
    </BaseBanner>
  </section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 80px;
    &.info {
      margin-top: 120px;
    }
  }

  .services {
    > h2 {
      margin: 0 auto 90px;
      text-align: center;
    }
  }

  .why {
    margin: 140px auto;
    > h2 {
      text-align: center;
      color: var(--orange);
      padding-bottom: 30px;
      margin: 0 auto 40px;
      border-bottom: 7px solid var(--lightorange);
    }
  }

  .reason-card {
    display: grid;
    gap: 60px;
    padding: 30px 0;
    text-align: center;
    border-bottom: 7px solid var(--lightorange);

    .icon {
      height: auto;
      min-height: 160px;
      max-width: 420px;
      margin: 0 auto;
      order: 2;
    }
    .body-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      order: 1;

      h4,
      p {
        color: var(--blue);
      }
    }
  }

  .example-engagements {
    .list {
      margin: 0;
      padding: 30px 0 0 10px;
      align-self: normal;
    }
    h3 {
      color: var(--white);
      text-align: left;
    }
  }

  .border-box {
    padding: 40px 25px;
    margin: 0 -10px;
    border: 1px solid var(--lightorange);
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    .border-box {
      padding: 50px 40px;
      margin: auto;
    }
    .why {
      > h2 {
        padding-bottom: 30px;
        margin: 0 auto;
      }
    }

    .reason-card {
      display: grid;
      gap: 60px;
      text-align: left;
      min-height: 270px;
      align-content: center;
      grid-template-columns: 1fr 3fr;
      &.even {
        grid-template-columns: 3fr 1fr;
      }

      .icon {
        order: initial;
      }
      .body-text {
        order: initial;
        justify-content: center;
      }
    }
    .example-engagements {
      .list {
        padding: 30px 0 0 40px;
      }
    }
  }
</style>
