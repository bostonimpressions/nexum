<script setup lang="ts">
  import { ref, watch } from 'vue'

  const query = ref('')
  const category = ref('All Categories')

  const emit = defineEmits<{
    (e: 'update', payload: { query: string; category: string }): void
  }>()

  // Emit whenever query or category changes
  watch([query, category], () => {
    emit('update', { query: query.value, category: category.value })
  })

  // Also emit when search button is clicked (optional but nice)
  function submitSearch() {
    emit('update', { query: query.value, category: category.value })
  }
</script>

<template>
  <div class="w-full">
    <div
      class="flex items-center w-full bg-white rounded-lg border border-gray-200 overflow-hidden p-2"
    >
      <!-- Search input -->
      <div class="flex items-center px-4 flex-1">
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="#0072ce"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
        <input
          v-model="query"
          type="text"
          placeholder="Search for a job title"
          class="flex-1 border-0 focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 focus:placeholder-transparent"
        />
      </div>

      <!-- Divider -->
      <div class="w-px h-6 bg-gray-300"></div>

      <!-- Dropdown -->
      <div class="relative px-4 flex items-center">
        <select
          v-model="category"
          class="appearance-none bg-transparent pr-6 text-gray-700 focus:outline-none"
        >
          <option>All Categories</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
        <svg
          class="absolute right-2 w-4 h-4 text-gray-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <!-- Button -->
      <div class="pl-4 pr-2">
        <BaseButton solid @click="submitSearch"> Search </BaseButton>
      </div>
    </div>
  </div>
</template>
