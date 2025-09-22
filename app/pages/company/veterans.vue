<script setup></script>

<template>
  <Hero theme="veterans">
    <h1>Veterans</h1>
    <p>
      Nexum is a VA-verified Service-Disabled Veteran-Owned Small Business
      (SDVOSB)
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="page-row">
        <h2>11% of Nexum employees are veterans or first responders</h2>
        <p>
          Nexum, Inc. is a Service-Disabled Veteran-Owned Small Business
          (SDVOSB), verified by the U.S. Department of Veterans Affairs (VA). To
          qualify as an SDVOSB, a business must be owned or controlled by a
          Service-Disabled Veteran. We take great pride in this designation,
          contribute to veteran organizations, and support our current veteran
          team members. In fact, 11% of Nexum employees are veterans or first
          responders.
        </p>
      </div>
    </div>
    <div class="container container-collapse">
      <div class="page-row">
        <div class="interview">
          <h2>
            Protect Your Assets - At All Times
            <span
              >Interview with Jody Hodge, Nexum’s Director of Engineering</span
            >
          </h2>

          <BaseGrid :cols="2" gap="40px">
            <div class="grid-item">
              <div class="text-block">
                <h4>Jody Hodge: A Veteran Leader at Nexum</h4>
                <p>
                  One of the veteran members of Team Nexum, Jody Hodge serves as
                  the Director of Engineering. With a background in the U.S. Air
                  Force, his journey from military service to cybersecurity
                  leadership is a testament to expertise, discipline, and
                  strategic thinking
                </p>
              </div>
              <div class="text-block">
                <h4>Military Service & Combat Communications</h4>
                <p>
                  Hodge dedicated eight years to the U.S. Air Force,
                  specializing in Combat Communications. His role required both
                  combat and engineering training, preparing him for high-stakes
                  communication operations in active conflict zones.
                </p>
              </div>
              <div class="text-block">
                <h4>Securing Critical Military Communications</h4>
                <p>
                  After the initial infrastructure goes in at the base, we’re
                  next on the list to get in there and develop the
                  communications,” says Hodge. During conflicts like Bosnia and
                  Desert Fox, Hodge and his team were responsible for setting up
                  secure and non-secure networks.
                </p>
              </div>
            </div>
            <div class="grid-item">
              <div class="text-block">
                <h4>Transition to Network Engineering</h4>
                <p>
                  After leaving the military, Hodge stepped into network
                  engineering in 2000. His technical skills and problem-solving
                  mindset helped him build a strong career in cybersecurity and
                  IT infrastructure
                </p>
              </div>
              <div class="text-block">
                <h4>Growth at Nexum: From Security Engineer to Director</h4>
                <p>
                  In August 2017, Hodge joined Nexum as a security engineer.
                  Through dedication and expertise, he steadily advanced to his
                  current role as Director of Engineering, where he leads
                  security initiatives and network solutions.
                </p>
              </div>
              <div class="text-block">
                <h4>The Core Mission of Cybersecurity</h4>
                <p>
                  The end goal is still a secure network,” says Hodge. While
                  technology has evolved, Hodge believes the mission remains the
                  same—whether in the military or in business, cybersecurity
                  must act as an impenetrable shield to protect data, assets,
                  and critical operations.
                </p>
              </div>
            </div>
          </BaseGrid>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="page-row">
        <h2>The Fight for Security</h2>
        <p>
          Does military experience translate well into the world of
          cybersecurity? Hodge thinks so
        </p>
        <p>
          “You have a goal and you charge after it. Things happen quickly so
          it’s imperative that you tackle the project immediately in front of
          you and then keep going.” He says that in both the military and
          information technology industry, “you have to use your team members’
          skillsets wisely, and the hard work and creative problem-solving will
          pay off in the end.”
        </p>
      </div>
    </div>
    <div class="container container-collapse">
      <BaseBanner>
        <h2>Nexum – A Fit for Veterans</h2>
        <p>
          “Nexum saw my leadership skills, my attention to detail, as well as my
          presence and confidence when I walk into a room. I can calmly take
          over a situation and control it,” says Hodge. 
          <br />
          <br />
          “We really are a team. We are a unit. When one of us succeeds – we all
          succeed.”
        </p>
        <p class="reference">
          <sup>1</sup>Internal employee survey as of August 2021.
        </p>
      </BaseBanner>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .page-row {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 50px;
    text-align: center;

    p {
      color: var(--black);
    }
  }

  .interview {
    padding: 60px 30px;
    background:
      linear-gradient(
        0deg,
        rgba(0, 51, 102, 0.8) 0%,
        rgba(0, 51, 102, 0.8) 100%
      ),
      url('/bg-interview.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--white);
    text-align: left;

    h2 {
      margin-bottom: 40px;
      color: var(--white);
      font-size: clamp(38px, 5vw, 46px);
      line-height: clamp(38px, 5vw, 46px);

      span {
        display: block;
        margin: 10px 0 0;
        font-style: italic;
        font-weight: normal;
        font-size: 0.5em;
        line-height: 1.2em;
      }
    }

    h4,
    p {
      color: var(--white);
    }

    p {
      font-size: 16px;
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .interview {
      padding: 60px;
      border-radius: 20px;
    }
  }

  @media (min-width: 1024px) {
    .interview {
      padding: 120px 105px;
    }
  }
</style>
