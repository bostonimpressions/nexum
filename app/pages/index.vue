<script setup lang="ts">
  const { data: intro } = await useAsyncData(() =>
    queryCollection('content').path('/home/intro').first()
  )
</script>

<template>
  <div>nexum</div>
</template>

<style lang="scss" scoped>
  @media (min-width: 768px) {
    .test {
      color: red;
    }
  }
</style>
