<script setup lang="ts">
  interface Item {
    format: string
    features: string
  }

  const props = defineProps<{
    items: Item[]
  }>()
</script>

<template>
  <section class="info-grid">
    <!-- Table headers -->
    <div class="col">
      <h3 class="heading">Format</h3>
      <div v-for="(item, idx) in props.items" :key="idx" class="card">
        <h4>{{ item.format }}</h4>
      </div>
    </div>

    <div class="col">
      <h3 class="heading">Features</h3>
      <div v-for="(item, idx) in props.items" :key="idx" class="card">
        <p>{{ item.features }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 40px 0;
    align-items: start;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .heading {
    color: var(--orange);
    font-size: clamp(20px, 5vw, 24px);
    font-weight: 700;
    padding: 0 0 5px;
    margin-bottom: 10px;
    border-bottom: 4px solid var(--lightorange);
    display: inline-block;
  }

  .card {
    min-height: 100px;
    display: flex;
    justify-content: flex-start;
    padding: 0 0 24px;
    border-bottom: 12px solid var(--lightgray);

    h4 {
      color: var(--blue);
      font-size: clamp(16px, 5vw, 22px);
      font-weight: 700;
    }

    p {
      font-size: clamp(14px, 5vw, 20px);
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    .info-grid {
      gap: 40px;
      margin: 60px 0;
    }
  }
</style>
