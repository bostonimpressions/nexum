<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    url: { type: String, required: true },
    visible: { type: Boolean, required: true },
  })

  const emit = defineEmits(['close'])

  function close() {
    emit('close')
  }
</script>

<template>
  <div v-if="visible" class="modal" @click.self="close">
    <div class="modal-content">
      <img :src="url" alt="Preview" />
      <button class="close" @click="close">×</button>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    max-width: 90%;
    max-height: 90%;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 80vh;
    display: block;
  }

  .close {
    position: absolute;
    top: -60px;
    right: 0;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 32px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
</style>
