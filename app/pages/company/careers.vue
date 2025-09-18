<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { careers } from '~/data/careers'

  const searchState = ref({ query: '', category: 'All Categories' })

  const filteredCareers = computed(() => {
    return careers.filter((career) => {
      const matchesCategory =
        searchState.value.category === 'All Categories' ||
        career.category === searchState.value.category

      const matchesQuery = career.title
        .toLowerCase()
        .includes(searchState.value.query.toLowerCase())

      return matchesCategory && matchesQuery
    })
  })
</script>

<template>
  <Hero theme="careers">
    <h1>Careers</h1>
    <p>Join Our Team</p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <SearchBar @update="searchState = $event" />

      <div v-if="filteredCareers.length === 0" class="no-results">
        No results matching your search.
      </div>

      <BaseGrid v-else :cols="3">
        <BaseCard
          v-for="career in filteredCareers"
          :key="career.title"
          width="397px"
          padding="20px"
        >
          <template #card-header>
            <h5 class="title">{{ career.title }}</h5>
            <div class="tags">
              <div v-for="tag in career.type" :key="tag" class="chip">
                {{ tag }}
              </div>
            </div>
          </template>

          <div class="details">
            <div class="detail-item">
              <div class="icon">
                <img src="/icons/icon-briefcase.png" alt="Icon" />
              </div>
              <div class="label">Experience</div>
              <div class="detail-text">{{ career.experience }}</div>
            </div>
            <div class="detail-item">
              <div class="icon">
                <img src="/icons/icon-location.png" alt="Icon" />
              </div>
              <div class="label">Location</div>
              <div class="detail-text">{{ career.location }}</div>
            </div>
          </div>

          <template #card-footer>
            <BaseButton variant="link" link arrow to="/careers/some-job">
              Read More
            </BaseButton>
          </template>
        </BaseCard>
      </BaseGrid>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .no-results {
    margin-top: 20px;
    padding: 16px 20px;
    background: rgba(0, 114, 206, 0.08);
    border: 1px solid rgba(0, 114, 206, 0.2);
    border-radius: 8px;
    color: #004a80;
    font-size: 16px;
    font-weight: 500;
  }

  .title {
    color: var(--gray);
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
  }

  .tags {
    display: flex;
    gap: 8px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;

    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .label {
      color: #4d5b6a;
      font-size: 14px;
      font-weight: 400;
    }

    .detail-text {
      color: var(--gray);
      font-size: 18px;
      font-weight: 700;
    }

    .icon img {
      width: 24px;
      height: 24px;
    }
  }
</style>
