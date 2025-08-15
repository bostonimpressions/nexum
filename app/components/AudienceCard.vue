<template>
  <div class="card flex flex-col p-6 rounded shadow-lg text-center text-white w-64">
    <img
      :src="`/icon-${icon}.png`"
      :alt="title"
      class="icon mx-auto mb-2"
    />
    <h3 class="heading">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String
})
</script>

<style lang="scss" scoped>
$blue: #67B9DF;

.card {
  border: 1px solid $blue;
  background-color: rgba(103, 185, 223, 0.2);
}

.icon {
  width: 133px;
  height: 133px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
}

.heading {
  color: #EFEFEF;
  text-align: center;
  font-family: Montserrat;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 122.631%;
  letter-spacing: 2.3px;
  text-transform: uppercase;
  margin-top: auto;
}
</style>
