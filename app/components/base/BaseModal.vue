<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <!-- Optional Title -->
      <header v-if="title" class="modal-header">
        <h2>{{ title }}</h2>
      </header>

      <!-- Always visible close button -->
      <button class="close-btn" @click="close">✕</button>

      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    watch,
    onMounted,
    onUnmounted,
    defineEmits,
    defineProps,
  } from 'vue'

  interface Props {
    modelValue: boolean
    title?: string
    showTitle?: boolean
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

  const isOpen = ref(props.modelValue)
  const showTitle = ref(props.showTitle ?? true)

  let scrollTop = 0

  // Sync prop changes
  watch(
    () => props.modelValue,
    (val) => (isOpen.value = val)
  )

  // Freeze body scroll when modal opens
  watch(isOpen, (val) => {
    if (val) {
      scrollTop = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollTop}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollTop)
    }
  })

  // Close modal on ESC
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) close()
  }

  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    // restore scroll
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    window.scrollTo(0, scrollTop)
  })

  const close = () => {
    isOpen.value = false
    emit('update:modelValue', false)
  }
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #fff;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    padding: 1.5rem;
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
