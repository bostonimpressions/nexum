<script setup lang="ts">
  import Hero from '~/components/Hero.vue'

  // const { data: intro } = await useAsyncData(() =>
  //   queryCollection('content').path('/home/intro').first()
  // )
</script>

<template>
  <Hero />
  <SectionSolutions />
</template>

<style lang="scss" scoped>
  @media (min-width: 768px) {
    .test {
      color: red;
    }
  }
</style>
