<script setup>
  import { leadership } from '~/data/leadership'
  //hero content
  const hero = await useContentSection('hero', '/company/leadership')
</script>

<template>
  <Hero theme="leadership">
    <h1>{{ hero.title }}</h1>
    <ContentRenderer :value="hero" />
  </Hero>

  <section class="section-one">
    <div class="container">
      <BaseGrid :cols="3">
        <div class="card" v-for="(employee, i) in leadership" :key="i">
          <img :src="employee.img" :alt="employee.name" />
          <h5>{{ employee.name }}</h5>
          <div class="title">{{ employee.title }}</div>
          <a
            :href="employee.linkedin"
            class="connect"
            target="_blank"
            rel="noopener"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.799 0.886353C21.4778 0.886353 22.1288 1.156 22.6087 1.63597C23.0887 2.11594 23.3584 2.76692 23.3584 3.4457V21.3611C23.3584 22.0399 23.0887 22.6909 22.6087 23.1709C22.1288 23.6508 21.4778 23.9205 20.799 23.9205H2.88357C2.20479 23.9205 1.55381 23.6508 1.07383 23.1709C0.593863 22.6909 0.324219 22.0399 0.324219 21.3611V3.4457C0.324219 2.76692 0.593863 2.11594 1.07383 1.63597C1.55381 1.156 2.20479 0.886353 2.88357 0.886353H20.799ZM20.1592 20.7213V13.939C20.1592 12.8326 19.7196 11.7715 18.9373 10.9892C18.1549 10.2068 17.0938 9.76729 15.9874 9.76729C14.8997 9.76729 13.6328 10.4327 13.0186 11.4309V10.0104H9.44829V20.7213H13.0186V14.4125C13.0186 13.4272 13.812 12.621 14.7973 12.621C15.2725 12.621 15.7282 12.8097 16.0641 13.1457C16.4001 13.4817 16.5889 13.9374 16.5889 14.4125V20.7213H20.1592ZM5.28935 8.00134C5.85953 8.00134 6.40635 7.77484 6.80953 7.37166C7.21271 6.96849 7.43921 6.42166 7.43921 5.85149C7.43921 4.66139 6.47945 3.68884 5.28935 3.68884C4.71578 3.68884 4.16571 3.91669 3.76013 4.32226C3.35455 4.72784 3.1267 5.27792 3.1267 5.85149C3.1267 7.04158 4.09926 8.00134 5.28935 8.00134ZM7.0681 20.7213V10.0104H3.5234V20.7213H7.0681Z"
                  fill="#0072CE"
                />
              </svg>
            </span>
            Connect with {{ employee.name }} on LinkedIn
          </a>
        </div>
      </BaseGrid>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid var(--lightgray);
    background: var(--white);
  }

  h5 {
    color: var(--blue);
    font-size: 28px;
  }

  .title {
    font-size: 20px;
    color: var(--gray);
  }

  .connect {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #0072ce;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;

    svg {
      width: 23px;
      height: 23px;
    }
  }
</style>
