<script setup lang="ts"></script>

<template>
  <HeroSubpage>
    <template #heading> Professional Services </template>
  </HeroSubpage>
  <Overview>
    <h2>Our Top Professional Services</h2>
    <BaseGrid :cols="3" align-items="center">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </BaseGrid>
  </Overview>
  <section class="section-two container"></section>
</template>

<style lang="scss" scoped>
  .section-two {
    margin: 0 auto 50px;
  }
</style>
