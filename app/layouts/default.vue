<template>
  <div>
  
    <main>
      <slot /> 
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseFooter from '~/components/base/BaseFooter.vue'
</script>
